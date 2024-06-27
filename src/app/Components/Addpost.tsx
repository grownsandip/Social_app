import Image from "next/image"

const Addpost = () => {
    return (
        <div className="p-4 bg-white shadow:md rounded-lg flex gap-4 justify-between text-sm">
            {/* AVATAR */}
            <Image src="https://images.pexels.com/photos/800005/pexels-photo-800005.jpeg?auto=compress&cs=tinysrgb&w=400" height={48} width={48} alt="" className="h-12 w-12 object-cover rounded-full" />
            {/* POSTS */}
            <div className="flex-1">
                {/* Textinputs */}
                <div className="flex gap-4">
                    <textarea placeholder="Enter your text" className="bg-slate-100 rounded-lg flex-1 p-2"></textarea>
                    <Image src="/emoji.png" height={20} width={20} alt="" className="h-5 w-5 cursor-pointer self-end" />
                </div>
                {/* post options */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/addimage.png" height={20} width={20} alt="" />
                    Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/addVideo.png" height={20} width={20} alt="" />
                    Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/addevent.png" height={20} width={20} alt="" />
                    Event
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/poll.png" height={20} width={20} alt="" />
                    Poll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addpost
