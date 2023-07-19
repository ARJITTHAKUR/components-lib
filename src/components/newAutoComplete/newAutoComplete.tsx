import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./style.css";
import { useEffect, useRef, useState } from "react";
interface props {}

export default function NewAutoComplete({}: props) {
  // states
  const [clicked, setClicked] = useState(false);

  // refs
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    console.log({ e });
    if (!wrapperRef.current.contains(e.target)) {
      setClicked(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [wrapperRef]);
  return (
    <div
      className={(clicked || inputRef?.current?.value?.length > 0) ? "wrapper_clicked" : "new_input_wrapper"}
      onClick={() => {
        handleClick();
      }}
      ref={wrapperRef}
    >
      <label htmlFor="" className={(clicked || inputRef?.current?.value?.length > 0)  ? "hide" : "input_label"}>
        Choose
      </label>
      <input type="text" className="input_input" ref={inputRef} />
      <button className="input_icon_btn">
        <ChevronDownIcon height={20} width={20} className={clicked ? "btn_up" : "btn_down"}/>
      </button>
      
        <fieldset className={(clicked || inputRef?.current?.value?.length > 0) ? "show_fieldSet" : "hide"}>
          <legend>Choose</legend>
        </fieldset>
    </div>
  );
}
