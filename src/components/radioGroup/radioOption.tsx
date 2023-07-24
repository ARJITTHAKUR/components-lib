import { CheckIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import "./radioOption.css"
interface props extends React.HtmlHTMLAttributes<HTMLInputElement>{
    id: string,
    name : string
    label : string
    onChange : (e)=> void,
    checked :boolean
}

export default function RadioOption(props:props){
    const [checked, setChecked] =useState<boolean>(props.checked)
    const ripple = useRef<HTMLSpanElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = (e)=>{
        setChecked(prev=>!prev)
        // inputRef.current.checked = true
        inputRef.current.click()
        ripple.current.className = "radio_ripple"
        const timer = setTimeout(()=>{
        ripple.current.className = "emptyClass"
            clearTimeout(timer)
        },300)
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("changed",e.target.checked)
        props.onChange(e);
    }
    useEffect(()=>{

    },[checked])
    return (
        <>
        <span className="radio_container">
        <span className="radio_wrapper" onClick={(e)=>handleClick(e)}>
            <input ref={inputRef} type="radio" id={props.id} name={props.name} onChange={(e)=>{handleChange(e)}} value={props.label} className="input_radio_margin"/>
        {
            props.checked ? 
            <span className="checked_radio">
                <CheckIcon height={20} width={20}/>
            </span>
            :
            <span className="unchecked_radio">
            </span>
        }
        <span ref={ripple} className="emptyClass"></span>
        </span>
        <label htmlFor={props.id}>{props.label}</label>
        </span>

        </>

    )
}