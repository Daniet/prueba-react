import React, {
    useEffect,
    useRef,
    useState,
} from 'react'
import * as d3 from 'd3'

const DiagramRect = () => {

    const element = useRef(null)

    const [x, setX] = useState(180)
    const [y, setY] = useState(30)

    useEffect(() => {
        let node = d3.select(element.current)
        node.call(d3.drag().on('drag', event => {
            setX(event.x - 40)
            setY(event.y - 20)
        }))
    })

    return <rect
        width="80"
        height="40"
        x={x}
        y={y}
        ry="5"
        rx="5"
        ref={element}
    />
}

export default DiagramRect