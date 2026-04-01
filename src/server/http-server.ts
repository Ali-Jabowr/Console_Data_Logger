
import { Store } from "../core/store.js";
import * as http from 'http';
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
            }
        });
        server.listen(this.port, () => {
            console.log(`HTTP Server listening on port ${this.port}`);
        });
    }

}