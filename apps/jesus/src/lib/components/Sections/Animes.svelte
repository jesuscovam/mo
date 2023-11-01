<script lang="ts">
  import { _ } from 'svelte-i18n';
  import type { Layout } from '../../types';
  import ListItem from './ListItem.svelte';
  import HeaderSection from './HeaderSection.svelte';

  interface Anime {
    imagen: string;
    title: string;
    episodes: number;
  }
  const animes: Anime[] = [
    {
      title: 'Castlevania: Nocturne',
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMTA1MmQxNDctNTJlOC00YzFkLTg1OGUtMWQ0Y2YzNDg4ODE1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      episodes: 8
    },
    {
      title: 'Yowamushi Pedal: Grande Road',
      imagen: 'https://cdn.myanimelist.net/images/anime/12/67799l.jpg',
      episodes: 24
    },
    {
      title: 'Yowamushi pedal',
      imagen:
        'https://m.media-amazon.com/images/M/MV5BNjU0MmRkN2UtNmYzOC00ZDk4LTgzYjgtMzkzMTc5ZmM0NjlhL2ltYWdlXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_FMjpg_UX1000_.jpg',
      episodes: 38
    },
    {
      title: 'Jujutsu Kaisen (season 2)',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Jujutsu_Kaisen_S2_Vol.1.png',
      episodes: 5
    },
    {
      title: 'Paprika',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/1/16/Paprikaposter.jpg',
      episodes: 1
    },
    // Chainsaw Man
    {
      title: 'Chainsaw Man',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Chainsaw_Man_anime.png',
      episodes: 12
    },
    {
      title: 'Haikyu!! To the Top',
      imagen: 'https://cdn.myanimelist.net/images/anime/1694/104929l.jpg',
      episodes: 25
    },
    {
      title: 'Haikyu!! Season 3',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Haikyu_season_3_DVD_cover.jpg',
      episodes: 10
    },

    {
      title: 'Haikyu!! Second Season',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/d/dd/Haikyu_season_2_DVD_cover.jpg',
      episodes: 25
    },
    {
      title: 'Haikyu!!',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Haikyu_season_1_DVD_cover.jpg',
      episodes: 25
    }
  ];

  $: episodes = $_('animes.episodes');
  function getNumberEpisode(episode: number) {
    return `${episodes}: ${episode}`;
  }

  export let layout: Layout = 'flex';
</script>

<section class="flex flex-col space-y-5">
  <HeaderSection>{$_('animes.title')}</HeaderSection>
  {#if layout === 'grid'}
    <div class="grid sm:grid-cols-2 md:grid-cols-4">
      {#each animes as anime}
        <ListItem
          imageUrl={anime.imagen}
          title={anime.title}
          secondText={getNumberEpisode(anime.episodes)}
        />
      {/each}
    </div>
  {:else}
    <div class="flex flex-col space-y-5">
      {#each animes as anime}
        <ListItem
          imageUrl={anime.imagen}
          title={anime.title}
          secondText={getNumberEpisode(anime.episodes)}
        />
      {/each}
    </div>
  {/if}
</section>
