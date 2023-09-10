<script lang="ts">
	import Animes from '../../lib/components/Sections/Animes.svelte';
	import EngineerProjects from '../../lib/components/Sections/EngineerProjects.svelte';
	import Libros from '../../lib/components/Sections/Libros.svelte';

	export let data;
	$: section = data?.section;
</script>

<div class="flex flex-col items-center justify-center w-full md:items-start">
	{#if section === 'animes'}
		<Animes layout="grid" />
	{:else if section === 'projects'}
		<EngineerProjects />
	{:else if section === 'books'}
		<Libros layout="grid" />
	{/if}
</div>
