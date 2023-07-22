import { useRef } from "react";
import "./buttons.css";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant : "text" | "outlined" | "contained";
    onClick : (e)=>void;
}
export default function Button(props:props){
    console.log({props})
    const spanRef = useRef<HTMLSpanElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClicked = (e)=>{
        spanRef.current.className = 'emptyClass'
        setTimeout(() => {
            spanRef.current.className = 'btn_span'
        }, 100);
        props.onClick(e)
    }
    const getButtonClass = ()=>{
        switch(props.variant){
            case 'text' : return 'default_btn'
            case 'outlined' : return 'outlined_btn'
            case 'contained' : return 'contained_btn'
            default : return 'default_btn'
        }
    }
    return <>
        <button
         {...props}
         className={props.className ? props.className : getButtonClass()}
         onClick={(e)=>{handleClicked(e)}}
         ref={buttonRef}
         >
            {
                props.children
            }
            <span ref={spanRef}></span>
        </button>
    </>
}