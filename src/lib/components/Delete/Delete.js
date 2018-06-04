import React from 'react';
import Fetch from '../Fetch/Fetch';

const Delete = (props) => <Fetch {...props} />;

Delete.defaultProps = {
  fetchOptions: {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  }
};

export default Delete;
