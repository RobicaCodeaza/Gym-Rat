import EquipmentStatus from './EquipmentStatus'
import ExercisesStatus from './ExercisesStatus'
import HypeView from './HypeView'
import WorkoutsStatus from './WorkoutsStatus'

function GymOverallView() {
    return (
        <div className="mb-20 flex flex-col gap-8 tab-port:grid tab-port:h-full tab-port:grid-cols-[1fr_1fr] tab-port:grid-rows-[27.5rem_27.5rem] tab-port:gap-20">
            <HypeView></HypeView>
            <WorkoutsStatus></WorkoutsStatus>
            <ExercisesStatus></ExercisesStatus>
            <EquipmentStatus></EquipmentStatus>
        </div>
    )
}

export default GymOverallView
