'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/patents': {
    name: 'patents',
  },
  '/experience': {
    name: 'experience',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
  // '/guestbook': {
  //   name: 'guestbook',
  // },
};

function Logo() {
  return (
    <Link aria-label="Bhanu Pallakonda" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M1.685 0v.357l1.232 1.046c1.477 1.204 1.67 1.439 1.67 2.526V24h8.646c4.537 0 9.083-1.629 9.083-6.849 0-3.082-2.174-5.458-5.186-5.797v-.067c2.475-.745 4.169-2.54 4.169-5.253 0-4.372-3.73-6.032-7.349-6.032L1.686 0zm7.176 3.664h3.524c2.383 0 3.121.327 3.844 1.013.548.521.799 1.237.801 2.07 0 .775-.267 1.466-.831 2.004-.705.676-1.674 1.011-3.443 1.011H8.862V3.664zm0 9.758h4.099c3.456 0 5.085.881 5.085 3.39 0 3.153-3.055 3.526-5.256 3.526H8.86v-6.916z"
          stroke="currentColor"
          strokeWidth={1}
        />
        {/*<motion.path*/}
        {/*  initial={{ x: -200, opacity: 0 }}*/}
        {/*  animate={{ x: 0, opacity: 1 }}*/}
        {/*  transition={{*/}
        {/*    duration: 0.5,*/}
        {/*    type: 'spring',*/}
        {/*    stiffness: 50,*/}
        {/*  }}*/}
        {/*  // d="M10 20 Q 50 40 10 80 Q 50 120 10 160"*/}
        {/*  fill="currentColor"*/}
        {/*/>*/}
      </motion.svg>
    </Link>

  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
