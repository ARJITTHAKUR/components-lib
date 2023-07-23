import RadioOption from "../../components/radioGroup/radioOption";
import "./radioGroupPage.css"
export default function RadioGroupPage(){
    return (
        <>
        <div className="container">
            <section className="section-display">
            <h3 className="color-light">Radio Group</h3>
            <h5 className="color-light">With form</h5>
            <pre>
                <code>
                    variant="default"
                </code>
            </pre>
            <form action="">
                <div className="flex_container">

                <label htmlFor="">Option</label>
            <RadioOption id="first" name="option_one" label="first option" onChange={(e)=>"changed"}/>
            <RadioOption id="second" name="option_one" label="second option" onChange={(e)=>"changed"}/>
            <RadioOption id="third" name="option_one" label="third option" onChange={(e)=>"changed"}/>
                </div>
            </form>
            </section>

          </div>
        </>
    )
}