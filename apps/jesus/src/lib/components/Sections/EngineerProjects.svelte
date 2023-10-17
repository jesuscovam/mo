<script lang="ts">
  import { TechStack } from '../../types';
  import { _ } from 'svelte-i18n';
  import TechIcon from './TechIcon/TechIcon.svelte';

  interface SubLink {
    platform: string;
    url: string;
  }

  interface Project {
    title: string;
    url: string;
    techStack: TechStack[];
    subLinks?: SubLink[];
  }

  const projects: Project[] = [
    {
      title: 'resend-email',
      url: 'https://crates.io/crates/resend-email',
      techStack: [TechStack.Rust]
    },

    {
      title: 'Sonríele MX',
      url: 'https://sonriele-mx-web-git-preview-midnight-ouizard.vercel.app/',
      techStack: [TechStack.SvelteKit, TechStack.Postgres]
    },
    {
      title: 'Sonrisa y Bienestar',
      url: 'https://sonrisabienestar.com',
      techStack: [TechStack.SvelteKit, TechStack.GraphQL, TechStack.S3]
    },
    {
      title: 'MECA',
      url: 'https://clinicameca.com',
      techStack: [TechStack.SvelteKit, TechStack.GraphQL, TechStack.S3]
    },
    {
      title: 'Slissto',
      url: 'https://slissto.com',
      techStack: [TechStack.SvelteKit, TechStack.GraphQL, TechStack.S3]
    },
    {
      title: 'Slissto App 🇲🇽',
      url: 'https://slissto.com',
      techStack: [TechStack.ReactNative, TechStack.GraphQL, TechStack.S3],
      subLinks: [
        {
          platform: '- Android 🤖',
          url: 'https://play.google.com/store/apps/details?id=com.slissto.slissto'
        },
        {
          platform: '- iOS 🍏',
          url: 'https://apps.apple.com/mx/app/slissto/id1641818168'
        }
      ]
    },
    {
      title: 'Slissto Pro 🇲🇽',
      url: 'https://slissto.com',
      techStack: [TechStack.ReactNative, TechStack.GraphQL, TechStack.S3],
      subLinks: [
        {
          platform: '- Android 🤖',
          url: 'https://play.google.com/store/apps/details?id=com.slissto.slisstoPro'
        },
        {
          platform: '- iOS 🍏',
          url: 'https://apps.apple.com/mx/app/slissto-pro/id1637764500'
        }
      ]
    }
  ];
</script>

<div class="flex flex-col space-y-3 w-full md:w-2/4">
  <h2>{$_('engineering.title')}</h2>
  <div class="flex flex-col space-y-3">
    {#each projects as { title, url, techStack, subLinks }}
      <div class="flex flex-col space-y-2">
        <div class="flex flex-row items-center justify-between">
          <a href={url} class="text-blue-400 underline">{title}</a>
          <div class="flex flex-row space-x-1">
            {#each techStack as tech}
              <TechIcon {tech} />
            {/each}
          </div>
        </div>
        <div class="flex flex-col space-x-1">
          {#if Array.isArray(subLinks)}
            {#each subLinks as { platform, url }}
              <a href={url} class="pl-2 text-sm text-blue-400 underline">{platform}</a>
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
