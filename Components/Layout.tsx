import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next/types";
import React from "react";
import { Props } from "../Types/type";

export const Layout: NextPage<Props> = ({
  children,
  title = "HP by Nextjs",
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-sm text-gray-600 ">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex h-14 items-center pl-8">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" /> */}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};
