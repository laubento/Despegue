import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterFlights,
} from "../../Redux/Actions";
import "../styles/Filter.css";
import { PriceSlider, ScheduleSlider, TimeSlider } from "../FiltersSliders/filters";

export default function Filter({
    paginado,
    number,
    dataSource,
    arregloDeArreglos,
    setLength,
    length,
    setHasMore,
    ds,
    onFlights,
    onFirstFlight,
    onSecondFlight,
}) {
    // hooks
    let dispatch = useDispatch();
    let flights = useSelector((state) => state.flights);

    // variables
    let pricesArray = flights.map((e) => parseInt(e.price));
    let minP = Math.min(...pricesArray);
    let maxP = Math.max(...pricesArray);
    let durationArray = flights.map((e) => parseInt(e.duration.slice(0, 2)));
    let minD = Math.min(...durationArray);
    let maxD = Math.max(...durationArray);

    // local states
    let [filters, setFilters] = useState({
        minPrice: minP,
        maxPrice: maxP,
        minHour: 0,
        maxHour: 24,
        minDuration: minD,
        maxDuration: maxD,
        stopOvers: "default",
        findAirline: {
            payload: "",
            type: "default",
        },
    });

    useEffect(
        (e) => {
            dispatch(filterFlights(filters));
        },
        [dispatch, filters]
    );

    let [valueSlide, setValueSlide] = useState({
        minP,
        maxP,
        minD,
        maxD,
        minHs: 0,
        maxHs: 24,
    });


    // functions
    const handleClick = (e) => {
        window.scrollTo(0, 0);
        setFilters({
            minPrice: valueSlide.minP,
            maxPrice: valueSlide.maxP,
            maxDuration: valueSlide.maxD,
            stopOvers: "default",
            findAirline: {
                payload: "",
                type: "default",
            },
        });
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    };


    const handleChangeAirline = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);

        if (e.target.value === "") {
            setLength(0);
            setHasMore(true);
            dataSource([]);
            dataSource((prevData) => prevData);
            return setFilters({
                ...filters,
                findAirline: {
                    payload: "",
                    type: "default",
                },
            });
        }

        setFilters({
            ...filters,
            findAirline: {
                payload: e.target.value,
                type: "find",
            },
        });

        setHasMore(true);
        setLength(0);
        dataSource([]);
        dataSource((prevData) => prevData);
    };

    const handleSelect = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        setFilters({
            ...filters,
            order: e.target.value,
        });
        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    };

    const rangeChange = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);

        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });

        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    };

    const validate = () => {
        try {
            flights.forEach((e) => {
                if (!valueSlide.minD && !valueSlide.minP && !valueSlide.minHs) {
                    setValueSlide({
                        ...valueSlide,
                        minP: Number(e.price),
                        minD: Number(e.duration.split("h")[0]),
                        minHs: Number(e.departureTime.split(":")[0]),
                    });
                }

                if (valueSlide.maxP < Number(e.price)) {
                    setValueSlide({
                        ...valueSlide,
                        maxP: Number(e.price),
                    });
                } else if (valueSlide.minP > Number(e.price)) {
                    setValueSlide({
                        ...valueSlide,
                        minP: Number(e.price),
                    });
                }
                if (valueSlide.maxD < Number(e.duration.split("h")[0])) {
                    setValueSlide({
                        ...valueSlide,
                        maxD: Number(e.duration.split("h")[0]) + 1,
                    });
                } else if (valueSlide.minD > Number(e.duration.split("h")[0])) {
                    setValueSlide({
                        ...valueSlide,
                        minD: Number(e.duration.split("h")[0]),
                    });
                }

                if (valueSlide.maxHs < Number(e.departureTime.split(":")[0])) {
                    setValueSlide({
                        ...valueSlide,
                        maxHs: Number(e.departureTime.split(":")[0]) + 1,
                    });
                } else if (
                    valueSlide.minHs > Number(e.departureTime.split(":")[0])
                ) {
                    setValueSlide({
                        ...valueSlide,
                        minHs: Number(e.departureTime.split(":")[0]),
                    });
                }
            });
        } catch (err) {}
    };

    return (
        <div className='bg-secondary text-white'>
            <div className='header-box px-1 pt-3 ' id='side_nav_filter'>
                <ul className='list-unstyled px-2'>
                    <h3>Filtros</h3>
                    <li className='pb-2 border-top'>
                        <PriceSlider
                            pricesArray={pricesArray}
                            minP={minP}
                            maxP={maxP}
                            setFilters={setFilters}
                            filters={filters}
                            validate={validate}
                            setLength={setLength}
                            setHasMore={setHasMore}
                            dataSource={dataSource}
                        />
                    </li>
                    <li className='pb-2 border-top'>
                        <TimeSlider 
                            setFilters={setFilters}
                            filters={filters}
                            validate={validate}
                            setLength={setLength}
                            setHasMore={setHasMore}
                            dataSource={dataSource}
                            durationArray={durationArray}
                            maxD={maxD}
                            minD={minD}
                        />
                    </li>
                    <li className='pb-2 border-top'>
                        <ScheduleSlider 
                            setFilters={setFilters}
                            filters={filters}
                            validate={validate}
                            setLength={setLength}
                            setHasMore={setHasMore}
                            dataSource={dataSource}
                        />
                    </li>
                    <li className='pb-2 border-top'>
                        <h4>Escalas</h4>
                        <div onChange={rangeChange}>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='stopOvers'
                                    value={"default"}
                                    id='flexRadioDefault1'
                                    defaultChecked={
                                        filters.stopOvers === "default"
                                    }
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='flexRadioDefault1'
                                >
                                    Todas
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='stopOvers'
                                    value={0}
                                    id='flexRadioDefault1'
                                    defaultChecked={filters.stopOvers === 0}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='flexRadioDefault1'
                                >
                                    Directo
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='stopOvers'
                                    value={1}
                                    id='flexRadioDefault1'
                                    defaultChecked={filters.stopOvers === 1}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='flexRadioDefault1'
                                >
                                    1 escala
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='stopOvers'
                                    value={2}
                                    id='flexRadioDefault1'
                                    defaultChecked={filters.stopOvers === 2}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='flexRadioDefault1'
                                >
                                    2 or más
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className='pt-2 border-top'>
                        <h4>Ordenar por:</h4>
                        <select
                            className='form-select'
                            aria-label='Default select example'
                            onChange={handleSelect}
                        >
                            <option defaultValue={true}>
                                Elegí una opción
                            </option>
                            <option value='orderP'>Precio</option>
                            <option value='orderD'>Duración</option>
                            <option value='orderS'>Escalas</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className='d-flex justify-content-center flex-column p-4 '>
                <label className='text-center font-weight-bold '>
                    Buscá tu aerolínea!
                </label>
                <input
                    className='m-3 Flightsearch-input'
                    type='text'
                    name='airlineName'
                    onChange={(e) => handleChangeAirline(e)}
                />
            </div>
            {flights === "Error" ? (
                <button
                    type='button'
                    className='btn btn-outline-light'
                    onClick={(e) => handleClick(e)}
                >
                    Resetear filtros
                </button>
            ) : null}
        </div>
    );
}
