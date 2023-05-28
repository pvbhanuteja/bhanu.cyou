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
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
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
                        </div>
                    </Link>
                ))}
        </section>
    );
}




// import type { Metadata } from 'next';
// import Link from 'next/link';
// import { allProjects } from 'contentlayer/generated';
//
// export const metadata: Metadata = {
//   title: 'Projects',
//   description: 'A list of projects I have worked on.',
// };
//
// export default function ProjectsPage() {
//   return (
//     <section>
//       <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
//       <div className="flex flex-wrap justify-between">
//         {allProjects
//           .sort((a, b) => {
//             if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
//               return -1;
//             }
//             return 1;
//           })
//           .map((project) => (
//             <Link
//               key={project.slug}
//               href={`/projects/${project.slug}`}
//             >
//               <div className="w-full md:w-1/2 p-4">
//                 <div className="flex bg-gray-100 rounded-lg p-4">
//                   {/*<img src={project.image} alt={project.title} className="w-1/3 mr-4" />*/}
//                   <div className="w-2/3">
//                     <p className="font-bold">{project.title}</p>
//                     <p className="text-sm">{project.description}</p>
//                     <div className="mt-2">
//                       {Array.isArray(project.tags) && project.tags.split(',').map((tag) => (
//                         <span
//                           key={tag.trim()}
//                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//                         >
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </section>
//   );
// }
