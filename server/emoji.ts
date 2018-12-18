import fs from 'fs';
import path from 'path';
import {APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda';
import {lib as emojilib} from 'emojilib';

const NOT_FOUND: APIGatewayProxyResult = {
  statusCode: 404,
  body: 'Please provide a valid name',
};

exports.handler = async function(event: APIGatewayEvent) {
  const {path: endpoint} = event;

  const emojiParam = endpoint.split('/').pop();

  if (emojiParam == null || emojiParam === 'emoji') {
    return NOT_FOUND;
  }

  let emojiName = decodeURIComponent(emojiParam);

  if (emojilib[emojiName] == null) {
    Object.keys(emojilib).some(currentCanonicalName => {
      let found = false;
      const {keywords} = emojilib[currentCanonicalName];

      keywords.some(keyword => {
        if (keyword === emojiName) {
          found = true;
          emojiName = currentCanonicalName;
          return true;
        }

        return false;
      });

      return found;
    });
  }

  if (emojilib[emojiName] == null) {
    return NOT_FOUND;
  }

  const imagePath = path.resolve(`./images/${emojiName}.png`);
  const data = fs.readFileSync(imagePath);

  return {
    statusCode: 200,
    body: data.toString('base64'),
    headers: {
      'Content-Type': 'image/png',
    },
    isBase64Encoded: true,
  };
};
