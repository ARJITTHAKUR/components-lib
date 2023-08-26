import { useState } from "react";
import Tab from "../../components/tabs/tab";
import Tabs from "../../components/tabs/tabs";

export default function TabsPage() {
  const [value, setValue] = useState('1');
  return (
    <>
      <div className="container">
        <section className="section-display">
          <h3>Tabs Component</h3>
          <div>
          <Tabs setState={setValue}>
            <Tab lable={"one"} index={1}/> 
            <Tab lable={"two"} index={2}/>  
            <Tab lable={"three"} index={3}/>  
          </Tabs>
          <div style={{display:value === '1' ? 'block' : 'none'}}>
            one
          </div>
          <div style={{display:value === '2' ? 'block' : 'none'}}>
            two
          </div>
          <div style={{display:value === '3' ? 'block' : 'none'}}>
            three
          </div>
          </div>
        </section>
      </div>
    </>
  );
}
