import { usePosts } from "../context/postContext";

function Results() {
  //3) CONSUME THE CONTEXT VALUE IN THE CHILD COMPONENT
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
