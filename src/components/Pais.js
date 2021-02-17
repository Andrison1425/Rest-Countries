import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

const Pais = () => {
    
    const pais=useSelector(store=>store.paises.verPais);
    const lenguajes=[];
    const monedas=[];
    const history=useHistory();
    const fronteras=Object.values(pais.borders);
    console.log(fronteras)

    const regresar=()=>{
        history.goBack();
    }

    return (
        <main className="info__main">
            <button 
                className="btn-back box"
                onClick={regresar}
            >← Back</button>

            <div className="cont-info">
                <img src={pais.flag} alt="img" />
                <div className="info">
                    <h2>{pais.name}</h2>
                    <div className="info-flex">
                        <span>
                            <h4>Native Name: </h4>{pais.nativeName}
                        </span>
                        <span>
                            <h4>Population: </h4>{pais.population}
                        </span>
                        <span>
                            <h4>Region: </h4>{pais.region}
                        </span>
                        <span>
                            <h4>Sub Region: </h4>{pais.subregion}
                        </span>
                        <span>
                            <h4>Capital: </h4>{pais.capital}
                        </span>
                        <span>
                            <h4>Top Level Domain: </h4>{pais.topLevelDomain}
                        </span>
                        <span>
                            {pais.currencies.forEach(ele=>monedas.push(ele.name))}
                            <h4>Currencies: </h4><span>{monedas.join()}</span>
                        </span>
                        <span>
                            {
                                pais.languages.forEach(ele=>lenguajes.push(ele.name))
                            }
                            <h4>Languages: </h4><span>{lenguajes.join(', ')}</span>
                        </span>
                    </div>
                    <br />
                    <h4>Border countries: </h4>         
                    <span className="bordes">
                        {fronteras.map(ele=>(
                            <span
                                key={ele}
                                className="box  fronteras"
                            >{ele}</span>
                        ))}
                    </span>
                </div>
            </div>
        </main>
    )
}

export default Pais
