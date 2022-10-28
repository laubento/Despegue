import React from "react";
import "./ratingCard.css"
import "../styles/NavBar.css"


export default function RatingCard({name, photo, description, value}){
    return(
        <div className="primaryDivRating">
            <li class="box_result">
			    <div class="avatar_comment">
				    <img src={photo} alt="avatar"/>
				</div>
				<div class="result_comment">
					<h4>{name}</h4>
					<p>{description}</p>
                    <p>{value}</p>
					</div>
				</li>
        </div>
    )
}