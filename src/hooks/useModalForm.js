import React,{useState} from 'react';

/**
 *
 * @param {*} title
 * @param {*} createFn // 必须返回一个boolean的promise 以关闭弹框
 * @param {*} updateFn  // 必须返回一个boolean的promise 以关闭弹框
 */
export default function useModalForm({title,form,defaultVisible=false,createFn,updateFn}){

    const [visible,setVisible] = useState(defaultVisible);

    const [data,setData] = useState({
        row:{},
        rowIndex:-1
    });


    function updateRow(row,rowIndex){
        setData({row,rowIndex});
        form.setFieldsValue(row);
        setVisible(true);
    }


    function creatRow(){
        setVisible(true);
        setData({row:{},rowIndex:-1});
        form.resetFields();
    }

    //modal 中的表单提交
    async function onFinish(values){
        if(data.rowIndex===-1){
            //创建
            const bool = await createFn(values,data.row);
            form.resetFields();
            setVisible(bool);
        }else{
            //新增
            const bool =await updateFn(values,data.row);
            form.resetFields();
            setVisible(bool);
        }
    }

    function submit(){
        form.submit();
    }

    return {
        formProps:{
            form,
            onFinish,
            colon:false,
        },
        modalProps:{
            onOk:submit,
            onCancel:()=>{
                form.resetFields();
                setVisible(false);
            },
            getContainer:false,
            visible,
            centered:true,
            maskClosable:false,
            title:<p className="text_center">
                {data.rowIndex===-1 ? '添加':'修改'}{title}
            </p>,
            width:420
        },
        create:creatRow,
        update:updateRow,
    };
}
