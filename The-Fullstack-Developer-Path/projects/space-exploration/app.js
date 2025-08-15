const apiKey = 'hQlRjshNavmqKn4tMcvvdjRnr9iudoVCAQBspV0y';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.title);
        console.log(data.explanation);
        console.log(data.url); // image or video URL
    })
    .catch(err => console.error('Error fetching data:', err));
