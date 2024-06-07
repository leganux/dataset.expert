import { readFileSync } from 'fs';
import { join } from 'path';

class DatasetExpert {
    version: string;

    constructor() {
        const packageJsonPath = join(__dirname, 'package.json');
        const packageJsonContent = readFileSync(packageJsonPath, 'utf8');
        const packageJsonObject = JSON.parse(packageJsonContent);
        this.version = packageJsonObject.version;
        console.log('Welcome to Dataset.expert engine for TS v' + this.version);
    }


    loadPlainCSV(csv: string, options: any) {

    }
    loadPlainJSON(object: any, options: any) {

    }
    loadDECSV(csv: string, options: any) {

    }
    loadDEJSON(object: any, options: any) {

    }
    validate(object: any, options: any) {

    }
}

let ds = new DatasetExpert()