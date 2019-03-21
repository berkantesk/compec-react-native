export const fetchPosts = () => (
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  }).then((serialize) => (serialize.json()))
)