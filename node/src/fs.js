const fs = require('fs');
const path = require('path');

// Lista todos os arquivos do diretório
fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        const filePath = path.join(__dirname, file);
    
        fs.stat(filePath, (err, stats) => {
        if (err) throw err;
    
        if (stats.isFile()) {
            console.log(`${file} [${stats.size} bytes]`);
        }
        });
    });
});

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.promises.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, filePath) {
    for (let file of files) {
        const fileFullPath = path.resolve(filePath, file);
        const stats = await fs.promises.stat(fileFullPath); // Correção aqui
        if (stats.isDirectory()) {
            await readdir(fileFullPath);
        } else {
            console.log(`${file} [${stats.size} bytes]`);
        }
        if(!/\.css$g/.test(fileFullPath)) return;
        console.log(fileFullPath);
    }
}

readdir(__dirname);
