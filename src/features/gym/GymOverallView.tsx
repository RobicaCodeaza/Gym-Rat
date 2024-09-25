import EquipmentStatus from './EquipmentStatus'
import ExercisesStatus from './ExercisesStatus'
import WorkoutsStatus from './WorkoutsStatus'

function GymOverallView() {
    return (
        <div className="flex h-full flex-col gap-8 overflow-hidden tab-port:grid tab-port:grid-cols-[1fr_1fr] tab-port:gap-20">
            <WorkoutsStatus></WorkoutsStatus>
            <ExercisesStatus></ExercisesStatus>
            <EquipmentStatus></EquipmentStatus>
        </div>
    )
}

export default GymOverallView
