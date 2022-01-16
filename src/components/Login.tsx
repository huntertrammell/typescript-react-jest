import React from 'react'
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

export class Login extends React.Component<LoginProps> {

    render(): React.ReactNode {
        return (
            <div>It Works</div>
        )
    }
}