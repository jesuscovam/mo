<script>
	import { onNavigate } from '$app/navigation';
	import ManualAnimation from './ManualAnimation.svelte';
    let showManualAnimation = false;
	export let url = ''

	onNavigate((navigation) => {
		// @ts-expect-error todo bien papi
		if (!document.startViewTransition) {
            showManualAnimation = true
            return;
        }

		return new Promise((resolve) => {
			// @ts-expect-error todo bien papi
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>


<div
		class={`${$$props.class}`}
	>
	{#if showManualAnimation}
	<ManualAnimation {url}>
		<slot />
	</ManualAnimation>
	{:else}
		<slot />
	{/if}
</div>