import Ads from "./Ads"
import Birthdays from "./Birthdays"
import FriendRequest from "./FriendRequest"
import UserMediaCard from "./UserMediaCard"
import UserinfoCard from "./UserinfoCard"

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (<>
        <UserinfoCard userId={userId}/>
        <UserMediaCard userId={userId}/>
      </>) : null}
      <FriendRequest />
      <Birthdays />
      <Ads size="md" />
    </div>
  )
}

export default RightMenu
