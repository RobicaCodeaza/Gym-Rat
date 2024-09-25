import linePattern from '../../../public/linePattern.jpg'

function ExercisesStatus() {
    return (
        <div className="relative overflow-hidden rounded-xl border border-cod-gray-600 shadow-cod-gray-100/5">
            <div className="relative flex h-full flex-1 flex-col gap-4 bg-gradient-to-br from-lima-900/95 to-lima-600/60 px-10 py-10 shadow-lg backdrop-blur-none tab-land:gap-6">
                <div>
                    <p className="text-md flex items-center gap-4 font-semibold uppercase text-dodger-blue-100">
                        <span>Total Exercised Created</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-discount-check tab-land:h-13 tab-land:w-13 h-12 w-12"
                            viewBox="0 0 24 24"
                            stroke="#e1dd11"
                            fill="#0b710a"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            <path d="M15 12h-6" />
                            <path d="M12 9v6" />
                        </svg>
                    </p>

                    <div className="ml-10 text-2xl font-bold uppercase text-yellow-500">
                        0
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-md flex items-center gap-4 font-semibold uppercase leading-none text-dodger-blue-100">
                        Total Exercised Executed
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-discount-check tab-land:h-13 tab-land:w-13 h-12 w-12"
                            viewBox="0 0 24 24"
                            stroke="#e1dd11"
                            fill="#0b710a"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                            <path d="M9 12l2 2l4 -4" />
                        </svg>
                    </p>
                    <div className="ml-10 text-2xl font-bold uppercase text-yellow-500">
                        0
                    </div>
                </div>
                <div className="text-md mt-auto w-fit rounded-full bg-cod-gray-950/40 px-8 py-2 tab-land:px-12">
                    <p className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-progress tab-land:w-13 tab-land:h-13 h-12 w-12"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            stroke="#d7f2ff"
                            fill="none"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
                            <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
                            <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
                            <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
                            <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
                        </svg>
                        Beginner - Advanced{' '}
                    </p>
                </div>

                <svg
                    className="absolute bottom-0 right-0 h-32 phone:h-40 phone:w-40"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="#e1dd11"
                    fill="none"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
                    <path d="M16 3m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
                    <path d="M4 14m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
                </svg>
            </div>
            <div className="absolute inset-0 -z-50 opacity-50">
                <img
                    src={linePattern}
                    className="absolute inset-0 -z-50 h-full w-full object-cover"
                ></img>
            </div>
        </div>
    )
}

export default ExercisesStatus
