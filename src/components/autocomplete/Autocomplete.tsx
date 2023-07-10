import { useEffect, useRef, useState } from "react";
import "./autocomplete.css";
import ReactDOM from "react-dom";

interface props {
  placeholder?: string;
  options?: string[];
}

export default function AutoComplete({}: props) {
  const bodyRef = useRef<HTMLBodyElement>(null);
  const [toggleList, setToggleList] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // bodyRef.current?.appendChild(<List/>)
  };
  //   useEffect(() => {
  //     console.log("input ref", inputRef.current);
  //   }, [inputRef]);
  return (
    <div className="input-wrapper">
      <input
        ref={inputRef}
        type="text"
        className="input-bg-color default-input-style"
        placeholder="empty"
        onFocus={() => {
          setToggleList(true);
        }}
        onBlur={() => {
          setToggleList(false);
        }}
      />
      {toggleList && (
        <List
          options={["option 1", "option 2"]}
          position={{
            top: inputRef.current?.getBoundingClientRect().top,
            left: inputRef.current?.getBoundingClientRect().left,
            offsetWidth: inputRef.current?.offsetWidth,
          }}
          onSelect={(data) => console.log({ data })}
        />
      )}
    </div>
  );
}
interface listProps {
  options?: string[];
  position: {
    top: number | undefined;
    left: number | undefined;
    offsetWidth: number | undefined;
  };
  onSelect: (data: string) => void | undefined;
}
const List = ({ options, position, onSelect }: listProps) => {
  //   console.log({ options, position });
  const transformValue = `translateY(30px)`;
  return ReactDOM.createPortal(
    <>
      <ul
        className="list-items"
        style={{
          top: position.top,
          left: position.left,
          width: position.offsetWidth,
          transform: transformValue,
          zIndex: 10,
        }}
      >
        {options &&
          options.map((str, idx) => {
            return (
              <>
                {/* <li>{str}</li> */}
                <option
                  key={`list-opt${idx}`}
                  value={str}
                  className="option-style"
                  onClick={() => onSelect(str)}
                >
                  {str}
                </option>
              </>
            );
          })}
      </ul>
    </>,
    document.body
  );
};
