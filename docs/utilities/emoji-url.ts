export const SERVICE_PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000/emoji'
    : 'https://emoji.veryfunparty.com/i';

export function emojiUrl(name: string) {
  return `${SERVICE_PATH}/${name}`;
}
