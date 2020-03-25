import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

const Logon = () => {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faca seu logon</h1>

                    <input placeholder="Sua ID"></input>
                    <button className="button" type="Submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Nao tenho cadastro
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}

export default Logon