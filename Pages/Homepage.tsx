import Navbar from '../component/Navbar'

const Homepage = () => {
  return (
    <section className='w-[82vw] h-screen relative bg-[#212121]'>
      <Navbar/>
      <div className='w-full h-full flex flex-col gap-6 justify-center items-center'>
          <h1 className='text-[30px]'>What can I help with?</h1>
          <div  className='w-[60%] h-[80px] p-3 rounded-3xl bg-[#353535]'>
          <label  htmlFor="">
            <input className='w-full focus-visible:border-none' type="text" placeholder='Ask anything' />
          </label>
          </div>

      </div>
    </section>
  )
}

export default Homepage
