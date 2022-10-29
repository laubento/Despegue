import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { addUserRole, listUsers } from "../../Redux/Actions";
import Admin from "../Admin/Admin";
import axios from "axios";

export default function PrivateRoute({ component, ...rest }) {
    let dispatch = useDispatch();

    // useEffect(e => {
    //     dispatch(listUsers())
    // }, [dispatch])

    // let usersList = useSelector(state => state.listUsers)

    // let user = useSelector((state) => state.user);
    // const user2 = JSON.parse(window.localStorage.getItem("user"));

    // if (!user && user2) user = user2;
    const cookie = document.cookie.split("token=");

    const mailOptions = {
        method: "POST",
        url: "/auth0/verifyCookies",
        headers: {
            "content-type": "application/json",
        },
    };

    const [user, setUser] = useState(null)

    useEffect(() => {
        const g = async () => {
            await axios(mailOptions)
                .then((data) => {
                    return data.data;
                })
                .then((response) => (setUser(response)))
                .catch((e) => setUser('notAdmin'));
        };
        g();
    },[])


    console.log(user);


    if(!user) return <h1>loa</h1>
  
    // console.log(userRole)
    // let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
    // if (userRole) {
    //     dispatch(addUserRole(userRole))
    //   }
    // console.log(userRole)

    return (
        <>

                <Route {...rest}>
                    {console.log(user)}
                    { user == "admin" ? <Admin /> : <Redirect to={"/"} />}
                </Route>


        </>
    );
}
