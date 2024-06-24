import Link from "next/link";
import MobileMenu from "./MobileMenu";
const Navbar=()=> {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="">
        <Link href="/" className="font-bold text-xl text-blue-600">SOCIAL</Link>
      </div>
      <div className="hidden">center</div>
      <div className="">
        <MobileMenu/>
      </div>
    </div>
  )
}

export default Navbar
