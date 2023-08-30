import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator()

import { LogIn } from "../screens/LogIn";
import { HomeAluno } from "../screens/Aluno/Home";
import { HomeProfessor } from "../screens/Professor/Home";
import { HomeResponsavel } from "../screens/Responsavel/Home";
import { ListarSaida } from "../screens/Aluno/ListarSaida";
import { CriarSaida } from "../screens/Aluno/CriarSaida";
import { CriarSaidaResp } from "../screens/Responsavel/CriarSaidaResp";
import { ListarSaidaResp } from "../screens/Responsavel/ListarSaidaResp";
import { RecuperarSenha } from "../screens/Responsavel/Senha/RecuperarSenha";
import { VisualizarSaida } from "../screens/Responsavel/VisualizarSaida";
import { ConfirmarCodigo } from "../screens/Responsavel/Senha/ConfirmarCodigo";
import { NovaSenha } from "../screens/Responsavel/Senha/NovaSenha";


export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name="LogIn"
                component={LogIn}
                options={{
                    title: "LogIn"
                }}
            />


            {/* Aluno telas */}

            <Screen
                name="HomeAluno"
                component={HomeAluno}
                options={{
                    title: "HomeAluno",
                }}
            />
            <Screen
                name="CriarSaida"
                component={CriarSaida}
                options={{
                    title: "CriarSaida",
                }}
            />
            <Screen
                name="ListarSaida"
                component={ListarSaida}
                options={{
                    title: "ListarSaida",
                }}
            />


            {/* Professor telas */}

            <Screen
                name="HomeProfessor"
                component={HomeProfessor}
                options={{
                    title: "HomeProfessor",
                }}
            />


            {/* Responsavel telas */}

            <Screen
                name="HomeResponsavel"
                component={HomeResponsavel}
                options={{
                    title: "HomeResponsavel",
                }}
            />
            <Screen
                name="CriarSaidaResp"
                component={CriarSaidaResp}
                options={{
                    title: "CriarSaidaResp",
                }}
            />
            <Screen
                name="ListarSaidaResp"
                component={ListarSaidaResp}
                options={{
                    title: "ListarSaidaResp",
                }}
            />
            <Screen
                name="VisualizarSaida"
                component={VisualizarSaida}
                options={{
                    title: "VisualizarSaida",
                }}
            />

            {/* Responsavel telas - recuperar senha */}

            <Screen
                name="RecuperarSenha"
                component={RecuperarSenha}
                options={{
                    title: "RecuperarSenha",
                }}
            />
            <Screen
                name="ConfirmarCodigo"
                component={ConfirmarCodigo}
                options={{
                    title: "ConfirmarCodigo",
                }}
            />
            <Screen
                name="NovaSenha"
                component={NovaSenha}
                options={{
                    title: "NovaSenha",
                }}
            />
        </Navigator>
    )
}