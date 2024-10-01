import {
    HiArrowDownOnSquare,
    HiEye,
    HiArrowUpOnSquare,
    HiTrash,
} from 'react-icons/hi2'
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
            <div className="text-md after:animate-afterEffect relative font-bold uppercase tracking-wider text-cod-gray-100 after:absolute after:-bottom-1 after:left-1/2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-starship-200 after:content-['']">
                {workout.name}
            </div>

            <div className="flex flex-col gap-1">
                <span className="font-medium">{workout.name}</span>
                <span className="text-sm text-gray-500">
                    {workout.totalTime}
                </span>
            </div>

            <div className="flex flex-col gap-1">
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
                <span>Date of Worked out</span>
            </div>

            <Tag type={workout.type}>{workout.type}</Tag>
            {/* <div className="font-medium">{formatCurrency(totalPrice)}</div> */}
            <div className="font-medium">Currency</div>
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
