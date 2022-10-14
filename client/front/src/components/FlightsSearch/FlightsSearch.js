import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFlights, clearFlights,searchAirportFrom, searchAirportTo } from '../../Redux/Actions';
import { useEffect } from 'react';
import '../styles/FlightSearch.css'

export default function FlightsSearch() {
    const dispatch = useDispatch();
    const history = useHistory()
    let airportsFrom = useSelector((state) => state.airportsFrom);
     let airportsTo = useSelector((state) => state.airportsTo);
  
   const [airportName, setAirportName] = useState({
     from: '',
     to: ''
   });
   const [activateFrom, setActivateFrom] = useState(false)
   const [activateTo, setActivateTo] = useState(false)
    //Fecha actual
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    const Today = `${year}-${month}-${day}`
    // let p = 0;
    const [p, setP] = useState(0)

    const [flights, setFlights] = useState({
        tripType:'onewaytrip',
        departurePlace: '',
        arrivalPlace: '',
        departureDate: '',
        returningDate: '',
        cabinClass: 'Economy',
        adults: 1,
        children: 0,
        infants: 0,
        currency: 'USD'
    })

    const [error, setError] = useState({
        departurePlace: '',
        boolDeparturePlace: '',
        arrivalPlace: '',
        boolArrivalPlace: '',
        departureDate: '',
        boolDepartureDate: '',
        returningDate: '',
        boolReturningDate: ''
    })

    const [searchError, setSearchError] = useState({
        vacioFrom : '',
        vacioTo : '',
        most: ''
    })

    function validate(input){
        let errors = {}

        if(!input.departurePlace){
            errors.departurePlace = 'necesita rellenar'
            errors.boolDeparturePlace = 'a'
        }
        else if(input.departurePlace.length < 3){
            errors.departurePlace = '3 minimo'
            errors.boolDeparturePlace = 'a'
        }

        if(!airportName.from){
            errors.arrivalPlace = 'necesita rellenarr'
            errors.boolArrivalPlace = 'a'
        }
        else if(airportName.from.length < 3){
            errors.arrivalPlace = '3 minimoo'
            errors.boolArrivalPlace = 'a'
        }
        if(!input.departureDate){
            errors.departureDate = 'completar fecha'
            errors.boolDepartureDate = 'a'
        }
        if(input.tripType === 'roundtrip'){
            if(!input.returningDate){
                errors.returningDate = 'completar fechaaa'
                errors.boolReturningDate = 'a'
            }
        }
        return errors
    }

    // Lugares disponibles
    const handleChangeSites = (num, age) => {
        if(num){ setFlights({...flights, [age]: flights[age] + 1}) }
        else{ setFlights({...flights, [age]: flights[age] - 1}) }
    }


    
    
    const handleChange = (e) => {
        // Seteo de la fecha arrive en caso de cambio
        if(e.target.name === 'departureDate'){
            return setFlights({...flights, returningDate: '', [e.target.name]: e.target.value})
        }
        if(e.target.id === 'oneway'){
            return setFlights({...flights, returningDate: '', [e.target.name]: e.target.value})
        }
        setFlights({...flights, [e.target.name]: e.target.value});
    }

    useEffect( () => {
        setP(p + 1)
        console.log(p)
        if(p < 1 || error.boolArrivalPlace || error.boolDeparturePlace || error.boolDepartureDate || error.boolReturningDate) return
        dispatch(clearFlights())
        dispatch(getFlights(flights));
        setFlights({
            tripType:'onewaytrip',
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
        history.push('/flights');
    }, [error])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(validate({
            ...flights,
            [e.target.name]: e.target.value
        }))
        if(airportName.from === ''){
            setSearchError({
                vacioFrom:'El buscador está vacio!'
            })   
        }
        if(airportName.to === ''){
            setSearchError({
                vacioTo:'El buscador está vacio!'
            })   
        }
    }
        const handleChangeAirport = (e) => {
            e.preventDefault();

            setAirportName({
                [e.target.name] : e.target.value
            })
            setSearchError({
                vacioFrom: '',
                vacioTo: '',
                most:''
            })
        }

        const handleSubmitAirportFrom = (e) => {
            e.preventDefault();
            if(airportName.from === "") {
                setSearchError({
                    vacioFrom: 'El input está vacio!'
                  })
                  return;
            }
            setActivateFrom(true)
            dispatch(searchAirportFrom(airportName.from))
        }

        const handleSubmitAirportTo = (e) => {
                e.preventDefault();
                if (airportName.to === "") {
                  setSearchError({
                    vacioTo: 'El input está vacio!'
                  })
                  return;
                }
                setActivateTo(true)
                dispatch(searchAirportTo(airportName.to));
              };
            
            
              const handleSelectFrom = (e) => {
                let codeIata = e.target.value.substr(-3)
                setFlights({
                    ...flights,
                    departurePlace: codeIata
                })
                setActivateFrom(true)
                dispatch(searchAirportFrom(airportName.from))
              }
            console.log(searchError)
              const handleSelectTo = (e) => {
                let codeIata = e.target.value.substr(-3)
                setFlights({
                    ...flights,
                    arrivalPlace: codeIata
                })
              }
    return(
    <div>
      <form onSubmit={(e) => handleSubmitAirportFrom(e)}>
      <label>From</label>
                    <br/>
            <input className={ searchError.vacio === 'vacio' ? 'FlightSearch-error form-control' : 'form-control'}  type='text' name='from'  onChange={(e) => handleChangeAirport(e)}  />
            {searchError.vacioFrom ? <span className='FlightSearch-errorsText' >{searchError.vacioFrom}</span> : ''}
            <button type='submit'>Buscar</button>
            <br/>
            {activateFrom === false ? '' : <select onChange={(e) => handleSelectFrom(e)}>
            {airportsFrom.length && airportsFrom.map((e,i) =>{
                
                return(
                    
                        <option key={i}>{e.name}, code: {e.iata}</option>
                )
                })}
                </select> }
                
                </form>
                <form onSubmit={(e) => handleSubmitAirportTo(e)}>
                    <label>To</label>
                    <br/>
            <input className={ searchError.vacio === 'vacio' ? 'FlightSearch-error form-control' : 'form-control'} type='text' name='to'  onChange={(e) => handleChangeAirport(e)}  />
            <button type='submit'>Buscar</button>
            <br/>
            {searchError.vacioTo ? <span className='FlightSearch-errorsText' >{searchError.vacioTo}</span> : ''}
            <br/>
            {activateTo === false ? '' : <select onChange={(e) => handleSelectTo(e)}>
            {airportsTo.length && airportsTo.map((e,i) =>{
                
                return(
                    
                        <option key={i}>{e.name}, code: {e.iata}</option>
                )
                })}
                </select> }
                
                </form>

        <form style={{width: '1200px', margin: 'auto'}} onSubmit={(e) => {handleSubmit(e)}}>
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
                {/* <div className='col-2'>
                    <label>From</label>
                    <input className={ error.boolDeparturePlace ? 'FlightSearch-error form-control' : 'form-control'} type='text' name='departurePlace' id='from' value={flights.departurePlace} onChange={handleChange}></input>
                </div>
                <div className='col-2'>
                    <label>To</label>
                    <input className={ error.boolArrivalPlace ? 'FlightSearch-error form-control' : 'form-control'} type='text' name='arrivalPlace' id='to' value={flights.arrivalPlace} onChange={handleChange}></input>
                </div> */}
                <div className='col-2'>
                    <label>Depart</label>
                    <input className={ error.boolDepartureDate ? 'FlightSearch-error form-control' : 'form-control'} min={Today} type='date' name='departureDate' id='depart' value={flights.departureDate} onChange={handleChange}></input>
                </div>
                {
                    flights.tripType === 'roundtrip' 
                        ?                 
                            <div className='col-2'>
                                <label>Arrive</label>
                                <input className={ error.boolReturningDate ? 'FlightSearch-error form-control' : 'form-control'} disabled={flights.departureDate === ''} min={flights.departureDate} type='date' name='returningDate' id={'arrive'} value={flights.returningDate} onChange={handleChange}></input>
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
                    <div className='form-control FlightSearch-containerConteo'>
                        <button disabled={flights.adults === 1} type='button' onClick={() => {handleChangeSites(0, 'adults')}} className='FlightSearch-Menos'>-</button>
                        <div className='FlightSearch-conteo'>{flights.adults}</div>
                        <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => handleChangeSites(1, 'adults')} className='FlightSearch-Mas'>+</button>
                    </div>
                </div>
                <div className='col-2'>
                    <label>Children</label>
                    <div className='form-control FlightSearch-containerConteo'>
                        <button disabled={flights.children === 0} type='button' onClick={() => {handleChangeSites(0, 'children')}} className='FlightSearch-Menos'>-</button>
                        <div className='FlightSearch-conteo'>{flights.children}</div>
                        <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => {handleChangeSites(1, 'children')}} className='FlightSearch-Mas'>+</button>
                    </div>
                </div>
                <div className='col-2'>
                    <label>Infants</label>
                    <div className='form-control FlightSearch-containerConteo'>
                        <button disabled={flights.infants === 0} type='button' onClick={() => {handleChangeSites(0, 'infants')}} className='FlightSearch-Menos'>-</button>
                        <div className='FlightSearch-conteo'>{flights.infants}</div>
                        <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => {handleChangeSites(1, 'infants')}} className='FlightSearch-Mas'>+</button>
                    </div>
                </div>
            </div>
            <input type='submit' className="btn btn-primary btn-lg" value='Search!'/>
            {/* {airportName.most ? <p className={'FlightSearch-errorsText'}>hola</p> : null} 
            {error.arrivalPlace ? <p className={'FlightSearch-errorsText'}>{error.arrivalPlace}</p> : null} */}
            {error.departureDate ? <p className={'FlightSearch-errorsText'}>{error.departureDate}</p> : null}
            {error.returningDate ? <p className={'FlightSearch-errorsText'}>{error.returningDate}</p> : null}
        </form>
        </div>
    )
}