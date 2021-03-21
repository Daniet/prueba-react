import React from 'react'

import PanelController from '../components/panel_controller'
import Diagram from '../components/diagram'

const HomePage = () => <div className="page grid grid-cols-3">
    <div className="col-span-2">
        <Diagram />
    </div>
    <div className="col-span-1 flex justify-center">
        <PanelController />
    </div>
</div>

export default HomePage