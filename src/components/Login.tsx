import React from 'react'
import { runInThisContext } from 'vm'
import { AuthService } from '../services/AuthService'

interface LoginProps {
    authService: AuthService
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    isLoggedIn: boolean
}

export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        isLoggedIn: false
    }

    render(): React.ReactNode {
        return (
            <div>
                <h2>Please Login</h2>
                <form id="form-login">
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" value={this.state.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={this.state.password} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}