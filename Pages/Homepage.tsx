import { ArrowUp, Plus } from 'lucide-react'
import Navbar from '../component/Navbar'
import setting from '../src/assets/svg/setting.svg'
import mic from '../src/assets/svg/mic.svg'

const Homepage = () => {
  return (
    <section className='w-[82vw] h-screen relative bg-[#212121]'>
      <Navbar />
      {/* <div className='w-full h-full flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-[30px]'>What can I help with?</h1>
        <div className='w-[65%] h-[95px] p-3 rounded-3xl bg-[#353535]'>
          <label className='flex flex-col justify-between h-full items-center' htmlFor="">
            <input className='w-full text-[15px] focus-visible:outline-none' type="text" placeholder='Ask anything' />
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
                <p className='p-2 rounded-full bg-[#636363]'>
                  <ArrowUp className='w-[20px] h-[20px]' />
                </p>
              </span>
            </div>
          </label>
        </div>

      </div> */}
      <section className=' w-full h-full flex items-center justify-center'>
        <div className='w-[65%] relative h-full mt-[120px]'>
          <div className="h-fit w-full relative flex flex-col gap-3">
            <div className='w-full flex justify-end '>
              <span className='text-[14px] w-[60%] h-fit bg-[#343434]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur suscipit accusamus.
              </span>
            </div>
            <div className='w-full flex justify-start '>
              <span className='text-[15px] w-[90%] h-fit '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt temporibus eos itaque consectetur, similique totam nisi dolorum quaerat, eum tempore vel reprehenderit expedita fugit corrupti labore consequuntur ratione, ipsam vitae explicabo? Consequuntur architecto possimus a, eos voluptatem animi veritatis, corporis quo eum amet quae eligendi, error aperiam quam sapiente. Dolore at nostrum commodi nisi dignissimos nemo vitae quibusdam labore consectetur laborum error deserunt alias eligendi odio ipsum ullam iure ex, qui voluptatibus consequuntur sed quis delectus porro. Qui, ab? Debitis dolor in nulla magnam, asperiores quasi sed eum repellat maiores earum sit accusamus voluptas rem vel adipisci vitae voluptate deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur suscipit accusamus.
              </span>
            </div>
            
          </div>
          <div className='flex flex-col w-full absolute left-0 bottom-0 items-center justify-center'>
            <div className='w-full flex flex-col h-[95px] p-3 rounded-3xl bg-[#353535]'>
              <label className='flex flex-col justify-between h-full items-center' htmlFor="">
                <input className='w-full text-[15px] focus-visible:outline-none' type="text" placeholder='Ask anything' />
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
                    <p className='p-2 rounded-full bg-[#636363]'>
                      <ArrowUp className='w-[20px] h-[20px]' />
                    </p>
                  </span>
                </div>
              </label>
            </div>
            <p className='text-[11px] p-2'>Chat GPT can makes mistake.Check important info</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Homepage
