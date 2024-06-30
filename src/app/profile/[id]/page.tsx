import Feed from "@/app/Components/Feed"
import LeftMenu from "@/app/Components/LeftMenu"
import RightMenu from "@/app/Components/RightMenu"
import Image from "next/image"

const page = () => {
  return (
    <div className='flex gap-6 pt-2'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
           <div className="w-full h-64 relative">
           <Image src="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-md cursor-pointer"/>
           <Image src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={128} height={128} className="w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white rounded-full object-cover cursor-pointer"/>
           </div>
           <h1 className="mt-20 mb-4 text-xl font-medium">UserName</h1>
           <div className="flex items-center justify-center mb-4 gap-12">
            <div className="flex flex-col items-center">
              <span className="font-medium">123</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">1.3k</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">130</span>
              <span className="text-sm">Following</span>
            </div>
           </div>
          </div>
          <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test"/>
      </div>
    </div>
  )
}

export default page
