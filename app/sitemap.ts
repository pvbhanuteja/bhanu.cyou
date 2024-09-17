import { allBlogs, allProjects } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://www.bhanu.cyou/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const projects = allProjects.map((post) => ({
    url: `https://www.bhanu.cyou/projects/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/about', '/patents','/experience', '/blog', '/guestbook', '/uses','/projects'].map(
    (route) => ({
      url: `https://www.bhanu.cyou${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs, ...projects];
}
