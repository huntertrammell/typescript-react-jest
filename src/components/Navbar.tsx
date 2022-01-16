import React from "react";
import { User } from "../model/Model";
import {Link} from "react-router-dom";
import './navbar.css';

export class Navbar extends React.Component<{user: User | undefined}> {
    render(): React.ReactNode {
        let loggedIn: any 
        if(this.props.user){
            loggedIn = <Link to="/logout">{this.props.user.userName}</Link>
        } else {
            loggedIn = <Link to="/login">Login</Link>
        }

        return (
            <nav className="navbar">
                <h1>React with TypeScript & Jest</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li>{loggedIn}</li>
                </ul>
            </nav>
        )
    }
}