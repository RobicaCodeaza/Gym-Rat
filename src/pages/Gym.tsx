import { Outlet, useLocation } from 'react-router-dom'
import TabsWithRoute from '../ui/TabsWithRoute'
import { useEffect, useState } from 'react'

const tabs = [
    {
        title: 'General',
        value: '/gym',
        to: '/gym',
        dummyContent: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>General Overview</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Workout',
        value: '/gym/workout',
        to: '/gym/workout',
        dummyContent: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Workout</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Exercises',
        value: '/gym/exercises',
        to: '/gym/exercises',
        dummyContent: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Exercises</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Equipment',
        value: '/gym/equipment',
        to: '/gym/equipment',
        dummyContent: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Equipment</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
]

function Gym() {
    const location = useLocation()

    return (
        <div className="h-full phone:px-0">
            <TabsWithRoute
                tabs={tabs}
                withRoute="yes"
                path={location.pathname}
            ></TabsWithRoute>
        </div>
    )
}

export default Gym
