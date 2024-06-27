import Image from "next/image"

const Comments = () => {
    return (
        <div className="">
            {/* write */}
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={32} height={32} className="w-8 h-8 rounded-full" />
                <div className="flex-1 flex items-center justify-between bg-slate-100 px-6 py-2 text-sm rounded-xl w-full ">
                    <input type="text" placeholder="dump your viscoius thoughts" className="bg-transparent outline-none flex-1"></input>
                    <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer" />
                </div>
            </div>
            {/* comments */}
            <div className="">
                {/* COMMENTS */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <Image src="https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                    {/* DESC */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">John Doe</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nemo at ut. Ab ex qui quibusdam, consectetur molestias laborum natus aspernatur et perferendis facilis similique, reprehenderit accusantium impedit velit ratione.</p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                           <div className="flex items-center gap-4">
                           <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-4 h-4"/>
                           <span className="text-gray-300">|</span>
                           <span className="text-gray-500">123 Likes</span>
                           </div>
                           <div className="">
                            Reply
                           </div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"/>
                </div>
            </div>
        </div>
    )
}

export default Comments
