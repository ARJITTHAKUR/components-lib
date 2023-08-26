import classes from "./style.module.css"

interface props {
    children : React.ReactNode,
    setState : (number)=>void
}
export default function Tabs({children,setState} : props){
    const handleChange = (e)=>{
        // console.log(e)
        // console.log("data props",e.target.dataset.internalIndex)
        setState(e.target.dataset.internalIndex)
    }
    return (
        <>
            <div className={classes.tab_group} onClick={(e)=>handleChange(e)}>
                {
                    children
                }
            </div>
        </>
    )
}