const { useState, useEffect, useRef } = React;

const clientID = ""; // replace if needed
const utm = "?utm_source=scrimba_degree&utm_medium=referral";

const loadData = (options) => {
  fetch(options.url)
    .then(res => res.json())
    .then(data => {
      if (options.onSuccess) options.onSuccess(data);
    });
};

const App = (props) => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const queryInput = useRef(null);

  const numberOfPhotos = 20;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;

    loadData({
      url: photosUrl,
      onSuccess: (res) => setPhotos(res),
    });
  }, [query]);

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };

  return (
    <div className="box">
      <h2>{props.emoji}</h2>
      <h1>{props.name}'s website</h1>

      <form onSubmit={searchPhotos}>
        <input ref={queryInput} placeholder="Search photos..." />
        <button>Search</button>
      </form>

      <div className="grid">
        {photos.map(photo => (
          <div key={photo.id} className="item">
            <img className="img" src={photo.urls.regular} />
            <div className="caption">
              Photo by{" "}
              <a href={photo.user.links.html + utm}>
                {photo.user.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App name="Alok's" emoji="👋" />);