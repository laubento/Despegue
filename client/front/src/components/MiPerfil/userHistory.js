import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../Redux/Actions";
import "../MiPerfil/userHistory.css";
import Logo from "../../Images/NoVuelo.png";
import CardHistory from "./CardHistory";

export default function UserHistory() {
  let user = useSelector((state) => state.user);
  const user2 = JSON.parse(window.localStorage.getItem("user"));

  if (!user && user2) user = user2;

  const history = useSelector((state) => state.history);
  console.log(history);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(getHistory(user.id));
    }
  }, []);
  return (
    <div>
      {history.length === 0 ? (
        <div className="UserHistory-containerPrincipalImg">
          <img src={Logo} alt="No Vuelo" />
        </div>
      ) : (
        <div className="UserHistory-containerPrincipalVuelos">
          {history.length
            ? history.map((e, i) => {
                return (
                  <div key={i}>
                    <CardHistory paquete={e.package} />
                  </div>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
}
