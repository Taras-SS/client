import React, {Component, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../markers/marker'


function Maping({data}){
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyADCVL43V17x0zXB_5ui2E9BHzhZ-RZtiU' }}
                defaultCenter={{lat: 50.272796, lng: 30.31428}}
                defaultZoom={7}
            >
                {data.map(item =>
                    <Marker
                        lat={item.fullAdress.lat}
                        lng={item.fullAdress.lon}
                        name={item.title}
                        color="red"
                    />
                )}
            </GoogleMapReact>
        </div>
    );
}

export default Maping;
