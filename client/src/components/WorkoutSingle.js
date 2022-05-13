import React from 'react'

import ExerciseSingle from './ExerciseSingle';

export default function WorkoutSingle(
  exercises,
  workoutForm,
  workoutName,
  handleExerciseChange,
  handleNameChange) {

  console.log(exercises);


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
            onBlur={handleNameChange}
            value={workoutName}
            required />
        </div>
      </div>

      <ExerciseSingle
        exercises={exercises}
        workoutForm={workoutForm}
        handleExerciseChange={handleExerciseChange}>
      </ExerciseSingle>
    </div>
  )
}
