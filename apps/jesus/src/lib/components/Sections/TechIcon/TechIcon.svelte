<script lang="ts">
  import { TechStack } from '../../../types';
  import graphql from './graphql.svg?url';
  import reactNative from './react-native-logo.png';
  import postgres from './postgres.svg?url';
  import blob from './blob.svg?url';
  import sanity from './sanity.webp';
  import s3 from './s3.png';
  import svelte from './svelte.svg?url';
  import rust from './rust.png';

  export let tech: TechStack = TechStack.GraphQL;

  $: image =
    tech === TechStack.GraphQL
      ? graphql
      : tech === TechStack.SvelteKit
      ? svelte
      : tech === TechStack.S3
      ? s3
      : tech === TechStack.ReactNative
      ? reactNative
      : tech === TechStack.Rust
      ? rust
      : tech === TechStack.Sanity
      ? sanity
      : tech === TechStack.Blob
      ? blob
      : postgres;

  $: url =
    tech === TechStack.GraphQL
      ? 'https://graphql.org/'
      : tech === TechStack.SvelteKit
      ? 'https://kit.svelte.dev/'
      : tech === TechStack.S3
      ? 'https://aws.amazon.com/s3/'
      : tech === TechStack.ReactNative
      ? 'https://reactnative.dev/'
      : tech === TechStack.Rust
      ? 'https://www.rust-lang.org/'
      : tech === TechStack.Sanity
      ? 'https://www.sanity.io/'
      : tech === TechStack.Blob
      ? 'https://vercel.com/docs/storage/blob'
      : 'https://vercel.com/docs/storage/vercel-postgres';
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
  <img src={image} alt={String(tech)} class="w-6 h-6" />
</a>
