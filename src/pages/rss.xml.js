import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'We using only Astro here',
    site: https://brilliant-dragon-86dce4.netlify.app/,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}