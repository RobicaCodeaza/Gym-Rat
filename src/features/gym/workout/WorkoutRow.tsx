import {
    HiArrowDownOnSquare,
    HiEye,
    HiArrowUpOnSquare,
    HiTrash,
} from 'react-icons/hi2'
import { CgGym } from 'react-icons/cg'
// import { format, isToday } from 'date-fns'
// import { formatCurrency } from '../../utils/helpers'
// import { formatDistanceFromNow } from '../../utils/helpers'

import Tag from '@/ui/Tag'
import Table from '@/ui/Table'
import Menus from '@/ui/Menus'
// import Spinner from '../../ui/Spinner'
import Modal from '@/ui/Modal'
import ConfirmDelete from '@/ui/ConfirmDelete'

export type Workout = {
    id: number
    lastTimeWorked: string
    totalTime: string
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
    name: string
}
type WorkoutRowProps = {
    workout: Workout
}

function WorkoutRow({ workout }: WorkoutRowProps) {
    return (
        <Table.Row>
            <div className="after:animate-afterEffect relative text-base font-bold uppercase tracking-wider text-cod-gray-100 after:absolute after:-bottom-1 after:left-1/2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-starship-200 after:content-['']">
                {workout.name}
            </div>

            <div className="flex flex-col gap-1">
                <span className="tracking-wider text-cod-gray-300">
                    {workout.lastTimeWorked}
                </span>
                <span className="text-sm text-dodger-blue-400">
                    {workout.totalTime} min
                </span>
            </div>

            <div className="flex justify-center">
                <div className="border-r border-cod-gray-800 px-4">
                    <span className="text-dodger-blue-400">
                        <strong> 8</strong> exercises:
                    </span>
                    <ul>
                        <li className="text-sm uppercase text-cod-gray-400">
                            - Exercise 1
                        </li>
                        <li className="text-sm uppercase text-cod-gray-400">
                            Exercise 1
                        </li>
                    </ul>
                </div>
                <div className="px-4">
                    <span className="text-dodger-blue-400">
                        <strong> 9</strong> sets:
                    </span>
                    <ul>
                        <li className="text-sm uppercase text-cod-gray-400">
                            Exercise 1
                        </li>
                        <li className="text-sm uppercase text-cod-gray-400">
                            Exercise 1
                        </li>
                    </ul>
                </div>

                {/* <span>
                    {isToday(new Date(startDate))
                        ? 'Today'
                        : formatDistanceFromNow(startDate)}{' '}
                    &rarr; {numNights} night stay
                </span>
                <span>
                    {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
                    {format(new Date(endDate), 'MMM dd yyyy')}
                </span> */}
            </div>

            <Tag type={workout.type}>
                <CgGym className="h-8 w-8 text-starship-200"></CgGym>
                <span> {workout.type}</span>
            </Tag>
            {/* <div className="font-medium">{formatCurrency(totalPrice)}</div> */}
            <div className="max-w-full justify-self-center rounded-full bg-starship-200 px-4 py-1 tracking-wider text-cod-gray-600">
                11/07/2024
            </div>
            <Modal>
                <Menus.Menu>
                    <Menus.Toggle id={workout.id}></Menus.Toggle>
                    <Menus.List id={workout.id}>
                        <Menus.Button
                            icon={<HiEye></HiEye>}
                            // onClick={() => navigate(`/bookings/${bookingId}`)}
                        >
                            See Details
                        </Menus.Button>
                        {/* {status === 'unconfirmed' && (
                            <Menus.Button
                                icon={
                                    <HiArrowDownOnSquare></HiArrowDownOnSquare>
                                }
                                // onClick={() =>
                                //     navigate(`/checkin/${bookingId}`)
                                // }
                            >
                                Check In
                            </Menus.Button>
                        )}
                        {status === 'checked-in' && (
                            <Menus.Button
                                icon={<HiArrowUpOnSquare></HiArrowUpOnSquare>}
                                // onClick={handleCheckOut}
                                // disabled={isLoadingCheckOut}
                            >
                                Check out
                            </Menus.Button>
                        )} */}

                        <Modal.Open opensWindow="delete">
                            <Menus.Button
                                icon={<HiTrash></HiTrash>}
                                // disabled={isDeleting}
                            >
                                Delete
                            </Menus.Button>
                        </Modal.Open>
                    </Menus.List>
                </Menus.Menu>
                <Modal.Window
                    nameOfWindow="delete"
                    titleOfWindow="Confirm Delete"
                >
                    <ConfirmDelete
                        resourceName="bookings"
                        // disabled={isDeleting}
                        // onConfirm={() => {
                        //     deleteBooking(bookingId)
                        //     // moveBack();
                        // }}
                    ></ConfirmDelete>
                </Modal.Window>
            </Modal>
        </Table.Row>
    )
}

export default WorkoutRow
