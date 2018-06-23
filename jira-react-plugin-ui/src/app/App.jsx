import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button, { ButtonGroup } from '@atlaskit/button';
import { connect } from 'react-redux';
import { initializeAjs } from './actions';

class App extends Component {
    componentDidMount() {
        const MockAjs = {
            Meta: {
                'context-path': '/',
                'base-url': process.env.PUBLIC_URL,
            },
        };

        const { initAjs } = this.props;
        // eslint-disable-next-line no-undef
        const ajs = window.AJS ? window.AJS : MockAjs;
        initAjs(ajs);
    }


    render() {
        const { AJS } = this.props;
        return (
            <div className="App">
                <div>
                    <strong>
                        context-path:
                    </strong>
                    {AJS.Meta ? AJS.Meta['context-path'] : 'N/A'}
                </div>
                <div>
                    <ButtonGroup>
                        <Button>First Button</Button>
                        <Button>Second Button</Button>
                        <Button>Button Tertius</Button>
                        <Button>Fourth Button</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    AJS: state.core.AJS,
});

const mapDispatchToProps = dispatch => ({
    initAjs: ajs => dispatch(initializeAjs(ajs)),
});

App.propTypes = {
    AJS: PropTypes.shape.isRequired,
    initAjs: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
