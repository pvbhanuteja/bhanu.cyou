import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews } from 'lib/metrics';
import {
    ArrowIcon,
    GitHubIcon,
    LinkedInIcon,
    ResumeIcon,
    ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  let views;

  try {
    [views] = await Promise.all([
      getBlogViews(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="/resume.pdf"
            className="flex items-center gap-2"
          >
            <ResumeIcon />
            {`Resume`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/pvbhanuteja"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`GitHub`}
          </a>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/pvbhanuteja"
                className="flex items-center gap-2"
            >
                <LinkedInIcon />
                {`Linkedin`}
            </a>
          {/* <Link href="/blog" className="flex items-center">
            <ViewsIcon />
            {`${views.toLocaleString()} blog views all time`}
          </Link> */}
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        {/*<li>*/}
        {/*  <a*/}
        {/*    className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="_blank"*/}
        {/*    href="https://twitter.com/pvbhanuteja"*/}
        {/*  >*/}
        {/*    <ArrowIcon />*/}
        {/*    <p className="h-7">follow me on twitter</p>*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:pvbhanuteja@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7">send me an email</p>
          </a>
        </li>
      </ul>
      <h2 className="text-l font-serif mt-8 mb-4">Quick Facts</h2>
      <ul className="font-sm max-w-[600px] list-disc list-inside space-y-2 text-neutral-800 dark:text-neutral-200">
        <li>Lead AI Engineer at <a href="https://armada.ai" target="_blank">Armada</a></li>
        <li>Master of Science in Computer Science from <a href="https://www.tamu.edu/" target="_blank">Texas A&M University</a></li>
        <li>Bachelor of Technology in Electrical Engineering from <a href='https://www.iittp.ac.in/' target="_blank">Indian Institute of Technology, Tirupati</a></li>
      </ul>
    </section>
  );
}
