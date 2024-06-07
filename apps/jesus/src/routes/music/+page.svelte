<script lang="ts">
  import { _ } from 'svelte-i18n';
  import type { Layout } from '$lib/types';
  import ListItem from '$lib/components/Sections/ListItem.svelte';
  import HeaderSection from '$lib/components/Sections/HeaderSection.svelte';
  export let data;

  export let layout: Layout = 'flex';
  $: releases = data?.releases;
</script>

<div class="flex flex-col items-center justify-center w-full md:items-start">
  <section class="flex flex-col space-y-5">
    <HeaderSection>{$_('music.title')}</HeaderSection>
    {#if layout === 'grid'}
      <div class="grid sm:grid-cols-2 md:grid-cols-4">
        {#each releases as release}
          <ListItem imageUrl={release.image} title={release.title} url={`/music/${release.key}`} />
        {/each}
      </div>
    {:else}
      <div class="flex flex-col space-y-5">
        {#each releases as release}
          <ListItem imageUrl={release.image} title={release.title} url={`/music/${release.key}`} />
        {/each}
      </div>
    {/if}
  </section>
</div>
