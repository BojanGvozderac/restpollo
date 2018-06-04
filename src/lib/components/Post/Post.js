import React from 'react';
import Fetch from '../Fetch/Fetch';

const Post = (props) => <Fetch {...props} />

Post.defaultProps = {
  fetchOptions: {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  }
};

export default Post;