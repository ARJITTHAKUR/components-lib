import Button from "../../components/buttons/buttons";

export default function ButtonsPage(){
    return (
        <>
          <div className="container">
            <section className="section-display">
            <h3 className="color-light">Buttons</h3>
            <h5 className="color-light">With ripple effect</h5>
            <pre>
                <code>
                    variant="text"
                </code>
            </pre>
             <Button variant="text" onClick={()=>console.log('clicked')}>
                this is inner content
             </Button>
            </section>

            <section className="section-display">
            <h3 className="color-light">Outlined Buttons</h3>
            <h5 className="color-light">With ripple effect</h5>
            <pre>
                <code>
                    variant="outlined"
                </code>
            </pre>
             <Button variant="outlined" onClick={()=>console.log('clicked')}>
                this is inner content
             </Button>
            </section>

            <section className="section-display">
            <h3 className="color-light">Contained Buttons</h3>
            <h5 className="color-light">With ripple effect</h5>
            <pre>
                <code>
                    variant="contained"
                </code>
            </pre>
             <Button variant="contained" onClick={()=>console.log('clicked')}>
                this is inner content
             </Button>
            </section>
          </div>
        </>
      );
}