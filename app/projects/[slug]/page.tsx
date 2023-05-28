import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from 'components/mdx';
import { allProjects } from 'contentlayer/generated';
import { ArrowIcon, GitHubIcon, TwitterIcon, YoutubeIcon, LinkIcon } from 'components/icons';
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description: description,
    image,
    slug,
  } = project;
  const ogImage = image
    ? `https://bhanu.cyou${image}`
    : `https://bhanu.cyou/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://bhanu.cyou/projects/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }) {
  const project = allProjects.find((project) => project.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px] mb-4">
        {project.title}
      </h1>
      {project.tags && (
          <div className="mb-4">
            <span className="font-semibold"></span>
            {project.tags.split(',').map((tag, index) => (
                <span
                    key={index}
                    className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                >
        {tag}
      </span>
            ))}
          </div>
      )}
      <div className="flex flex-col gap-2 md:flex-row md:gap-2 mb-4">
        {project.github && (
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={project.github}
                className="flex w-full md:w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center">
                <GitHubIcon />
                <div className="ml-3">GitHub</div>
              </div>
              <ArrowIcon />
            </a>
        )}
        {project.links && project.links.split(',').map((link, index) => (
            <a
                key={index}
                rel="noopener noreferrer"
                target="_blank"
                href={link.split('-#-')[0]}
                className="flex w-full md:w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center">
                <LinkIcon />
                <div className="ml-3">{link.split('-#-')[1]}</div>
              </div>
              <ArrowIcon />
            </a>
        ))}
      </div>

      {project.image && <img src={project.image} alt={project.title} className="mb-4"/>}

      {/*<p>{project.description}</p>*/}
      <Mdx code={project.body.code} tweets={[]} />
    </section>
  );
}
