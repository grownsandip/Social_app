import Link from "next/link"
import ProfilePage from "./ProfilePage"
import Image from "next/image"
import Ads from "./Ads"

const LeftMenu = ({ type }: { type: "Home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "Home" && <ProfilePage />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/posts.png" alt="" className="" height={20} width={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/activity.png" alt="" className="" height={20} width={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/market.png" alt="" className="" height={20} width={20} />
          <span>Market place</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/events.png" alt="" className="" height={20} width={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/albums.png" alt="" className="" height={20} width={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/videos.png" alt="" className="" height={20} width={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/news.png" alt="" className="" height={20} width={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/courses.png" alt="" className="" height={20} width={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/lists.png" alt="" className="" height={20} width={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-200">
          <Image src="/settings.png" alt="" className="" height={20} width={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Ads size="sm" />
    </div>
  )
}

export default LeftMenu
