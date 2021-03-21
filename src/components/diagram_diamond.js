import React, {
    useEffect,
    useRef,
    useState,
} from 'react'
import * as d3 from 'd3'

const DiagramDiamond = () => {

    const element = useRef(null)

    const [x, setX] = useState(180)
    const [y, setY] = useState(30)

    useEffect(() => {
        let node = d3.select(element.current)
        node.call(d3.drag().on('drag', event => {
            setX(event.x)
            setY(event.y - 28.28)
        }))
    })
    
    return <g transform={`translate(${x}, ${y})`} ref={element}>
        <rect
            width="40"
            height="40"
            x="0"
            y="0"
            transform="rotate(45)"
        />
    </g>
}

export default DiagramDiamond