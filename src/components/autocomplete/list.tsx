import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface listProps {
    options: string[];
    position: {
      top: number | undefined;
      left: number | undefined;
      bottom: number | undefined;
      offsetWidth: number | undefined;
    };
    onSelect: (data: string) => void | undefined;
    ref:ForwardedRef<HTMLUListElement>
  }


const List = ({ options, position, onSelect, ref }: listProps) => {
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
            // height: "15rem",
            overflowY: "scroll",
            maxHeight: "15rem",
            minHeight: "3rem",
          }}
          role="listbox"
          ref={ref}
        >
          {options && options.length > 0 ? (
            options.map((str, idx) => {
              return (
                <>
                  <option
                    key={`list-opt${idx}`}
                    value={str}
                    className="option-style"
                    onClick={(e) => onSelect(str)}
                    tabIndex={0}
                    role="listitem"
                    onFocus={() => {
                    }}
                  >
                    {str}
                  </option>
                </>
              );
            })
          ) : (
            <option className="option-style">no options</option>
          )}
        </ul>
      </>,
      document.body
    );
  };

export const ForwardList = forwardRef((props: listProps, ref)=>(<List ref={ref} {...props}/>))