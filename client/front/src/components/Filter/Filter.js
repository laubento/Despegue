import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFlights, searchAirline, clearFilters } from '../../Redux/Actions'
import '../styles/Filter.css'
import ReactPaginate from "react-paginate";
import { Slider, Typography, Grid, Box } from '@mui/material';

export default function Filter({paginado, number, dataSource, arregloDeArreglos, setLength, length, setHasMore, ds, onFlights, onFirstFlight, onSecondFlight}) {
    // hooks
    let dispatch = useDispatch();
    let flights = useSelector(state => state.flights);
    let filteredFlights = useSelector((state) => state.filteredFlights)
    let firstFlights = useSelector(state => state.firstFlights);
    let secondFlighs = useSelector(state => state.secondFligh);
    


    // variables
    let pricesArray = flights.map((e) => parseInt(e.price));
    let minP = Math.min(...pricesArray);
    let maxP = Math.max(...pricesArray)
    let durationArray = flights.map((e) => parseInt(e.duration.slice(0,2)));
    let minD = Math.min(...durationArray);
    let maxD = Math.max(...durationArray)

    // local states
    let [filters, setFilters] = useState({
        minPrice: minP,
        maxPrice: maxP,
        minHour: 0,
        maxHour: 24,
        minDuration: minD,
        maxDuration: maxD,
        stopOvers: 'default',
        findAirline: {
            payload: '',
            type: 'default'
        }
    })

    useEffect(e => {
        dispatch(filterFlights(filters))
    }, [dispatch, filters])

    let [valueSlide, setValueSlide] = useState({
        minP,
        maxP,
        minD,
        maxD,
        minHs: 0,
        maxHs: 24,
    })

    let [slider, setSlider] =useState({
        minPrice: valueSlide.minP,
        maxPrice: valueSlide.maxP,
        maxDuration: valueSlide.maxD,
        minHour: 0,
        maxHour: 24
    })

        // Material  UI Slider
    const [priceValues, setPriceValues] = useState([minP, maxP]);

    // functions
    const handleClick = () => {
        window.scrollTo(0,0);
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
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    }

    const handleChange = (e) =>{
        window.scrollTo(0,0)
        setSlider({
            ...slider,
            [e.target.name]: e.target.value
        })
        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    }

    const handleChangeMuiSlider = (e) => {
        console.log(e);
        setPriceValues(e.target.value);
    }

    const handleChangeAirline = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);

        if(e.target.value === ''){
            setLength(0)
            setHasMore(true)
            dataSource([])
            dataSource(prevData => prevData)
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

        setHasMore(true)
        setLength(0)
        dataSource([])
        dataSource((prevData) => prevData)

    }

    const handleSelect = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
        setFilters({
            ...filters,
            order: e.target.value 
        })
        validate();
        setLength(0)
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    }

    const rangeChange = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);

        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })

        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    }
    
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

    function valuetext(value) {
        return `${value}°C`;
      }

    const noDupPrice = [...new Set(pricesArray)]

    const prices = noDupPrice.map((e) => {
        return { value: e }
    })  

    //prices
    const handlePriceCommited = (e, newValue) => {

        // console.log(e);
        // console.log(newValue);
        
        setFilters({...filters, minPrice: newValue[0], maxPrice:newValue[1]})

        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    }

    const [price, setPrice] = React.useState([minP, maxP]);

    const handlePrice = (event, newValue, activeThumb) => {
        // console.log(event);
        // console.log(newValue);
        // console.log(activeThumb);
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPrice([
                Math.min(newValue[0], price[1]),
                price[1],
            ]);
        } else {
            setPrice([
                price[0],
                Math.max(newValue[1], price[0]),
            ]);
        }
    };

    //duration
    const noDupDuration = [...new Set(durationArray)]

    const durations = noDupDuration.map((e) => {
        return { value: e }
    })  

    const [duration, setDuration] = React.useState(maxD);
    
    const handleDuration = (event, newValue, activeThumb) => {
        // console.log(event);
        console.log(newValue);
        // console.log(activeThumb);
        setDuration(newValue);
    };

    const handleDurationCommited = (e, newValue) => {
        
        setFilters({...filters, maxDuration: newValue})

        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    }
    //hours
    const [hour, setHour] = React.useState([0, 24]);

    const noDupHour = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

    const hours = noDupHour.map((e) => {
        return { value: e }
    })  

    const handleHourCommited = (e, newValue) => {
        
        setFilters({...filters, minHour: newValue[0], maxHour: newValue[1]})

        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    }

    const handleHour = (event, newValue, activeThumb) => {
        // console.log(event);
        // console.log(newValue);
        // console.log(activeThumb);
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setHour([
                Math.min(newValue[0], hour[1]),
                hour[1],
            ]);
        } else {
            setHour([
                hour[0],
                Math.max(newValue[1], hour[0]),
            ]);
        }
    };
    
    
    return (
        <div className="bg-secondary text-white">
            <div className="header-box px-1 pt-3 " id="side_nav_filter">
                <ul className="list-unstyled px-2">
                    <h3>Filtros</h3>
                    <li className="pb-2 border-top">
                        <h4>Precio:</h4>
                        <Box sx={{width: 250}}>
                            <span>${price[0]}</span>
                            <span style={{float:"right"}}>${price[1]}</span>
                            <Slider
                                name="price"
                                getAriaLabel={() => "Minimum distance"}
                                value={price}
                                onChange={handlePrice}
                                onChangeCommitted={handlePriceCommited}
                                valueLabelDisplay='auto'
                                // getAriaValueText={valuetext}
                                marks={prices}
                                step={null}
                                disableSwap
                                min={minP}
                                max={maxP}
                                track={false}
                            />
                        </Box>
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Duración: {duration}</h4>
                        <Box sx={{width: 250}}>
                            <Slider
                                getAriaLabel={() => "Minimum distance"}
                                value={duration}
                                onChange={handleDuration}
                                onChangeCommitted={handleDurationCommited}
                                valueLabelDisplay='auto'
                                // getAriaValueText={valuetext}
                                marks={durations}
                                step={null}
                                disableSwap
                                min={minD}
                                max={maxD}
                                track={false}
                            />
                        </Box>
                        {/* <p>{slider.maxDuration}hs</p>
                        <input type="range" name={'maxDuration'} className="form-range w-100" min={Number(valueSlide.minD)} max={Number(valueSlide.maxD)} defaultValue={valueSlide.maxD} id="customRange2" onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} /> */}
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Horario:</h4>
                        <Box sx={{width: 250}}>
                            <span>{hour[0]}</span>
                            <span style={{float:"right"}}>{hour[1]}</span>
                            <Slider
                                getAriaLabel={() => "Minimum distance"}
                                value={hour}
                                onChange={handleHour}
                                onChangeCommitted={handleHourCommited}
                                valueLabelDisplay='auto'
                                // getAriaValueText={valuetext}
                                marks={hours}
                                step={null}
                                disableSwap
                                min={0}
                                max={24}
                                track={false}
                            />
                        </Box>
                        {/* <label htmlFor="customRange2" className="d-flex form-label">Máx hs:<p>{slider.maxHour}hs</p></label>
                        <input type="range" name={'maxHour'} className="form-range w-100" min={Number(filters.minHour)} max={Number(valueSlide.maxHs)} id="customRange2" defaultValue={valueSlide.maxHs} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} />

                        <label htmlFor="customRange2" className="d-flex form-label">Mín hs:<p>{slider.minHour}hs</p></label>
                        <input type="range" name={'minHour'} className="form-range w-100" min={Number(valueSlide.minHs)} max={Number(filters.maxHour)} id="customRange2" defaultValue={valueSlide.minHs} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)} /> */}
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Escalas</h4>
                        <div onChange={rangeChange}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={'default'} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 'default'} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
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
                        <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                            <option defaultValue={true}>Elegí una opción</option>
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
            {flights === 'Error' ? <button type="button" className="btn btn-outline-light" onClick={e => handleClick(e)}>Resetear filtros</button> : null}
        </div>
    );
}

 