export const actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get('theme');
    if (theme) {
      cookies.set('themeColor', theme, {
        path: '/',
        maxAge: 8 * 60 * 60 // 8 hours
      });
    }
  }
};
