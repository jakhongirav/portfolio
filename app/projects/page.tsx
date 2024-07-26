import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Project as ContentLayerProject } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
// import { Redis } from "@upstash/redis";
// import { Eye } from "lucide-react";

// const redis = Redis.fromEnv();

export const revalidate = 60;

interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function ProjectsPage() {
  // const views = (
  //   await redis.mget<number[]>(
  //     ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
  //   )
  // ).reduce((acc, v, i) => {
  //   acc[allProjects[i].slug] = v ?? 0;
  //   return acc;
  // }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;

  const project: Project = {
    slug: "jakhongirav",
    title: "Jakhongirav",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga voluptas officia sunt expedita eum rem culpa cum natus ipsam!",
    date: "Jun 17, 2024",
  };

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Jul 1, 2023</div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  jakhongirav
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores unde ut ullam iure possimus alias fuga, delectus dolor
                  eius suscipit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illum, illo!
                </p>
                {/* <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div> */}
              </article>
            </Link>
          </Card>

          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Jul 1, 2023</div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  jakhongirav
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores unde ut ullam iure possimus alias fuga, delectus dolor
                  eius suscipit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illum, illo!
                </p>
                {/* <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div> */}
              </article>
            </Link>
          </Card>
        </div>

        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
          <Card>
            <Link href={`/projects/${top2.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Jul 1, 2023</div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[top2.slug] ?? 0,
                    )}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Planetfall
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores unde ut ullam iure possimus alias fuga, delectus dolor
                  eius suscipit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illum, illo!
                </p>
                {/* <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div> */}
              </article>
            </Link>
          </Card>
          <Card>
            <Link href={`/projects/${top3.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Jul 1, 2023</div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[top3.slug] ?? 0,
                    )}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Highstorm
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores unde ut ullam iure possimus alias fuga, delectus dolor
                  eius suscipit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illum, illo!
                </p>
                {/* <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div> */}
              </article>
            </Link>
          </Card>
        </div>

        {/* Line */}
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <Card key={"0"}>
            <Article
              slug={project.slug}
              title={project.title}
              description={project.description}
              date="Jun 17, 2024"
            />
          </Card>
          <Card key={"1"}>
            <Article
              slug={project.slug}
              title={project.title}
              description={project.description}
              date="Aug 25, 2022"
            />
          </Card>
          <Card key={"2"}>
            <Article
              slug={project.slug}
              title={project.title}
              description={project.description}
              date="Aug 25, 2022"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
