import React, { useEffect } from 'react';
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';


function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    const { topicId } = useParams();
    console.log(topicId,'topicId');
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}


export default function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    const match = useRouteMatch();
    useEffect(()=>{
        console.log( 'path=',match,);
    },[]);

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact
                    path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}
