import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFlights } from '../../Redux/Actions';
import { useHistory } from 'react-router-dom';


export default function FlightsSearch() {

    //Fecha actual
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    const Today = `${year}-${month}-${day}`

    const [flights, setFlights] = useState({
        tripType:'onewaytrip',
        departurePlace: '',
        arrivalPlace: '',
        departureDate: '',
        returningDate: '',
        cabinClass: '',
        adults: 0,
        children: 0,
        infants: 0,
        currency: 'USD'
    })

    const [error, setError] = useState({
        nombre: '',
        altura: '',
        peso: '',
        anoDeVida: '',
        criadoPara: ''
    })

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        if(e.target.name === 'departureDate'){
            return setFlights({...flights, returningDate: '', [e.target.name]: e.target.value})
        }
        setFlights({...flights, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getFlights(flights));
        setFlights({
            tripType:'onewaytrip',
            departurePlace: '',
            arrivalPlace: '',
            departureDate: '',
            returningDate: '',
            cabinClass: '',
            adults: 0,
            children: 0,
            infants: 0,
            currency: 'USD'
        });
        history.push('/flights');
    }

    return(
        <form style={{width: '1200px', margin: 'auto'}} onSubmit={handleSubmit}>
            <div className='text-left' onChange={handleChange}>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="oneway" value='onewaytrip' defaultChecked={flights.tripType === 'onewaytrip'}/>
                    <label className="form-check-label" htmlFor="tripType">One way</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="roundtrip" value='roundtrip' defaultChecked={flights.tripType === 'roundtrip'}/>
                    <label className="form-check-label" htmlFor="roundtrip">Round trip</label>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <label>From</label>
                    <input className='form-control' type='text' name='departurePlace' id='from' value={flights.departurePlace} onChange={handleChange}></input>
                </div>
                <div className='col-2'>
                    <label>To</label>
                    <input className='form-control' type='text' name='arrivalPlace' id='to' value={flights.arrivalPlace} onChange={handleChange}></input>
                </div>
                <div className='col-2'>
                    <label>Depart</label>
                    <input className='form-control' min={Today} type='date' name='departureDate' id='depart' value={flights.departureDate} onChange={handleChange}></input>
                </div>
                {
                    flights.tripType === 'roundtrip' 
                        ?                 
                            <div className='col-2'>
                                <label>Arrive</label>
                                <input className='form-control' disabled={flights.departureDate === ''} min={flights.departureDate} type='date' name='returningDate' id={'arrive'} value={flights.returningDate} onChange={handleChange}></input>
                            </div>
                        : null
                }

            </div>
            <div className='row'>
                <div className='col-2'>
                    <label>Cabin class</label>
                    <select name='cabinClass' id='cabinClass' className='form-control' onChange={handleChange}>
                        <option value='Economy'>Economy</option>
                        <option value='Business'>Business</option>
                        <option value='First'>First</option>
                        <option value='Premium_Economy'>Premium Economy</option>
                    </select>
                </div>
                <div className='col-2'>
                    <label>Adults</label>
                    <input className='form-control' type='number' name='adults' id='adults' value={flights.adults} onChange={handleChange}></input>
                </div>
                <div className='col-2'>
                    <label>Children</label>
                    <input className='form-control' type='number' name='children' id='children' value={flights.children} onChange={handleChange}></input>
                </div>
                <div className='col-2'>
                    <label>Infants</label>
                    <input className='form-control' type='number' name='infants' id='infants' value={flights.infants} onChange={handleChange}></input>
                </div>
                <div className='col-2'>
                    <button type="submit" className="btn btn-primary btn-lg">Search!</button>
                </div>
            </div>
        </form>
    )
}