import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRatings } from "../../Redux/Actions";

export default function Rating(){
    const dispatch = useDispatch()
    const rating = useSelector((state) => state.rating)


    useEffect(() => {
        dispatch(getAllRatings())
    },[])
    console.log(rating)
    return(
        <div>
            {}
        </div>
    )
}