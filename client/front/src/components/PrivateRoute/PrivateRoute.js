import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { addUserRole, listUsers } from "../../Redux/Actions";
import Admin from "../Admin/Admin";
import _ from 'lodash'

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
    
    // console.log(userRole)
    // let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
    // if (userRole) {
    //     dispatch(addUserRole(userRole))
    //   }
    // console.log(userRole)

}
