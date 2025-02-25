import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://news-feed-backend.onrender.com/trending-news") // Update with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time News Feed</h1>
        {news.length > 0 ? (
          <ul>
            {news.map((article, index) => (
              <li key={index}>{article.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading news...</p>
        )}
      </header>
    </div>
  );
}

export default App;
