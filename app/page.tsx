'use client'
import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/project/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

type ProjectSearch = {
  projectSearch: {
    edges: {
      node: ProjectInterface;
    }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};
type SearchParams = {
  category?:string;
  endCursor?:string;
}

type Props = {
  searchParams: SearchParams;
}
export const dynamic ='force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({searchParams:{category, endCursor}}: Props) => {
  const data = (await fetchAllProjects(category,endCursor)) as ProjectSearch;
  const projectsToDispaly = data?.projectSearch?.edges || [];

  {
    if(projectsToDispaly.length === 0) return (
      <section className="flexStart flex-col paddings">
        <Categories/>
        <p className="no-resul-text text-center">
          No projects found, go create Some first.
        </p>
      </section>
    );
  }

  const pagination = data?.projectSearch?.pageInfo;
  return (
    <div>
      <h1><Categories/></h1>
      <section className="projects-grid">
        {projectsToDispaly.map(({node} : {node:ProjectInterface}) =>(
          <ProjectCard 
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            avatarUrl ={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
            name={node?.createdBy?.name}
          />
        ))}
      </section>
      <LoadMore
        startCursor={pagination.startCursor}
        endCursor={pagination.endCursor}
        hasPreviousPage={pagination.hasPreviousPage}
        hasNextPage={pagination.hasNextPage}
      />
    </div>
  );
};
export default Home;
