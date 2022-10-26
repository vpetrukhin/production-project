export type Mode = 'production' | 'development';

export interface Paths {
    build: string;
    entry: string;
    html: string;
    src: string;
}

export interface buildEnv {
    port: number;
    mode: Mode;
    ApiUrl: string;
}

export interface buildOptions {
    mode: Mode;
    paths: Paths;
    port: number;
    isDev?: boolean;
    ApiUrl?: string;
    project?: 'storybook' | 'frontend' | 'jest'
}