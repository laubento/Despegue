import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { addUserRole, listUsers } from "../../Redux/Actions";
import Admin from "../Admin/Admin";


export default function PrivateRoute({ component, ...rest }) {
    let dispatch = useDispatch();

    useEffect(e => {
        dispatch(listUsers())
    }, [dispatch])

    let usersList = useSelector(state => state.listUsers)
    let user = useSelector(state => state.user)
    // console.log(userRole)
    let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
    if (userRole) {
        dispatch(addUserRole(userRole))
      }
    // console.log(userRole)
    return (
        <Route {...rest}>
            {userRole ? userRole.roles ? userRole.roles[0] === 'admin' ? <Admin /> : <Redirect to={'/'} /> : null : null}
        </Route>
    )
}
