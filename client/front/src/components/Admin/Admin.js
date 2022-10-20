import React, { useEffect, useState } from "react";
// import MuiDataTable from 'mui-datatables'
import MaterialTable from 'material-table'
import { useDispatch, useSelector } from "react-redux";
import { listOffers, listUsers, offersCreate, updateUser } from "../../Redux/Actions";
import '../styles/Admin.css'
import { Link, useHistory } from "react-router-dom";

export default function Admin() {
    const dispatch = useDispatch()
    const [render, setRender] = useState('')

    useEffect(e => {
        dispatch(listUsers())
        dispatch(listOffers())
        setRender('chau')
    }, [dispatch])

    const users = useSelector(state => state.listUsers);
    const offers = useSelector(state => state.offersList);
    
    const columns = [
        {
            title: 'Nombre',
            field: 'name',
            editable: false,
            filtering: false
        },
        {
            title: 'Email',
            field: 'email',
            editable: false,
            filtering: false
        },
        {
            title: 'Rol',
            field: 'roles',
            lookup: { admin: 'admin', user: 'user' },
        },
        {
            title: 'Status',
            field: 'active',
            lookup: { true: 'Activo', false: 'Desactivo' },
            editable: false,
            filtering: false
        },
    ]

    const columnsOffers = [
        {
            title: 'Aeropuerto',
            field: 'airport'
        },
        {
            title: 'Aerolinea',
            field: 'airlines'
        },
        {
            title: 'Escalas',
            field: 'scales',
            type: 'numeric'
        },
        {
            title: 'Salida',
            field: 'departureDate',
            type: 'time'

        },
        {
            title: 'Llegada',
            field: 'arrive',
            type: 'time',
        },
        {
            title: 'Precio Anterior',
            field: 'prevPrice',
            type: 'currency'
        },
        {
            title: 'Precio',
            field: 'price',
            type: 'currency'
        },
        {
            title: 'Regreso',
            field: 'returnDate'
        },
        {
            title: 'Desde',
            field: 'from'
        },
        {
            title: 'Hasta',
            field: 'to'
        },
    ]

    return (
        <div className="d-flex">
            <div className="usersTable">
                <div className="tableUsers">
                    <h2>Usuarios</h2>
                    <div>
                        <MaterialTable
                            title={'Lista de usuarios'}
                            columns={columns}
                            data={users}
                            options={{ filtering: true}}
                            editable={{
                                onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                                    dispatch(updateUser(newRow))
                                    setRender('hola')
                                    resolve()
                                    window.location.reload()
                                })
                            }}
                        />
                    </div>
                </div>
                <div className="tableUsers">
                    <h2>Ofertas</h2>
                    <div>
                        <MaterialTable
                            title={'Lista de Ofertas'}
                            columns={columnsOffers}
                            data={offers}
                            options={{addRowPosition: 'first', actionsColumnIndex: -1}}
                            editable={{
                                onRowAdd:(newRow)=>new Promise((resolve, reject) =>{
                                    dispatch(offersCreate(newRow))
                                    
                                    resolve()
                                    window.location.reload()
                                })
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

