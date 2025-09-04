import { usePosts } from "../postContext";
import Results from "./Results ";

import SearchPosts from "./SearchPosts";

function Header() {
  //3) CONSUME THE CONTEXT VALUE IN THE CHILD COMPONENT
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
