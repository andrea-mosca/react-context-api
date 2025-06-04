import { usePosts } from "../../context/PostsContext";
import { Link } from "react-router-dom";

export default function PostList() {
  const { posts } = usePosts();
  return (
    <div className="row row-cols-3">
      {posts.map((post) => (
        <div className="col" key={post.id}>
          <div className="card">
            <div className="card-header fw-bolder fs-4">{post.title}</div>

            <img src={`http://localhost:3000/` + post.image} alt={post.title} />
            <div className="card-footer">
              <Link to={`/posts/${post.id}`}>view more</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
