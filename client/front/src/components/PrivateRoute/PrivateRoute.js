import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { listUsers } from "../../Redux/Actions";


export default function PrivateRoute({ component, ...rest }) {
    let dispatch = useDispatch();
    
    useEffect(e => {
        dispatch(listUsers())
    }, [dispatch])

    let usersList = useSelector(state => state.listUsers)
    let user = useSelector(state => state.user)
    
    let userRole = usersList && user ? usersList.find(e => e.email === user.email) : null

    return (
        <Route {...rest}>
            {userRole ? userRole.roles[0] === 'admin' : null ? <component /> : <Redirect to={'/'} />}
        </Route>
    )
}
