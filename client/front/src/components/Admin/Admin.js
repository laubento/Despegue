import React, { useEffect, useState } from "react";
// import MuiDataTable from 'mui-datatables'
import MaterialTable from 'material-table'
import { useDispatch, useSelector } from "react-redux";
import { deleteOffer, listOffers, listUsers, offersCreate, updateOffer, updateUser } from "../../Redux/Actions";
import '../styles/Admin.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Admin() {
    const dispatch = useDispatch()
    // const [render, setRender] = useState('')

    useEffect(e => {
        dispatch(listUsers())
        dispatch(listOffers())
        // setRender('chau')
    }, [dispatch])

    const users = useSelector(state => state.listUsers);
    const offers = useSelector(state => state.offersList);
    // console.log(users)
    const columns = [
        {
            title: 'Nombre',
            field: 'firstName',
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
            lookup: { admin: 'admin', user: 'user', vip: 'vip' },
            filterPlaceholder: 'Filtro por Rol'
        },
        {
            title: 'Status',
            field: 'active',
            lookup: { true: 'Activo', false: 'Desactivo' },
            filtering: false
        },
        {
            title: 'Banned',
            field: 'banned',
            lookup: { true: 'Banneado', false: 'No Baneado' },
            filterPlaceholder: 'Filtro por Banneado'
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
            // editable: false,
        },
        {
            title: 'Aerolinea',
            field: 'airlines',
            // editable: false,
        },
        {
            title: 'Escalas',
            field: 'scales',
            type: 'numeric',
            // editable: false,
        },
        {
            title: 'Salida',
            field: 'departureDate',
            type: 'time',
            // editable: false,

        },
        {
            title: 'Llegada',
            field: 'arrive',
            type: 'time',
            // editable: false,
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
            // editable: false,
        },
        {
            title: 'Desde',
            field: 'from',
            // editable: false,
        },
        {
            title: 'Hasta',
            field: 'to',
            // editable: false,
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
                            actions={[{
                                icon: () =><DeleteIcon/>,
                                tooltip: 'Click me',
                                // onClick: (e, data) => deleteOffer(data),
                            }]}
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
                                    dispatch(deleteOffer(selectedRow))
                                
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

