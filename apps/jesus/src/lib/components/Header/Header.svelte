<script>
  import image_profile from './profile.webp';
  import { _ } from 'svelte-i18n';
</script>

<div class="flex flex-row justify-between w-full">
  <div class="flex flex-row justify-start space-x-2">
    <a href="/" class="w-full cursor-pointer">
      <img
        src={image_profile}
        alt="wearing a black cap and a nice coat in CDMX"
        class="rounded-xl w-40 h-50 border-2 border-black"
      />
    </a>
    <div class="flex flex-col justify-end text-right md:text-left text-sm space-y-3">
      <div>
        <a class="font-bold text-base cursor-pointer" href="/">Jesus Cova</a>
        <p class="italic text-sm font-bold text-gray-600">
          {$_('header.description')}
        </p>
      </div>
      <div class="flex flex-col space-y-1">
        <a rel="me" href="https://instagram.com/jesuscovam" class="underline text-blue-400"
          >Instagram</a
        >
        <a rel="me" href="https://mastodon.social/@jesuscova" class="underline text-blue-400"
          >Mastodon</a
        >
        <a
          rel="me"
          href="https://www.linkedin.com/in/jesus-cova-262882171/"
          class="underline text-blue-400"
        >
          {$_('header.contact_me')}
        </a>
        <p />
      </div>
    </div>
  </div>
</div>
