import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRatings } from "../../Redux/Actions";
import RatingCard from "./ratingCard";
import "./rating.css"
import RatingForm from "./ratingForm";

export default function Rating(){
    const dispatch = useDispatch()
    const rating = useSelector((state) => state.rating)

    const userData = rating.map((el) => {return {userData: el.userData}})

    useEffect(() => {
        dispatch(getAllRatings())
    },[])
    console.log(rating)
    return(
        <div className="containerRating">
            <div>
                <RatingForm/>
            </div>
            {rating.length && rating.map((element) => {
                return( 
                    <RatingCard name={element.userData[0].firstName} photo={element.userData[0].photo} description={element.description}
                    value={element.value} />
                )
            })}
        </div>
    )
}