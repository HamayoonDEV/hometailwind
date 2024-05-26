import React from "react";
import DownloadIcon from "../../utils/DownloadIcon";
import LockIcon from "../../utils/LockIcon";
import BoltIcon from "../../utils/BoltIcon";
import BadgeIcon from "../../utils/BadgeIcon";
import dot from "../../assets/dots.svg";

const Main = () => {
  return (
    <>
      <main className="grid grid-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
        <a
          href="/"
          className="py-2 px-6 bg-amber-400 dark:text-neutral-900 mx-auto my-12 flex gap-2 shadow-xl hover:shadow-none transition-shadow rounded-md"
        >
          <DownloadIcon />
          <span>Download the App</span>
        </a>
        <section className="relative">
          <img
            src={dot}
            alt="dot"
            className="hidden absolute lg:block top-1/2 -translate-y-1/2 -left-24 xl:-left-7"
          />
          <img
            src={dot}
            alt="dot"
            className="hidden absolute lg:block top-1/2 -translate-y-1/2 -right-24 xl:-right-7"
          />
          <h2 className="sr-only">our qualities</h2>
          <div className="container mx-auto max-w-5xl flex flex-wrap gap-12 items-start justify-center md:justify-between">
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <LockIcon />
              </div>
              <h3 className="text-3xl font-bold">safe</h3>
              <p>our products are secure out of the box</p>
            </div>
            {/* 2nd card */}
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <BoltIcon />
              </div>
              <h3 className="text-3xl font-bold">efficient</h3>
              <p>feel good about your wallet and the environment</p>
            </div>
            {/* 3rd card */}
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <BadgeIcon />
              </div>
              <h3 className="text-3xl font-bold">proven</h3>
              <p>leading the smart home world for 10 years</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
