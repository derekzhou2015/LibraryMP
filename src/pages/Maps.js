import React, { Component } from 'react';
import WeUI from 'react-weui';
import QQMap from 'QQMap';

import LogoImgSrc from '../images/common/logo.png';

const {Page} = WeUI;

class Maps extends Component {
    constructor(props){
        super(props);
        document.title ='电子地图';
    }

    componentDidMount() {
        let center = new QQMap.LatLng(31.229720,121.458360);
        let map = new QQMap.Map('mapContainer', {
            center: center,
            zoom:20
        });
        new QQMap.Marker({
            position: center,
            map: map
        });
        new QQMap.InfoWindow({
            map:map,
            position:center,
            visible:true,
            content:`<img src='${LogoImgSrc}' class='map-info' />`
        })

    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <div id="mapContainer" className='map-container'></div>
            </Page>
        );
    }
}

export default Maps;