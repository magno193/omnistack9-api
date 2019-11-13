import React, { useState, useMemo }from "react";
import api from '../../services/api'

import camera from '../../assets/camera.svg'

import './styles.css'

export default function New({history}) {
    const [image, setImage] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
            return image ? URL.createObjectURL(image) : null
        },[image])

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('image', image)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        const response = await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label
                id="image"
                style={{backgroundImage: `url(${preview})`}}
                className={image ? "has-image" : ''}
            > 
                <input type="file" onChange={e => setImage(e.target.files[0])}/>
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