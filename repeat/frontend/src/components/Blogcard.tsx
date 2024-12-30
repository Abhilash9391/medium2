interface Bloginputs {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const Blogcard = ({ authorName, title, content, publishedDate }: Bloginputs) => {
    return (

        <><div className="border border-grey-900 border-t-1"> 
            <div className="flex justify-center ">
                <div className="bg-transparent flex flex-col ">
                    <div className="flex ">
                        {/* Profile Section */}
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">
                                {authorName.charAt(0).toUpperCase()}
                            </span>
                        </div>

                        <div className="pt-3 pl-7">{authorName}</div>
                        <div className="pt-3 pl-5">{publishedDate}</div>
                    </div>

                    <div className="">
                        {/* Blog Title */}
                        <div className="text-lg font-semibold text-gray-900">{title}</div>
                    </div>

                    <div className="">
                        {/* Blog Content */}
                        <div className="text-gray-700">{content}</div>
                    </div>
                </div>

            </div>
            </div>
        </>
    );
};
