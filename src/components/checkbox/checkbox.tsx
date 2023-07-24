import { CheckIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import "./checkbox.css"

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;
interface props extends React.HtmlHTMLAttributes<HTMLInputElement> {
    checked ?: boolean,
    disabled ?: boolean,
    label ?: string,
    bgColor ?: Color
}
export default function Checkbox(props: props) {
  const rippleRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const handleClick = (e) => {
    console.log(e.target.checked)
    props.onClick(e);
    setChecked(prev=>!prev)
    rippleRef.current.className = "checkbox_ripple";
    const timer = setTimeout(() => {
      rippleRef.current.className = "";
      clearTimeout(timer);
    }, 500);
  };
  return (
    <span className="checkbox_container">
    <span
      className="checkbox_wrapper"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <input type="checkbox" name="" id="" ref={inputRef} />
      {checked ? (
        <>
        <span className="checked_icon" style={{backgroundColor:props?.bgColor}}>
        <CheckIcon height={20} width={20} />
        </span>
        </>
      ) : (
        <>
        <span className="unchecked_icon" style={{height:'1rem',width:'1rem'}}>
        
        </span>
        </>
      )}
      <span ref={rippleRef}></span>
    </span>
     <span style={{cursor:'pointer'}}>{props.label}</span>
    </span>

  );
}
