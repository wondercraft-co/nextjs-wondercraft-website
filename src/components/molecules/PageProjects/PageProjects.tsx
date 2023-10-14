import ProjectCard from "@/components/atoms/ProjectCard";
import { IProjectCardProps } from "@/components/atoms/ProjectCard/ProjectCard";
import { cn } from "@/utils/util";

export interface IPageProjectsProps {
  title?: string;
  description?: string;
  projects?: IProjectCardProps[];
}

export default function PageProjects({
  title = "Our work",
  description = "We are proud of the work we do for our clients. Here are some examples.",
  projects = [],
}: IPageProjectsProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          {projects.map((post, index) => (
            <div
              className={cn("col-span-12 md:col-span-6 ", {
                "lg:col-span-7": index % 4 === 0 || index % 4 === 3,
                "lg:col-span-5": index % 4 === 1 || index % 4 === 2,
              })}
              key={index}
            >
              <ProjectCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
