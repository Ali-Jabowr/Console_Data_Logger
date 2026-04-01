import {Readable} from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';
import type { Store } from './store';
import type { LogEntry, LogLevel } from '../types/log.types';

export class Logparser extends Readable {
    store: Store;
    constructor(store: Store){
        super();
        this.store = store;
    }

    public async parse(filePath: string ): Promise<void> {
        try{
            const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

            const rl = readline.createInterface({
                input: readStream,
                crlfDelay: Infinity
            });
            for await (const line of rl){
                const logRegex = /^\[.+?\]\s+\[(INFO|WARN|ERROR)\]\s+(.*)$/;
                const match = line.match(logRegex);
                if(match){
                    const logentry: LogEntry = {
                        level: match[1] as LogLevel,
                        message: match[2] as string,
                        timestamp: new Date()
                    }
                    this.store.addLogEntry(logentry);
                }
        }
    }catch(err){
            console.error(`Error reading file: ${err}`);
       }
    }
}
