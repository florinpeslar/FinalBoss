import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <main className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Donuts!</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href={FlowRouter.url('login')}>Login</a></li>
                                <li><a href={FlowRouter.url('register')}>Register</a></li>
                            </ul>
                        </div>

                    </div>

                </main>

                <div className="jumbotron">
                    <div className="container">
                        <h1 className="text-center">Hello Donut!</h1>
                    </div>
                </div>
            </div>

        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
