import React from 'react'

import ExerciseSingle from './ExerciseSingle';

export default function WorkoutSingle(
  exercises, 
  workoutForm,
  workoutName,
  handleExerciseChange, 
  handleNameChange) {

  const exercises2 = [exercises];


  return (
    <div>
        <h3>Edit your workout:</h3>
          

          <div>
            <p>Once you have edited all your exercises click save workout to finish.</p>
            <div>
              <label htmlFor="workoutName">Workout Name:</label>
              <input
                type="text"
                name="workoutName"
                placeholder='Sunday, Gym, Workout...'
                onChange={handleNameChange}
                value={workoutName}
                required />
            </div>
          </div>


      {exercises2.map((exercise) => (
        <ExerciseSingle 
          exercise={exercise}
          workoutForm={workoutForm}
          handleExerciseChange={handleExerciseChange}>
        </ExerciseSingle>
      ))}
    </div>
  )
}
