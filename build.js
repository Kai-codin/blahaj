const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, 'src', 'photos');
const outFile = path.join(__dirname, 'photos.json');

const files = fs.readdirSync(photosDir)
  .filter(f => /\.jpe?g$/i.test(f))
  .sort()
  .map(f => `src/photos/${f}`);

fs.writeFileSync(outFile, JSON.stringify(files, null, 2) + '\n');
console.log(`✓ photos.json written with ${files.length} photos`);
