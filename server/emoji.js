exports.handler = function(event, context, callback) {
  const {path} = event;

  const emojiName = path.split('/').pop();

  if (emojiName == null) {
    callback('Please pass an emoji name!');
    return;
  }

  // TODO: If it is an invalid emoji name, return an error.

  // TODO: If it is a valid emoji name, return an emoji
  callback(null, {
    statusCode: 200,
    body: emojiName,
  });
};
