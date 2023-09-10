<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { Layout } from '../../types';
	import ListItem from './ListItem.svelte';

	interface Libro {
		imagen: string;
		title: string;
		autor: string;
	}
	const libros: Libro[] = [
		{
			autor: 'Sarah Drasner',
			title: 'Engineering Management for the Rest of Us',
			imagen: 'https://m.media-amazon.com/images/I/61xVsTw0gIL.jpg'
		},
		{
			autor: 'Jorge Ibargüengoitia',
			title: 'Las Muertas',
			imagen:
				'https://www.gandhi.com.mx/media/catalog/product/9/7/9789682702914_c770.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478'
		},
		{
			autor: 'Frank Herbert',
			title: 'Dune Messiah',
			imagen:
				'https://upload.wikimedia.org/wikipedia/en/4/46/Dune_Messiah-Frank_Herbert_%281969%29_First_edition.jpg'
		},
		{
			autor: 'Frank Herbert',
			title: 'Dune',
			imagen:
				'https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg'
		}
	];
	export let layout: Layout = 'flex';
</script>

<section class="flex flex-col space-y-5">
	<h2 class="font-bold">{$_('books.title')}</h2>
	{#if layout === 'grid'}
		<div class="grid sm:grid-cols-2 md:grid-cols-4">
			{#each libros as { title, imagen, autor }}
				<ListItem imageUrl={imagen} {title} secondText={autor} />
			{/each}
		</div>
	{:else}
		<div class="flex flex-col space-y-5">
			{#each libros as { title, imagen, autor }}
				<ListItem imageUrl={imagen} {title} secondText={autor} />
			{/each}
		</div>
	{/if}
</section>
