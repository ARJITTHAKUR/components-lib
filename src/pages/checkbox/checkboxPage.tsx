import Checkbox from "../../components/checkbox/checkbox";
import "./checkboxPage.css"
export default function CheckBoxPage(){
    return (
        <>
        <div className="container">
            <section className="section-display">
            <h3 className="color-light">Default Check Box</h3>
            <h5 className="color-light">With ripple effect</h5>
            <pre>
                <code>
                label="Label"
                </code>
            </pre>
            <textarea
            disabled
                wrap="off"
                className="code_snippet_checkbox"
                placeholder={`
                <Checkbox onClick={(e)=>console.log({e})}/>
                <Checkbox onClick={(e)=>console.log({e})} label="Label"/>
                `}
              ></textarea>
            <div className="flex_container">
            <Checkbox onClick={(e)=>console.log({e})}/>
            <Checkbox onClick={(e)=>console.log({e})} label="Label"/>
            </div>
            </section>

            <section className="section-display">
            <h3 className="color-light">Check Box</h3>
            <h5 className="color-light">With Label and different color</h5>
            <pre>
                <code>
                    label="A Label"
                    bgColor="#9f1239"
                </code>
            </pre>
            <div className="flex_container">
            <Checkbox onClick={(e)=>console.log({e})} label="A Label" bgColor="#9f1239"/>
            </div>
            </section>
          </div>
        </>
    )
}