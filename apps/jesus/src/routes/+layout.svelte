<script>
  import '../app.css';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import Header from '../lib/components/Header/Header.svelte';
  import { ViewTransition } from 'ui';

  export let data;
  inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>Contacto</title>
</svelte:head>

<ViewTransition class="p-10 flex flex-col space-y-10" url={data?.url}>
  <Header />
  <slot />
</ViewTransition>
