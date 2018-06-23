import Button, { ButtonGroup } from '@atlaskit/button';
import React, { Component } from 'react';
import { ajs } from '../commons/Ajs';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <strong>context-path:</strong>
                    {ajs ? ajs().Meta['context-path'] : 'N/A'}
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

export default App;
