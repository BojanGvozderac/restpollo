import React from "react";
import { render } from "react-dom";
import "./styles.css";

import {
  Fetch,
  Get,
  Post,
  Put,
  Delete
} from '../lib/index';

const getUrl = `https://jsonplaceholder.typicode.com/posts?_limit=3`;
const postUrl = `https://jsonplaceholder.typicode.com/posts`;
const deleteUrl = `https://jsonplaceholder.typicode.com/posts/1`;
const putUrl = `https://jsonplaceholder.typicode.com/posts/1`;

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  }
};

const POST_OPTIONS = {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  }
};

/* 
* Response template: 
* {id, body, title, userId}
*/

const Error = () => (<p className="error">Something went wrong :-(</p>);

const Success = () => (<p className="success">Fetch event succeeded!</p>);

const Loader = () => (
  <div className="loader">
    <div className="loader-dot loader-first"></div>
    <div className="loader-dot loader-second"></div>
    <div className="loader-dot loader-third"></div>
  </div>
);

const Demo = () => {
  return (
    <div className="demo">
      <h1 className="demo__title">Restpollo Demos</h1>

      {/* Fetch Component example */}

      <p className="text-align-center">Example of <b>Fetch</b> component with options that fetches data when it's mounted</p>

      <Fetch url={getUrl} fetchOptions={FETCH_OPTIONS} fetchOnMount>
        {
          ({ loading, error, data }) => {
            if (error) {
              return <Error />
            }

            if (loading) {
              return <Loader />
            }

            if (data) {
              return (
                <div className="items">
                  {
                    data.map(
                      item => (
                        <div className="item" key={item.id}>
                          <h2 className="item__title">{item.title}</h2>
                          <p className="item__body">{item.body}</p>
                        </div>
                      )
                    )
                  }
                </div>
              );
            }

            return <p className="text-align-center">Waiting for fetch event</p>
          }
        }
      </Fetch>

      <div className="divider"></div>

      {/* Get Component example */}

      <p className="text-align-center">Example of <b>Get</b> component that fetches data on button click</p>

      <Get url={getUrl}>
        {
          ({ error, loading, data, fetchData }) => {
            if (error) {
              return <Error />
            }

            if (loading) {
              return <Loader />
            }

            if (data) {
              return (
                <div className="items">
                  {
                    data.map(
                      item => (
                        <div className="item" key={item.id}>
                          <h2 className="item__title">{item.title}</h2>
                          <p className="item__body">{item.body}</p>
                        </div>
                      )
                    )
                  }
                </div>
              );
            }

            return (
              <div className="text-align-center">
                <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
              </div>
            );
          }
        }
      </Get>

      <div className="divider"></div>

      {/* Post Component example */}

      <p className="text-align-center">Example of <b>Post</b> component that posts <i>title = 'Foo'</i> and <i>body = 'bar'</i> and renders response</p>

      <Post
        url={postUrl}
        fetchOptions={POST_OPTIONS}
      >
        {
          ({ loading, error, data, fetchData }) => {

            if (error) {
              return <Error />
            }

            if (loading) {
              return <Loader />
            }

            if (data) {
              return (
                <div className="items">

                  <div className="item" key={data.id}>
                    <h2 className="item__title">{data.title}</h2>
                    <p className="item__body">{data.body}</p>
                  </div>
                </div>
              );
            }

            return (
              <div className="text-align-center">
                <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
              </div>
            );

          }
        }
      </Post>

      <div className="divider"></div>

      {/* Put Component example */}

      <p className="text-align-center">Example of <b>Put</b> component that triggers update event on button click</p>

      <Put url={putUrl}>
        {
          ({ loading, error, data, fetchData }) => {
            if (error) {
              return <Error />
            }

            if (loading) {
              return <Loader />
            }

            if (data) {
              return <Success />
            }

            return (
              <div className="text-align-center">
                <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
              </div>
            );

          }
        }
      </Put>

      <div className="divider"></div>

      {/* Delete Component example */}

      <p className="text-align-center">Example of <b>Delete</b> component that triggers delete event on button click</p>      

      <Delete url={deleteUrl}>
          {
            ({ error, loading, data, fetchData }) => {
              if (error) {
                return <Error />
              }

              if (loading) {
                return <Loader />
              }

              if (data) {
                return <Success />
              }

              return (
                <div className="text-align-center">
                  <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
                </div>
              );

            }
          }
        </Delete>
      
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
