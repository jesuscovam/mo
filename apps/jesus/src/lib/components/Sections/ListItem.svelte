<script>
  export let imageUrl = '';
  export let title = '';
  export let secondText = '';
  export let url = '';
</script>

{#if url}
  <a href={url} class="flex flex-row items-center mr-4 mb-4">
    <img class="rounded-lg w-20 h-24" src={imageUrl} alt={title} />
    <div class="flex flex-col ml-2">
      <p>{title}</p>
      <p>{secondText}</p>
    </div>
  </a>
{:else}
  <li class="flex flex-row items-center mr-4 mb-4">
    <img class="rounded-lg w-20 h-24" src={imageUrl} alt={title} />
    <div class="flex flex-col ml-2">
      <p>{title}</p>
      <p>{secondText}</p>
    </div>
  </li>
{/if}
