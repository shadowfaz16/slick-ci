import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

import { FaArrowAltCircleRight } from "react-icons/fa";


export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex flex-col items-center justify-center bg-bg-100">
      <div className="container flex flex-col justify-center gap-12 px-4 pb-32">
        <div className="space-y-20">
        <h1 className="text-5xl font-medium text-text-100">
          SlickCI makes extremely fast CIs
        </h1>
        <div className="bg-bg-300 rounded-lg p-8 md:w-1/2 space-y-8 cursor-pointer hover:bg-bg-200">
          <div className="space-y-2">
          <h3 className="text-text-100 text-lg font-semibold">For Github Actions</h3>
          <p className="text-text-200 text-sm">Deploy your CICD workflows on decentralized bare mateal services with one click</p>
          </div>
          <div className="flex items-center space-x-2">
          <p className="text-text-100 text-sm">Go to product</p>
          <FaArrowAltCircleRight color="white" size={14} />
          </div>
        </div>
        </div>
        {/* <CrudShowcase /> */}
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
