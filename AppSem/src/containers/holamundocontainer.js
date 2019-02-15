import react from "react";

import holamundo from "./../components/holamundo";

import alert from "react-native"

class holamundocontainer extends Component { 

    constructor (props) {
        super (props);

        //aqui va ir nuestro codigo

        //vamos a inicializar el estado con this.estado

        this.state = {
                nombreEnElEstado: "Jonathan"
        };
    }
    ComponentWillMount ( ) { 
        alert.alert ("se va a mostrar la interfaz");
     }

    render () {

        const {nombreEnElEstado} = this.state;
        
        return (
            <holamundo nombre ={nombreEnElEstado}/>
        );

    }
    ComponentDidMount () { 
        //todo el codigo justo aqca se ejecutara hasta despues
        //que se carguen las interfaces
    alert.alert("se acaba de mostrar la interfaz");
    }

    ComponentDidCatch(error, info) {
        alert.alert("se ha produciodo un error");
    }

    ComponentWillUnmount () {
    //
    alert.alert("se va a remover el componente")

    }
}

export default holamundocontainer;

//ciclo de vida solo en el contenedor
//los componentes de interfaz carecen de estado
