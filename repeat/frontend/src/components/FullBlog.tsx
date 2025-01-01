import { Blog } from "../hooks/useblog";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex justify-center items-center bg-gray-100  py-8">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        <div className="text-center mb-6">
          <h1 className="font-black text-4xl text-gray-800 italic">{blog.title}</h1>
        </div>
        <div className="text-lg text-gray-700">
          <p className="mb-4">{blog.content}</p>
        </div>
        <div className="mt-6 text-right text-gray-500 font-semibold">
          <p>By {blog.author.name}</p>
        </div>
      </div>
    </div>
  );
};
