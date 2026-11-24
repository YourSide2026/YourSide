import { getCollection, type CollectionEntry } from 'astro:content';
import { advisers } from '../data/advisers';
import { categories } from '../data/categories';

export type Guide = CollectionEntry<'guides'>;

/** All live articles, newest first. Drafts only show while developing locally. */
export async function getGuides(): Promise<Guide[]> {
  const all = await getCollection('guides', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

/** The pinned feature article, or the newest one if none is pinned. */
export const getFeatured = (guides: Guide[]) => guides.find((g) => g.data.featured) ?? guides[0];

export const guideUrl = (g: Guide) => `/guides/${g.id}/`;
export const topicUrl = (slug: string) => `/guides/topic/${slug}/`;

/** Topics an article belongs to: its main category plus any extra tags. */
export const topicsOf = (g: Guide) => [g.data.category, ...g.data.tags];

/** Topics that have at least one article, with counts. */
export function activeTopics(guides: Guide[]) {
  return categories
    .map((c) => ({ ...c, count: guides.filter((g) => topicsOf(g).includes(c.slug)).length }))
    .filter((c) => c.count > 0);
}

export function readingTime(body = '') {
  const words = body.replace(/[#>*_`|\-\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Pacific/Auckland' });

export function authorOf(g: Guide) {
  const a = advisers.find((x) => x.slug === g.data.author);
  return a
    ? { name: a.name, role: a.role, url: `/team/${a.slug}/` }
    : { name: 'The YourSide team', role: 'Wellington mortgage advisers', url: '/team/' };
}
