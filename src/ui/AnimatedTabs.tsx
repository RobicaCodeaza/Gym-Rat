import { Tabs } from '../components/aceternity/tabs'

export function TabsDemo() {
    const tabs = [
        {
            title: 'General',
            value: 'product',
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-700 to-lima-900 p-10 text-xl font-bold text-white md:text-4xl">
                    <p>General</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Workout',
            value: 'services',
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                    <p>Workout</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Exercises',
            value: 'playground',
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                    <p>Exercises</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Equipment',
            value: 'content',
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                    <p>Equipment</p>
                    <DummyContent />
                </div>
            ),
        },
    ]

    return (
        <div className="relative mx-auto flex w-full flex-1 flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
            <Tabs tabs={tabs} />
        </div>
    )
}

const DummyContent = () => {
    return (
        <img
            src="/linear.webp"
            alt="dummy img"
            width="1500"
            height="1500"
            className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
        />
    )
}
