<script lang="ts">
  import spotify from '$lib/components/music/assets/spotify.webp?url';
  import apple from '$lib/components/music/assets/apple-music.webp?url';
  import ytmusic from '$lib/components/music/assets/yt-music.webp?url';
  import yt from '$lib/components/music/assets/yt.webp?url'
  import HeaderSection from '$lib/components/Sections/HeaderSection.svelte';

  export let data;

  $: release = data?.release;
  $: distributors = [
    {
      title: 'Apple Music',
      img: apple,
      url: release?.apple
    },
        {
      title: 'Spotify',
      img: spotify,
      url: release?.spotify
    },
   {
      title: 'Youtube',
      img: yt,
      url: release?.yt
    },
 {
      title: 'Youtube Music',
      img: ytmusic,
      url: release?.ytmusic
    },


  ];
</script>

<div class="flex flex-col items-center justify-center w-full">
  <section class="flex flex-col">
    <div class="flex flex-row items-center justify-center space-x-4">
      <img src={release?.image} alt={release?.title} class="h-20 w-20" />
      <HeaderSection>{release?.title}</HeaderSection>
    </div>
    <div class="flex flex-col mt-20 space-y-5 items-center justify-center">
      {#each distributors as distro}
        <a
          href={distro.url}
          class="flex flex-row w-[60vw] md:w-[20vw] items-center rounded-lg shadow space-x-4 p-2 border-2"
          class:border-red-400={!distro?.title.includes('Spotify')}
          class:border-green-500={distro?.title.includes('Spotify')}
        >
          <img src={distro.img} alt={distro.title} class="h-10 w-10" />
          <p>{distro.title}</p>
        </a>
      {/each}
    </div>
  </section>
</div>
