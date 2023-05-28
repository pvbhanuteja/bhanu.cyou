import type { Metadata } from 'next';
import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of projects I have worked on.',
};

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
            {allProjects
                .sort((a, b) => {
                    // Featured projects first
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;

                    // Then sort by date
                    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                        return -1;
                    }
                    return 1;
                })
                .map((project) => (
                    <Link
                        key={project.slug}
                        className="flex flex-col space-y-1 mb-4"
                        href={`/projects/${project.slug}`}
                    >
                        <div className="w-full flex flex-col">
                            <h2 className="text-lg mb-1">{project.title}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                            {project.tags && (
                                <div className="mb-4">
                                    <span className="font-semibold"></span>
                                    {project.tags.split(',').map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-xs text-gray-700 dark:text-gray-300 mr-2 mb-2"
                                        >
        {tag}
      </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
        </section>
    );
}
