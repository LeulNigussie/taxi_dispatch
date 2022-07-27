
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {NavigationControl,}  from "mapbox-gl";
import { ScaleControl } from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import classes from "./main.module.css";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


function Map(props) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fsa2lkYW5kZXJzbyIsImEiOiJjbDM0c3Z2YnIweWFhM2pwNTBlanZwNTIxIn0.BuXnDWLyi-lzmd-gKKiMDA';
  const geoCoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    style: {width: "100px"}
    })
    const newGeoCoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(38.7595);
  const [lat, setLat] = useState( 9.0234);
  const [zoom, setZoom] = useState(9);

  const [someData, setSomeData] = useState({});
  const [startPlaceName, setStartPlaceName] = useState("");
  const [destinationPlaceName, setDestinationPlaceName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
    
    // map.current.addControl(geoCoder);
    document.getElementById('geocoder').appendChild(geoCoder.onAdd(map.current));
    // map.current.addControl(geoCoder);
    document.getElementById('newGeocoder').appendChild(newGeoCoder.onAdd(map.current));
    
      map.current.addControl(new mapboxgl.NavigationControl());

      map.current.on('load', () => {
        map.current.addSource('single-point', {
        'type': 'geojson',
        'data': {
        'type': 'FeatureCollection',
        'features': []
        }
        });
         
        map.current.addLayer({
        'id': 'point',
        'source': 'single-point',
        'type': 'circle',
        'paint': {
        'circle-radius': 10,
        'circle-color': '#448ee4'
        }
        });


        map.current.addSource('single-points', {
          'type': 'geojson',
          'data': {
          'type': 'FeatureCollection',
          'features': []
          }
          });
           
          map.current.addLayer({
          'id': 'points',
          'source': 'single-points',
          'type': 'circle',
          'paint': {
          'circle-radius': 10,
          'circle-color': '#448ee4'
          }
          });
         
        // Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
        //  Add a marker at the result's coordinates
        geoCoder.on('result', (event) => {
        map.current.getSource('single-point').setData(event.result.geometry);
        setSomeData(event.result.geometry);
        setStartPlaceName(event.result.place_name);
       
      });

      newGeoCoder.on('result', (event) => {
        map.current.getSource('single-points').setData(event.result.geometry);
        setDestinationPlaceName(event.result.place_name);
        // setSomeData(event.result.geometry);
      });

    });
  });

  const submitFormHandler = () => {

  }

  return (
    <div className={classes.mainContent}>
       <link href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css" rel="stylesheet"></link>
         <script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js"></script>
         <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
         <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css"></link>
         <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
       <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js'></script>
       <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />

    <div className={classes.titleDivision}>
      <p className={classes.labler}>Manual Booking</p>
      </div>      
      {/* <button onClick={() => Router.push("/drivers/add_drivers")} className={classes.addPassenger}>Manua</button>     */}
      <div className={classes.otherDivision}>
          <div className={classes.contentDiv}>
          <form onSubmit={submitFormHandler} className={classes.form}>
             
               
               <div className={classes.formControl}>
                 <label className={classes.label} htmlFor="email">Email: <span className={classes.alert}>*</span></label>
                 <input value={email} onChange={(e) =>{
                    setEmail(e.target.value)}
                   }
                     className={classes.input} type="email" id='email' required />
               </div>
               <div className={classes.geoCoderFormControl}>
               <div className={classes.formControl}>
                 <label className={classes.label}
                  htmlFor="startingPlace">Starting Place:
                   <span className={classes.alert}>*</span></label>
                   <div  id="geocoder" className={classes.geocoder}>
                   <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
                   </div>
               </div>
               <div className={classes.formControl}>
                 <label className={classes.label}
                  htmlFor="destination">Destination:
                   <span className={classes.alert}>*</span></label>
                   <div  id="newGeocoder" className={classes.geocoder}></div>
               </div>
               </div>
              
               <div className={classes.buttons}>
               <button type='submit' className={classes.save}>Save</button>    
               <button type='reset' className={classes.save}>Reset</button>    
               </div>
             </form>
          </div>
          <div className={classes.mapDiv}>
          
             <div className={classes.map}>
            <div className={classes.mapsidebar}>
           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
         </div>
         <div ref={mapContainer} className={classes.mapContainer} /> 
       
          </div>
       
      </div>
   </div>
</div>
  );
}

export default Map;
