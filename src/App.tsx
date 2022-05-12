import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageRender from './PageRender';
import './App.less';

function App() {
  return (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={PageRender} exact />
                <Route path="/:page" component={PageRender} exact />
                <Route path="/:page/:control" component={PageRender} exact />
                <Route path="/:page/:control/:id"component={PageRender} exact/>
                
            </Switch>
        </BrowserRouter>
    </>
);
}

export default App;
