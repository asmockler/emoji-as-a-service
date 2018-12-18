import {images} from './images';

exports.handler = async function(event) {
  const {path: endpoint} = event;

  const emojiName = endpoint.split('/').pop();
  const image = images[emojiName];

  if (image == null) {
    return {
      statusCode: 404,
      body: 'Please provide a valid emoji name!',
    };
  }

  const regex = /^data:.+\/(.+);base64,(.*)$/;
  const matches = sunglasses.match(regex);
  const [, , data] = matches;
  const imageBuffer = Buffer.from(data, 'base64');

  return {
    statusCode: 200,
    body: imageBuffer.toString('base64'),
    headers: {
      'Content-Type': 'image/png',
    },
    isBase64Encoded: true,
  };
};
