import { ArrowUp, Plus } from 'lucide-react'
import Navbar from '../component/Navbar'
import setting from '../assets/svg/setting.svg'
import mic from '../assets/svg/mic.svg'
import { useState } from 'react'
import Message from '../component/Message'

const Homepage = () => {
  const [input, setInput] = useState("");
  const [inptbtn, setInptbtn] = useState(false)
  const [answer, setAnswer] = useState("")
  const [chat, setChat] = useState([])
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
            text: `${input}`
          }
        ]
      }
    ]
  }

  const Getrespose = async (): Promise<void> => {
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
        const aiText = data.candidates[0].content.parts[0].text;
        setAnswer(aiText)
        setChat((prev) => [...prev, { role: "chatbot", text: answer }]);
      }

    } catch (error) {
      console.log(error)
    }
  }

  const SendAsk = () => {
    if (input) {
      setChat((prev) => [...prev, { role: "user", text: input }]);
      setInptbtn(true)
      Getrespose()
      setInput("")
    }
  }

  return (
    <section className='w-[82vw] h-screen relative bg-[#212121]'>
      <Navbar />
      {inptbtn == false && <div className='w-full h-full flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-[30px]'>What can I help with?</h1>
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
          <div className="h-fit w-[65%]  relative flex flex-col gap-3">
            {chat.map((Msg, index) => (
              <Message msg={Msg} key={index} />
            ))}
          </div>
        </div>
        <div className='w-full flex justify-center h-[15%] bottom-0 bg-[#212121]'>
          <div className='flex flex-col w-[65%] items-center justify-center'>
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
                    <button type='submit' onClick={SendAsk} className={`p-2 rounded-full cursor-pointer bg-[#636363] ${input.length>0 ? "hover:bg-zinc-500":""}`}>
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
