import React from "react";
import Image from "next/image";
import heroImage from "~/assets/static/hero.svg";

const Hero = () => {
  return (
    <div className="flex items-center justify-between py-24 container mx-auto">
      <div className="space-y-8">
        <div className="bg-bg-300 flex items-center space-x-4 rounded p-1 md:w-3/5">
          <div className="bg-primary-200 rounded px-3">
            <span className="text-xs text-text-100">
                WHAT'S NEW
                </span>
                </div>
          <p className="text-text-200">Launching SlickCI for GitHub Actions</p>
        </div>
        <h1 className="text-6xl text-text-100 font-medium md:w-2/3">Make GitHub Actions Faster</h1>
        <p className="text-text-100 text-lg">
          Managed performance runners for Github Actions.
          <span className="font-bold block mt-2">
            Change 1 line, get 2x faster and cheaper builds.
          </span>
        </p>
        <div className="space-y-3">
        <div className="flex items-center space-x-4">
            <div className="bg-primary-100 rounded-lg">
                <p className="text-text-100 text-sm p-3 rounded-md">Get Started for Free</p>
            </div>
            <p className="text-text-100 text-sm p-3 rounded-md">Read the docs</p>
        </div>
        <p className="text-xs text-text-200">Free trial minutes · No CC required</p>
        </div>
      </div>
      <div>
        <Image src={heroImage} alt="github-actions" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
