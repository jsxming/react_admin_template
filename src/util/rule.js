// antd form  验证 函数等

export function mustRequire(message){
    return [{required:true,message}];
}


export function max(number){
    return {max:number,message:`字数不超过${number}个字符`};
}
