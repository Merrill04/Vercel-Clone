import fs from 'fs';
import path from 'path';

export function getAllfiles(dirPath: string, arrayoffiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat.isDirectory()) {
            arrayoffiles = getAllfiles(filePath, arrayoffiles);
        } else {
            arrayoffiles.push(filePath);
        }
    })
    return arrayoffiles;
}

