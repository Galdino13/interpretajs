import '../styles/login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Register(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
      
        try {
          const response = await axios.post('https://flaskedson.matheusgamarra.repl.co', { email, password });
          if (response.data.authenticated) {
            setIsLoggedIn(true);
          } else {
            // Tratar a resposta do servidor quando o usuário não é autenticado
          }
        } catch (error) {
          // Tratar o erro de conexão
        }
      };
    
    useEffect(() => {
        document.title = "Interpreta | Entre!";
    }, []);
    
    return (
        <>
          {isLoggedIn ? (
            <div className='container'>
              <p>Usuário autenticado!</p>
            </div>
          ) : (
            <div className='register-page'>
              <div className='container register-container'>
                <div className='container register-container2'>
                  <div className='header'>
                    <div className='icon'>
                      <FontAwesomeIcon icon='feather' />
                    </div>
                    <h3>Interpreta</h3>
                  </div>
                  <div className='form'>
                    <form className='form-horizontal' onSubmit={handleSubmit}>
                      <label htmlFor='name'>Email:</label>
                      <input type='email' name='email' className='form-control' />
                      <label htmlFor='name'>Senha:</label>
                      <input type='password' name='password' className='form-control' /><br />
                      <button type='submit' className='btn btn-primary'>Entrar!</button>
                    </form>
                    <div className='login-link'>
                      <p>Ainda não possui conta?</p>
                      <button id='btn-log' className='btn btn-primary'><Link className='link' to='/register'>Cadastre-se!</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
}