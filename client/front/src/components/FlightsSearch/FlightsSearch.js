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

    const [errors, setErrors] = useState({
        allEmpty: '',
        departureEmpty: '',
        returningEmpty:''
    })

    // const [error, setError] = useState({
    //     departurePlace: '',
    //     boolDeparturePlace: '',
    //     arrivalPlace: '',
    //     boolArrivalPlace: '',
    //     departureDate: '',
    //     boolDepartureDate: '',
    //     returningDate: '',
    //     boolReturningDate: ''
    // })

    const [searchError, setSearchError] = useState({
        vacio: '',
        most: ''
    })

    // function validate(input){
    //     let errors = {}

    //     if(!input.departurePlace){
    //         errors.departurePlace = 'necesita rellenar'
    //         errors.boolDeparturePlace = 'a'
    //     }
    //     else if(input.departurePlace.length < 3){
    //         errors.departurePlace = '3 minimo'
    //         errors.boolDeparturePlace = 'a'
    //     }

    //     if(!airportName.from){
    //         errors.arrivalPlace = 'necesita rellenar'
    //         errors.boolArrivalPlace = 'a'
    //     }
    //     else if(airportName.from.length < 3){
    //         errors.arrivalPlace = '3 minimoo'
    //         errors.boolArrivalPlace = 'a'
    //     }
    //     if(!input.departureDate){
    //         errors.departureDate = 'completar fecha'
    //         errors.boolDepartureDate = 'a'
    //     }
    //     if(input.tripType === 'roundtrip'){
    //         if(!input.returningDate){
    //             errors.returningDate = 'completar fecha'
    //             errors.boolReturningDate = 'a'
    //         }
    //     }
    //     return errors
    // }

    // Lugares disponibles
    const handleChangeSites = (num, age) => {
        if(num){ setFlights({...flights, [age]: flights[age] + 1}) }
        else{ setFlights({...flights, [age]: flights[age] - 1}) }
    }


    
    
    const handleChange = (e) => {
        // Seteo de la fecha arrive en caso de cambio
        if(e.target.name === 'departureDate'){
            setErrors({
                departureEmpty:''
            })
            return setFlights({...flights, returningDate: '', [e.target.name]: e.target.value})
        }
        if(e.target.id === 'oneway'){
            return setFlights({...flights, returningDate: '', [e.target.name]: e.target.value})
        }
        setFlights({...flights, [e.target.name]: e.target.value});
        setErrors({
            allEmpty: '',
            departureEmpty:'',
            returningEmpty: ''
        })
    }

    // useEffect( () => {
    //     setP(p + 1)
    //     console.log(p)
    //     console.log(error.boolArrivalPlace)
    //     console.log(error.boolDeparturePlace)
    //     if(p < 1 || error.boolArrivalPlace || error.boolDeparturePlace || error.boolDepartureDate || error.boolReturningDate) return
    //     dispatch(clearFlights())
    //     dispatch(getFlights(flights));
    //     setFlights({
    //         tripType:'onewaytrip',
    //         departurePlace: '',
    //         arrivalPlace: '',
    //         departureDate: '',
    //         returningDate: '',
    //         cabinClass: 'Economy',
    //         adults: 1,
    //         children: 0,
    //         infants: 0,
    //         currency: 'USD'
    //     });
    //     history.push('/flights');
    // }, [error, searchError])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setError(validate({
        //     ...flights,
        //     [e.target.name]: e.target.value
        // }))
        // if(airportName.from === '' || airportName.to === '' ){
        //    setSearchError({
        //         ...searchError,
        //         vacio:'El input está vacio!'
        //     })   
        // }
        if(flights.departurePlace === '' || flights.arrivalPlace === ''){
            return setErrors({
                allEmpty: 'faltan rellenar campos!',
            })
        }else if(flights.departureDate === ''){
            return setErrors({
                departureEmpty: 'Falta la fecha de salida!'
            })
        }else if(flights.tripType === 'roundtrip' && flights.returningDate === ''){
            return setErrors({
                returningEmpty:  'Falta fecha de vuelta!'
            })
        }
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
    }
        const handleChangeAirport = (e) => {
            e.preventDefault();

            setAirportName({
                ...airportName,
                [e.target.name] : e.target.value
            })
            setSearchError({
                vacio: '',

            })
            setErrors({
                allEmpty: '',
                departureEmpty:'',
                returningEmpty: ''
            })
        }

        const handleSubmitAirportFrom = (e) => {
            e.preventDefault();
            console.log(airportName.from)
            if(airportName.from === "") {
                return setSearchError({
                    ...searchError,
                    vacio: 'El input está vacio!'
                  })
            }
            setActivateFrom(true)
            dispatch(searchAirportFrom(airportName.from))
        }

        const handleSubmitAirportTo = (e) => {
                e.preventDefault();
                if (airportName.to === "") {
                  return setSearchError({
                    ...searchError,
                    vacio: 'El input está vacio!'
                  })
                }
                setActivateTo(true)
                dispatch(searchAirportTo(airportName.to));
              };
            
            
              const handleSelectFrom = (e) => {
                let codeIata = e.target.value.substr(-3)
                if(codeIata === '...') return;
                setFlights({
                    ...flights,
                    departurePlace: codeIata
                })
                setActivateFrom(true)
                dispatch(searchAirportFrom(airportName.from))
              }
              const handleSelectTo = (e) => {
                let codeIata = e.target.value.substr(-3)
                if(codeIata === '...') return;
                setFlights({
                    ...flights,
                    arrivalPlace: codeIata
                })
              }
              console.log(flights)
    return(
    <div className='container FlightSearch-cont p-4 '>
        <div className='d-flex justify-content-center'>
        <div className='text-left' onChange={handleChange}>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="oneway" value='onewaytrip' defaultChecked={flights.tripType === 'onewaytrip'}/>
                    <label className="form-check-label " htmlFor="tripType">One way</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="roundtrip" value='roundtrip' defaultChecked={flights.tripType === 'roundtrip'}/>
                    <label className="form-check-label" htmlFor="roundtrip">Round trip</label>
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-center p-2'>
                <input className={ searchError.vacio === 'vacio' ? 'FlightSearch-error font-weight-bold ' : 'Flightsearch-input'}  placeholder='ORIGEN'  type='text' name='from'  onChange={(e) => handleChangeAirport(e)}  />
            <button type='submit' className='btn FlightSearch-btn p-2' onClick={(e) => handleSubmitAirportFrom(e)}>Buscar</button>
                </div>
                <div className='d-flex justify-content-center p-2'>
                <input className={ searchError.vacio === 'vacio' ? 'FlightSearch-error font-weight-bold' : 'Flightsearch-input'} placeholder='DESTINO' type='text' name='to'  onChange={(e) => handleChangeAirport(e)}  />
            <button className='btn FlightSearch-btn p-2' onClick={(e) => handleSubmitAirportTo(e)}>Buscar</button>
                </div>
            
                </div >
                <div className='d-flex justify-content-center'>
                {activateFrom === false ? '' : 
            <select className='slc-ord' onChange={(e) => handleSelectFrom(e)}>
                <option>Nearby Airports...</option>
            {airportsFrom.length && airportsFrom.map((e,i) =>{
                return(
                        <option key={i}>{e.name}, {e.iata}</option>
                )
                })}
                </select> 
                    }
            {activateTo === false ? '' :  <select className='slc-ord' onChange={(e) => handleSelectTo(e)}>
                <option>Nearby Airports...</option>
            {airportsTo.length && airportsTo.map((e,i) =>{
                    
                return( 
                        
                        <option  key={i}>{e.name}, {e.iata}</option>
                )
                })}
                </select>  }
                </div>
                <div className='d-flex justify-content-center'>
                    
            {searchError.vacio ? <label className='FlightSearch-errorsText font-weight-bold FlightInput-spacing' >{searchError.vacio}</label> : ''}
            </div>
        <form className="col-2" style={{width: '1200px', margin: 'auto'}} onSubmit={(e) => {handleSubmit(e)}}>
            <div className=''>
                <div className='container '>
                    <div className='row '>
                        <div className='d-flex justify-content-center'>
                        <div className='col-2 m-2 text-center'>
                    <label>Depart</label>
                    <input className={ errors.departureEmpty ? 'FlightSearch-error form-control' : 'form-control'} min={Today} type='date' name='departureDate' id='depart' value={flights.departureDate} onChange={handleChange}></input>
                    {errors.departureEmpty ? <p className={'FlightSearch-errorsText font-weight-bold m-2'}>{errors.departureEmpty}</p> : null}
                    </div>
                    {
                    flights.tripType === 'roundtrip' 
                        ?                 
                            <div className='col-2 m-2'>
                                <label>Arrive</label>
                                <input className={ errors.returningEmpty ? 'FlightSearch-error form-control' : 'form-control'} disabled={flights.departureDate === ''} min={flights.departureDate} type='date' name='returningDate' id={'arrive'} value={flights.returningDate} onChange={handleChange}></input>
                                {errors.returningEmpty ? <p className={'FlightSearch-errorsText font-weight-bold m-2'}>{errors.returningEmpty}</p> : null}
                            </div>
                        : null
                }
                <div className='col-2 m-2 text-center'>
                    <label>Cabin class</label>
                    <select name='cabinClass' id='cabinClass' className='form-control' onChange={handleChange}>
                        <option value='Economy'>Economy</option>
                        <option value='Business'>Business</option>
                        <option value='First'>First</option>
                        <option value='Premium_Economy'>Premium Economy</option>
                    </select>
                </div>
                        </div>
                    
                    </div>
                <div className='row'>
                    <div className='d-flex justify-content-center m-1'>
                <div className='col-2 m-2 text-center'>
                    <label>Adults</label>
                    <div className='form-control FlightSearch-containerConteo'>
                        <button disabled={flights.adults === 1} type='button' onClick={() => {handleChangeSites(0, 'adults')}} className='FlightSearch-Menos'>-</button>
                        <div className='FlightSearch-conteo'>{flights.adults}</div>
                        <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => handleChangeSites(1, 'adults')} className='FlightSearch-Mas'>+</button>
                    </div>
                </div>
                <div className='col-2 m-2 text-center'>
                    <label>Children</label>
                    <div className='form-control FlightSearch-containerConteo'>
                        <button disabled={flights.children === 0} type='button' onClick={() => {handleChangeSites(0, 'children')}} className='FlightSearch-Menos'>-</button>
                        <div className='FlightSearch-conteo'>{flights.children}</div>
                        <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => {handleChangeSites(1, 'children')}} className='FlightSearch-Mas'>+</button>
                    </div>
                </div>
                <div className='col-2 m-2 text-center'>
                    <label >Infants</label>
                    <div className='form-control FlightSearch-containerConteo'>
                        <button disabled={flights.infants === 0} type='button' onClick={() => {handleChangeSites(0, 'infants')}} className='FlightSearch-Menos'>-</button>
                        <div className='FlightSearch-conteo'>{flights.infants}</div>
                        <button disabled={flights.infants + flights.adults + flights.children > 5} type='button' onClick={() => {handleChangeSites(1, 'infants')}} className='FlightSearch-Mas'>+</button>
                    </div>
                </div>
                </div>
                </div>
                </div>
               
                </div>
                <div className='d-flex justify-content-center'>
                <input type='submit' className="mx-auto  btn btn FlightSearch-btn-search" value='Search!'/>
                </div>
                <div className='d-flex justify-content-center'>
                    {errors.allEmpty && <span className='FlightSearch-errorsText font-weight-bold'>{errors.allEmpty}</span>}
                </div>
        </form>
        </div>
    )
}