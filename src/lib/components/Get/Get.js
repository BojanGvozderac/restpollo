import React from 'react';
import Fetch from '../Fetch/Fetch';

const Get = (props) => <Fetch {...props} />

Get.defaultProps = {
  fetchOptions: {
    method: 'GET',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  }
};

export default Get;
