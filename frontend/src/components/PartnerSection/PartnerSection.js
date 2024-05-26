import React from "react";
import partner1 from "../../assets/partner1.svg";
import partner2 from "../../assets/partner2.svg";
import partner3 from "../../assets/partner3.svg";
import partner4 from "../../assets/partner4.svg";
import partner5 from "../../assets/partner5.svg";
import partner6 from "../../assets/partner6.svg";
import partner7 from "../../assets/partner7.svg";

const PartnerSection = () => {
  return (
    <>
      <section className="text-center grid gap-8 place-items-center">
        <div className="grid gap-4 ">
          <h2 className="text-4xl text-amber-400 font-bold">Our partner</h2>
          <p className="w-full max-w-lg">
            we've partnered with hundered of smart home brands to help you
            create a smart home that fits your needs and doesn't lock you in.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
          <div className="p-4 bg-white shadow-md dark:bg-neutral-600 dark:shadow-xl rounded-md">
            <img src={partner1} alt="partner1" className="h-16 w-16" />
          </div>
          <div className="p-4 bg-white shadow-md dark:bg-neutral-600 dark:shadow-xl rounded-md">
            <img src={partner6} alt="partner1" className="h-16 w-16" />
          </div>
          <div className="p-4 bg-white shadow-md dark:bg-neutral-600 dark:shadow-xl rounded-md">
            <img src={partner7} alt="partner1" className="h-16 w-16" />
          </div>
          <div className="p-4 bg-white shadow-md dark:bg-neutral-600 dark:shadow-xl rounded-md">
            <img src={partner2} alt="partner1" className="h-16 w-16" />
          </div>
          <div className="p-4 bg-white shadow-md dark:bg-neutral-600 dark:shadow-xl rounded-md">
            <img src={partner3} alt="partner1" className="h-16 w-16" />
          </div>
          <div className="p-4 bg-white shadow-md dark:bg-neutral-600 dark:shadow-xl rounded-md">
            <img src={partner4} alt="partner1" className="h-16 w-16" />
          </div>
          <div className="p-4 bg-white shadow-md dark:bg-neutral-600 dark:shadow-xl rounded-md">
            <img src={partner5} alt="partner1" className="h-16 w-16" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerSection;
