import { ArrowUp, Plus } from 'lucide-react'
import Navbar from '../component/Navbar'
import setting from '../assets/svg/setting.svg'
import mic from '../assets/svg/mic.svg'
import { useEffect, useState, useRef } from 'react'
import Message from '../component/Message'
import { useHistory } from '../context/HistoryContext'

interface HomeProps {
  question:string;
  newchat: boolean;
  setNewchat: (e:boolean)=>void;
  margin:string;
}

interface chat{
  role:"chatbot"|"user";
  text:string;
}

const Homepage:React.FC<HomeProps>= ({ question, newchat, setNewchat ,margin }) => {
  const { addToHistory } = useHistory();
  const [input, setInput] = useState<string>("");
  const [inptbtn, setInptbtn] = useState<boolean>(false)
  const [chat, setChat] = useState<chat[]>([])
  const [temporarychat, setTemporarychat] = useState(false)
  const ScrollTop = useRef<HTMLDivElement | null>(null)
  const [loader, setLoader] = useState(false)
  const Handleinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const apiKey: string = "AIzaSyA4yQ0DdXgt-JEvzlEMtLwJHKzNqttR9PU";
  interface GeminiResponce {
    candidates?: {
      content?: {
        parts?: {
          text?: string;
        }
      }
    }
  }
  const body = {
    contents: [
      {
        parts: [
          {
            text: `${question ? question : input}`
          }
        ]
      }
    ]
  }
  const Getresponse = async (): Promise<void> => {
    setLoader(true)
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": apiKey
          },
          body: JSON.stringify(body)
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status:${response.status}`);
      }
      const data: GeminiResponce = await response.json();
      if (data) {
        const aiText = data?.candidates[0]?.content?.parts[0]?.text ||"No responce";
        setChat((prev) => [...prev, { role: "chatbot", text: aiText }]);
        setTimeout(() => {
          ScrollTop.current?.scrollIntoView({ behavior: "smooth" })
        }, 500);
        setLoader(false)
      }

    } catch (error) {
      console.log(error)
      setLoader(false)
    }
  }

  useEffect(() => {
    if (question.length > 0) {
      setChat((prev) => [...prev, { role: "user", text: question }]);
      Getresponse()
      setInptbtn(true)
    }

  }, [question])

  
  useEffect(() => {
    if (newchat == true && chat.length > 0) {
      setChat([])
      setNewchat(false)
    }
  }, [newchat])

  const AddToFavourite = () => {
    const history = localStorage.getItem("History")
    if (history) {
      let htry = JSON.parse(history)
      if (!htry.includes(input)) {
        htry = [...htry, input];
        localStorage.setItem("History", JSON.stringify(htry));
        addToHistory(input);
      }       
    } else {
      localStorage.setItem("History", JSON.stringify([input]))
      addToHistory(input);

    }
  }
  
  const SendAsk = () => {
    if (input) {
      setChat((prev) => [...prev, { role: "user", text: input }]);
      setInptbtn(true)
      Getresponse()
      setInput("")
      AddToFavourite()
  }}
  return (
    <section className={`w-full transform transition-linear ease-in-out duration-400 m-0 ${margin} h-screen relative bg-[#212121]`}>
      <Navbar setTemporarychat={setTemporarychat} temporarychat={temporarychat} />
      {inptbtn == false && <div className='w-full h-full flex flex-col gap-6 justify-center items-center'>
        {temporarychat ? <div className='flex justify-center items-center w-[30%] flex-col gap-1'>
          <h1 className='text-[30px] '>Temporary Chat</h1>
          <p className='text-[13px] text-zinc-400 text-center'>This chat won't appear in history, use or update ChatGPT's memory, or be used to train our models. For safety purposes, we may keep a copy of this chat for up to 30 days.</p>
        </div> : <h1 className='text-[30px]'>What can I help with?</h1>}
        <div className='w-[65%] h-[95px] p-3 rounded-3xl bg-[#353535]'>
          <label className='flex flex-col justify-between h-full items-center' htmlFor="input_id">
            <input id="input_id" value={input} onChange={Handleinput} className='w-full text-[15px] focus-visible:outline-none' type="text" placeholder='Ask anything' />
            <div className=' flex items-center justify-between w-full'>
              <span className='flex gap-3 items-center'>
                <p className=' p-1 rounded-full hover:bg-[#4e4e4e]'>
                  <Plus className='w-[20px] h-[20px]' />
                </p>
                <p className='flex items-center text-[12px] gap-2 p-1.5 rounded-full hover:bg-[#4e4e4e]'>
                  <img className='w-[18px] ' src={setting} alt="" />
                  Tools
                </p>
              </span>
              <span className='flex gap-3 items-center'>
                <p className=' p-1 rounded-full hover:bg-[#4e4e4e]'>
                  <img className='w-[18px] ' src={mic} alt="" />
                </p>
                <button type='submit' onClick={SendAsk} className='p-2 rounded-full bg-[#636363]'>
                  <ArrowUp className='w-[20px] h-[20px]' />
                </button>
              </span>
            </div>
          </label>
        </div>

      </div>}

      {inptbtn == true && <section className=' w-full h-screen flex flex-col items-center justify-center'>
        <div className='w-full relative flex  justify-center h-[85%]  p-[10px] overflow-y-scroll mt-[50px]'>
          <div className="h-fit sm:w-[65%] w-full p-5 relative flex flex-col gap-3">
            {loader ?
              <div className='w-full flex justify-center ' role="status">
                <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              : null}
            {chat.map((Msg, i:number) => (
              <Message msg={Msg} key={i} />
            ))}
            <div ref={ScrollTop} />
          </div>
        </div>
        <div className='w-full flex justify-center h-[15%] bottom-0 bg-[#212121]'>
          <div className='flex flex-col sm:w-[65%] w-full p-10 items-center justify-center'>
            <div className='w-full flex flex-col h-[95px] p-3 rounded-3xl bg-[#353535]'>
              <label className='flex flex-col justify-between h-full items-center' htmlFor="input_id">
                <input id="input_id" value={input} onChange={Handleinput} className='w-full text-[15px] focus-visible:outline-none' type="text" placeholder='Ask anything' />
                <div className=' flex items-center justify-between w-full'>
                  <span className='flex gap-3 items-center'>
                    <p className=' p-1 rounded-full hover:bg-[#4e4e4e]'>
                      <Plus className='w-[20px] h-[20px]' />
                    </p>
                    <p className='flex items-center text-[12px] gap-2 p-1.5 rounded-full hover:bg-[#4e4e4e]'>
                      <img className='w-[18px] ' src={setting} alt="" />
                      Tools
                    </p>
                  </span>
                  <span className='flex gap-3 items-center'>
                    <p className=' p-1 rounded-full hover:bg-[#4e4e4e]'>
                      <img className='w-[18px] ' src={mic} alt="" />
                    </p>
                    <button type='submit' onClick={SendAsk} className={`p-2 rounded-full cursor-pointer bg-[#636363] ${input.length > 0 ? "hover:bg-zinc-500" : ""}`}>
                      <ArrowUp className='w-[20px] h-[20px]' />
                    </button>
                  </span>
                </div>
              </label>
            </div>
            <p className='text-[11px] p-2'>Chat GPT can makes mistake.Check important info</p>
          </div>
        </div>
      </section>}

    </section>
  )
}

export default Homepage
