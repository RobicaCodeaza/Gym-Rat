import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Authentication from './pages/Authentication'
import PageNotFound from './pages/PageNotFound'
import ProtectedRoute from './ui/ProtectedRoute'
import AppLayout from './ui/AppLayout'
import Tracking from './pages/Tracking'
import Workout from './pages/Workout'
import NewWorkout from './pages/NewWorkout'
import StartWorkout from './pages/StartWorkout'
import Calendar from './pages/Calendar'
import Gym from './pages/Gym'
import Equipment from './pages/Equipment'
import Exercises from './pages/Exercises'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout></AppLayout>
                            </ProtectedRoute>
                        }
                    >
                        <Route
                            index
                            element={
                                <Navigate to="dashboard" replace></Navigate>
                            }
                        ></Route>
                        <Route
                            path="tracking"
                            element={<Tracking></Tracking>}
                        ></Route>
                        <Route path="gym" element={<Gym></Gym>}>
                            <Route path="workout" element={<Workout></Workout>}>
                                <Route
                                    path="new"
                                    element={<NewWorkout></NewWorkout>}
                                ></Route>
                                <Route
                                    path="start"
                                    element={<StartWorkout></StartWorkout>}
                                ></Route>
                            </Route>
                            <Route
                                path="equipment"
                                element={<Equipment></Equipment>}
                            ></Route>
                            <Route
                                path="exercises"
                                element={<Exercises></Exercises>}
                            ></Route>
                        </Route>
                        <Route
                            path="calendar"
                            element={<Calendar></Calendar>}
                        ></Route>
                    </Route>

                    <Route
                        path="auth"
                        element={<Authentication></Authentication>}
                    ></Route>
                    <Route
                        path="*"
                        element={<PageNotFound></PageNotFound>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
