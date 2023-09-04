import Animation from '@/components/home/animation'
import Link from "next/link";

export default function hero() {
    return(
        <>
           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    제목 : 니체의 말
                <br className="hidden lg:inline-block"/>
                    니체의 말 중 한 구절
                </h1>
                <p className="mb-8 leading-relaxed">
                좀처럼 간단히 손에 넣을 수 없는 것 수록 간절히 원하는 법이다.<br/>
                그러나 일단 자신의 것이 되고 얼마만의 시간이 흐르면 쓸데없는 것인 양 느껴지기 시작한다.<br/>
                그것이 사물이든 인간이든 마찬가지다.<br/>
                이미 손에 넣어 익숙해졌기에 싫증이 난다.<br/>
                그러나 그것은 자기 자신에게 싫증나 있는 것이다.<br/>
                손에 넣은 것이 자기 안에서 변하지 않기에 질린다.<br/>
                즉, 대상에 대한 자신의 마음이 변하지 않기 때문에 흥미를 잃는다.<br/>
                결국 계속해서 성장하지 않는 사람일수록 쉽게 싫증을 느낀다.<br/>
                오히려 인간으로서 끊임없이 성장하는 사람은 계속적으로 변화하기에 똑같은 사물을 가지고 있어도 조금도 싫증을 느끼지 않는다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
        
    )
}