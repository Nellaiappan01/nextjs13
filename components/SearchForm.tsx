import Image from 'next/image'


const SearchForm = () => {
  return (
    <form className='flex-center mx-auto  w-full sm:-mt-15 sm:px-5'>
    <label className="flex-center relative w-full max-w-3xl">
      <Image 
        src="/magnifying-glass.svg"
        className="absolute left-8"
        width={32}
        height={32}
        alt="Search icon"
      />
      <input 
        className="border-transparent base-regular w-full h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
        type="text"
        placeholder="Search"
       
        
      />
    </label>
  </form>
  )
}

export default SearchForm