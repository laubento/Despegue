import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFlights } from '../../Redux/Actions'
import '../styles/Filter.css'

export default function Filter() {
    let dispatch = useDispatch();
    let [filters, setFilters] = useState({
        minPrice: 'default',
        maxPrice: 'default',
        maxDuration: 'default',
        stopOvers: 'default',
    })
    let [valueSlide, setValueSlide] = useState({
        maxP: 0,
        maxD: 0,
    })

    const rangeChange = (e) => {
        e.preventDefault();

        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
        validate()
    }

    const handleSelect = (e) => {
        e.preventDefault();
        
        setFilters({
            ...filters,
            order: e.target.value 
        })
        validate()
    }

    const handleClick = () => {
        setFilters({
            minPrice: 'default',
            maxPrice: 'default',
            maxDuration: 'default',
            stopOvers: 'default',
        })
    }

    const handleChange = (e) =>{
        setSlider({
            ...slider,
            [e.target.name]: e.target.value
        })
    }

    useEffect(e => {
        dispatch(filterFlights(filters))
        validate()
    }, [dispatch, filters])

    let flights = useSelector(state => state.flights)

    const validate = () => {
        try {
            flights.forEach(e => {

                if (!valueSlide.minD && !valueSlide.minP) { setValueSlide({ ...valueSlide, minP: Number(e.price), minD: Number(e.duration.split('h')[0]) }) }

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

            })
        } catch (err) {

        }
    }
    validate()
    
    let [slider, setSlider] =useState({
        minPrice: valueSlide.minP,
        maxPrice: valueSlide.maxP,
        maxDuration: valueSlide.maxD,
    })

    return (
        <div className="bg-secondary text-white">
            <div className="header-box px-1 pt-3 " id="side_nav_filter">
                <ul className="list-unstyled px-2">
                    <h3>Filters</h3>
                    <li className="pb-2 border-top">
                        <h4>By Price</h4>
                        <label for="customRange2" className="d-flex" class="form-label">Max Price:<p>{slider.maxPrice}$</p></label>
                        <input type="range" name={'maxPrice'} class="form-range" className="w-100" min={Number(filters.minPrice)} max={Number(valueSlide.maxP)} id="customRange2" defaultValue={valueSlide.maxP} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)}/>

                        <label for="customRange2" className="d-flex" class="form-label">Min Price:<p>{slider.minPrice}$</p></label>
                        <input type="range" name={'minPrice'} class="form-range" className="w-100" min={Number(valueSlide.minP)} max={Number(filters.maxPrice)} id="customRange2" defaultValue={valueSlide.minP} onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)}/>
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Duration:</h4>
                        <p>{slider.maxDuration}hs</p>
                        <input type="range" name={'maxDuration'} class="form-range" className="w-100" min={Number(valueSlide.minD)} max={Number(valueSlide.maxD)} defaultValue={valueSlide.maxD} id="customRange2" onMouseUp={e => rangeChange(e)} onChange={e => handleChange(e)}/>
                    </li>
                    <li className="pb-2 border-top">
                        <h4>Scales</h4>
                        <div onChange={rangeChange}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={'default'} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 'default'} />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    All Scales
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={1} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 1} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    1 scale
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="stopOvers" value={2} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 2} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    2 or more scales
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="pt-2 border-top">
                        <h4>Order by:</h4>
                        <select class="form-select" aria-label="Default select example" onChange={handleSelect}>
                            <option selected>Select an order</option>
                            <option value="orderP" >Price</option>
                            <option value="orderD" >Duration</option>
                            <option value="orderS" >Scales</option>
                        </select>
                    </li>
                </ul>

            </div>
            {flights === 'Error' ? <button type="button" class="btn btn-outline-light" onClick={e => handleClick(e)}>Reset filter</button> : null}
        </div>
    );
}
