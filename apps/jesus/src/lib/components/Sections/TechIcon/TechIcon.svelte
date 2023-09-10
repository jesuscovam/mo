<script lang="ts">
  import { TechStack } from '../../../types';
  import graphql from './graphql.svg?url';
  import reactNative from './react-native-logo.png';
  import postgres from './postgres.svg?url';
  import s3 from './s3.png';
  import svelte from './svelte.svg?url';

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
      : postgres;
</script>

<img src={image} alt={String(tech)} class="w-6 h-6" />
