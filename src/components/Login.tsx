import React, { SyntheticEvent } from 'react'
import { User } from '../model/Model'
import { AuthService } from '../services/AuthService'

interface LoginProps {
    authService: AuthService,
    setUser: (user: User) => void
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    isLoggedIn: boolean,
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        isLoggedIn: false,
    }

    private setUserName(event: CustomEvent){
        this.setState({userName: event.target.value})
    }

    private setPassword(event: CustomEvent){
        this.setState({password: event.target.value})
    }

    private async handleSubmit(event: SyntheticEvent){
        event.preventDefault();
        this.setState({loginAttempted: true})
        const result = await this.props.authService.login(this.state.userName, this.state.password)
        if(result){
            this.setState({isLoggedIn: true})
            this.props.setUser(result)
        } else {
            this.setState({isLoggedIn: false})
        }
    }

    render(): React.ReactNode {

        let loginMessage:any;

        if(this.state.loginAttempted){
            if(this.state.isLoggedIn){
                loginMessage = <label htmlFor='form-login'>Login Successful</label>
            } else {
                loginMessage = <label htmlFor='form-login'>Incorrect Login</label>
            }
        }

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
                {loginMessage}
            </div>
        )
    }
}