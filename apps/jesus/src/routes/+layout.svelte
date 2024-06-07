<script lang="ts">
  import '../app.css';
  import { dev } from '$app/environment';
  import { page } from '$app/stores';
  import { inject } from '@vercel/analytics';
  import Header from '../lib/components/Header/Header.svelte';
  import { ViewTransition } from 'ui';
  import type { Theme } from '$lib/types';

  export let data;

  $: theme = data?.theme as Theme;
  $: routeIsMusic = $page?.route?.id?.includes('music');
  inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>jesus</title>
</svelte:head>

<ViewTransition url={data?.url}>
  <div data-theme={theme} class="p-10 flex flex-col space-y-10">
    {#if !routeIsMusic}
      <Header bind:theme />
    {/if}
    <slot />
  </div>
</ViewTransition>
