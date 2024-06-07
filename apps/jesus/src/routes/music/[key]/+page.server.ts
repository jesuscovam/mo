import type { Release } from "$lib/types"
import { redirect } from "@sveltejs/kit"

export async function load({ parent, params }) {
  const resp = await parent()
  if (!resp.releases) {
    throw redirect(303, '/music')
  }

  const releases = resp.releases as Release[]
  const release = releases.find((r) => r.key === params.key)


  return { release }
}

