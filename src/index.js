import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import store, { persistor } from '@/redux/persist';
import { PersistGate} from 'redux-persist/lib/integration/react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import AuthComponent from './components/AuthComponent/index';
import AsyncComponent from './components/AsyncComponent/index';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

import './style/antdreset.less';
import './style/index.less';
const Login = AsyncComponent(() => import('./view/login/index'));
const App = AsyncComponent(() => import('./App'));


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
            <PersistGate loading={null}
                persistor={persistor}
            >
                <ConfigProvider
                    locale={zhCN}>
                    <Router>
                        <Switch>
                            <Route component={Login}
                                exact
                                path="/login"
                            ></Route>
                            <AuthComponent component={App}
                                path="/"
                            ></AuthComponent>
                        </Switch>

                    </Router>
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
