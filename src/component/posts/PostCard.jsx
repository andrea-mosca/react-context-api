import { usePosts } from "../../context/PostsContext";
import { Link } from "react-router-dom";

export default function PostCard() {
  const { posts } = usePosts();
  return (
    <>
      {posts.map((post) => (
        <div className="col g-3" key={post.id}>
          <div className="card">
            <div className="card-header fw-bolder fs-4">{post.title}</div>

            <img src={`http://localhost:3000/` + post.image} alt={post.title} />
            <div className="card-footer">
              <Link to={`/posts/${post.id}`}>view more</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
