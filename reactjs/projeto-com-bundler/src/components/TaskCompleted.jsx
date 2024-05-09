const TaskCompleted = (props) => {
  return (
    <span>
      {props.completed ? '✅' : '❌'}
    </span>
  );
};

export default TaskCompleted;
