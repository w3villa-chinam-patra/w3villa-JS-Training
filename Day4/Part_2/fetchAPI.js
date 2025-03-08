// fetch is used to send request to endpoints help to make several types of requests like GET, POST, PUT, DELETE requests.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error.message));

// There is another way to send request using async and await

(async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();
