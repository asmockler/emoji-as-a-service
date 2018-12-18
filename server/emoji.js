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
  const matches = image.match(regex);
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
