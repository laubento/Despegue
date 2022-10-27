import swal2 from "sweetalert2";
import axios from "axios";

export const activeAcc = (log) => {
  swal2
    .fire({
      title: "Tu cuenta se encuentra desactivada",
      text: "¿Queres reactivar tu cuenta?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Reactivar cuenta",
      denyButtonText: "No",
    })
    .then((result) => {
      if (result.isConfirmed) {
        swal2.fire("Cuenta Reactivada");
      } else if (result.isDenied) {
        log({
          returnTo: process.env.VERCEL_URL || "http://localhost:3000",
        }); //return to localhost/activar cuenta
      }
    });
};

export const bannedAcc = (log) => {
  swal2
    .fire({
      title: "Tu cuenta se encuentra suspendida",
      text: " Para recuperar tu cuenta podes comunicarte con: email@email.com  0800-555-1234",
      icon: "error",
      // showDenyButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
      // denyButtonText: "Ok",
    })
    .then((result) => {
      if (result.isConfirmed) {
        log({
          returnTo: process.env.VERCEL_URL || "http://localhost:3000",
        }); //return to localhost/activar cuenta
        window.localStorage.removeItem("user");
      }
    });
};

export const succesAlert = (message) => {
  const Toast = swal2.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", swal2.stopTimer);
      toast.addEventListener("mouseleave", swal2.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: message,
  });
};

export const notLogedForPurchase = (loginWithRedirect) => {
    swal2.fire({
        title: "Necesitas iniciar sesion para comprar",
        icon: "warning",
        showConfirmButton: true,
        confirmButtonText: "Iniciar sesion",
        showDenyButton: true,
        denyButtonText: "Cerrar"
    })
    .then((result) => {
        if(result.isConfirmed) loginWithRedirect({redirectUri: process.env.REACT_APP_CALLBACK || "http://localhost:3000/callback"})
    })
}

export const notVerify = () => {
    swal2.fire({
        title: "Necesitar verificar el email antes de realizar una compra",
        icon: "warning",
        showConfirmButton: true,
        confirmButtonText: "Enviar email de confirmacion",
        showDenyButton:true,
        denyButtonText: "Cerrar"
    })
    .then((result) => {
        const user = JSON.parse(window.localStorage.getItem('user'))
        const options = {
            method: 'POST',
            url: `https://dev-5n2ukjrth20df1by.us.auth0.com/api/v2/jobs/verification-email`,
            headers: { 'content-type': 'application/json' },
            data: {
                "user_id": user.id,
              "client_id": "F7456018hKT6q2IfLLoRlVcnZewaCpLJ",
            }
          };
        if(result.isConfirmed){
            axios.request(options)
            .then((e) => console.log(e))
            .catch((e) => console.log(e))
        }
    })
}