import React, { useEffect, useState } from "react";
// import MuiDataTable from 'mui-datatables'
import MaterialTable from 'material-table'
import { useDispatch, useSelector } from "react-redux";
import { deleteOffer, listOffers, listUsers, offersCreate, updateOffer, updateUser } from "../../Redux/Actions";
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/Admin.css'

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

    const columns = [
        {
            title: 'Nombre',
            field: 'name',
            editable: false,
            filtering: false
        },
        // {
        //     title: 'Apellido',
        //     field: 'lastname',
        //     editable: false,
        //     filtering: false
        // },
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
            title: 'Membership',
            field: 'membership',
            lookup: { true: 'Con Membership', false: 'Sin Membership' },
            filterPlaceholder: 'Filtro por membership',
            editable: false,
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
            title: 'Imagen',
            field: 'image',
            // editable: false,
        },
        {
            title: 'Cant. Dias',
            field: 'day',
            // editable: false,
        },
        {
            title: 'Cant. Noches',
            field: 'nigth',
            // editable: false,
        },
        {
            title: 'Nombre del pais',
            field: 'name',
            // type: 'numeric',
            // editable: false,
        },
        {
            title: 'Dia de salida',
            field: 'dateFrom',
            // type: 'time',
            // editable: false,

        },
        {
            title: 'Dia de vuelta',
            field: 'dateTo',
            // type: 'time',
            // editable: false,

        },
        {
            title: 'Aeropuerto de salida',
            field: 'nameAirportFrom',
            // type: 'time',
            // editable: false,
        }, {
            title: 'Aeropuerto de llegada',
            field: 'nameAirportTo',
            // type: 'time',
            // editable: false,
        },
        {
            title: 'Asistencia',
            field: 'asistans',
            lookup: { Estandar: 'Estandar', Basica: 'Basica', Premium: 'Premium', },
            // type: 'currency'
        },
        {
            title: 'Rating',
            field: 'rating',
            lookup: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
        },
        {
            title: 'Precio',
            field: 'price',
            type: 'currency',
            // editable: false,
        },
        // {
        //     title: 'Desde',
        //     field: 'from',
        //     // editable: false,
        // },
        // {
        //     title: 'Hasta',
        //     field: 'to',
        //     // editable: false,
        // },
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
                            options={{ filtering: true, actionsColumnIndex: -1, columnsButton: true, rowStyle: { background: '#f5f5f5' }, paginationType: 'stepped' }}
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
                                icon: () => <DeleteIcon />,
                                tooltip: 'Click me',
                                onClick: (e, data) => dispatch(deleteOffer(data))
                            }]}
                            options={{ addRowPosition: 'first', actionsColumnIndex: -1, columnsButton: true, paginationType: 'stepped', rowStyle: { background: '#f5f5f5' }, selection: true }}
                            editable={{
                                onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                    dispatch(offersCreate(newRow))

                                    resolve()
                                    window.location.reload()
                                }),
                                onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                                    dispatch(updateOffer(newRow))

                                    resolve()
                                    window.location.reload()
                                }),
                                onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
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

