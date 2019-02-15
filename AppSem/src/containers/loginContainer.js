import react, { Component } from "react";
import login from "../components/login";
import {
    Alert
} from "reac-native";

class LoginContainer extends Component {

    miEventoUsuario = (texto) => {
        //este es el cuerpo del evento
        //para mandar actualizar el estado utilizaremos el siguiente metodo
        this.setState({
            nombreEstado : texto
        }); //creando un objeto entre el parentesis se mete llave, asi se manipula
    };

    miEventoContraseña = (texto) => {
        //cuerpo del evento
        this.setState({
            contraseñaEstado : texto
        });
    };

    miEventoEntrar = () => {
        //este es el cuerpo del evento
        const { nombreEstado, contraseñaEstado } = this.state;
        if(nombreEstado === "Admin" && contraseñaEstado === "P12345")
        {
            //si se cumple la accion mandamos el mensaje
            Alert.Alert("Este es el titulo", "Bienvenido a la Aplicacion Movil, Admin")
        }
        else
        {
            Alert.Alert("Este es el titulo", "Datos incorrectos")
        }
    };

    render () {

        const { nombreEstado, contraseñaEstado } = this.state;

        return(
            <login 
                eventoUsuario = { this.miEventoUsuario }
                eventoContraseña = { this.miEventoContraseña }
                eventoEntrar = { this.miEventoEntrar }
                nombreDelUsuario = { nombreEstado }
                contraseña = { contraseñaEstado }
            />
        )
    } 
}

export default LoginContainer;