import Addpost from "./Components/Addpost"
import Feed from "./Components/Feed"
import LeftMenu from "./Components/LeftMenu"
import RightMenu from "./Components/RightMenu"
import Stories from "./Components/Stories"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-2'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="Home"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <Addpost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  )
}

export default Homepage