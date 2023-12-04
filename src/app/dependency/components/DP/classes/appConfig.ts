import { InjectionToken } from '@angular/core';

export interface appConfig {
  pi: string;
}

export const APP_CONFIG = new InjectionToken<appConfig>('useVal.config', {
  providedIn: 'root',
  factory: () => ({
    pi: '3.14',
  }),
});

//////////////////////////////////////////////////////////////////////////////////////////

export interface Report {
  pageReport: () => void;
}

export const REPORTER_CONFIG = new InjectionToken<Report>('report.config');

//////////////////////////////////////////////////////////////////////////////////////////
