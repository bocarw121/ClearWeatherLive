import React from "react";
import "../Journal.css";

const TextBox = ({ newTask, onChange, onSubmit }) => {
  return (
    <div className='text-box'>
      <h2 className='text-box-title'>Whats on your mind Today?</h2>
      <form onSubmit={onSubmit}>
        <input
          maxLength='50'
          className='journal-text'
          type='text'
          value={newTask}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default TextBox;
