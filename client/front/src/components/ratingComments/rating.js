import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRatings } from "../../Redux/Actions";
import RatingCard from "./ratingCard";
import "./rating.css"
import RatingForm from "./ratingForm";

export default function Rating() {
    const dispatch = useDispatch()
    const rating = useSelector((state) => state.rating)
    const user = JSON.parse(window.localStorage.getItem("user"));
    const userData = rating.map((el) => { return { userData: el.userData } })
    // console.log(userData)
    useEffect(() => {
        dispatch(getAllRatings())
    }, [])
    return (
        <div className="container">
            <div>
                <RatingForm />
            </div>

            {/* {rating.length && rating.map((e, i) => {
                console.log(e)
                if (e.userData[0].firstName === (user ? user.firstName : null)) {
                    return (
                        <div>
                            <RatingCard name={rating[rating.length - 1].userData[0].firstName} photo={rating[rating.length - 1].userData[0].photo} description={rating[rating.length - 1].description}
                                value={rating[rating.length - 1].value} /><hr /></div>
                    )
                }
            })} */}
            {rating.length ? rating.map((element, i) => {
                if(i >= 5) return
                return (
                    <RatingCard name={element.userData[0].firstName} photo={element.userData[0].photo} description={element.description}
                        value={element.value} />
                )
            }) : null}
        </div>
    )
}