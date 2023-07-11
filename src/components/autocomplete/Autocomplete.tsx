import { useEffect, useRef, useState } from "react";
import "./autocomplete.css";
import ReactDOM from "react-dom";
import { ForwardList } from "./list";

interface props {
  placeholder?: string;
  options?: string[];
  onSelecChange?: (data: any) => void;
  multi?: boolean;
}

export default function AutoComplete({
  placeholder,
  options = [],
  onSelecChange,
  multi,
}: props) {
  const bodyRef = useRef<HTMLBodyElement>(null);
  const [toggleList, setToggleList] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const [optionList, setoptionList] = useState<string[]>(options);
  const [multiList, setMultiList] = useState<string[]>([]);
  const listRef = useRef<HTMLUListElement>(null)
  const handleFocus = () => {
    // bodyRef.current?.appendChild(<List/>)
  };
  useEffect(() => {
    console.log("input ref", { value: inputRef.current.value });
  }, [inputRef]);
  const onSelect = (data) => {
    // inputRef.current.focus()
    if (multi) {
      setMultiList((prev) => [...prev, data]);
      setToggleList(false);
      return;
    }
    // console.log(data)
    onSelecChange(data);
    setToggleList(false);
    inputRef.current.value = data;
  };

  const removeItem = (idx) => {
    setMultiList((prev) => prev.filter((_, indx) => indx !== idx));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
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
    function handleOutsideClick(event) {
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target)
        && !listRef.current.contains(event.target)
      ) {
        // alert('outside')
        console.log("ouside");
        setToggleList(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [inputContainerRef]);

  return (
    <div className="input-wrapper" ref={inputContainerRef} tabIndex={1}>
      {multi &&
        multiList.map((item, idx) => {
          return (
            <>
              <span className="multiList-item">
                {item}
                <span className="cross-btn" onClick={() => removeItem(idx)}>
                  X
                </span>
              </span>
            </>
          );
        })}
      <input
        ref={inputRef}
        type="text"
        className="input-bg-color default-input-style"
        placeholder={placeholder}
        onFocus={() => {
          setToggleList(true);
        }}
        onChange={(e) => handleChange(e)}
        style={{ borderColor: multi ? "white" : "" }}
      />
      <span
        style={{
          cursor: "pointer",
          color: "white",
          width: "0.5rem",
          padding: "0rem 0.4rem",
          visibility:
            inputRef.current && inputRef.current.value === ""
              ? "hidden"
              : "visible",
        }}
        onClick={() => handleRemove()}
      >
        <span className="cross-btn">X</span>
      </span>

      {toggleList && (
        <ForwardList
          ref={listRef}
          options={optionList}
          position={{
            top: inputRef.current?.getBoundingClientRect().top,
            left: inputRef.current?.getBoundingClientRect().left,
            bottom: inputRef.current?.getBoundingClientRect().bottom,
            offsetWidth: inputRef.current?.offsetWidth,
          }}
          onSelect={(data) => {
            onSelect(data);
          }}
        />
      )}
    </div>
  );
}



