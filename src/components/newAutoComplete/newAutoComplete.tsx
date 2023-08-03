import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import NewList from "./newListComponent";
interface props {
  placeholder?: string;
  options?: string[];
  onSelecChange?: (data: any) => void;
  multi?: boolean;
}

export default function NewAutoComplete({ options }: props) {
  // states
  const [clicked, setClicked] = useState(false);
  const [optionList, setoptionList] = useState<string[]>(options);

  // refs
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const listRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    setClicked((prev) => !prev);
    inputRef.current.focus();
  };

  const handleOutsideClick = (e) => {
    if (!wrapperRef.current.contains(e.target)) {
      setClicked(false);
    }
  };

  const removeItem = (idx) => {
    // setMultiList((prev) => prev.filter((_, indx) => indx !== idx));
  };

  const handleChange = (e) => {
    if(!clicked)
    setClicked(true)
    const regEx = new RegExp(e.target.value, "gi");
    const filtered = options.filter((ele) => regEx.test(ele));
    setoptionList(filtered);
  };

  const handleRemove = () => {
    inputRef.current.value = "";
    setoptionList(options);
  };

  const handleSelect = (data: string) => {
    inputRef.current.value = data;
    setClicked(false);
  };
  const clearInput = (e: React.MouseEvent)=>{
    e.preventDefault()
    inputRef.current.value = ''

  }
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [wrapperRef]);
  return (
    <div
      className={
        clicked || inputRef?.current?.value?.length > 0
          ? "wrapper_clicked"
          : "new_input_wrapper"
      }
      onClick={() => {
        handleClick();
      }}
      ref={wrapperRef}
    >
      <label
        htmlFor=""
        className={
          clicked || inputRef?.current?.value?.length > 0
            ? "hide"
            : "input_label"
        }
      >
        Choose
      </label>
      <input
        type="text"
        className="input_input"
        ref={inputRef}
        onChange={(e) => handleChange(e)}
      />
      <span className="btn_container">
      <span tabIndex={-1}><XMarkIcon height={20} width={20} onClick={(e)=>clearInput(e)}
       style={{visibility : inputRef?.current?.value.length > 0  ? 'visible':'hidden',
       cursor:"pointer",
       }}
       /></span>
    
      <button className="input_icon_btn" tabIndex={-1}>
        <ChevronDownIcon
          height={20}
          width={20}
          className={clicked ? "btn_up" : "btn_down"}
        />
      </button>
      </span>

      <fieldset
        className={
          clicked || inputRef?.current?.value?.length > 0
            ? "show_fieldSet"
            : "hide"
        }
      >
        <legend>
          <span className="legend_animation">Choose</span>
        </legend>
      </fieldset>

      {clicked && (
        <NewList
          key={"option-list"}
          options={optionList}
          position={{
            top: wrapperRef.current?.getBoundingClientRect().top,
            left: wrapperRef.current?.getBoundingClientRect().left,
            bottom: wrapperRef.current?.getBoundingClientRect().bottom,
            offsetWidth: wrapperRef.current?.offsetWidth,
          }}
          onSelect={(data) => handleSelect(data)}
        />
      )}
    </div>
  );
}
