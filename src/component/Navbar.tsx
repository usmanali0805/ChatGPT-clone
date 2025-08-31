import { MessageCircleDashed, ChevronDownIcon } from 'lucide-react';
import plus from "../assets/svg/plus.svg"


const Navbar = ({setTemporarychat , temporarychat}) => {
  const chat_handle = () => {
    if(temporarychat == true)setTemporarychat(false)
    else{
      setTemporarychat(true)
    }
  }
  
  return (
    <div className="text-white bg-[#212121] p-3 px-5 absolute z-50 w-full  top-0 left-0 items-center flex justify-between ">
      <span className='flex gap-1 items-center cursor-pointer justify-center'>
        <h3 className='text-[17px] '>ChatGPT</h3>
        <ChevronDownIcon className='w-[20px] h-[20px]' />
      </span>
      {temporarychat?<span><p className='text-[12px] text-zinc-400'>Temporary chat</p></span>:<span className='py-1 px-3 rounded-full cursor-pointer flex gap-1 transition-all duration-200 bg-[#3c3b8b] hover:bg-[#4e4bc9] items-center' >
        <img className="w-[13px] fill-gray-500" src={plus} alt="" />
        <p className='text-[14px]'>Get Plus</p>
      </span>}
      <p onClick={chat_handle} className='p-1 rounded-full hover:bg-[#3d3d3d]'>
      <MessageCircleDashed  className='text-white cursor-pointer w-[20px] h-[20px]' />
      </p>
    </div>
  )
}

export default Navbar
