import React from "react";
import { useDispatch } from "react-redux";
import {
  completedTask,
  deleteTask,
  toggleCompletedTask,
} from "../journalSlice";
import Confetti from "react-dom-confetti";
import "../Journal.css";

const JournalTask = ({
  children,
  id,
  isComplete,
  setTaskDeleted,
  taskDeleted,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className='action-btn-wrapper '>
        <button
          className='remove'
          aria-label='remove'
          key='remove'
          onClick={() => {
            dispatch(deleteTask(id));
            setTaskDeleted(!taskDeleted);
          }}
        >
          Remove
        </button>
        <button
          aria-label='complete'
          className='complete'
          key='complete'
          onClick={() => {
            dispatch(toggleCompletedTask(id));
            dispatch(completedTask(id));
          }}
        >
          {isComplete ? "Redo" : "Done"}
          <Confetti
            active={isComplete}
            config={{ spread: 90, width: "15px", elementCount: 100 }}
          />
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default JournalTask;
