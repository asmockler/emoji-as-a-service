import {lib} from 'emojilib';

const canonicalNames = new Map<string, string>();

Object.keys(lib).forEach(emojiName => {
  canonicalNames.set(emojiName, emojiName);

  const {keywords} = lib[emojiName];

  keywords.forEach(keyword => {
    if (canonicalNames.has(keyword)) {
      return;
    }

    canonicalNames.set(keyword, emojiName);
  });
});

export function canonicalEmojiName(str: string) {
  return canonicalNames.has(str) ? canonicalNames.get(str) : null;
}
