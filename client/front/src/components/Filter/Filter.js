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

    return (
        <div className="bg-secondary text-white">
            <div className="header-box px-2 pt-3 " id="side_nav_filter">
                <ul className="list-unstyled px-2">
                    <li className="pb-2">

                        <h4>Price</h4>
                        <label for="customRange2" class="form-label">Max</label>
                        <input type="range" name={'maxPrice'} class="form-range" className="w-100" min={Number(filters.minPrice)} max={Number(valueSlide.maxP)} id="customRange2" onMouseUp={e => rangeChange(e)} />

                        <label for="customRange2" class="form-label">Min</label>
                        <input type="range" name={'minPrice'} class="form-range" className="w-100" min={Number(valueSlide.minP)} max={Number(filters.maxPrice)} id="customRange2" onMouseUp={e => rangeChange(e)} />
                    </li>
                    <li className="pt-2">
                        <h4>Duration</h4>
                        <input type="range" name={'maxDuration'} class="form-range" className="w-100" min={Number(valueSlide.minD)} max={Number(valueSlide.maxD)} id="customRange2" onMouseUp={e => rangeChange(e)} />
                    </li>
                    <li className="pt-2">
                        <h4>Scales</h4>
                        <div onChange={rangeChange}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="stopOvers" value={'default'} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 'default'} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    All Scales
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="stopOvers" value={1} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 1} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    1 scale
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="stopOvers" value={2} id="flexRadioDefault1" defaultChecked={filters.stopOvers === 2} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    2 or more scales
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="pt-2">
                        <h4>Order by:</h4>
                        <select class="form-select" aria-label="Default select example" onChange={handleSelect}>
                            <option selected>Open this select menu</option>
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
