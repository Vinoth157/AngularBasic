export interface Logger {
  logFile: string;
  printMessage: (message: string) => void;
}
