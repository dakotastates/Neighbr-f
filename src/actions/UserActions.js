const _userObject = (state) => ({
  user: {
    id: state.id,
    email: state.email,
    password: state.password,
    first_name: state.first_name,
    middle_name: state.middle_name,
    last_name: state.last_name,
    phone: state.phone,
    gender: state.gender,
    birthday: state.birthday,
    location_attributes: {
      longitude: state.longitude,
      latitude: state.latitude
    }
  },

});

export const createUser = (state) => {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_userObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/users", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_USER",
        payload: json.user,
      });
      // debugger
   }


};

// const geopositionToObject = geoposition => ({
//   timestamp: geoposition.timestamp,
//   coords: {
//     accuracy: geoposition.coords.accuracy,
//     latitude: geoposition.coords.latitude,
//     longitude: geoposition.coords.longitude
//   }
// })

// const geolocation = () => {
//    navigator.geolocation.getCurrentPosition((position) => {
//       const positionObj = geopositionToObject(position)
//       debugger
//       console.log(positionObj);
//       return positionObj
//   });
// }

function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, ({code, message}) =>
      reject(Object.assign(new Error(message), {name: "PositionError", code})),
      options);
    });
};

export const setUserLocation = () =>{
// debugger
return async (dispatch) => {

  let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

   const res = await getCurrentLocation(options);
   // const pos = await res;
   if (res.message) {
     throw new Error(res.message /*+ " " + json.message*/);
   }
   // debugger
   dispatch({
       type: 'FETCH_USER_LOCATION_SUCCESS',
       payload: res.coords
   });
 }

// return async (dispatch) => {
//    const geolocation = await navigator.geolocation;
//
//      geolocation.getCurrentPosition((position) => {
//        const positionObj =  geopositionToObject(position)
//        // debugger
//        console.log(positionObj);
//        dispatch({
//            type: 'FETCH_USER_LOCATION_SUCCESS',
//            payload: positionObj
//        });
//    });
//  }
}



export const storeUser = (user) => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({user}),
  };

  return async (dispatch) => {
    const res = await fetch("http://localhost:3000/api/v1/login", configObj);
    const json = await res.json();
    // debugger
    if (json.message) {
      throw new Error(json.message /*+ " " + json.message*/);
    }
    localStorage.setItem("token", json.jwt);
    dispatch({
       type: "STORAGE_USER",
       payload: json.user,
     });
  }
};

export const storeUsers = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/users", options);
    const json = await res.json();
    // debugger
    if (json.error) {
      debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_USERS",
      payload: json,
    });
  };
};

export const updateUser = (state, id) => {
  // debugger
  // console.log(state)
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(_userObject(state)),
  };

  return async (dispatch) => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3000/api/v1/users" + `/${id}`, options);

    const json = await res.json();
    // debugger
    if (json.errors) {
      throw new Error(json.errors /*+ " " + json.message*/);
    }
    dispatch({
      type: "UPDATE_USER",
      payload: json,
    });
  };
};

export const showUser = (id) => {
  // debugger
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {
// eslint-disable-next-line
    const res = await fetch("http://localhost:3000/api/v1/users" + `/${id}`, options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error);
    }
    dispatch({
      type: "SHOW_USER",
      payload: json,
    });
  };
};
