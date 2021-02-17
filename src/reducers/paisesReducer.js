import { BUSCAR_PAISES, FILTRAR_PAISES,FILTRAR_PAISES_EXITO, LISTAR_PAISES, VER_PAIS } from "../types";

const init={
    paises:[],
    paisesFiltrados:[],
    paisesBuscar:[],
    verPais:{}
}

export default function paisesReducer(state=init,action){
    switch (action.type) {

        case LISTAR_PAISES:
            return {...state,paises:action.payload,paisesFiltrados:action.payload}

        case FILTRAR_PAISES:
            return {...state, paisesFiltrados:state.paises}
            
        case FILTRAR_PAISES_EXITO:
            return {...state,
                paisesBuscar:[],
                paisesFiltrados:state.paises.filter(pais=>pais.region===action.payload)
            }

        case BUSCAR_PAISES:
            return {
                ...state,
                paisesBuscar:state.paisesFiltrados.filter(pais=>pais.name.toLowerCase().search(action.payload.toLowerCase())!== -1)
            }

        case VER_PAIS:
            return {...state,verPais:action.payload}

        default:
            return state;
    }
}
