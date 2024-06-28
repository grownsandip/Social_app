import Image from "next/image"
import Link from "next/link"

const FriendRequest = () => {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs">See ALL</Link>
      </div>
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/800005/pexels-photo-800005.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40}/>
            <span className="font-semibold"> John Doe </span>
        </div>
        <div className="flex gap-3 justify-end">
        <Image src="/accept.png" alt="" className="cursor-pointer" width={20} height={20}/>  
        <Image src="/reject.png" alt="" className="cursor-pointer" width={20} height={20}/>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/800005/pexels-photo-800005.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40}/>
            <span className="font-semibold"> John Doe </span>
        </div>
        <div className="flex gap-3 justify-end">
        <Image src="/accept.png" alt="" className="cursor-pointer" width={20} height={20}/>  
        <Image src="/reject.png" alt="" className="cursor-pointer" width={20} height={20}/>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/800005/pexels-photo-800005.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40}/>
            <span className="font-semibold"> John Doe </span>
        </div>
        <div className="flex gap-3 justify-end">
        <Image src="/accept.png" alt="" className="cursor-pointer" width={20} height={20}/>  
        <Image src="/reject.png" alt="" className="cursor-pointer" width={20} height={20}/>
        </div>
      </div>
    </div>
  )
}

export default FriendRequest
