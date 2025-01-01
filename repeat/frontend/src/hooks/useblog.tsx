import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
  title: string;
  content: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NDU5Y2U2LTVjM2QtNGM4MS1hMzk4LTMwNmNkNzUyYTQzMSJ9.HUp-zoXKZma-toRseqX421VBaqS4uf2z7smZwMM0eMg",
        },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
};
