import Kuroko from '$lib/components/music/assets/kuroko.webp?url';
import type { Release } from '$lib/types'

const releases: Release[] = [
  {
    title: 'KUROKO ABRIENDO KANCHA & SIDEKICK FRIENDSHIP',
    image: Kuroko,
    key: 'Kuroko',
    spotify: 'https://open.spotify.com/album/0EoeHKp2C3JlJcdV5LkZno?si=6hoMlpEnSlmZWf78Bjh9Iw',
    apple: 'https://music.apple.com/us/album/kuroko-abriendo-kancha-sidekick-friendship-single/1748855593',
    ytmusic: 'https://music.youtube.com/playlist?list=OLAK5uy_m3B8LnqpAdHTwxOUNRSDFZRuKRWKkdey0&si=6akiqMfp2akMkLz_'
  }
];


export function load() {
  return {
    releases
  }
}

