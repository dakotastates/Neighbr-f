// import React, { useState, useEffect } from 'react'
//
//
//
// function CurrentLocation(props) {
// const [currentLocation, setCurrentLocation] = useState({ownPosition: 0})
//
// useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       let pos = {
//      lat: position.coords.latitude,
//      lng: position.coords.longitude
//    };
//    // setCurrentLocation({ownPosition: pos})
//    setCurrentLocation({ownPosition: pos})
// })
//   }
// }, []);
//
//
//   return(
//     <div>
//     {console.log(currentLocation)}
//     </div>
//
//   )
// }
//
// export default CurrentLocation;
// import React, { useState, useEffect } from 'react'



export const currentLocation = () => {
// const [currentLocation, setCurrentLocation] = useState({ownPosition: 0})
const location
// useEffect(() => {
  // if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos = {
     lat: position.coords.latitude,
     lng: position.coords.longitude
   };
   // setCurrentLocation({ownPosition: pos})
   // setCurrentLocation({ownPosition: pos})
return (pos)
})


  // }
// }, []);


  // return(
  //   <div>
  //   {console.log(currentLocation)}
  //   </div>
  //
  // )
}

// export default CurrentLocation;
