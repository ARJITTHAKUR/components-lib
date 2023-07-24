import { useState } from "react";
import RadioOption from "../../components/radioGroup/radioOption";
import "./radioGroupPage.css";
export default function RadioGroupPage() {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="container">
        <section className="section-display">
          <h3 className="color-light">Radio Group</h3>
          <h5 className="color-light">With form</h5>
          {/* <pre>
            <code>variant="default"</code>
          </pre> */}
          <div className="code_snippet_container">
            <pre className="code">
              <textarea
                wrap="off"
                className="code_snippet"
                placeholder={`
              const [selectedValue, setSelectedValue] = useState("a");

              const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
               setSelectedValue(event.target.value);
                 };
                <RadioOption checked={selectedValue === "first option"} id="first" name="option_one" label="first option" onChange={handleChange}/>
                <RadioOption checked={selectedValue === "second option"} id="second" name="option_one" label="second option" onChange={handleChange}/>
                <RadioOption checked={selectedValue === "third option"} id="third" name="option_one" label="third option" onChange={handleChange}/>
                `}
              ></textarea>
            </pre>
          </div>

          <div className="flex_container">
            <label htmlFor="">Option</label>
            <RadioOption
              checked={selectedValue === "first option"}
              id="first"
              name="option_one"
              label="first option"
              onChange={handleChange}
            />
            <RadioOption
              checked={selectedValue === "second option"}
              id="second"
              name="option_one"
              label="second option"
              onChange={handleChange}
            />
            <RadioOption
              checked={selectedValue === "third option"}
              id="third"
              name="option_one"
              label="third option"
              onChange={handleChange}
            />
          </div>
        </section>
      </div>
    </>
  );
}
