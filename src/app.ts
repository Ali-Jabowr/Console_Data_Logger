import { watch } from "fs";
import { Logparser } from "./core/parser.js";
import { Logwatcher } from "./core/watcher.js";    
import { Store } from "./core/store.js";
import * as path from 'path';


const store = new Store();
const watcher = new Logwatcher('./logs'); // Watch the 'logs' directory for new .log files
const parser = new Logparser(store);

watcher.on('file-added', async (filePath: string) =>{
    console.log(`New log file added: ${filePath}`);
    await parser.parse(filePath);
})
watcher.on('file-changed', async (filePath: string) =>{
    console.log(`Log file changed: ${filePath}`);
    await parser.parse(filePath);
})
 
watcher.start();