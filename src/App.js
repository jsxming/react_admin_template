import React from 'react';
import {Button} from 'antd';
function App(ctx) {
    console.log(ctx);
    return (
        <div className="App">
            <h1>hello world</h1>
            <Button type="primary" >hello</Button>
        </div>
    );
}

export default App;
