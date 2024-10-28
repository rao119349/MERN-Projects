import React, { useState } from 'react';
import GoalsList from './components/GoalsList';
import NewGoal from './components/NewGoal';

import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topics' },
    { id: 'cg3', text: 'Help other Students in the Course Q&A' },
  ]);

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalsList goals={courseGoals} />
    </div>
  );
};

export default App;
