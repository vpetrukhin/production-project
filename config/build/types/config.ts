export type Mode = 'production' | 'development';

export interface Paths {
    build: string;
    entry: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface buildEnv {
    port: number;
    mode: Mode;
    apiurl: string;
}

export interface buildOptions {
    mode: Mode;
    paths: Paths;
    port: number;
    isDev?: boolean;
    ApiUrl?: string;
    project?: 'storybook' | 'frontend' | 'jest'
}