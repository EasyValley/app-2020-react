import React, { useState } from 'react';
import MemoCom from './memo-com';

function ReactMemo() {
  const [name, setName] = useState('');
  return (
    <div>
      <MemoCom name={name} />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default ReactMemo;
