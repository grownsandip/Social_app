import Image from "next/image"
import Link from "next/link"
const Birthdays = () => {
    return (
        <div className="p-4 shadow-md bg-white rounded-lg text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Birthdays</span>
            </div>
            {/* User */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/800005/pexels-photo-800005.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
                    <span className="font-semibold"> John Doe </span>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className="bg-blue-500 text-xs rounded-md text-white px-1 py-2">celebrate</button>
                </div>
            </div>
            {/* UPCOMING */}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
            <Image src="/gift.png" alt="" width={24} height={24} />
            <Link href="/" className="flex flex-col gap-1 text-xs">
            <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
            <span className="text-gray-600">See others 16 people who have birthdays</span>
            </Link>
            </div>
        </div>
    )
}

export default Birthdays
