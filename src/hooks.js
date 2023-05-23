import {useState, useEffect, useRef} from "react"

export default function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    const handleMouseEnter = () => {
        setHovered(true);
     };
     const handleMouseLeave = () => {
        setHovered(false);
     };

     useEffect(() => {

        const refCurrent =  ref.current

        ref.current.addEventListener("mouseenter", handleMouseEnter)
        ref.current.addEventListener("mouseleave", handleMouseLeave)
        
        return () => {    
            refCurrent.removeEventListener("mouseenter", handleMouseEnter)
            refCurrent.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return [hovered, ref]

}