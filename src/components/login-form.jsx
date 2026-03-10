import React from 'react';
import { useState } from 'react'

function LoginForm() {

    return(
        <>
            <form className='loginForm'>
                <h1>Zaloguj się</h1>
                <label>E-mail <input type="email" id='email'/></label><br/>
                <label>Hasło <input type="password" id='password'/></label><br/>

                <button type='submit'>Zaloguj</button>
            </form>
        </>
    )

}

export default LoginForm// dokończ logowanie