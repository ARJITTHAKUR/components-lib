import classes from "./style.module.css"
export default function Tab({ lable, index }) {

  return (
    <>
      <button className={classes.tabs_button} aria-controls={`internal-${index}`} data-internal-index={index}>{lable}</button>
    </>
  );
}
