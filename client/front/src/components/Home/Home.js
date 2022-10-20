import React, { useEffect } from "react";
import { addUserRole, listUsers } from "../../Redux/Actions";
import FlightsSearch from "../FlightsSearch/FlightsSearch";
import { useDispatch, useSelector } from "react-redux";
// se usa info de momento

function Home() {
  let dispatch = useDispatch();

  useEffect(e => {
    dispatch(listUsers())
  }, [dispatch])

  let usersList = useSelector(state => state.listUsers)
  let user = useSelector(state => state.user)

  let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
  if (userRole) {
    dispatch(addUserRole(userRole))
  }
  console.log(userRole)
  return (
    <div className="p-4">
      <FlightsSearch />
    </div>
  );
}

export default Home;
