import React, { useState } from 'react';

function MemoCom(props: { name: string }) {
  const { name } = props;
  const [num, setNum] = useState(0);
  return (
    <div>
      <div
        onClick={() => {
          setNum(num + 1);
        }}
      >
        点击
        <div>
          name:
          {name}
        </div>
      </div>
      <div>{num}</div>
    </div>
  );
}
export default React.memo(MemoCom);
