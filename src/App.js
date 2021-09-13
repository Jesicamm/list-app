import "./App.css";
import Card from "./components/Card";
import React, { useState, useEffect } from "react";
import fetchPosts from "./service";

function App() {
  const [posts, setPosts] = useState([]);

  const removeCard = postId => {
    const removePost = posts.filter(({ id }) => id !== postId);
    setPosts(removePost);
  };

  useEffect(() => {
    const asyncPosts = async () => {
      const postsFromApi = await fetchPosts();
      setPosts(postsFromApi);
    };
    asyncPosts();
  }, []);

  return (
    <div className="App">
      {posts &&
        posts.map(user => (
          <Card
            key={user.id}
            id={user.id}
            title={user.title}
            body={user.body}
            removeCard={removeCard}
          />
        ))}
    </div>
  );
}

export default App;
