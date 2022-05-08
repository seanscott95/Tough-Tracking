import React from 'react'
import CardioCard from './CardioCard'
import StrengthCard from './StrengthCard'

export default function WorkoutCard() {
  return (
    <>
        {/* Display the workouts name and date
            If workout has one strength and one cardio exercise,
            display exercise and next to display exercise name for each*/}
        <div>
            <h2>WorkoutName - Date</h2>
            <div>
                <div>
                    <p>Exercise</p>
                    <p>ExerciseName</p>
                </div>
                <div>
                    <p>Exercise</p>
                    <p>ExerciseName</p>
                </div>
            </div>
            <button>Edit</button>
        </div>

        {/* Display exercise activity depending on the exercise type
            If workout has 1 strength and 1 cardio workout, display one
            strengthCard and one CardioCard  etc*/}
        <div>
            <StrengthCard />
            <CardioCard />
        </div>
    </>
  )
}
