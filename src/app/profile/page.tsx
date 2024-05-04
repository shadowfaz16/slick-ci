'use client'
import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import NavBar from "../_components/navbar";
import { useActiveAccount } from "thirdweb/react";
import {ConnectEmbed} from 'thirdweb/react'
import { client } from "../client";
import { chain } from "../chain";

const Profile = () => {
  const account = useActiveAccount();

  return (
    <div className="min-h-screen bg-bg-100">
      <div className="bg-primary-100">
        <NavBar />
      </div>
      {
        account ? 
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between rounded-lg border border-primary-300 bg-primary-100 p-6">
          <div className="flex gap-2">
            <div>
              <IoMdInformationCircleOutline
                className="mt-0.5 text-text-100"
                size={24}
              />
            </div>
            <div>
              <h3 className="text-lg text-text-100">
                Setup your payment method
              </h3>
              <p className="text-sm text-text-200">
                Attach a credit card to your account to continue after your
                trial minutes
              </p>
            </div>
          </div>
          <div>
            <button className="rounded-md bg-bg-100 p-2 px-4 text-sm text-text-200">
              Setup your payment method
            </button>
          </div>
        </div>
        <div className="py-6">
          <h4 className="text-xl text-text-100">Resource Limits</h4>
          <p className="text-sm text-text-200">
            Here you can see your account&apos;s limits for AMD64 VCPUs and ARM
            VCPUs.
          </p>
          <div className="flex items-center gap-8 py-6">
            <div className="h-28 w-64 rounded-lg border border-primary-300 bg-primary-100"></div>
            <div className="h-28 w-64 rounded-lg border border-primary-300 bg-primary-100"></div>
          </div>
        </div>
      </div> : <div className="flex items-center justify-center min-h-[80dvh]">
         <ConnectEmbed
        client={client}
        chain={chain}
        />
      </div>
      }
    </div>
  );
};

export default Profile;
