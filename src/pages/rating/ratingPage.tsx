import {RatingWidget} from "../../components/rating/rating";

export default function RatingPage(){
    return (
        <>
         <div className="container">
            <section className="section-display">
            <h3 className="color-light">Rating widge</h3>
            <h5 className="color-light">With Hover feedback and selection</h5>
            <pre>
                <code>
                    variant="text"
                </code>
            </pre>
            <RatingWidget>
                rating
            </RatingWidget>
            </section>
         
            {/* <section className="section-display">
            <h3 className="color-light">Rating widge</h3>
            <h5 className="color-light">With ripple effect</h5>
            <pre>
                <code>
                    variant="text"
                </code>
            </pre>
            <RatingWidget defaultValue={20}>
                rating
            </RatingWidget>
            </section> */}
          </div>
        </>
    )
}