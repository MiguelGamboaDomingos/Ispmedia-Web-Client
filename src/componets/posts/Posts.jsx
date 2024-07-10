import Post from "./post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () =>
      makeRequest.get("/posts?userId=" + userId).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="posts">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;