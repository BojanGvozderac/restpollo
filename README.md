# Restpollo

React components for declarative communication with a REST API inspired by [Apollo](https://www.apollographql.com/)

## API

Prop        | Description
--- | --- 
url         | This is the url for the fetch action
fetchOptions | These are the options for the fetch action
fetchOnMount | If this prop is set the fetch action will be trigger when the component is mounted

## Usage Example

```javascript
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
```

## Wanna find out how I got the idea for Restpollo?

Medium post coming soon!