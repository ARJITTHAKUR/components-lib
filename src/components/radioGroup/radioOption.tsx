import { CheckIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import "./radioOption.css"
interface props extends React.HtmlHTMLAttributes<HTMLInputElement>{
    id: string,
    name : string
    label : string
}

export default function RadioOption(props:props){
    const [checked, setChecked] =useState<boolean>(false)
    const ripple = useRef<HTMLSpanElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = (e)=>{
        props.onChange(e);
        setChecked(prev=>!prev)
        inputRef.current.checked = true
        ripple.current.className = "radio_ripple"
        const timer = setTimeout(()=>{
        ripple.current.className = ""
            clearTimeout(timer)
        },300)
    }
    return (
        <>
        <span className="radio_container">

        <span className="radio_wrapper" onClick={(e)=>handleClick(e)}>
            <input ref={inputRef} type="radio" id={props.id} name={props.name} />
        {
            checked ? 
            <span className="checked_radio">
                <CheckIcon height={20} width={20}/>
            </span>
            :
            <span className="unchecked_radio">
            </span>
        }
        <span ref={ripple} ></span>
        </span>
        <span>{props.label}</span>
        </span>

        </>

    )
}