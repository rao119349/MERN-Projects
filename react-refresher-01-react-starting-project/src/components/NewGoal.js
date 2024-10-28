import React from 'react';

const NewGoal = props => {
  let enteredText = '';
  const addGoalHandler = event => {
    event.preventDefault();
    const newGoal = { id: Math.random().toString(), text: enteredText };

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = event => {
    enteredText = event.target.value;
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={textChangeHandler} />
      <button type="Submit">Add Goal</button>
    </form>
  );
};
export default NewGoal;
