import {APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda';
import {images} from './images';

const NOT_FOUND: APIGatewayProxyResult = {
  statusCode: 404,
  body: 'Please provide a valid name',
};

exports.handler = async function(event: APIGatewayEvent) {
  const {path: endpoint} = event;

  const emojiName = endpoint.split('/').pop();

  if (emojiName == null || emojiName === 'emoji') {
    return NOT_FOUND;
  }

  const image = images[emojiName];

  if (image == null) {
    return NOT_FOUND;
  }

  const regex = /^data:.+\/(.+);base64,(.*)$/;
  const matches = image.match(regex);

  if (matches == null) {
    return NOT_FOUND;
  }

  const [, , data] = matches;

  return {
    statusCode: 200,
    body: data,
    headers: {
      'Content-Type': 'image/png',
    },
    isBase64Encoded: true,
  };
};
