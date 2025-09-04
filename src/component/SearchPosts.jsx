import { usePosts } from "../postContext";

function SearchPosts() {
  //3) CONSUME THE CONTEXT VALUE IN THE CHILD COMPONENT
  const { searchQuery, setSearchQuery } = usePosts();

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
export default SearchPosts;
