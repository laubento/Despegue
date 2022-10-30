import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { addUserRole, listUsers } from "../../Redux/Actions";
import Admin from "../Admin/Admin";
import _ from 'lodash'
import axios from "axios";

export default function PrivateRoute({ component, ...rest }) {
  let dispatch = useDispatch();

  // useEffect(e => {
  //     dispatch(listUsers())
  // }, [dispatch])

  // let usersList = useSelector(state => state.listUsers)

    const reduxUser = useSelector((state) => state.user);
    const localUser = JSON.parse(window.localStorage.getItem("user"));

    if(!reduxUser){
        return <h1>loading...</h1>
    }
    return (
        <Route {...rest}>   
            {_.isEqual(reduxUser, localUser) && localUser.roles.includes('admin') ? <Admin /> : <Redirect to={'/'} />}
        </Route>
    )
}
    
    // console.log(userRole)
    // let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
    // if (userRole) {
    //     dispatch(addUserRole(userRole))
    //   }
    // console.log(userRole)

  // let user = useSelector((state) => state.user);
  // const user2 = JSON.parse(window.localStorage.getItem("user"));

  // if (!user && user2) user = user2;

//   const mailOptions = {
//     method: "POST",
//     url: "/auth0/verifyCookies",
//     headers: {
//       "content-type": "application/json",
//     },
//   };

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const g = async () => {
//       await axios(mailOptions)
//         .then((data) => {
//           return data.data;
//         })
//         .then((response) => setUser(response))
//         .catch((e) => setUser("notAdmin"));
//     };
//     g();
//   }, []);

//   console.log(user);

//   if (!user) return <h1>loa</h1>;

//   // console.log(userRole)
//   // let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
//   // if (userRole) {
//   //     dispatch(addUserRole(userRole))
//   //   }
//   // console.log(userRole)

//   return (
//     <>
//       <Route {...rest}>
//         {console.log(user)}
//         {user == "admin" ? <Admin /> : <Redirect to={"/"} />}
//       </Route>
//     </>
//   );
// }
