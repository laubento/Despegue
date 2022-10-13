import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterFlights } from '../../Redux/Actions'

export default function Filter() {
    let dispatch = useDispatch();
    let [filters, setFilters] = useState({
        minPrice: 'default',
        maxPrice: 'default',
        maxDuration: 'default',
        stopOvers: 'default',
    })


    const rangeChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })

    }
    useEffect(e => {
        dispatch(filterFlights(filters))
    }, [dispatch, filters])
    // console.log(filters)
    return (
        <div className="bg-secondary text-white">
            <div className="header-box px-2 pt-3 " id="side_nav_filter">
                <ul className="list-unstyled px-2">
                    <li className="pb-2">
                        <h4>Prince</h4>
                        <label for="customRange2" class="form-label">Max</label>
                        <input type="range" name={'maxPrice'} class="form-range" className="w-100" min="0" max="854000" id="customRange2" onMouseUp={e => rangeChange(e)} />

                        <label for="customRange2" class="form-label">Min</label>
                        <input type="range" name={'minPrice'} class="form-range" className="w-100" min="0" max="854000" id="customRange2" onMouseUp={e => rangeChange(e)} />
                    </li>
                    <li className="pb-2">
                        <h4>Duration</h4>
                        <input type="range" name={'maxDuration'} class="form-range" className="w-100" min="0" max="60" id="customRange2" onMouseUp={e => rangeChange(e)} />
                    </li>
                    <li className="pb-2">
                        <h4>Scales</h4>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="stopOvers" value={'default'} id="flexRadioDefault1" onChange={rangeChange} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                All Scales
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="stopOvers" value={1} id="flexRadioDefault1" onChange={rangeChange} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                1 scale
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="stopOvers" value={2} id="flexRadioDefault1" onChange={rangeChange} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                2 or more scales
                            </label>
                        </div>

                    </li>
                </ul>
            </div>

        </div>
    );
}
