import { useState } from "react";
import Tab from "../../components/tabs/tab";
import Tabs from "../../components/tabs/tabs";
import classes from "./style.module.css"
export default function TabsPage() {
  const [value, setValue] = useState('1');
  return (
    <>
      <div className="container">
        <section className="section-display">
          <h3>Tabs Component</h3>
          <div>
          <Tabs setState={setValue}>
            <Tab lable={"One"} index={1}/> 
            <Tab lable={"Two"} index={2}/>  
            <Tab lable={"Three"} index={3}/>  
          </Tabs>
          <div style={{display:value === '1' ? 'block' : 'none'}} className={classes.tab_content}>
            <h5>One</h5>
            <p>
              Data for one
            </p>
          </div>
          <div style={{display:value === '2' ? 'block' : 'none'}} className={classes.tab_content}>
          <h5>Two</h5>
            <p>
              Data for two
            </p>
          </div>
          <div style={{display:value === '3' ? 'block' : 'none'}} className={classes.tab_content}>
          <h5>Three</h5>
            <p>
              Data for three
            </p>
          </div>
          </div>
        </section>
      </div>
    </>
  );
}
