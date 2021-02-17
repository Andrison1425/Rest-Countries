import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buscarPaises, filtrarPaisesExito, listarPaises } from '../actions/paisesActions';
import Country from './Country'

const ListadoPaises = () => {

    const [state,setState]=useState({select:'',search:''});

    const inputChange=e=>setState({
        ...state,
        [e.target.name]:e.target.value
    })

    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(listarPaises());       
    },[]);

    useEffect(()=>{
        dispatch(filtrarPaisesExito(state.select));
    },[state.select]);

    
    useEffect(()=>{
        dispatch(buscarPaises(state.search));
    },[state.search]);
    
    const {paisesFiltrados:paises,paisesBuscar}=useSelector(store=>store.paises);
    return (
        <main className="listado__main">
            <div className="listado__acciones">
                <form>
                    <div className="listado__cont-input">
                        <label htmlFor="search">
                            <i className="fas fa-search"></i>
                        </label>
                        <input 
                            id="search"
                            type="search"
                            placeholder="Buscar un país..."
                            name="search"
                            value={state.search}
                            onChange={inputChange}
                        />
                    </div>
                </form>

                <select 
                    name="select"
                    className="listado__select" 
                    value={state.select}
                    onChange={inputChange}
                >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <div className="listado__paises">
                {
                    paisesBuscar.length===0
                    ?paises.map((pais,index)=>index>0&&index<16?<Country key={pais.name} pais={pais} />:null)
                    :paisesBuscar.map((pais,index)=>index>0&&index<16?<Country key={pais.name} pais={pais} />:null)
                }
            </div>
        </main>
    )
}

export default ListadoPaises
