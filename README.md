# Restpollo

React components for declarative communication with a REST API inspired by [Apollo](https://www.apollographql.com/)

## Examples Site [Link](https://irideveloper.github.io/restpollo/)



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

## Where to find me

Need an experienced tech guy to consult you and help you navigate the world of web development? Drop me a line!
Need a developer or team of developers to build you dream app? Let's talk!
I'm always open for new opportunities and meeting new people so if you're thinking about getting in touch, go for it!

[Linkedin](https://www.linkedin.com/in/gvozderacbojan/)
[Medium](https://medium.com/@bojangbusiness)
[Dev.to](https://dev.to/irideveloper)
[Twitter](https://twitter.com/GvozderacBojan)