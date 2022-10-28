import swal2 from "sweetalert2";
import axios from "axios";
const a = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlCSWR4bFJuUmdnOEQ0S1E0QXJfTiJ9.eyJpc3MiOiJodHRwczovL2Rldi01bjJ1a2pydGgyMGRmMWJ5LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJvQTd6WDJnOExMY2dvNlliMHUxS2swbk8ybVBsRGVvbUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtNW4ydWtqcnRoMjBkZjFieS51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY2Njg5OTQ1MCwiZXhwIjoxNjY2OTg1ODUwLCJhenAiOiJvQTd6WDJnOExMY2dvNlliMHUxS2swbk8ybVBsRGVvbSIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zX3N1bW1hcnkgY3JlYXRlOmFjdGlvbnNfbG9nX3Nlc3Npb25zIHJlYWQ6b3JnYW5pemF0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcnMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVycyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGNyZWF0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgcmVhZDpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.akIJBfIpcXldwS4jQuEe-Jqqy5jF2iJ_t9HGPeec8oHAy0_heg7HOGjafYoaCSBhGO_Trk4Sj6m8bYhD1MCTVvHLK1d_2gnSDhNg-PEjKV1hU03zld8Ux_egcZvCmiWKAH2BwtfG1EG1PYR7w_aymKTRVUL6HytrT5oZypMNhRTIOLRArkjYvfo5UyFj1ug-SFeIhngER0virbnMcqNB5N0W0sJFrdTfM9WjeY1-PG7LnP7fva5oH0cpOTnxZhMPKQ1MARA3KokhblaYlzRXVvGb5SAYXXaNvXeqwWpauu_PZsQhqIC64lkdKUs-0wOOhbxuX-IMAtUCnoR4ArqmMg'

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
    const user = JSON.parse(window.localStorage.getItem('user'))
    swal2.fire({
        title: "Necesitar verificar el email antes de realizar una compra",
        icon: "warning",
        showConfirmButton: true,
        confirmButtonText: "Enviar mail de confirmacion",
        showDenyButton:true,
        denyButtonText: "Cerrar"
    })
    .then((result) => {
        if(result.isConfirmed){
            axios.post('/users/verify', {user})
            .then((e) => {
                return swal2.fire("Mail enviado con exito")
            })
            .catch((e) => {
                return swal2.fire("Ha ocurrido un error con el envio de mail");
            })   
        }
    })
}