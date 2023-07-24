import { StarIcon } from "@heroicons/react/24/outline"
import { FunctionComponent, useState } from "react"
import  "./rating.css"
interface props extends React.HtmlHTMLAttributes<HTMLSpanElement>{
    children : React.ReactNode,
    defaultValue ?: number,
    max  ?:number
}

export const RatingWidget: FunctionComponent<props> = (props:props)=>{
    const starArray = new Array(5).fill(props.defaultValue)
    const selectedMap = new Array(props.defaultValue)
    const [selected, setSelected] = useState(new Array(props.defaultValue).fill(false))

    const [hovered, setHovered] = useState(new Array(props.defaultValue).fill(false))
    const handleMouseEnter = (idx:number) =>{
        const updatedStar = hovered.map((star,i)=>i<=idx?true:false)
        setHovered(updatedStar)
    }
    const handleMouseLeave = (idx:number)=>{
        setHovered(selected)
    }
    const selectStart = (idx:number)=>{
        const updatedStar = selected.map((star,i)=>i<=idx?true:false)
        setSelected(updatedStar)
    }
    return (
        <>
        <span className="rating_container">
            <span className="rating_label">
                {
                    props.children
                }
            </span>
            <span>
                {
                    starArray.map((star,i)=>{
                        return <>
                        <StarIcon height={20} width={20} style={{color: selected[i] || hovered[i] ? 'yellow' : null}}
                         onMouseEnter={(e)=>handleMouseEnter(i)}
                         onMouseLeave={(e)=>{handleMouseLeave(i)}}
                         onClick={()=>{selectStart(i)}}
                         key={`${i}-star`}
                         />
                        </>
                    })

                }
            </span>
        </span>

        </>
    )
}

RatingWidget.defaultProps = {
    defaultValue : 5
}