import { Blogcard } from "../components/Blogcard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks/useblog"

export const Blogs = () => {
    //@ts-ignore
    const { loading, blogs } = useBlogs()

    if (loading) {
        return <div>Loading...</div>
    }

    
    if (!blogs || blogs.length === 0) {
        return <div>No blogs available</div>
    }

    return (
        <>
            <Appbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    
                    blogs.map((blog: any) => (
                        <Blogcard
                        authorName="Deepika"
                        title="Exploring Open Source Contributions"
                        content="Contributing to open source projects has been an enriching experience."
                        publishedDate="01/01/2025"
                        />
                    ))
                }
            </div>
        </>
    )
}
