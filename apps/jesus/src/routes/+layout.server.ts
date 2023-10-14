export const load = async ({ cookies }) => {
  const theme = cookies.get('themeColor');
  return {
    theme
  };
};
