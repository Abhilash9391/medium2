import { Blog } from "../hooks/useblog"


export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <div className="flex">
        <div className="bg-slate-200 flex flex-col  h-screen w-full justify-evenly  items-center ">
          <div className="font-black italic text-3xl ">{blog.title}</div>
          <div className="font-semibold ">{blog.content}</div>
        </div>
        <div>
          <div className="flex">

            <div className="">



            </div>

          </div>
        </div>
      </div>




    </>
  )

}