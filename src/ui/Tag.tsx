import { PropsWithChildren } from 'react'

type TagTypes = {
    type:
        | 'push'
        | 'pull'
        | 'legs'
        | 'biceps'
        | 'triceps'
        | 'chest'
        | 'back'
        | 'shoulders'
        | 'abs'
        | 'chest&back'
        | 'chest&shoulders'
        | 'chest&triceps'
        | 'chest&biceps'
        | 'back&biceps'
        | 'back&triceps'
        | 'shoulders&arms'
}

const Tag = ({ type, children }: PropsWithChildren<TagTypes>) => {
    const colorClasses = {
        push: 'text-cod-gray-100 bg-dodger-blue-600',
        pull: 'text-cod-gray-100 bg-lima-500',
        legs: 'text-cod-gray-100 bg-starship-400',
        biceps: 'text-cod-gray-100 bg-dodger-blue-400',
        triceps: 'text-cod-gray-100 bg-red-500',
        chest: 'text-cod-gray-100 bg-red-700',
        back: 'text-cod-gray-100 bg-indigo-800',
        shoulders: 'text-cod-gray-100 bg-starship-300 ',
        abs: 'text-cod-gray-100 bg-teal-600',
        'chest&back':
            'text-cod-gray-100 bg-gradient-to-r from-red-700 to-indigo-800',
        'chest&shoulders':
            'text-cod-gray-100 bg-gradient-to-r from-red-700 to-starship-300',
        'chest&triceps':
            'text-cod-gray-100 bg-gradient-to-r from-red-700 to-red-500',
        'chest&biceps':
            'text-cod-gray-100 bg-gradient-to-r from-red-700 to-starship-300',
        'back&biceps':
            'text-cod-gray-100 bg-gradient-to-r from-indigo-800 to-dodger-blue-400',
        'back&triceps':
            'text-cod-gray-100 bg-gradient-to-r from-indigo-800 to-red-500',
        'shoulders&arms':
            'text-cod-gray-100 bg-gradient-to-r from-starship-300 to-teal-600',
    }

    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${colorClasses[type]}`}
        >
            {children}
        </span>
    )
}

export default Tag
