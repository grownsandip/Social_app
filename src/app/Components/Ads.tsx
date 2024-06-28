import Image from "next/image"

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 shadow-md bg-white rounded-lg text-sm">
            {/* TOP */}
            <div className="flex items-center text-gray-500 font-medium justify-between">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="" height={16} width={16} />
            </div>
            {/* TOP */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-lg" />
                </div>
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" height={24} width={24} className="object-cover rounded-full w-6 h-6" />
                    <span className="text-blue-500 font-medium">BigChef Lounge</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {
                        size === "sm" ? "lorem ipsum dolor sit amet" : size === "md" ? "lorem ipsum dolor sit amet.lorem ipsum dolor sit amet" :"lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet"
                    }
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
            </div>
        </div>
    )
}

export default Ads
