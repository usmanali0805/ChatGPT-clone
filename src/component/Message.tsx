import { useState, useEffect } from "react";

const Message = ({ msg }) => {
  const [answer, setAnswer] = useState([]);
  // Check if string starts and ends with **
  function checkHeading(str: string): boolean {
    return /^(\*\*)(.+)\*$/.test(str);
  }


  // Remove starting and ending **
  const setHeading = (str) => {
    return str.replace(/^(\*\*)(.+)(\*)$/, "$2");
  };

  useEffect(() => {
    if (msg.role === "chatbot") {
      const arr = msg.text;
      const aitext = arr
        .split("* ")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
      setAnswer(aitext);
    }
  }, [msg]);

  return (
    <div>
      {msg.role === "user" ? (
        <div className="w-full flex justify-end">
          <span className="text-[14px] min-w-fit max-w-[60%] p-1 rounded-md h-fit bg-[#343434]">
            {msg.text}
          </span>
        </div>
      ) : (
        <span className="text-[15px] w-[90%] h-fit">
          {answer.length === 1 
            ? <div>{answer}</div>
            : answer.map((item, index) => (
              <ul key={index}>
                <li
                  className={
                    checkHeading(item)
                      ? "font-bold block py-3 text-[17px]"
                      : "pl-[5px]"
                  }
                >
                  {checkHeading(item) ? setHeading(item) : item }
                </li>
              </ul>
            ))}
        </span>
      )}
    </div>
  );
};

export default Message;





// Example: Using forEach to display items in an array





