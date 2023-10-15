import { redirect } from '@sveltejs/kit';

export const actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get('theme');
    const path = url.searchParams.get('redirectTo');
    if (theme) {
      cookies.set('themeColor', theme, {
        path: '/',
        maxAge: 1 * 60 * 60 // 1 hora
      });
    }
    throw redirect(303, path || '/');
  }
};
