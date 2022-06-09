import React from 'react';

import ExerciseSingle from './ExerciseSingle';
import { FlexColumn } from '../components/styles/Flex.styled';

export default function WorkoutSingle({
  exercises,
  workoutForm,
  workoutName,
  handleExerciseChange,
  handleNameChange }) {

  return (
    <div>
      <FlexColumn>
        <h3>Edit your workout:</h3>
        <div>
          <p>Once you have edited all your exercises click save workout to finish.</p>
          <div>
            <p>Workout Name:</p>
            <input
              type="text"
              name="workoutName"
              placeholder='Sunday, Gym, Workout...'
              onChange={handleNameChange}
              value={workoutName}
              required />
          </div>
        </div>
        
        <ExerciseSingle
          exercises={exercises}
          workoutForm={workoutForm}
          handleExerciseChange={handleExerciseChange}>
        </ExerciseSingle>
      </FlexColumn>
    </div>
  )
}
