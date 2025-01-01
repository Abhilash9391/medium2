import { Blogcard } from "../components/Blogcard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks/useblogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  return (
    <>
      <Appbar />
      <div className="flex flex-col">
        {blogs.map((blog: any) => (
          <Blogcard
            key={blog.id} 
            authorName={blog.author.name} 
            title={blog.title}
            content={blog.content}
            publishedDate="01/01/2025" 
          />
        ))}
      </div>
    </>
  );
};
