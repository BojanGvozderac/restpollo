import React from 'react';
import Fetch from '../Fetch/Fetch';

const Put = (props) => <Fetch {...props} />

Put.defaultProps = {
  fetchOptions: {
    method: 'PUT',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  }
};

export default Put;
