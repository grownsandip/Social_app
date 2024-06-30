import Image from "next/image"

const ProfilePage = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className=" h-20 relative ">
       <Image src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="rounded-md object-cover"/>
       <Image src="https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=400" width={48} height={48} alt="" className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white object-cover z-10"/>
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">User Name</span>
        <div className="flex items-center gap-4">
          <div className="flex">
          <Image src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" height={12} width={12} className="rounded-full object-cover w-3 h-3"/>
          <Image src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" height={12} width={12} className="rounded-full object-cover w-3 h-3"/>
          <Image src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" height={12} width={12} className="rounded-full object-cover w-3 h-3"/>
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs rounded-md p-2">My Profile</button>
      </div>
    </div>
  )
}

export default ProfilePage
