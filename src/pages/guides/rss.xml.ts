import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../../data/site';
import { getGuides, guideUrl } from '../../lib/guides';
import { getCategory } from '../../data/categories';

export async function GET(context: APIContext) {
  const guides = await getGuides();
  return rss({
    title: `${site.name} guides & insights`,
    description: 'Mortgage guides and insights from YourSide, Wellington mortgage advisers.',
    site: context.site ?? site.url,
    items: guides.map((g) => ({
      title: g.data.title,
      description: g.data.description,
      pubDate: g.data.publishDate,
      link: guideUrl(g),
      categories: [getCategory(g.data.category).name],
    })),
    customData: '<language>en-nz</language>',
  });
}
