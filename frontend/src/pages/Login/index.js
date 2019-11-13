import React, {useState} from "react";
import api from '../../services/api';

export default function Login() {
    // Estados
    // Estado do email e atualizar o email
    const [email, setEmail] = useState('');
  
    async function handleSubmit(event) {
    // Previna o seu funcionamento padrão
    event.preventDefault()
    
    // Chamando a api
    const response = await api.post('/sessions', {
        email: email
    });
    // Pega o id do email
    const _id = response.data._id
    // Armazenar o id no BD do navegador
    localStorage.setItem('user', _id);
    }
    
    return (
    <>
    <p>
        Ofereça <strong>spots</strong> para programadores e encontre<strong> talentos</strong> para a sua empresa.
    </p>

    <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
            required
            type="email"
            id="email"
            placeholder="Seu melhor e-mail!"
            onChange={event => setEmail(event.target.value)}/>
        <button className="btn" type="submit">Entrar</button>
        </form>
    </>
    );
}