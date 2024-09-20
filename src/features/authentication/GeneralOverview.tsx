import ButtonIcon from '../../ui/ButtonIcon'
import Logo from '../../ui/Logo'

function GeneralOverview() {
    return (
        <div className="relative z-10 hidden w-1/2 bg-cod-gray-darker/70 backdrop-blur-sm phone:flex phone:items-center phone:justify-center">
            <div className="flex flex-col gap-10 rounded-lg border border-b border-t border-transparent border-b-cod-gray-600 border-t-cod-gray-400 bg-cod-gray-900/5 p-8 phone:max-w-[40rem] tab-port:p-10 tab-land:max-w-[52.5rem] tab-land:gap-12 tab-land:p-12 particular-small-laptop:max-w-[65rem] particular-small-laptop:p-14">
                <Logo height="bigger"></Logo>

                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold text-cod-gray-200">
                        Start your fitness journey with a mindfully guided
                        workout.
                    </h1>
                    <p className="text-md leading-tight text-cod-gray-400">
                        The importance of having an organised workout and a
                        strategy to reach your goals in one app.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <ButtonIcon
                        otherClasses="w-16 h-16 stroke-lime-400 flex flex-col items-center justify-center bg-cod-gray-900 rounded-full p-2"
                        positionAlign="self-start"
                    >
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-trending-up"
                                // width="44"
                                // height="44"
                                viewBox="0 0 24 24"
                                // stroke="#2c3e50"
                                fill="none"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M3 17l6 -6l4 4l8 -8" />
                                <path d="M14 7l7 0l0 7" />
                            </svg>
                        </div>
                    </ButtonIcon>
                    <p className="text-md font-bold text-cod-gray-200">
                        Progress tracker
                    </p>
                    <p className="text-md leading-tight text-cod-gray-400">
                        Tracking your workouts progress in order to achieve your
                        all desired{' '}
                        <strong className="text-danger-400">PR&apos;S.</strong>
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <ButtonIcon
                        otherClasses="w-16 h-16 stroke-lime-400 flex flex-col items-center justify-center bg-cod-gray-900 rounded-full p-2"
                        positionAlign="self-start"
                    >
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-calendar-user"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5" />
                                <path d="M16 3v4" />
                                <path d="M8 3v4" />
                                <path d="M4 11h16" />
                                <path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
                            </svg>
                        </div>
                    </ButtonIcon>
                    <p className="text-md font-bold text-cod-gray-200">
                        Tailored Calendar
                    </p>
                    <p className="text-md leading-tight text-cod-gray-400">
                        Don&apos;t miss your gym days. Sometimes you need some
                        rest. Have everything{' '}
                        <strong className="text-danger-400">planned</strong> or{' '}
                        <strong className="text-danger-400">adapt</strong>{' '}
                        accordingly.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <ButtonIcon
                        otherClasses="w-16 h-16 stroke-lime-400 flex flex-col items-center justify-center bg-cod-gray-900 rounded-full p-2"
                        positionAlign="self-start"
                    >
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-table-options"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
                                <path d="M3 10h18" />
                                <path d="M10 3v18" />
                                <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M19.001 15.5v1.5" />
                                <path d="M19.001 21v1.5" />
                                <path d="M22.032 17.25l-1.299 .75" />
                                <path d="M17.27 20l-1.3 .75" />
                                <path d="M15.97 17.25l1.3 .75" />
                                <path d="M20.733 20l1.3 .75" />
                            </svg>
                        </div>
                    </ButtonIcon>
                    <p className="text-md font-bold text-cod-gray-200">
                        Customizable Workouts & Shareable
                    </p>
                    <p className="text-md leading-tight text-cod-gray-400">
                        Challenge yourself and your{' '}
                        <strong className="text-danger-400">friends</strong>{' '}
                        with{' '}
                        <strong className="text-danger-400">customized</strong>{' '}
                        workouts sessions
                    </p>
                </div>
            </div>
        </div>
    )
}
export default GeneralOverview
