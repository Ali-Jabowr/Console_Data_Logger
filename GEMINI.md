# GEMINI.md - console_data_logger Context

## Project Overview
`console_data_logger` is a Node.js-based application written in TypeScript, designed for monitoring, parsing, and potentially serving log data. The project structure indicates a modular design focused on log watching, data storage, and a web server component for data access.

### Main Technologies
- **Runtime**: Node.js
- **Language**: TypeScript
- **Dependencies**: `ts-node`, `nodemon`, `@types/node`
- **Architecture**:
  - `src/core`: Core logic for watching files (`watcher.ts`), parsing logs (`parser.ts`), and managing data (`store.ts`).
  - `src/server`: HTTP server implementation (`http-server.ts`).
  - `src/types`: Centralized type definitions (`log.types.ts`).

## Current Project Status
The project is in its early development stages. Most source files in `src/` are currently empty placeholders (0 bytes), except for:
- `src/core/watcher.ts`: Contains the basic structure for a `Logwatcher` class.
- `src/types/log.types.ts`: Defines core log-related interfaces and enums like `LogLevel`, `LogEntry`, and `LogStats`.

## Building and Running
The project is configured with TypeScript. Key build/run commands can be inferred but are not yet explicitly defined in `package.json` scripts:

- **Build**: `npx tsc` (Compiles TypeScript to JavaScript in `dist/`)
- **Run (Development)**: `npx nodemon src/app.ts` or `npx ts-node src/app.ts`
- **Test**: Not yet implemented.

## Development Conventions
- **TypeScript**: Strict typing is encouraged, as evidenced by `tsconfig.json` and the dedicated `types/` directory.
- **Modularity**: Logic is separated into `core`, `server`, and `types` to maintain a clean architecture.
- **Naming**: Files use kebab-case (e.g., `http-server.ts`, `log.types.ts`).

## Action Items (TODO)
- [ ] Implement core logic in `src/app.ts`.
- [ ] Complete `Logwatcher` implementation in `src/core/watcher.ts`.
- [ ] Implement log parsing logic in `src/core/parser.ts`.
- [ ] Implement data storage/caching in `src/core/store.ts`.
- [ ] Develop the HTTP server in `src/server/http-server.ts`.
- [ ] Add `scripts` (e.g., `start`, `dev`, `build`) to `package.json`.
