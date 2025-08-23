import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './features/noteSlice';

function NoteComponent() {
  const [valueAdd, setValueAdd] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.todos.value);

  const handleAddnote = () => {
    if (valueAdd.trim()) {
      dispatch(add(valueAdd));
      setValueAdd('');
    }
  };

  return (
    <div>
      <h2>NotesAPP:</h2>
      <div>
        <input
          type="text"
          value={valueAdd}
          onChange={(e) => setValueAdd(e.target.value)}
        />
        <button onClick={handleAddnote}>Add Note</button>
      </div>

      <ul>
        {notes.map((item, i) => (
          <li key={i}>
            {item.title} - {item.status ? 'Completed' : 'In Completed'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteComponent;
