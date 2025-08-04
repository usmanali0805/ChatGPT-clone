import { ArrowUp, Plus } from 'lucide-react'
import Navbar from '../component/Navbar'
import setting from '../assets/svg/setting.svg'
import mic from '../assets/svg/mic.svg'
import { useEffect, useState } from 'react'

const Homepage = () => {
  const [input, setInput] = useState("");
  const [inptbtn, setInptbtn] = useState(false)
  const [answer, setAnswer] = useState("")
  const [Chat, setChat] = useState([{ role: "chatbot", text: "How can we help you today?" },])
  const Handleinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const apiKey:string = "AIzaSyA4yQ0DdXgt-JEvzlEMtLwJHKzNqttR9PU";
  interface GeminiResponce {
    candidates?:{
      content?:{
        parts?:{
          text?:string;
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

  const Getrespose = async ():Promise<void>  => {
    try{
      const response = await fetch ("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
       {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "X-goog-api-key":apiKey
        },
        body:JSON.stringify(body)
       }
      );

      if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`);
      }
        const data:GeminiResponce = await response.json();
        

        if(data){
           const aiText = data.candidates[0].content.parts[0].text;
           setAnswer(aiText)
        }

    }catch(error){
      console.log(error)
    }
  }

  const SendAsk = () => {
    if (input) {
      setChat((prev) => [...prev, { role: "user", text: input }]);
      console.log("object")
      setInptbtn(true)
      Getrespose()
    }
  }
  
  console.log(answer)
  return (
    <section className='w-[82vw] h-screen relative bg-[#212121]'>
      <Navbar />
      {inptbtn==false&& <div className='w-full h-full flex flex-col gap-6 justify-center items-center'>
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
                <p onClick={SendAsk} className='p-2 rounded-full bg-[#636363]'>
                  <ArrowUp className='w-[20px] h-[20px]' />
                </p>
              </span>
            </div>
          </label>
        </div>

      </div> }
      {inptbtn==true&& <section className=' w-full h-full flex items-center justify-center'>
        <div className='w-[65%] relative h-full mt-[120px]'>
          <div className="h-fit w-full relative flex flex-col gap-3">
            <div className='w-full flex justify-end '>
              <span className='text-[14px] w-[60%] h-fit bg-[#343434]'>{input}</span>
            </div>
            <div className='w-full flex justify-start '>
              <span className='text-[15px] w-[90%] h-fit '>{answer}</span>
            </div>

          </div>
          <div className='flex flex-col w-full absolute left-0 bottom-0 items-center justify-center'>
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
                    <p onClick={SendAsk} className='p-2 rounded-full cursor-pointer bg-[#636363]'>
                      <ArrowUp className='w-[20px] h-[20px]' />
                    </p>
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
