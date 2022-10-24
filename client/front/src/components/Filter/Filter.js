import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFlights, searchAirline, clearFilters } from '../../Redux/Actions'
import '../styles/Filter.css'
import ReactPaginate from "react-paginate";

export default function Filter({paginado, number}) {
    let dispatch = useDispatch();
    let [filters, setFilters] = useState({
        minPrice: 'default',
        maxPrice: 'default',
        minHour: 'default',
        maxHour: 'default',
        maxDuration: 'default',
        stopOvers: 'default',
        findAirline: {
            payload: '',
            type: 'default'
        }
    })
    let [valueSlide, setValueSlide] = useState({
        maxP: 0,
        maxD: 0,
        maxHs: 0,
    })

    const rangeChange = (e) => {
        e.preventDefault();

        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
        validate()
        paginado(1)
        number = 1
    }

    const handleSelect = (e) => {
        e.preventDefault();
        
        setFilters({
            ...filters,
            order: e.target.value 
        })
        validate()
        paginado(1)
        number = 1
    }

    const handleChange = (e) =>{
        setSlider({
            ...slider,
            [e.target.name]: e.target.value
        })
        validate()
        paginado(1)
        number = 1
    }

    const handleClick = () => {
        setFilters({
            minPrice: valueSlide.minP,
            maxPrice: valueSlide.maxP,
            maxDuration: valueSlide.maxD,
            stopOvers: 'default',
            findAirline: {
                payload: '',
                type: 'default'
            }
        })
        paginado(1)
        number = 1
    }


    // let flights = useSelector(state => state.flights)
    let flights = useSelector(state => state.firstFlights)
    const validate = () => {
        try {
            flights.forEach(e => {

                if (!valueSlide.minD && !valueSlide.minP && !valueSlide.minHs) { setValueSlide({ ...valueSlide, minP: Number(e.price), minD: Number(e.duration.split('h')[0]), minHs: Number(e.departureTime.split(':')[0]) }) }

                if (valueSlide.maxP < Number(e.price)) {
                    setValueSlide({
                        ...valueSlide,
                        maxP: Number(e.price)
                    })
                } else if (valueSlide.minP > Number(e.price)) {
                    setValueSlide({
                        ...valueSlide,
                        minP: Number(e.price)
                    })
                }
                if (valueSlide.maxD < Number(e.duration.split('h')[0])) {
                    setValueSlide({
                        ...valueSlide,
                        maxD: Number(e.duration.split('h')[0]) + 1
                    })
                } else if (valueSlide.minD > Number(e.duration.split('h')[0])) {
                    setValueSlide({
                        ...valueSlide,
                        minD: Number(e.duration.split('h')[0])
                    })
                }
                
                if (valueSlide.maxHs < Number(e.departureTime.split(':')[0])) {
                    setValueSlide({
                        ...valueSlide,
                        maxHs: Number(e.departureTime.split(':')[0]) + 1
                    })
                } else if (valueSlide.minHs > Number(e.departureTime.split(':')[0])) {
                    setValueSlide({
                        ...valueSlide,
                        minHs: Number(e.departureTime.split(':')[0])
                    })
                }
            })
        } catch (err) {

        }
    }
    
    useEffect(e => {
        dispatch(filterFlights(filters))
    }, [dispatch, filters])
    
    let [slider, setSlider] =useState({
        minPrice: valueSlide.minP,
        maxPrice: valueSlide.maxP,
        maxDuration: valueSlide.maxD,
    })

    const handleChangeAirline = (e) => {
        e.preventDefault();
        if(e.target.value === ''){
           return setFilters({
                ...filters,
                findAirline:{
                    payload : '',
                    type: 'default'
                }
            })
        }
        setFilters({
            ...filters,
            findAirline: {
                payload : e.target.value,
                type: 'find'
            }
        })
        paginado(1)
        number = 1        
    }

    return (
        <div className="bg-secondary text-white">
            <div className="header-box px-1 pt-3 " id="side_nav_filter">
                <ul className="list-unstyled px-2">
                    <h3>Filtros</h3>
                    <li className="pb-2 border-top">
                        <h4>Por precio</h4>
                        <label for="customRange2" className="d-flex" class="form-label">Máx:<p>{slider.maxPrice}$</p></label>
                        <input type="range" name={'maxPrice'} class="form-range" className="w-100" min={Number(filters.minPrice)} max={Number(valueSlide.maxP)} id="customRange2" defaultValue={valueSlide.maxP} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} />

                        <label for="customRange2" className="d-flex" class="form-label">Mín:<p>{slider.minPrice}$</p></label>
                        <input type="range" name={'minPrice'} class="form-range" className="w-100" min={Number(valueSlide.minP)} max={Number(filters.maxPrice)} id="customRange2" defaultValue={valueSlide.minP} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} />
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Duración:</h4>
                        <p>{slider.maxDuration}hs</p>
                        <input type="range" name={'maxDuration'} class="form-range" className="w-100" min={Number(valueSlide.minD)} max={Number(valueSlide.maxD)} defaultValue={valueSlide.maxD} id="customRange2" onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} />
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Horario:</h4>
                        <label for="customRange2" className="d-flex" class="form-label">Máx hs:<p>{slider.maxHour}hs</p></label>
                        <input type="range" name={'maxHour'} class="form-range" className="w-100" min={Number(filters.minHour)} max={Number(valueSlide.maxHs)} id="customRange2" defaultValue={valueSlide.maxHs} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} />

                        <label for="customRange2" className="d-flex" class="form-label">Mín hs:<p>{slider.minHour}hs</p></label>
                        <input type="range" name={'minHour'} class="form-range" className="w-100" min={Number(valueSlide.minHs)} max={Number(filters.maxHour)} id="customRange2" defaultValue={valueSlide.minHs} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} />
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Escalas</h4>
                        <div onChange={rangeChange}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={'default'} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 'default'} />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Todas
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={0} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 0} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Directo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={1} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 1} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    1 escala
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={2} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 2} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    2 or más
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="pt-2 border-top">
                        <h4>Ordenar por:</h4>
                        <select class="form-select" aria-label="Default select example" onChange={handleSelect}>
                            <option selected>Elegí una opción</option>
                            <option value="orderP">Precio</option>
                            <option value="orderD">Duración</option>
                            <option value="orderS">Escalas</option>
                        </select>
                    </li>
                </ul>

            </div>
            <div className="d-flex justify-content-center flex-column p-4 ">
            <label className="text-center font-weight-bold ">Buscá tu aerolínea!</label>
                <input className="m-3 Flightsearch-input" type='text' name="airlineName" onChange={(e) => handleChangeAirline(e) } />
            </div>
            {flights === 'Error' ? <button type="button" class="btn btn-outline-light" onClick={e => handleClick(e)}>Resetear filtros</button> : null}
        </div>
    );
}

 