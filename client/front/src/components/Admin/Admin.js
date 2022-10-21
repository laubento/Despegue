import React, { useEffect, useState } from "react";
// import MuiDataTable from 'mui-datatables'
import MaterialTable from 'material-table'
import { useDispatch, useSelector } from "react-redux";
import { listOffers, listUsers, offersCreate, updateOffer, updateUser } from "../../Redux/Actions";
import '../styles/Admin.css'


export default function Admin() {
    const dispatch = useDispatch()
    // const [render, setRender] = useState('')

    useEffect(e => {
        // dispatch(listUsers())
        dispatch(listOffers())
        // setRender('chau')
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
            filterPlaceholder: 'Filtro por Rol'
        },
        {
            title: 'Status',
            field: 'active',
            lookup: { true: 'Activo', false: 'Desactivo' },
            filtering: false
        },
    ]

    const columnsOffers = [
        {
            title: 'ID',
            field: '_id',
            editable: false,
        },
        {
            title: 'Aeropuerto',
            field: 'airport',
            editable: false,
        },
        {
            title: 'Aerolinea',
            field: 'airlines',
            editable: false,
        },
        {
            title: 'Escalas',
            field: 'scales',
            type: 'numeric',
            editable: false,
        },
        {
            title: 'Salida',
            field: 'departureDate',
            type: 'time',
            editable: false,

        },
        {
            title: 'Llegada',
            field: 'arrive',
            type: 'time',
            editable: false,
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
            field: 'returnDate',
            editable: false,
        },
        {
            title: 'Desde',
            field: 'from',
            editable: false,
        },
        {
            title: 'Hasta',
            field: 'to',
            editable: false,
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
                            options={{ filtering: true, columnsButton:true, rowStyle: {background:'#f5f5f5'}}}
                            editable={{
                                onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                                    dispatch(updateUser(newRow))
                                    // setRender('hola')
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
                            options={{addRowPosition: 'first', actionsColumnIndex: -1, columnsButton:true, rowStyle: {background:'#f5f5f5'}, selection:true}}
                            editable={{
                                onRowAdd:(newRow)=>new Promise((resolve, reject) =>{
                                    dispatch(offersCreate(newRow))
                                    
                                    resolve()
                                    window.location.reload()
                                }),
                                onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                                    dispatch(updateOffer(newRow))
                                
                                    resolve()
                                    window.location.reload()
                                }),
                                onRowDelete: (selectedRow) => new Promise((resolve, reject) =>{
                                    // dispatch(deleteOffer(selectedRow))
                                
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

