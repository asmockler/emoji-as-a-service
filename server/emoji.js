import emojiMap from './emoji/map';

exports.handler = function(event, context, callback) {
  const {path} = event;

  const emojiName = path.split('/').pop();
  const emoji = emojiMap[emojiName];

  if (emoji == null) {
    callback(null, {
      body: 'Please provide a valid emoji name!',
      statusCode: 404,
    });
    return;
  }

  const regex = /^data:.+\/(.+);base64,(.*)$/;
  const matches = emoji.match(regex);
  const [, , data] = matches;
  const imageBuffer = Buffer.from(data, 'base64');

  callback(null, {
    statusCode: 200,
    body: imageBuffer,
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
