const Homepage = () => {
  return (
    <div className='flex gap-6'>
      <div className="hidden xl:block w-[20%]">right</div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">center</div>
      <div className="hidden lg:block w-[30%]">left</div>
    </div>
  )
}

export default Homepage