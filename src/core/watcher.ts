import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';
import { Logparser } from './parser';

export class Logwatcher extends EventEmitter {
    private watchDir: string;

    constructor(directory: string) {
        super();
        this.watchDir = path.resolve(directory);
    }
    public start() {
        console.log(`Starting to watch directory: ${this.watchDir}`);

        if(!fs.existsSync(this.watchDir)) {
            fs.mkdirSync(this.watchDir, { recursive: true });
        }

        fs.watch(this.watchDir, (eventType, filename) => {
            if(eventType == 'rename' && filename && filename.endsWith('.log')) {
                const filePath = path.join(this.watchDir, filename);
                this.emit('file-added', filePath);
            }
            if(eventType == 'change' && filename && filename.endsWith('.log')) {
                const filePath = path.join(this.watchDir, filename);
                this.emit('file-changed', filePath);
            }
        });
    
    }

}