import React, {
    useEffect,
    useRef,
    useState,
} from 'react'
import * as d3 from 'd3'

const DiagramCircle = () => {

    const element = useRef(null)

    const [x, setX] = useState(180)
    const [y, setY] = useState(30)

    useEffect(() => {
        let node = d3.select(element.current)
        node.call(d3.drag().on('drag', event => {
            setX(event.x)
            setY(event.y)
        }))
    })

    return <circle cx={x} cy={y} r="20" ref={element} />
}

export default DiagramCircle