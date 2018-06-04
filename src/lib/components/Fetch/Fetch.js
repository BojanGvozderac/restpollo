import React from 'react';

class Fetch extends React.Component {

  state = {
    loading: false,
    data: null,
    error: null,
  };

  fetchData = async () => {

    const { url, fetchOptions } = this.props;

    this.setState({ loading: true });

    try {
      const data = await (await fetch(url, fetchOptions)).json();

      this.setState({ data });

    } catch (error) {
      this.setState({ error });
    }

    this.setState({ loading: false });
  }

  componentDidMount() {

    const { fetchOnMount, url, fetchOptions } = this.props;

    if (fetchOnMount) {
      this.fetchData(url, fetchOptions);
    }
  }

  render() {

    const {
      state: { data, loading, error },
      props: { children },
      fetchData
    } = this;

    return children(
      {
        data,
        loading,
        error,
        fetchData
      }
    );
  }
}

export default Fetch;
