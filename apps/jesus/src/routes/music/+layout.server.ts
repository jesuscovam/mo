import Kuroko from '$lib/components/music/assets/kuroko.webp?url';
import Polymax from '$lib/components/music/assets/polymax.webp?url'
import type { Release } from '$lib/types'

const releases: Release[] = [
  {
    title: 'KUROKO ABRIENDO KANCHA & SIDEKICK FRIENDSHIP',
    image: Kuroko,
    key: 'Kuroko',
    spotify: 'https://open.spotify.com/album/0EoeHKp2C3JlJcdV5LkZno?si=6hoMlpEnSlmZWf78Bjh9Iw',
    apple: 'https://music.apple.com/us/album/kuroko-abriendo-kancha-sidekick-friendship-single/1748855593',
    ytmusic: 'https://music.youtube.com/playlist?list=OLAK5uy_m3B8LnqpAdHTwxOUNRSDFZRuKRWKkdey0&si=6akiqMfp2akMkLz_',
    yt: 'https://youtube.com/playlist?list=OLAK5uy_mS1j_BVUgB38hbJd9k41Mf-uGJfBZnSJg&si=QQKJmJquCAxvVtW-'
  },
  {
    title: 'POLYMAX SEASON',
    image: Polymax,
    key: 'polymax-season',
    spotify: 'https://open.spotify.com/album/73oJL19UfZ8C0CzlERpfRa?si=AC-A3PfvTQyM-OKxOdQUzw',
    apple: 'https://music.apple.com/us/album/polymax-season/1755020803',
    ytmusic: 'https://music.youtube.com/playlist?list=OLAK5uy_lA5UCFg6h4hK38raLLnAesyyQDrkJGzFY&si=kGEFCB_LQYRC9Xic',
    yt: 'https://youtube.com/playlist?list=OLAK5uy_m4B-vuqT_qsPuKCqGeQolr2mvp48aAfoo&si=z4OAKec9MeqDFmCs'
  }

];


export function load() {
  return {
    releases
  }
}

