import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])

     useEffect(() => {
        
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NDU5Y2U2LTVjM2QtNGM4MS1hMzk4LTMwNmNkNzUyYTQzMSJ9.HUp-zoXKZma-toRseqX421VBaqS4uf2z7smZwMM0eMg"
            }
        })
        .then(response => {
            setBlogs(response.data.blogs)
            setLoading(false)
        })
        .catch(error => {
            console.error("Error fetching blogs:", error)
            setLoading(false)
        })
    }, [])  
      return {loading,blogs}
}
