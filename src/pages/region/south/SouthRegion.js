import React from 'react';
import { Map } from 'react-arcgis';
//import { Scene } from '@esri/react-arcgis';
import { Row } from 'reactstrap';
import './south.css';
import SouthWidget from './SouthWidget';
import SouthLayers from './SouthLayers';
import Query from './Query';
import SpatialQuery from './SpatialQuery';
import Date from './Date';


import SouthCustomers from '../southSummary/SouthCustomers'
import SouthNodes from '../southSummary/SouthNodes'
import SouthMetro from '../SouthInfra/MetroInfra'
import SouthMetroTest from '../SouthInfra/CoreWiseMetroInfra.js'

export default class SouthRegion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            viewProperties: {
                center: [68.726135,  26.448580],
                constraints : {
                    minZoom: 8,
                    maxZoom: 19
                  },
                popup: {
                    dockEnabled: true,
                    dockOptions: {                       
                        buttonEnabled: true,                    
                        breakpoint: false,
                        position: "bottom-left"
                    }
                },
                 ui: {
                     components: ["zoom", "compass", "attribution"]
                 }

            },
            height: '95.5vh',
            relheight:'0vh'
        }
        this.updateText1 = this.updateText1
    }
    updateText1 = (height, relheight) => {
        this.setState({height, relheight })
    }
 
    render(){   
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Row>

                    <Map    
                        className="scene__container"
                        style={{ width: '100vw', height: this.state.height }}
                        mapProperties={{ basemap: 'satellite' }}
                        viewProperties={this.state.viewProperties}

                    >
                         <SouthCustomers/>
                         <SouthNodes/>
                        <SouthWidget height={this.updateText1} />
                        <SouthLayers />
                        {/* <Query />
                        <SpatialQuery />       */}
                        {/* <Date />       */}
                    </Map> 
                     {/*    <button style={{ height: '25px' }} onClick={() => this.setState({ height: '90vh', relheight: '0vh' })}>-</button> */}
                        <div className='rel' style={{height:this.state.relheight}}></div>
                    </Row>       
                
                </div>
               
            </div> 
        )  
    }
}