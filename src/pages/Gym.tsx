import GymOverallView from '../features/gym/GymOverallView'
import TabsWithRoute from '../ui/TabsWithRoute'

const tabs = [
    {
        title: 'General',
        value: 'product',
        to: '/gym',
        content: <GymOverallView />,
    },
    {
        title: 'Workout',
        value: 'workout',
        to: '/gym/workout',
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Workout</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Exercises',
        value: 'exercises',
        to: '/gym/exercises',
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Exercises</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Equipment',
        value: 'equipment',
        to: '/gym/equipment',
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Equipment</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
]

function Gym() {
    return (
        <div className="h-full">
            <TabsWithRoute tabs={tabs} withRoute="yes"></TabsWithRoute>
        </div>
    )
}

export default Gym
