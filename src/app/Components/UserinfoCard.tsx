import Image from "next/image"
import Link from "next/link"

const UserinfoCard = ({ userId }: { userId: string }) => {
    return (
        <div className="p-4 shadow-md bg-white rounded-lg text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                <Link href="/" className="text-blue-500 text-xs">See ALL</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">Sandip Roy</span>
                    <span className="text-sm">@Username</span>
                </div>
                <p>
                    Lorem ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16} />
                    <span>Living in <b>Tripura</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16} />
                    <span>Went to <b>Golden Valley School</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16} />
                    <span>Works in <b>xyz .pvt ltd</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="" height={16} width={16} />
                        <Link href="https://github.com/grownsandip" className="text-blue-500 font-medium">Github</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="" height={16} width={16} />
                        <span>joined November 2024</span>
                    </div>
                </div>
                <button className="text-sm bg-blue-500  text-white rounded-md p-2">Follow</button>
                <span className="text-red-400 text-xs cursor-pointer self-end">Block User</span>
            </div>
        </div>
    )
}

export default UserinfoCard
