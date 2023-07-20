import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { ForwardList } from "../autocomplete/list";
interface props {
  placeholder?: string;
  options?: string[];
  onSelecChange?: (data: any) => void;
  multi?: boolean;
}


export default function NewAutoComplete({options}: props) {
  // states
  const [clicked, setClicked] = useState(false);
  const [optionList, setoptionList] = useState<string[]>(options);


  // refs
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const listRef = useRef<HTMLUListElement>(null)


  const handleClick = () => {
    setClicked((prev) => !prev);
    inputRef.current.focus()
  };

  const handleOutsideClick = (e) => {
    console.log({ e });
    if (!wrapperRef.current.contains(e.target)) {
      setClicked(false);
    }
  };

  const removeItem = (idx) => {
    // setMultiList((prev) => prev.filter((_, indx) => indx !== idx));
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    // const filtered = options.filter(ele=>ele.includes(e.target.value))
    const regEx = new RegExp(e.target.value, "gi");
    const filtered = options.filter((ele) => regEx.test(ele));
    setoptionList(filtered);
  };
  
  const handleRemove = () => {
    inputRef.current.value = "";
    setoptionList(options);
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
      <input type="text" className="input_input" ref={inputRef} onChange={(e)=>handleChange(e)}/>
      <button className="input_icon_btn">
        <ChevronDownIcon height={20} width={20} className={clicked ? "btn_up" : "btn_down"}/>
      </button>
      
        <fieldset className={(clicked || inputRef?.current?.value?.length > 0) ? "show_fieldSet" : "hide"}>
          <legend >
            <span className="legend_animation">
            Choose
            </span>
            </legend>
        </fieldset>

        {clicked && (
        <ForwardList
          options={optionList}
          ref={listRef}
          position={{
            top: wrapperRef.current?.getBoundingClientRect().top,
            left: wrapperRef.current?.getBoundingClientRect().left,
            bottom: wrapperRef.current?.getBoundingClientRect().bottom,
            offsetWidth: wrapperRef.current?.offsetWidth,
          }}
          onSelect={(data) => {
            // onSelect(data);
            console.log({data})
            inputRef.current.value = data
          }}
        />
      )}
    </div>
  );
}
