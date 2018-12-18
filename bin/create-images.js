const fs = require('fs');
const path = require('path');
const fontkit = require('fontkit');
const chalk = require('chalk');
const {lib: emojilib} = require('emojilib');

const fontPath = '/System/Library/Fonts/Apple Color Emoji.ttc';
const imagesPath = path.resolve('images');

if (!fs.existsSync(fontPath)) {
  console.error(chalk.red(`\n🚑 Couldn't find emoji font at ${fontPath}.\n`));
  process.exit(1);
}

const [font] = fontkit.openSync(fontPath).fonts;

const existingImages = fs.readdirSync(imagesPath).reduce((set, filename) => {
  if (filename.endsWith('.png')) {
    set.add(filename.replace(/\.png$/, ''));
  }

  return set;
}, new Set());
const canonicalNames = Object.keys(emojilib);

canonicalNames.forEach(emojiName => {
  if (existingImages.has(emojiName)) {
    return;
  }

  const run = font.layout(emojilib[emojiName].char);
  const glyph = run.glyphs[0].getImageForSize(128);

  if (glyph == null) {
    console.warn(`🚧 Could not generate glyph for ${emojiName}`);
    return;
  }

  const imagePath = path.join(imagesPath, `${emojiName}.png`);

  fs.writeFileSync(imagePath, glyph.data);
});
