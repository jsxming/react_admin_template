import React from 'react';
import {useLocation,Redirect,Route } from 'react-router-dom';
import { useSelector} from 'react-redux';
const authArr = [

];

function isPermission(path){
    return authArr.includes(path);
}



/**
 * 权限组件
 */
function AuthComponent({component: Component,...rest}){
    const loc  = useLocation();
    const token = useSelector(state=>state.token);
    return <Route {...rest}
        render={(props)=>{
            return !isPermission(loc.pathname) && token ? <Component {...props}></Component> : <Redirect to="/login"></Redirect>;
        }} ></Route>;
}


export default AuthComponent;