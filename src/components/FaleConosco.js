import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import logo from '../images/logo.png'

const FaleConosco = ({  }) => {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_8q2luca', 'aco_ivaipora', e.target, 'YpDYsIkEt7x3RErQ6')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }

  return (
    <div className='contact' id='contact'>
    <div className="left">

        <img src={ logo } alt="Aço Ivaiporã" />
    </div>
    <div className="right">
        <h2>Fale Conosco</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Seu Nome"
            name="name"
            required
            />
            <input 
            type="text" 
            placeholder="Seu Email"
            name="email"
            />
            <input 
            type="phone" 
            placeholder="Seu Whatsapp"
            name="phone"
            required
            />
            <textarea 
            placeholder="Voce procura alguma material especifico? Deixe uma mensagem. "
            name="message"
            rows="8"
            />
            <button type="submit">
              Enviar
            </button>
            {message && <span>Muito obrigado! A Aço Ivaiporã manterá o seu registro. </span>}
        </form>
    </div>
</div>
)
}

export default FaleConosco