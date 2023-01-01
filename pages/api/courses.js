import * as fs from 'fs';

export default async function handler(req, res) {
    fs.readFile('courses.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        console.log(student);
    });

}
