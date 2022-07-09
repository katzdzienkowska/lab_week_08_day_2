# Hacker News Client

## Brief

Build a filterable front-end for [Hacker News](https://news.ycombinator.com/). Using the following endpoints, allow the user to view a list of top stories, and filter them by title.

- https://hacker-news.firebaseio.com/v0/topstories.json - Latest Stories
- https://hacker-news.firebaseio.com/v0/item/{storyId}.json - Story Detail

Making a request to `/topstories.json` will give you an array of story ids. You can then make an additional request to `/item/{storyId}.json` to get information about the article, including its title, author, rating, and a link to the article.

## MVP

When your app loads in the browser, have it make a request to `/topstories` to get an array of story ids.

When you have the array of story ids loaded into the app, make an additional request for each story (using its id). Use `Promise.all()` to wait for all of the requests to complete before displaying them in your UI.

Render a list of components that display some of the information about each story to the user.

## Extensions

Add a filter component that allows the user to filter stories by title. The user should be able to enter a string into a text input and only stories that contain the user's search term in their title should be displayed.

Style the app.

## Resources

- [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
