import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useblog";
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
  const { id } = useParams<{ id: string }>();  
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;  
  }

  return (
    <>
    <Appbar/>
    <div>
      
      <FullBlog blog={blog} />
    </div>
    </>
  );
};
