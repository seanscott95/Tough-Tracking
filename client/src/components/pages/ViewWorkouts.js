import React from 'react';
import WorkoutCard from '../WorkoutCard';


export default function ViewWorkouts() {
    return (
        <>
            <h2>Your Workouts</h2>
            <p>Here's a detailed version of all your workouts in one place!</p>
            {/* Display workout card component depending on the 
                amount of workouts in db
                Is it needed? Does display all information of workouts
                not just a summarised version*/}
            {/* May leave whole page for further production, display
                workouts depending on the week, month, etc */}
            <div>
                {/* One WorkoutCard for every workout*/}
                <WorkoutCard />
            </div>
        </>
    );
}
