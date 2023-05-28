const fs = require('fs');
const path = require('path');

const folderName = 'myFolder';
const filepath = path.join(folderName, 'myFile.txt');

fs.mkdir(folderName, (err) => {
    if(err) {
        console.error('Error creating folder: ', err);
        return;
    }

    fs.writeFile(filepath, 'Hello kshamika ! ', (err) => {
        if(err) {
            console.error("Error in creating and writing the file: ", err);
            return;
        }
        console.log('Folder and file created successfully!');
    });
}) ;