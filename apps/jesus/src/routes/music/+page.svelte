<script lang="ts">
  import { _ } from 'svelte-i18n';
  import ListItem from '$lib/components/Sections/ListItem.svelte';
  import HeaderSection from '$lib/components/Sections/HeaderSection.svelte';
  export let data;

  $: releases = data?.releases;
</script>

<div class="flex flex-col items-center justify-center w-full md:items-start">
  <section class="flex flex-col space-y-5">
    <HeaderSection>{$_('music.title')}</HeaderSection>
    <div class="flex flex-col space-y-5">
      {#each releases as release}
        <ListItem imageUrl={release.image} title={release.title} url={`/music/${release.key}`} />
      {/each}
    </div>
  </section>
</div>
