import Image from "next/image"

export default function ProjectsItem({data}){

    const title = data.properties.name.title[0].plain_text
    const gitHub = data.properties.GitHub.url
    const descriptopn = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.external.url
    const tag = data.properties.Tag.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end
    const calculatedPeriod = (start, end) => {
        const startDateStrArr = start.split('-');
        const endDateStrArr = end.split('-');

        var startDate = new Date(startDateStrArr[0], startDateStrArr[1] , startDateStrArr[2])
        var endDate = new Date(endDateStrArr[0], endDateStrArr[1] , endDateStrArr[2])

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);
        return result;

    }
    //console.log(data.properties)
    return (
        <div className="project-card">

                <Image src={imgSrc}
                className="rounded-t-xl"
                alt="cover image"
                width="100"
                height="60"
                layout="responsive"
                objectFit="none"
                quality={100}
                 /> 

                <div className="p-4 flex-flex-col">
                    <h1 className="text-2xl fount-bold">{title}</h1>
                    <h3 className="mt-4 text-xl">{descriptopn}</h3>
                    <a href={gitHub}>깃허브 바로가기</a>
                    <p className="my-4">
                        작업 기간 : {start} ~ {end} 소요기간  {calculatedPeriod(start, end)}
                    </p>

                    <div className="flex items-start mt-2">
                        {tag.map((aTag) => 
                            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 drak:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                        )}
                    </div>
                </div>
        </div>
    )
}