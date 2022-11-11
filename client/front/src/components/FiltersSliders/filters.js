import { Box, Slider } from "@mui/material";
import React from "react";

export const PriceSlider = (props) => {
    const {
        pricesArray,
        minP,
        maxP,
        setFilters,
        filters,
        validate,
        setLength,
        setHasMore,
        dataSource,
    } = props;
    //prices
    const noDupPrice = [...new Set(pricesArray)];
    const allPrices = noDupPrice.map((e) => {
        return { value: e };
    });
    const [price, setPrice] = React.useState([minP, maxP]);
    const handlePriceCommited = (e, newValue) => {
        setFilters({
            ...filters,
            minPrice: newValue[0],
            maxPrice: newValue[1],
        });
        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    };
    const handlePrice = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) return;
        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1]), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0])]);
        }
    };

    return (
        <>
            <h4>Precio:</h4>
            <Box sx={{ width: 250 }}>
                <span>${price[0]}</span>
                <span style={{ float: "right" }}>${price[1]}</span>
                <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={price}
                    onChange={handlePrice}
                    onChangeCommitted={handlePriceCommited}
                    valueLabelDisplay='auto'
                    // getAriaValueText={valuetext}
                    marks={allPrices}
                    step={null}
                    disableSwap
                    min={minP}
                    max={maxP}
                    track={false}
                />
            </Box>
        </>
    );
};

export const TimeSlider = (props) => {
    const {
        setFilters,
        filters,
        validate,
        setLength,
        setHasMore,
        dataSource,
        durationArray,
        maxD,
        minD,
    } = props;

    const noDupDuration = [...new Set(durationArray)];
    const durations = noDupDuration.map((e) => {
        return { value: e };
    });
    const [duration, setDuration] = React.useState(maxD);
    const handleDurationCommited = (e, newValue) => {
        setFilters({ ...filters, maxDuration: newValue });

        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    };
    const handleDuration = (event, newValue, activeThumb) => {
        // console.log(event);
        console.log(newValue);
        // console.log(activeThumb);
        setDuration(newValue);
    };

    return (
        <>
            <h4>Duración: {duration}h</h4>
            <Box sx={{ width: 250 }}>
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
        </>
    );
};

export const ScheduleSlider = (props) => {
    const { setFilters, filters, validate, setLength, setHasMore, dataSource } =
        props;
    //hours
    const noDupHour = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
    ];
    const hours = noDupHour.map((e) => {
        return { value: e };
    });

    const [hour, setHour] = React.useState([0, 24]);
    const handleHourCommited = (e, newValue) => {
        setFilters({ ...filters, minHour: newValue[0], maxHour: newValue[1] });

        validate();
        setLength(0);
        setHasMore(true);
        dataSource([]);
        dataSource((prevData) => prevData);
    };

    const handleHour = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) return;
        if (activeThumb === 0) {
            setHour([Math.min(newValue[0], hour[1]), hour[1]]);
        } else {
            setHour([hour[0], Math.max(newValue[1], hour[0])]);
        }
    };
    return (
        <>
            <h4>Horario:</h4>
            <Box sx={{ width: 250 }}>
                <span>{hour[0]}</span>
                <span style={{ float: "right" }}>{hour[1]}</span>
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
        </>
    );
};
