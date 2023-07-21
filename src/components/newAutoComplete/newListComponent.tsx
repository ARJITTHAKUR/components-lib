import { useEffect } from "react";
import ReactDOM from "react-dom";

interface props {
    options : string[],
    onSelect  :(data:string)=>void,
    position: {
        top: number | undefined;
        left: number | undefined;
        bottom: number | undefined;
        offsetWidth: number | undefined;
      };
}
export default function NewList({options, onSelect, position}:props){
    const transformValue = `translateY(30px)`;

    const handlekeyUp = (e) => {
      if (e.key === "Enter") {
        onSelect(e.target.value);
      }
    };

    useEffect(() => {
        document.addEventListener("keyup", handlekeyUp);
        return () => {
          document.removeEventListener("keyup", handlekeyUp);
        };
      }, []);

    return ReactDOM.createPortal((
        <>
            <ul
            className="list-items"
            style={{
              top: position.top+10,
              left: position.left,
              width: position.offsetWidth,
              transform: transformValue,
              zIndex: 10,
              // height: "15rem",
              overflowY: "scroll",
              maxHeight: "15rem",
              minHeight: "3rem",
            }}
            role="listbox"
            
            >
                {
                    options && options.length > 0 ? options.map((str,idx)=>{
                        return <>
                            <li
                            key={`list-opt${idx}`}
                            value={str}
                            className="option-style"
                            onClick={(e) => onSelect(str)}
                            tabIndex={0}
                            role="listitem"
                            // onKeyDown={(e)=>}
                            >{str}</li>
                        </>
                    }) : <li className="option-style">No Options</li>
                }
            </ul>
        </>
    ),document.body)
}