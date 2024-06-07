import Kuroko from '$lib/components/music/assets/kuroko.webp?url';
import type { Release } from '$lib/types'

const releases: Release[] = [
  {
    title: 'KUROKO ABRIENDO KANCHA & SIDEKICK FRIENDSHIP',
    image: Kuroko,
    key: 'Kuroko',
    spotify: '',
    apple: '',
    ytmusic: ''
  }
];


export function load() {
  return {
    releases
  }
}

