import { BUSCAR_PAISES, FILTRAR_PAISES, FILTRAR_PAISES_EXITO, LISTAR_PAISES, VER_PAIS } from "../types"

const campos="fields=name;capital;currencies;region;nativeName;subregion;topLevelDomain;borders;population;languages;flag";

export const listarPaises=()=>{

    return async dispatch=>{
        const peticion=await fetch(`https://restcountries.eu/rest/v2/all?${campos}`);
        const paises=await peticion.json();
        dispatch({
            type:LISTAR_PAISES,
            payload:paises
        })
    }
}

export const filtrarPaisesExito=(region)=>{
        
    return (dispatch)=>{
        if(!region){
            dispatch(filtrarPaises());
        }else{
            dispatch({
                type:FILTRAR_PAISES_EXITO,
                payload:region
            })
        }
    }
}

const filtrarPaises=()=>({
    type:FILTRAR_PAISES
})

export const buscarPaises=(q)=>{
    console.log(q)
    return (dispatch)=>{
        dispatch({
            type:BUSCAR_PAISES,
            payload:q
        })
    }
}

export const verPais=(pais)=>{
    return (dispatch)=>{
        dispatch({
            type:VER_PAIS,
            payload:pais
        })
    }
}