export enum TechStack {
  SvelteKit,
  ReactNative,
  GraphQL,
  S3,
  Postgres,
  Blob,
  Rust,
  Sanity
}

export type Layout = 'grid' | 'flex';

export type Theme = 'light' | 'dark';

export interface Release {
  image: string;
  title: string;
  key: string
  spotify: string;
  apple: string;
  ytmusic: string;
  yt: string;
}

