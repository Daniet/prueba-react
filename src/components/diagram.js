import React, {
    useEffect,
    useState,
} from 'react'

import DiagramRect from './diagram_react'
import DiagramDiamond from './diagram_diamond'

import './diagram.css'
import DiagramCircle from './diagram_circle'


const Diagram = () => {

    useEffect(() => {

    }, [])

    const [step, setSteap] = useState([])


    return <div className="flex justify-center justify-items-center display py-5">
        <svg className="diagram bg-white rounded-lg" viewBox="0 0 320 640" width="360" height="640">
            <g>
                <DiagramCircle />
                <DiagramRect />
                <DiagramDiamond />
                <DiagramCircle />
            </g>
        </svg>
    </div>
}

export default Diagram