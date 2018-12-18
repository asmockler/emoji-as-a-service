declare module 'emojilib' {
  interface LibEntry {
    keywords: string[];
    char: string;
    fitzpatrick_scale: boolean;
    category: string;
  }

  export const lib: {[key: string]: LibEntry};
  export const ordered: string[];
  export const fitzpatrick_scale_modifiers: string[];
}
