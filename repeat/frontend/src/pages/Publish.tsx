
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  return (
    <>
      <div className="flex flex-col">
        <Appbar />
        
        {/* Title Input */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            onChange={(e) => { setTitle(e.target.value); }}
            type="text"
            id="title"
            value={title}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        
        {/* Content Input */}
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Content
          </label>
          <textarea
            onChange={(e) => { setContent(e.target.value); }}
            id="content"
            value={content}
            rows={6}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        
        {/* Publish Button */}
        <PublishButton title={title} content={content} />
      </div>
    </>
  );
};

interface PublishButtonProps {
  title: string;
  content: string;
}

const PublishButton = ({ title, content }: PublishButtonProps) => {
  const navigate = useNavigate();
  
  async function sendrequest(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NDU5Y2U2LTVjM2QtNGM4MS1hMzk4LTMwNmNkNzUyYTQzMSJ9.HUp-zoXKZma-toRseqX421VBaqS4uf2z7smZwMM0eMg",
          },
        }
      );
      
      if (response.status === 200) {
        navigate(`/blog/${response.data.id}`);
      }
    } catch (error) {
      alert("An error occurred while publishing the blog.");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={sendrequest}
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Publish Blog
      </button>
    </div>
  );
};
