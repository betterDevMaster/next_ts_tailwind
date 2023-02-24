import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = (props: IMainProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <header className="border-b border-gray-300">
          <nav className="flex flex-wrap items-center bg-green-400 p-3">
            <Link
              href="/"
              className="mr-4 inline-flex items-center p-2 no-underline"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-8 w-8 fill-current text-white"
              >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <span className="text-xl font-bold uppercase tracking-wide text-white">
                Talwind CSS
              </span>
            </Link>
            <button
              className="ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-green-600 hover:text-white lg:hidden"
              onClick={handleClick}
              title="test"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
              className={`${
                active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:w-auto lg:grow`}
            >
              <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white no-underline hover:bg-green-600 hover:text-white lg:inline-flex lg:w-auto"
                >
                  Home
                </Link>
                <Link
                  href="/auth"
                  className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white no-underline hover:bg-green-600 hover:text-white lg:inline-flex lg:w-auto"
                >
                  Auth
                </Link>
                <Link
                  href="/dashboard"
                  className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white no-underline hover:bg-green-600 hover:text-white lg:inline-flex lg:w-auto"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="text-xl">{props.children}</main>

        <footer className="bg-gray-100">
          <div className="container mx-auto border-t border-gray-300 px-6 pt-10">
            <div className="flex flex-wrap">
              <div className="w-full text-center md:w-1/4 md:text-left">
                <h5 className="mb-6 font-bold uppercase">Links</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full text-center md:w-1/4 md:text-left">
                <h5 className="mb-6 font-bold uppercase">Legal</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full text-center md:w-1/4 md:text-left">
                <h5 className="mb-6 font-bold uppercase">Social</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full text-center md:w-1/4 md:text-left">
                <h5 className="mb-6 font-bold uppercase">Company</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Official Blog
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-4 text-center text-sm">
            © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
            <a href="https://github.com/betterDevMaster">BetterDevMasterGuru</a>
            .
          </div>
        </footer>
      </div>
    </div>
  );
};
