import { useTheme } from 'next-themes'

export default function DarkModeToggleButton(){

    // theme : 현재 값 자겨오기
    // setTheme : 현재 값 변경
    const { theme, setTheme } = useTheme()

    return(
        <>
            <button className="
                inline-flex items-center 
                bg-gray-100 border-0 py-1 px-3 
                focus:outline-none 
                hover:bg-gray-200
                hover : bg-gray-200
                hover : text-orange-500
            "
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
            {/* 라이트 모드 */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>


            {/* 다크 모드 */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-0"
                >
                <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
            </svg>

            </button>
        </>
    )
}