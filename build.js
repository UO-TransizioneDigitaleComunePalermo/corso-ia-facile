const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Crea la cartella dist se non esiste
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copia index.html dentro dist/
fs.copyFileSync(
  path.join(__dirname, 'index.html'),
  path.join(distDir, 'index.html')
);

console.log('✅ Build completata con successo: index.html copiato in ./dist/');
