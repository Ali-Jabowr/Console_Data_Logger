import { LogLevel, type LogEntry } from "../types/log.types";

export class Store {
    private totalLogEntries: number = 0;
    private errorCount: number = 0;
    private logs: LogEntry[] = [];


    public addLogEntry(entry: LogEntry): void {
        this.logs.push(entry);
        this.totalLogEntries++; 
        if(entry.level === LogLevel.ERROR) {
            this.errorCount++;
        }
    }
    public getLogs(): LogEntry[] {
        return this.logs;
    }
}