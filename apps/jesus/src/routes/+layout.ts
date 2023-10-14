import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import type { Config } from '@sveltejs/adapter-vercel';
import { locale, waitLocale } from 'svelte-i18n';

export const config: Config = {
  runtime: 'edge'
};

export async function load({ url, data }) {
  let theme = data?.theme;
  if (browser) {
    // locales
    locale.set(window.navigator.language);
  }

  if (browser && !theme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  }
  await waitLocale();

  return {
    url: url.pathname,
    theme
  };
}
