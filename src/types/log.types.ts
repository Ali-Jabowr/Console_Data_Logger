

export enum LogLevel {
    INFO = 'info', 
    WARN = 'warn',
    ERROR = 'error',
}

export interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    message: string;
    metadata?: Record<string, any>;
}

export interface LogStats{
    totalLogs: number;
    errorCount: number;
    lastProcessedFile: string | null;
}
