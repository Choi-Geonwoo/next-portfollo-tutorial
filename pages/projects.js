import Layout from "@/components/layout";
import Head from 'next/head'
import  {TOKEN,DATABASE_ID} from "../config"
import ProjectsItem from "../components/projects/projects-item"


export default function Projects({projects}){
    //console.log(projects);
    return (
        <>
            <Layout >
                <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 mb-6" >
                        <Head>
                            <title>테스트 작성 중</title>
                            <meta name="description" content="테스트 코드 작성 함" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>

                            <h1 className="text-4xl font-bold sm:text-6xl">
                                총 프로젝트 :
                                <span className="pl-4 text-blue-500"> {projects.results.length}</span>
                            </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
                            {projects.results.map((aProject) => (
                            <ProjectsItem key={aProject.id} data={aProject}/>
                            ))}
                        </div>
                    </div>
            </Layout>
        </>
    );
}

export async function getStaticProps(){

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          'Authorization' : `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts : [{
                "property" : "name",
                "direction" : "ascending"
            }],
            page_size: 100
        })
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
    const projects = await res.json()
    return { props: {projects}, }
}

