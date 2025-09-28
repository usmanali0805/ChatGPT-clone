import { PanelLeftDashed, Search, CirclePlay, LayoutGrid, Trash } from 'lucide-react';
import chatgpt from "../assets/svg/chatgpt.svg";
import new_chat from "../assets/svg/new_chat.svg";
import library from "../assets/svg/library.svg";
import { useHistory } from '../context/HistoryContext';
import React, { useState } from 'react';

interface SlideProps {
  setQuestion: (q:string)=> void;
  setNewchat: (v:boolean)=> void;
  setSrchbtn: (v:boolean)=>void;
  setMargin: (p:string)=> void;
}

const Sidebar: React.FC<SlideProps> = ({ setQuestion, setNewchat, setSrchbtn, setMargin }) => {
  const { history, clearHistory, setHistory, mblbtn, setMblbtn } = useHistory();
  const [sidebtn, setSidebtn] = useState(true)
  const DeleteQuestions = (): void => {
    localStorage.removeItem("History")
    clearHistory()
  }

  const HandleChat = () => {
    setNewchat(true);
    setMblbtn(false)
  }

  const RemoveQuestion = (q: string): void => {
    if (q) {
      const questions = history.filter((e: string) => !(e === q))
      setHistory(questions)
      localStorage.setItem("History", JSON.stringify(questions));
    }
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <section className='hidden sm:block relative w-fit h-full'>
        {/* Large Sidebar */}
        <section className={`fixed left-0 top-0 z-40 h-screen transform transition-transform duration-500 ease-in-out ${sidebtn ? "translate-x-0" : "-translate-x-full "}  sm:w-[18vw] bg-[#171717] `}>
          <section>
            <div className=" p-2 h-fit flex justify-between items-center text-white">
              <span className='p-1.5 hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
                <img className='text-white  w-[22px]' src={chatgpt} alt="sfd" />
              </span>
              <span onClick={() => {
                setSidebtn(false);
                setMargin("sm:ml-[50px]")
              }
              } className='p-1.5 hover:bg-[#3d3d3d] cursor-pointer transition-all duration-200 rounded-[6px]'>
                <PanelLeftDashed className='w-[18px] h-[18px] text-gray-300' />
              </span>
            </div>
            <div className='p-2 flex flex-col  '>
              <div onClick={HandleChat} className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
                <img src={new_chat} alt="dfdf" />
                <span className='text-[14px]'>New chat</span>
              </div>
              <div onClick={() => { setSrchbtn(true) }} className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
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
                <span className='text-[14px]'>Sora</span>
              </div>
              <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
                <LayoutGrid className='w-[20px] h-[20px]' />
                <span className='text-[14px]'>Search question</span>
              </div>
            </div>
            <div className='flex justify-between p-2 items-center'>
              <h2 className='text-gray-400 text-[13px]'>Questions</h2>
              <Trash onClick={DeleteQuestions} className='p-1 rounded-[5px] text-zinc-400 hover:bg-zinc-700  hover:text-zinc-200 cursor-pointer' />
            </div>
            {history.length === 0 ? (
              <p className='text-[14px] p-2'>No history yet</p>
            ) : (
              history.map((q: string, i: number) => (
                <ul className='flex items-center  px-1 py-0.5 h-full cursor-pointer' key={i}>
                  <li onClick={() => setQuestion(q)} className={`text-[13px] truncate w-full p-1 rounded-[5px] text-zinc-300  text-zinc-350 hover:bg-zinc-700 hover:text-white`}>{q}</li>
                  <Trash onClick={() => RemoveQuestion(q)} className='p-1 rounded-[5px] text-zinc-500 hover:bg-zinc-700 hover:text-zinc-300' />
                </ul>
              ))
            )}
          </section>
        </section>


        {/* Small Sidebar */}
        <section className={`fixed left-0 top-0 flex flex-col h-full z-30 bg-[#202020] ${sidebtn ? " hidden" : "block "}  border-r-1 border-zinc-700`}>
          <div className=" p-2 h-fit flex justify-between items-center text-white">
            <span onClick={() => {
              setSidebtn(true);
              setMargin("sm:ml-[18vw]")
            }} className='p-1.5 cursor-pointer hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
              <img className='text-white  w-[22px]' src={chatgpt} alt="sfd" />
            </span>
          </div>
          <div onClick={HandleChat} className='flex p-2  gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer '>
            <span onClick={HandleChat} className='p-1.5 cursor-pointer hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
              <img src={new_chat} alt="dfdf" />
            </span>
          </div>
          <div className='flex p-2 gap-2 w-full  rounded-[10px] transition-all duration-100 h-fit cursor-pointer '>
            <span onClick={() => { setSrchbtn(true) }} className='p-1.5 cursor-pointer hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
              <Search className='w-[20px] h-[20px]' />
            </span>
          </div>
          <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer'>
            <span className='p-1.5 cursor-pointer hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
              <img src={library} alt="dfdf" />
            </span>
          </div>
        </section>
      </section>


      {/* Mobile Sidebar */}
      <section className={`w-[55vw] sm:hidden flex flex-col fixed top-0 left-0 bg-[#171717] h-full z-50 transform transition-transform duration-500 ease-in-out ${mblbtn ? "translate-x-0" : "-translate-x-full "}`}>
        <section className="w-full h-screen ">
          <section>
            <div className=" p-2 h-fit w-full flex justify-between items-center text-white">
              <span className='p-1.5 hover:bg-[#3d3d3d] transition-all duration-200 rounded-[6px]'>
                <img className='text-white  w-[22px]' src={chatgpt} alt="sfd" />
              </span>
              <span onClick={() => {
                setMblbtn(false);
              }
              } className='p-1.5 hover:bg-[#3d3d3d] cursor-pointer transition-all duration-200 rounded-[6px]'>
                <PanelLeftDashed className='w-[18px] h-[18px] text-gray-300' />
              </span>
            </div>
            <div className='p-2 flex flex-col  '>
              <div onClick={HandleChat} className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
                <img src={new_chat} alt="dfdf" />
                <span className='text-[14px]'>New chat</span>
              </div>
              <div onClick={() => {
                setSrchbtn(true);
                setMblbtn(false)
              }} className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
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
                <span className='text-[14px]'>Sora</span>
              </div>
              <div className='flex p-2 gap-2 w-full rounded-[10px] transition-all duration-100 h-fit cursor-pointer hover:bg-[#303030]'>
                <LayoutGrid className='w-[20px] h-[20px]' />
                <span className='text-[14px]'>Search question</span>
              </div>
            </div>
            <div className='flex justify-between p-2 items-center'>
              <h2 className='text-gray-400 text-[13px]'>Questions</h2>
              <Trash onClick={DeleteQuestions} className='p-1 rounded-[5px] text-zinc-400 hover:bg-zinc-700  hover:text-zinc-200 cursor-pointer' />
            </div>
            {history.length === 0 ? (
              <p className='text-[14px] p-2'>No history yet</p>
            ) : (
              history.map((q: string, i: number) => (
                <ul className='flex items-center  px-1 py-0.5 h-full cursor-pointer' key={i}>
                  <li onClick={() => { setQuestion(q); setMblbtn(false) }} className={`text-[13px] truncate w-full p-1 rounded-[5px] text-zinc-300 text-zinc-350 hover:bg-zinc-700 hover:text-white`}>{q}</li>
                  <Trash onClick={() => RemoveQuestion(q)} className='p-1 rounded-[5px] text-zinc-500 hover:bg-zinc-700 hover:text-zinc-300' />
                </ul>
              ))
            )}
          </section>
        </section>
      </section>
    </>
  )
}

export default Sidebar
