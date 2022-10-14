import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFlights, searchAirportFrom, searchAirportTo } from "../../Redux/Actions";
import "../styles/FlightSearch.css";
// import { useHistory } from 'react-router-dom';

export default function FlightsSearch() {
  const dispatch = useDispatch();
  const history = useHistory();
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
  const Today = `${year}-${month}-${day}`;

  const [flights, setFlights] = useState({
    tripType: "onewaytrip",
    departurePlace: "",
    arrivalPlace: "",
    departureDate: "",
    returningDate: "",
    cabinClass: "Economy",
    adults: 1,
    children: 0,
    infants: 0,
    currency: "USD",
  });

  const [error, setError] = useState({
    departurePlace: "",
    boolDeparturePlace: "",
    arrivalPlace: "",
    boolArrivalPlace: "",
    departureDate: "",
    boolDepartureDate: "",
    arrivalDate: "",
    boolArrivalDate: "",
  });

  function validate(input) {
    let errors = {};

    if (!input.departurePlace) {
      errors.departurePlace = "necesita rellenar";
      errors.boolDeparturePlace = "a";
    } else if (input.departurePlace.length < 3) {
      errors.departurePlace = "3 minimo";
      errors.boolDeparturePlace = "a";
    }

    if (!input.arrivalPlace) {
      errors.arrivalPlace = "necesita rellenarr";
      errors.boolArrivalPlace = "a";
    } else if (input.arrivalPlace.length < 3) {
      errors.arrivalPlace = "3 minimoo";
      errors.boolArrivalPlace = "a";
    }
    if (!input.departureDate) {
      errors.departureDate = "completar fecha";
      errors.boolDepartureDate = "a";
    }
    if (input.tripType === "roundtrip") {
      if (!input.arrivalDate) {
        errors.arrivalDate = "completar fechaaa";
        errors.boolArrivalDate = "a";
      }
    }

    return errors;
  }

  // Lugares disponibles
  const handleChangeSites = (num, age) => {
    if (num) {
      setFlights({ ...flights, [age]: flights[age] + 1 });
    } else {
      setFlights({ ...flights, [age]: flights[age] - 1 });
    }
  };

  const handleChange = (e) => {
    // Seteo de la fecha arrive en caso de cambio
    if (e.target.name === "departureDate") {
      return setFlights({
        ...flights,
        returningDate: "",
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.id === "oneway") {
      return setFlights({
        ...flights,
        returningDate: "",
        [e.target.name]: e.target.value,
      });
    }
    setFlights({ ...flights, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(
      validate({
        ...flights,
        [e.target.name]: e.target.value,
      })
    );
    if (
      error.boolArrivalPlace ||
      error.boolDeparturePlace ||
      error.boolDepartureDate ||
      error.boolArrivalDate
    ) {
      console.log("entro");
      return true;
    }

    dispatch(getFlights(flights));
    setFlights({
      tripType: "onewaytrip",
      departurePlace: "",
      arrivalPlace: "",
      departureDate: "",
      returningDate: "",
      cabinClass: "Economy",
      adults: 1,
      children: 0,
      infants: 0,
      currency: "USD",
    });
    history.push("/flights");
  };

  const handleChangeAirport = (e) => {
    setAirportName({
        ...airportName,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmitAirportFrom = (e) => {
    e.preventDefault();
    if (airportName.from === "") {
        return alert('pone algo')
    }
    setActivateFrom(true)
    dispatch(searchAirportFrom(airportName.from));
  };
  console.log(activateFrom)
  console.log(activateTo)

  const handleSubmitAirportTo = (e) => {
    e.preventDefault();
    if (airportName.to === "") {
      return alert('pone algo')
    }
    setActivateTo(true)
    dispatch(searchAirportTo(airportName.to));
  };

  console.log(airportName.from)
  console.log(airportName.to)

  const handleSelectFrom = (e) => {
    let codeIata = e.target.value.substr(-3)
    setFlights({
        ...flights,
        departurePlace: codeIata
    })
  }

  const handleSelectTo = (e) => {
    let codeIata = e.target.value.substr(-3)
    setFlights({
        ...flights,
        arrivalPlace: codeIata
    })
  }

  console.log(flights)
  return (
    <div>
      <form onSubmit={(e) => handleSubmitAirportFrom(e)}>
      <label>From</label>
                    <br/>
            <input type='text' name='from'  onChange={(e) => handleChangeAirport(e)}  />
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
            <input type='text' name='to'  onChange={(e) => handleChangeAirport(e)}  />
            <button type='submit'>Buscar</button>
            <br/>
            {activateTo === false ? '' : <select onChange={(e) => handleSelectTo(e)}>
            {airportsTo.length && airportsTo.map((e,i) =>{
                
                return(
                    
                        <option key={i}>{e.name}, code: {e.iata}</option>
                )
                })}
                </select> }
                
                </form>
      <form style={{ width: "1200px", margin: "auto" }} onSubmit={handleSubmit}>
        <div className="text-left" onChange={handleChange}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tripType"
              id="oneway"
              value="onewaytrip"
              defaultChecked={flights.tripType === "onewaytrip"}
            />
            <label className="form-check-label" htmlFor="tripType">
              One way
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tripType"
              id="roundtrip"
              value="roundtrip"
              defaultChecked={flights.tripType === "roundtrip"}
            />
            <label className="form-check-label" htmlFor="roundtrip">
              Round trip
            </label>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-2"> */}

            {/* <label>From</label>
            <input
              className={
                error.boolDeparturePlace
                  ? "FlightSearch-error form-control"
                  : "form-control"
              }
              type="text"
              name="departurePlace"
              id="from"
              value={flights.departurePlace}
              onChange={handleChange}
            ></input>
          </div> */}
          {/* <div className="col-2">
            <label>To</label>
            <input
              className={
                error.boolArrivalPlace
                  ? "FlightSearch-error form-control"
                  : "form-control"
              }
              type="text"
              name="arrivalPlace"
              id="to"
              value={flights.arrivalPlace}
              onChange={handleChange}
            ></input>
          </div>
          */}
          <div className="col-2">
            <label>Depart</label>
            <input
              className={
                error.boolDepartureDate
                  ? "FlightSearch-error form-control"
                  : "form-control"
              }
              min={Today}
              type="date"
              name="departureDate"
              id="depart"
              value={flights.departureDate}
              onChange={handleChange}
            ></input>
          </div> 
          {flights.tripType === "roundtrip" ? (
            <div className="col-2">
              <label>Arrive</label>
              <input
                className={
                  error.boolArrivalDate
                    ? "FlightSearch-error form-control"
                    : "form-control"
                }
                disabled={flights.departureDate === ""}
                min={flights.departureDate}
                type="date"
                name="returningDate"
                id={"arrive"}
                value={flights.returningDate}
                onChange={handleChange}
              ></input>
            </div>
          ) : null}
        </div>
        <div className="row">
          <div className="col-2">
            <label>Cabin class</label>
            <select
              name="cabinClass"
              id="cabinClass"
              className="form-control"
              onChange={handleChange}
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
              <option value="Premium_Economy">Premium Economy</option>
            </select>
          </div>
          <div className="col-2">
            <label>Adults</label>
            <div className="form-control FlightSearch-containerConteo">
              <button
                disabled={flights.adults === 1}
                type="button"
                onClick={() => {
                  handleChangeSites(0, "adults");
                }}
                className="FlightSearch-Menos"
              >
                -
              </button>
              <div className="FlightSearch-conteo">{flights.adults}</div>
              <button
                disabled={
                  flights.infants + flights.adults + flights.children > 5
                }
                type="button"
                onClick={() => handleChangeSites(1, "adults")}
                className="FlightSearch-Mas"
              >
                +
              </button>
            </div>
          </div>
          <div className="col-2">
            <label>Children</label>
            <div className="form-control FlightSearch-containerConteo">
              <button
                disabled={flights.children === 0}
                type="button"
                onClick={() => {
                  handleChangeSites(0, "children");
                }}
                className="FlightSearch-Menos"
              >
                -
              </button>
              <div className="FlightSearch-conteo">{flights.children}</div>
              <button
                disabled={
                  flights.infants + flights.adults + flights.children > 5
                }
                type="button"
                onClick={() => {
                  handleChangeSites(1, "children");
                }}
                className="FlightSearch-Mas"
              >
                +
              </button>
            </div>
          </div>
          <div className="col-2">
            <label>Infants</label>
            <div className="form-control FlightSearch-containerConteo">
              <button
                disabled={flights.infants === 0}
                type="button"
                onClick={() => {
                  handleChangeSites(0, "infants");
                }}
                className="FlightSearch-Menos"
              >
                -
              </button>
              <div className="FlightSearch-conteo">{flights.infants}</div>
              <button
                disabled={
                  flights.infants + flights.adults + flights.children > 5
                }
                type="button"
                onClick={() => {
                  handleChangeSites(1, "infants");
                }}
                className="FlightSearch-Mas"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-lg"
          value="Search!"
        />
        {error.departurePlace ? (
          <p className={"FlightSearch-errorsText"}>{error.departurePlace}</p>
        ) : null}
        {error.arrivalPlace ? (
          <p className={"FlightSearch-errorsText"}>{error.arrivalPlace}</p>
        ) : null}
        {error.departureDate ? (
          <p className={"FlightSearch-errorsText"}>{error.departureDate}</p>
        ) : null}
        {error.arrivalDate ? (
          <p className={"FlightSearch-errorsText"}>{error.arrivalDate}</p>
        ) : null}
      </form>
    </div>
  );
}
