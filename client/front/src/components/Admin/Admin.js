import React, { useEffect, useState } from "react";
// import MuiDataTable from 'mui-datatables'
import MaterialTable from 'material-table'
import { useDispatch, useSelector } from "react-redux";
import { listUsers, updateUser } from "../../Redux/Actions";
import '../styles/Admin.css'

export default function Admin() {
    const dispatch = useDispatch()

    useEffect(e => {
        dispatch(listUsers())
        console.log('renderize')
    }, [dispatch])

    const users = useSelector(state => state.listUsers)
    const [render, setRender] = useState()

    const columns = [
        {
            title: 'Nombre',
            field: 'name',
        },
        {
            title: 'Email',
            field: 'email'
        },
        {
            title: 'Rol',
            field: 'roles',
        },
    ]

    return (
        <div className="usersTable">

            <MaterialTable
                title={'Lista de usuarios'}
                columns={columns}
                data={users}
                // options={}
                editable={{
                    onRowUpdate:(newRow, oldRow) => new Promise((resolve, reject) =>{
                        dispatch(updateUser(newRow))
                        setRender()
                        setTimeout(() =>resolve(),500)
                    })
                }}
            />
        </div>
    );
}

