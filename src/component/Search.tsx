import { X} from 'lucide-react'
import { useState , useEffect } from 'react'

const Search = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
  const ques =localStorage.getItem("History")
  if (ques) {
    setQuestions(ques || [])
  }
  }, [])
  return (
    <section className='fixed z-50 top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#00000054]'>
      <div className="w-[47%] h-[47%] bg-[#343434] border-1 border-[#494949] rounded-2xl flex flex-col">
          <div className='w-full py-5 px-5.5 border-b-1 border-[#494949] flex items-center gap-2'>
            <input className="w-[90%] focus-visible:outline-none "  type="text" name="" id="seacrh" placeholder='Search Qestions' />
            <X className="p-1 ml-5 text-zinc-400 hover:text-zinc-200 cursor-pointer hover:bg-zinc-600 rounded-full"/>
          </div>
          <div className='flex flex-col py-5 px-5.5'>
            <p className='text-zinc-400 text-[12px]'>Questions</p>
            {questions.length>0?questions.map((q) => {
              return<>
              <p>{q}</p>
              </>
            }
            ):
            <p>There is no any question</p>}
          </div>
      </div>
    </section>
  )
}

export default Search
