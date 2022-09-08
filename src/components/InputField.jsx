import React from 'react';

const InputField = (text, updateText, handleSubmit) => {
  return (
    <label>
        <input value={text} onChange={(e) => updateText(e.target.value)} />
        <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
}

export default InputField;