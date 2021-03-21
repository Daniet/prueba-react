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

    const addRect = event => setSteap([...step, 'rect'])
    const addDiamont = event => setSteap([...step, 'diamont'])

    return <div className="flex justify-center justify-items-center display py-5">
        <svg className="diagram bg-white rounded-lg" viewBox="0 0 320 640" width="360" height="640">
            <g>
                <DiagramCircle />
                {step.map((x, key) => x === 'rect' ? <DiagramRect key={key} /> : <DiagramDiamond key={key} />)}
                <DiagramCircle />
            </g>
        </svg>
        <div>
            <button className="bg-blue-200 py-2 px-4 rounded" onClick={addRect}>
                Add {step.length}
            </button>
            <button className="bg-blue-200 py-2 px-4 rounded" onClick={addDiamont}>
                Add {step.length}
            </button>
        </div>
    </div>
}

export default Diagram