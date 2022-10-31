import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFlights, clearFlights, searchAirportFrom, searchAirportTo, clearCart, clearAirportsName } from '../../Redux/Actions';
import Persona from '../../Images/persona.png'
import Record from "../Record/Record";
import '../styles/FlightSearch.css'

export default function FlightsSearch() {

    const dispatch = useDispatch();
    const history = useHistory()
    // global states
    let airportsFrom = useSelector((state) => state.airportsFrom);
    let airportsTo = useSelector((state) => state.airportsTo);

    // local states
    const [airportName, setAirportName] = useState({
        from: '',
        to: ''
    });
    const [activateFrom, setActivateFrom] = useState(false)
    const [activateTo, setActivateTo] = useState(false)
    const [p, setP] = useState(0)
    const [flights, setFlights] = useState({
        tripType: 'onewaytrip',
        departurePlace: '',
        arrivalPlace: '',
        departureDate: '',
        returningDate: '',
        cabinClass: 'Economy',
        adults: 1,
        children: 0,
        infants: 0,
        currency: 'USD'
        // tripType:'roundtrip',
        // departurePlace: 'EZE',
        // arrivalPlace: 'LIM',
        // departureDate: '2022-12-01',
        // returningDate: '2022-12-15',
        // cabinClass: 'Economy',
        // adults: 1,
        // children: 0,
        // infants: 0,
        // currency: 'USD'
        // tripType:'onewaytrip',
        // departurePlace: 'EZE',
        // arrivalPlace: 'LIM',
        // departureDate: '2022-12-01',
        // returningDate: '',
        // cabinClass: 'Economy',
        // adults: 1,
        // children: 0,
        // infants: 0,
        // currency: 'USD'
    })
    const [errors, setErrors] = useState({
        allEmpty: '',
        departureEmpty: '',
        returningEmpty: ''
    })
    const [searchError, setSearchError] = useState({
        vacio: '',
        most: ''
    })

    // variables
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    const Today = `${year}-${month}-${day}`
    // let p = 0;

    // functions
    // Lugares disponibles
    const handleChange = (e) => {
        // Seteo de la fecha arrive en caso de cambio
        if (e.target.name === 'departureDate') {
            setErrors({
                departureEmpty: ''
            })
            return setFlights({ ...flights, returningDate: '', [e.target.name]: e.target.value })
        }
        if (e.target.id === 'oneway') {
            return setFlights({ ...flights, returningDate: '', [e.target.name]: e.target.value })
        }
        setFlights({ ...flights, [e.target.name]: e.target.value });
        setErrors({
            allEmpty: '',
            departureEmpty: '',
            returningEmpty: ''
        })
    }

    const handleChangeSites = (num, age) => {
        if (num) { setFlights({ ...flights, [age]: flights[age] + 1 }) }
        else { setFlights({ ...flights, [age]: flights[age] - 1 }) }
    }

    const handleChangeAirport = (e) => {
        e.preventDefault();

        setAirportName({
            ...airportName,
            [e.target.name]: e.target.value
        })
        setSearchError({
            vacio: '',

        })
        setErrors({
            allEmpty: '',
            departureEmpty: '',
            returningEmpty: ''
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (flights.departurePlace === '' || flights.arrivalPlace === '') {
            return setErrors({
                allEmpty: 'faltan rellenar campos!',
            })
        } else if (flights.departureDate === '') {
            return setErrors({
                departureEmpty: 'Falta la fecha de salida!'
            })
        } else if (flights.tripType === 'roundtrip' && flights.returningDate === '') {
            return setErrors({
                returningEmpty: 'Falta fecha de vuelta!'
            })
        }
        localStorage.setItem('busqueda', JSON.stringify(flights))
        dispatch(clearFlights())
        dispatch(getFlights(flights));
        if (flights.tripType === 'onewaytrip') {
            history.push('/flights');
        } else {
            history.push('/flights/roundtrip/firstFlight');
        }

        localStorage.setItem('tripType', flights.tripType)
        dispatch(clearCart())
        setFlights({
            tripType: '',
            departurePlace: '',
            arrivalPlace: '',
            departureDate: '',
            returningDate: '',
            cabinClass: 'Economy',
            adults: 1,
            children: 0,
            infants: 0,
            currency: 'USD'
        });
        dispatch(clearAirportsName())
    }


    const handleSubmitAirportFrom = (e) => {
        e.preventDefault();
        if (airportName.from === "") {
            return setSearchError({
                ...searchError,
                vacio: 'El input está vacio!'
            })
        }
        setFlights({
            ...flights,
            departurePlace: airportName.from
        })
        setActivateFrom(true)
        dispatch(searchAirportFrom(airportName.from));
    }
    // setActivateFrom(true)
    // dispatch(searchAirportFrom(airportName.from))


    const handleSubmitAirportTo = (e) => {
        e.preventDefault();
        if (airportName.to === "") {
            return setSearchError({
                ...searchError,
                vacio: 'El input está vacio!'
            })
        }
        setFlights({
            ...flights,
            arrivalPlace: airportName.to
        })
        setActivateTo(true)
        dispatch(searchAirportTo(airportName.to));
    };


    const handleSelectFrom = (e) => {
        let codeIata = e.target.value.substr(-3)
        if (codeIata === '...') return;
        setFlights({
            ...flights,
            departurePlace: codeIata
        })
        setActivateFrom(true)
        dispatch(searchAirportFrom(airportName.from))
    }

    const handleSelectTo = (e) => {
        let codeIata = e.target.value.substr(-3)
        if (codeIata === '...') return;
        setFlights({
            ...flights,
            arrivalPlace: codeIata
        })
    }

    return (
        <div className='FlightSearch-ContainerGeneral p-4'>
            <div className='container FlightSearch-cont p-2 '>
                <div className='d-flex'>
                    <div className='FlightSearch-Header pt-3 ps-3' onChange={handleChange}>
                        <h1>Vuelos</h1>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="tripType" id="oneway" value='onewaytrip' defaultChecked={flights.tripType === 'onewaytrip'} />
                            <label htmlFor="tripType">Ida</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="tripType" id="roundtrip" value='roundtrip' defaultChecked={flights.tripType === 'roundtrip'} />
                            <label htmlFor="roundtrip">Ida y vuelta</label>
                        </div>
                    </div>
                </div>
                <div className='FlightSearch-ContainerInformacionn'>
                    <div className='FlightSearch-ContainerInformacion'>
                        <div className='FlightSearch-ContainerInput m-2'>
                            <input placeholder='ORIGEN' type='text' name='from' onChange={(e) => handleChangeAirport(e)} />
                            <button type='submit' onClick={(e) => handleSubmitAirportFrom(e)}>🌍Buscar</button>
                            <div>
                                {
                                    airportsFrom === 'Request failed with status code 404' ? '' :
                                        <select hidden={!airportsFrom.length} onChange={(e) => handleSelectFrom(e)}>
                                            <option hidden>Aeropuertos cercanos...</option>
                                            {airportsFrom.length && airportsFrom !== 'Request failed with status code 404' && airportsFrom.map((e, i) => {
                                                return (
                                                    <option key={i}>{e.name}, {e.iata}</option>
                                                )
                                            })}
                                        </select>
                                }
                            </div>
                        </div>
                        <div className='FlightSearch-ContainerInput mt-3 mb-3'>
                            <input placeholder='DESTINO' type='text' name='to' onChange={(e) => handleChangeAirport(e)} />
                            <button onClick={(e) => handleSubmitAirportTo(e)}>🌍Buscar</button>
                            <div>
                                {
                                    airportsTo === 'Request failed with status code 404' ? '' :
                                        <select hidden={!airportsTo.length} onChange={(e) => handleSelectTo(e)}>
                                            <option hidden>Aeropuertos cercanos...</option>
                                            {airportsTo.length && airportsTo !== 'Request failed with status code 404' && airportsTo.map((e, i) => {

                                                return (

                                                    <option key={i}>{e.name}, {e.iata}</option>
                                                )
                                            })}
                                        </select>
                                }
                            </div>
                        </div>

                        <div className='FlightSearch-InputsDate mb-4 ms-2'>
                            <h6 className='mb-1'>Fecha de salida</h6>
                            <input className={flights.tripType === 'onewaytrip' ? 'FlightSearch-InputSalida' : null} min={Today} type='date' name='departureDate' id='depart' value={flights.departureDate} onChange={handleChange}></input>
                            {errors.departureEmpty ? <p className={'FlightSearch-errorsText font-weight-bold m-2'}>{errors.departureEmpty}</p> : null}
                        </div>
                        {
                            flights.tripType === 'roundtrip'
                                ?
                                <div className='FlightSearch-InputsDateLlegada mb-4'>
                                    <h6 className='mb-1'>Fecha de llegada</h6>
                                    <input className={flights.departureDate === '' ? 'FlightSearch-InputDesactive' : null} disabled={flights.departureDate === ''} min={flights.departureDate} type='date' name='returningDate' id={'arrive'} value={flights.returningDate} onChange={handleChange}></input>
                                    {errors.returningEmpty ? <p className={'FlightSearch-errorsText font-weight-bold m-2'}>{errors.returningEmpty}</p> : null}
                                </div>
                                : null
                        }

                        <div className="dropdown ">
                            <button className="FlightSearch-BotonExtra" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className='FlightSearch-BotonExtraIMG'>
                                    <img src={Persona} alt="logo" />
                                    <h6 className='m-0'>{flights.infants + flights.adults + flights.children} Persona/s</h6>
                                </div>
                                <h6 className='m-0'>{flights.cabinClass !== "Premium_Economy" ? flights.cabinClass : "Premium"}</h6>
                            </button>

                            <div className='dropdown-menu FlightSearch-Desplegable'>
                                <div className='row'>
                                    <div className=''>
                                        <div className=''>
                                            <label>Adultos</label>
                                            <div className='form-control FlightSearch-containerConteo'>
                                                <button disabled={flights.adults === 1} type='button' onClick={() => { handleChangeSites(0, 'adults') }} className='FlightSearch-Menos'>-</button>
                                                <div className='FlightSearch-conteo'>{flights.adults}</div>
                                                <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => handleChangeSites(1, 'adults')} className='FlightSearch-Mas'>+</button>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <label>Niños</label>
                                            <div className='form-control FlightSearch-containerConteo'>
                                                <button disabled={flights.children === 0} type='button' onClick={() => { handleChangeSites(0, 'children') }} className='FlightSearch-Menos'>-</button>
                                                <div className='FlightSearch-conteo'>{flights.children}</div>
                                                <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => { handleChangeSites(1, 'children') }} className='FlightSearch-Mas'>+</button>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <label >Infantes</label>
                                            <div className='form-control FlightSearch-containerConteo'>
                                                <button disabled={flights.infants === 0} type='button' onClick={() => { handleChangeSites(0, 'infants') }} className='FlightSearch-Menos'>-</button>
                                                <div className='FlightSearch-conteo'>{flights.infants}</div>
                                                <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => { handleChangeSites(1, 'infants') }} className='FlightSearch-Mas'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='mb-1' />
                                <div className=''>
                                    <label>Clase</label>
                                    <select name='cabinClass' id='cabinClass' className='form-control' onChange={handleChange}>
                                        <option value='Economy'>Economy</option>
                                        <option value='Business'>Business</option>
                                        <option value='First'>First</option>
                                        <option value='Premium_Economy'>Premium Economy</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='FlightSearch-BotonSubmit'>
                        <button type='button' onClick={(e) => { handleSubmit(e) }}>🔎Filtrar Vuelos</button>
                    </div>
                </div >

                <div className='d-flex justify-content-center'>
                    {airportsFrom === 'Request failed with status code 404' || airportsTo === 'Request failed with status code 404' ? <label className='FlightSearch-errorsText'> De momento las busquedas estan fuera de servicio. </label> : ''}
                    {searchError.vacio ? <label className='FlightSearch-errorsText' >{searchError.vacio}</label> : null}
                    {errors.allEmpty && <span className='FlightSearch-errorsText font-weight-bold'>{errors.allEmpty}</span>}
                </div>
            </div>
            <Record />
        </div>
    )
}