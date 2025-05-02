const fs = require('fs');

const filePath = process.argv[2];

const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);

for (let i = 0; i < lines.length - 1; i++) {
  if (/^\s*$/.test(lines[i])) {
    const match = lines[i + 1].match(/^(\s*)/);
    
    lines[i] = match ? match[1] : '';
  }
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log('.runonsave.js: Run');
