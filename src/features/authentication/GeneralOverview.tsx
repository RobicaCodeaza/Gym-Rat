import ButtonIcon from '../../ui/ButtonIcon'
import Logo from '../../ui/Logo'

function GeneralOverview() {
    return (
        <div className="display z-10 hidden w-1/2 bg-cod-gray-darker/70 backdrop-blur-sm phone:flex phone:items-center phone:justify-center">
            <div className="flex flex-col gap-10 rounded-lg border border-transparent bg-cod-gray-900/5 p-8 phone:max-w-[40rem] tab-port:p-10 tab-land:max-w-[50rem] tab-land:gap-12 tab-land:p-12 particular-small-laptop:max-w-[60rem] particular-small-laptop:p-14">
                <Logo height="biggest"></Logo>

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
            </div>
        </div>
    )
}
export default GeneralOverview
