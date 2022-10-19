import axios from "axios";

const Boton = () => {

    const a = () => {
        axios.get('/auth/login/success')
        .then((res) => {
            console.log(res.data);
        })
    }

    return (
        <button onClick={a}>dsadasd</button>
    );
}
 
export default Boton;