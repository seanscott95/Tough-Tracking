import React from 'react';

import WorkoutCardSmall from '../WorkoutCardSmall';
import { DashboardStyle } from '../styles/Dashboard.styled';

export default function Dashboard() {
    return (
        <DashboardStyle>
            <WorkoutCardSmall />
        </DashboardStyle>
    );
}
