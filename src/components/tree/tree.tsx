import { ReactNode } from "react";


export default function Tree({treeObj}) {
    const Branch = (props) => {

        return props.value.map((ele) => {
          return (
            <details
              style={{
                marginLeft: "1rem",
                borderLeft: "1px solid black",
                paddingLeft: "0.5rem",
              }}
            >
              <summary>{props.name}</summary>
              {checkLeafOrBranch(ele)}
            </details>
          );
        });
      };
    
      const Leaf = (props) => {
        return (
          <>
            <div style={{ width: "100%", color: "grey", paddingLeft: "2.5rem" }}>
              {props.value}
            </div>
          </>
        );
      };
    
      const checkLeafOrBranch = (ele): ReactNode => {
        const keyVal = Object.entries(ele);
        const [key, value] = keyVal[0];
        if (typeof value === "string") {
          return <Leaf value={value} />;
        }
        return <Branch value={value} name={key} />;
      };

      return (
        <>
            {treeObj.map((ele, index) => {
            return (
              <>
                <div key={index} style={{marginBottom:"0.5rem"}}>{checkLeafOrBranch(ele)}</div>
              </>
            );
          })}
        </>
      )
}