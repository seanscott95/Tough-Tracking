import React from 'react';
import WorkoutForm from '../WorkoutForm';
import ExerciseNameCard from '../ExerciseNameCard';

export default function CreateWorkout() {
    return (
        <div>
            <h2>Lets Begin!</h2>
            <ExerciseNameCard />
            <WorkoutForm />
        </div>
    );
}
