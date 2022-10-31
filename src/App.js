import BookmarkList from "./Components/bookmark-list/bookmark-list";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "./App.css";

const App = () => {
  const [bookmark, setBookmark] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function Button({ children }) {
    return <button>{children}</button>;
  }

  useEffect(() => {
    fetch("http://localhost:4000/bookmark/11")
      .then((response) => response.json())
      .then((apiBookmarks) => {
        setBookmark(apiBookmarks);
        setShowBookmarks(true);
      });
  }, []);

  const searchBookmarksHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  };

  const filterBookmarks = bookmark.filter((bookmark) => {
    return bookmark.img.toLocaleLowerCase().includes(searchInput);
  });

  let renderBookmarks = "Loading Bookmarks";
  if (showBookmarks) {
    renderBookmarks = <BookmarkList bookmark={filterBookmarks} />;
  }

  return (
    <div className="max-w-6xl mx-auto bg-slate-200">
      <div justifyContent="space-between" alignItems="center">
      <a href="http://localhost:3000" target="_blank" className="flex justify-right text-2xl font-semibold">
          <Button> Similarity Scores </Button>
        </a>
        <h1 className="flex justify-center text-2xl font-semibold">Videos</h1>

      </div>
      <div className="flex justify-center">
        {
          <input
            className="m-2 p-2 text-gray-400 roudend-md"
            type="search"
            placeholder="search Videos"
            onChange={searchBookmarksHandler}
          />
        }
      </div>
      <Routes>
        <Route path="/" element={renderBookmarks} />
      </Routes>
    </div>
  );
};

export default App;
