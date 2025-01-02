import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const revalidate = 60;

export default function ProjectsPage() {
  // Separate projects into Frontend and iOS
  const frontendProjects = allProjects
    .filter(
      (project) => !project.slug.includes("xray-scanner") && project.published
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const iosProjects = allProjects
    .filter((project) => project.slug.includes("xray-scanner"))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects I've worked on in my journey as a software
            engineer.
          </p>
        </div>

        {/* Frontend Development Section */}
        <div className="w-full h-px bg-zinc-800" />
        <div className="mx-auto">
          <h3 className="text-2xl font-bold text-zinc-100 mb-8">
            Frontend Development
          </h3>
          <p className="text-zinc-400 mb-8">
            Projects built with React, Next.js, and modern web technologies.
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {frontendProjects.map((project) => (
              <Card key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        {project.date ? (
                          <time dateTime={new Date(project.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, {
                              dateStyle: "medium",
                            }).format(new Date(project.date))}
                          </time>
                        ) : (
                          <span>SOON</span>
                        )}
                      </div>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                      {project.title}
                    </h2>
                    <p className="mt-4 mb-7 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="absolute bottom-4 md:bottom-8 lg:bottom-7">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* iOS Development Section */}
        <div className="w-full h-px bg-zinc-800" />
        <div className="mx-auto">
          <h3 className="text-2xl font-bold text-zinc-100 mb-8">
            IOS Development
          </h3>
          <p className="text-zinc-400 mb-8">
            Native iOS applications built with Swift, CoreML, and other Apple
            frameworks.
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {iosProjects.map((project) => (
              <Card key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        {project.date ? (
                          <time dateTime={new Date(project.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, {
                              dateStyle: "medium",
                            }).format(new Date(project.date))}
                          </time>
                        ) : (
                          <span>SOON</span>
                        )}
                      </div>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                      {project.title}
                    </h2>
                    <p className="mt-4 mb-7 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="absolute bottom-4 md:bottom-8 lg:bottom-7">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
