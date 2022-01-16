import React, { SyntheticEvent } from 'react'
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

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        isLoggedIn: false
    }

    private setUserName(event: CustomEvent){
        this.setState({userName: event.target.value})
    }

    private setPassword(event: CustomEvent){
        this.setState({password: event.target.value})
    }

    private async handleSubmit(event: SyntheticEvent){
        event.preventDefault();
        const result = await this.props.authService.login(this.state.userName, this.state.password)
        if(result){
            console.log(result)
        } else {
            console.log("wrong login")
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                <h2>Please Login</h2>
                <form id="form-login" onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" value={this.state.userName} onChange={e => this.setUserName(e)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={this.state.password} onChange={e => this.setPassword(e)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}