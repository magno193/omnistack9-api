import React, { useState }from "react";

import camera from '../../assets/camera.svg'

import './styles.css'

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit() {
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="image">
                <input type="file"></input>
                <img src={camera} alt="Selecet image"/>
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input 
                required
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgulas)</span></label>
            <input
                required
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={e => setTechs(e.target.value)} 
            />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para gratuito)</span></label>
            <input
                id="price"
                placeholder=""
                value={price}
                onChange={e => setPrice(e.target.value)} 
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}