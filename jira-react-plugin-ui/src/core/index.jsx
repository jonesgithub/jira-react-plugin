import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from '../logo.svg';
import {initializeAjs} from "./actions";

class Core extends Component {

    componentDidMount() {
        const MockAjs = {
            Meta: {
                'context-path': '/'
            }
        };

        const { initAjs } = this.props;
        const ajs = window.AJS ? window.AJS : MockAjs;
        initAjs(ajs);
    }


    render() {
        const { AJS } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>{AJS.Meta ? AJS.Meta['context-path'] : '23424'}</div>
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
)(Core)
