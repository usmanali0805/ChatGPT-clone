import { PanelLeftDashed, Search, CirclePlay , LayoutGrid } from 'lucide-react';
import chatgpt from "../src/assets/svg/chatgpt.svg";
import new_chat from "../src/assets/svg/new_chat.svg";
import library from "../src/assets/svg/library.svg";

const Sidebar = () => {
  return (
    <section  className='h-screen w-[18vw] bg-[#171717] '>
      <section>
        <div className=" p-2 h-fit flex justify-between items-center text-white">
          <span className='p-1.5 hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
            <img className='text-white  w-[22px]' src={chatgpt} alt="sfd" />
          </span>
          <span className='p-1.5 hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
            <PanelLeftDashed className='w-[18px] h-[18px] text-gray-300' />
          </span>
        </div>
        <div className='p-2 flex flex-col  '>
          <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
            <img src={new_chat} alt="dfdf" />
            <span className='text-[14px]'>New chat</span>
          </div>
          <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
            <Search className='w-[20px] h-[20px]' />
            <span className='text-[14px]'>Search chats</span>
          </div>
          <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
            <img src={library} alt="dfdf" />
            <span className='text-[14px]'>Library</span>
          </div>
        </div>
      </section>
      <section className='p-2'>
        <div className=' flex flex-col'>
          <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
             <CirclePlay className='w-[20px] h-[20px]' />
            <span className='text-[14px]'>New chat</span>
          </div>
          <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
            <LayoutGrid className='w-[20px] h-[20px]' />
            <span className='text-[14px]'>Search chats</span>
          </div>
        </div>
        <h2 className='text-gray-400 p-2 text-[13px]'>Chats</h2>
        <section className='text-[12px] w-full h-fit p-2 '> Abhi to filhal nhi hy</section>
      </section>
    </section>
  )
}

export default Sidebar
