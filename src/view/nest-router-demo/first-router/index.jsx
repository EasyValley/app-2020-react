import React from 'react';
import { withRouter } from 'react-router-dom';

function FirstRouter(props) {
  const { match } = props;
  const { params } = match;
  return (
    <div>
      <div>
        id:
        {params.id}
      </div>
      <div>this is FirstRouter</div>
    </div>
  );
}
export default withRouter(FirstRouter);
