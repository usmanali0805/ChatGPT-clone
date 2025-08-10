import { useState , useEffect } from "react"

const Message = ({ msg }) => {
    const [answer, setAnswer] = useState()
    const [checkhead, setCheckhead] = useState(false)
    const [head, setHead] = useState('')

    function checkheading = (str:string):string => {
      return (/^(\*)(\*)|(.*)\*$/.test(str))
    }

    function setheading = (str:string):string => {
      return str.replace (/^(\*)(\*)|(*)$/g,'')
    }
    

    useEffect(() => {
        if (msg.role==="chatbot") {
            const arr = msg.text
            let aitext = arr.split("* ")
            aitext = aitext.map((item)=>item.trim())
            console.log(aitext)
            setAnswer(aitext || [])
        }
    }, [msg])

    useEffect(() => {
        if(checkheading(head)){
            setheading(head )
        }
    }, [head])

        return (
        <div>
            {msg.role==="user"?(<div className='w-full flex justify-end '>
                <span className='text-[14px] min-w-fit max-w-[60%] p-1 rounded-md h-fit bg-[#343434]'>{msg.text}</span>
            </div>):
            (<div className='w-full flex justify-start '>
                <span className='text-[15px] w-[90%] h-fit '>{answer? 
                answer.map((item:string , index:number)=>{
                    setHead(item)
                    return(<ul key={index}>
                        <li>{item}</li>
                    </ul>)
                }):msg.text}</span>
            </div>)}
        </div>
        //   <div>
        //     {msg.role==="user"?(<div className='w-full flex justify-end '>
                
        //         {msg.text?msg.text.map((text)=><span className='text-[14px] min-w-fit max-w-[60%] p-1 rounded-md h-fit bg-[#343434]'>{text}</span>):""}
        //     </div>):
        //     (<div className='w-full flex justify-start '>
        //         <span className='text-[15px] w-[90%] h-fit '>{msg.text}</span>
        //     </div>)}
        // </div>
    )
}

export default Message
