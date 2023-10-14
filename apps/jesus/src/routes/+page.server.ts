export const actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get('theme');
    if (theme) {
      cookies.set('themeColor', theme, {
        path: '/',
        maxAge: 1 * 60 * 60 // 1 hora
      });
    }
  }
};
