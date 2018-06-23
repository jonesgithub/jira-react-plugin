import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { initializeAjs } from './actions';

class App extends Component {
    componentDidMount() {
        const MockAjs = {
            Meta: {
                'context-path': '/',
                'base-url': process.env.PUBLIC_URL,
            }
        };

        const { initAjs } = this.props;
        const ajs = window.AJS ? window.AJS : MockAjs;
        initAjs(ajs);
    }


    render() {
        const {AJS} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <strong>context-path:</strong> {AJS.Meta ? AJS.Meta['context-path'] : 'N/A'}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    AJS: state.core.AJS
});

const mapDispatchToProps = (dispatch) => ({
    initAjs: (ajs) => dispatch(initializeAjs(ajs)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
