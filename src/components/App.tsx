import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utils/history";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Login } from "./Login";
import { Profile } from "./Profile";

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
    this.state = {
      user: undefined,
    };
  }

  private setUser(user: User) {
    this.setState({ user: user });
    console.log(user);
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <header>
            <Navbar user={this.state.user} />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
