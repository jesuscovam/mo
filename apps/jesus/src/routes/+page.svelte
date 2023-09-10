<script>
  import { _ } from 'svelte-i18n';
  import Animes from '../lib/components/Sections/Animes.svelte';
  import Libros from '../lib/components/Sections/Libros.svelte';
  import EngineerProjects from '../lib/components/Sections/EngineerProjects.svelte';

  $: links = [
    {
      name: $_('nav.engineering'),
      url: '/projects'
    },
    { name: 'Beats 🔊', url: 'https://soundcloud.com/modernjesus/sets/god-meditation-peace' },
    {
      name: $_('nav.books'),
      url: '/books'
    },
    {
      name: 'Animes 👺',
      url: '/animes'
    }
  ];
</script>

<div class="md:hidden flex flex-col items-center w-full mt-10 space-y-6">
  {#each links as { name, url }}
    <a
      href={url}
      class="rounded-full border-2 border-black w-full cursor-pointer text-center py-4 transition ease-in-out delay-150 hover:-translate-y-1 active:-translate-y-1 hover:scale-110 active:scale-110 hover:bg-indigo-500 active:bg-indigo-500 duration-300 hover:text-white active:text-white"
      >{name}</a
    >
  {/each}
</div>
<div class="hidden md:grid grid-cols-3">
  <EngineerProjects />
  <Libros />
  <Animes />
</div>
