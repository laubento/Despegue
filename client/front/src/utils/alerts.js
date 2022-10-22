import swal2 from "sweetalert2";

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
      icon: "error",
      showDenyButton: true,
      //   confirmButtonText: "Reactivar cuenta",
      denyButtonText: "Ok",
    })
    .then((result) => {
      if (result.isDenied) {
        log({
          returnTo: process.env.VERCEL_URL || "http://localhost:3000",
        }); //return to localhost/activar cuenta
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
