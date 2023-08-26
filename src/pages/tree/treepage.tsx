import { ReactNode } from "react";
import Tree from "../../components/tree/tree";

export default function TreePage() {
  const treeObj = [
    { label1: "leaf" },
    { label2: "leaf" },
    {
      lable3: [{ sublabel1: "leaf" }],
    },
    {
      label4: [
        {
          sublabel5: [
            { sublabel6: "leaf" },
            { sublabe17: [{ sublabel8: "leaf" }] },
          ],
        },
      ],
    },
  ];


  return (
    <>
      <div className="container">
        <section className="section-display">
          <h3>Tree Component</h3>
          <pre>
                <code>
                    <textarea defaultValue="<Tree treeObj={treeObj}/>"
                     disabled={true} cols={30} rows={1}  style={{resize:"none"}}>
                    </textarea>
                </code>
            </pre>
            <h4>Tree object structure</h4>
            <pre>
                <code>
                    <textarea defaultValue={JSON.stringify(treeObj,null,2 )}
                     disabled={true} cols={50} rows={5}  style={{resize:"none"}}>
                    </textarea>
                </code>
            </pre>
          <Tree treeObj={treeObj}/>
        </section>
      </div>
    </>
  );
}
