import React from 'react';
import ThemeContext from '../ThemeContext';

function Foobar() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(values) => (
          <>
            <div>Foobar</div>
            <div>{values}</div>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Foobar;
