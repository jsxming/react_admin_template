import React from 'react';
import {Button, Input} from 'antd';
import {CloudUploadOutlined} from '@ant-design/icons';
import useUpload from '@/components/hooks/useUpload';
import API from '@/api/index';


//自定义上传组件
export default function VUpload({value,onChange,maxSize=5,fileType='image'}){
    const {change} = useUpload({
        maxSize,
        fileType,
        upload:async function(formdata) {
            const res = await API.upload(formdata);
            onChange(res);
            return true;
        }
    });

    return   (
        <div className="flex_start">
            <Input
                allowClear
                disabled
                placeholder="请选择文件"
                value={value}
            />
            <Button icon={<CloudUploadOutlined />}
                onClick={()=>{change();}}
                style={{marginLeft:15}} >选择</Button>
        </div>
    );

}