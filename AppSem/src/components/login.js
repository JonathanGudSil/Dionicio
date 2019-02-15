import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
} from "react-native";

const Login = (props) => {

    const {
        eventoUsuario, 
        eventoContraseña, 
        eventoEntrar,
        nombreDelUsuario,
        contraseña,
    } = props;

    return (
        <View>
            <Text>
                Nombre de Usuario:
            </Text>
            <TextInput
                    onChangeText={ eventoUsuario }
                    value={ nombreDelUsuario }
            />
            
            <Text>
                Contraseña:
            </Text>
            <TextInput 
                    onChangeText = { eventoContraseña }
                    value={ contraseña }
            />

            <Button 
                onPress = { eventoEntrar }
                title= "Iniciar Sesión">
            </Button>
        </View>
    );

};

export default login;