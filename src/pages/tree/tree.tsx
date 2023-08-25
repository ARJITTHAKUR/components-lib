import { ReactNode } from "react";

export default function Tree() {
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

  const Branch = (props) => {
    console.log({ props });

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
    // return <>{checkLeafOrBranch(props.value)}</>;
  };

  const Leaf = (props) => {
    // console.log("leaf",props)
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
    console.log([key, value]);
    if (typeof value === "string") {
      return <Leaf value={value} />;
    }
    return <Branch value={value} name={key} />;
  };
  return (
    <>
      <div className="container">
        <section className="section-display">
          <h3>Tree Component</h3>
          {treeObj.map((ele, index) => {
            return (
              <>
                <div key={index} style={{marginBottom:"0.5rem"}}>{checkLeafOrBranch(ele)}</div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}
