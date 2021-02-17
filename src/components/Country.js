import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { verPais } from '../actions/paisesActions';

const Country = ({pais}) => {
    const dispatch=useDispatch();
    return (
        <Link 
            to="/pais"
            className="listado__pais"
            onClick={()=>dispatch(verPais(pais))}
        >
            <img src={pais.flag} alt="Imagen" />
            <div className="pais-cuerpo">
                <h2>{pais.name}</h2>
                <p><strong>Población: </strong>{pais.population}</p>
                <p><strong>Region: </strong>{pais.region}</p>
                <p><strong>Capital: </strong>{pais.capital}</p>
            </div>
        </Link>
    )
}

export default Country
