
import { Store } from "../core/store.js";
import * as http from 'http';
import { LogLevel } from "../types/log.types.js";
export class LogServer {
    private port: number;
    private store: Store;

    constructor(port: number, store: Store) {
        this.port = port;
        this.store = store;
    }

    public start(): void {
        console.log(`HTTP Server started on port ${this.port}`);
        const server = http.createServer((req: any, res: any) => {
            if(req.url === '/logs' && req.method === 'GET'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(this.store.getLogs()));
                return;
            }
            if (req.url === '/stats' && req.method === 'GET') {
                const logs = this.store.getLogs();
                const totalLogs = logs.length;
                const errorLogs = logs.filter(log => log.level === LogLevel.ERROR).length;
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(this.store.getStats()));
                return;
            }
            else {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not Found');
            }
        });
        server.listen(this.port, () => {
            console.log(`HTTP Server listening on port ${this.port}`);
        });
    }

}