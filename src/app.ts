import { watch } from "fs";
import { Logparser } from "./core/parser.js";
import { Logwatcher } from "./core/watcher.js";    
import * as path from 'path';


const watcher = new Logwatcher('./logs'); // Watch the 'logs' directory for new .log files
const parser = new Logparser();

watcher.on('file-added', async (filePath: string) =>{
    console.log(`New log file added: ${filePath}`);
    await parser.parse(filePath);
})
watcher.on('file-changed', async (filePath: string) =>{
    console.log(`Log file changed: ${filePath}`);
    await parser.parse(filePath);
})
 
watcher.start();