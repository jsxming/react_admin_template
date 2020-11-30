import {DEMO_TYPE} from './type';

function actionCreator(type){
    return (payload)=>{
        return {type,payload};
    };
}


export const demoTypeAction = actionCreator(DEMO_TYPE);
