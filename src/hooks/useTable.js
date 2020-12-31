import {useEffect, useState,useRef} from 'react';


export default function useTable({
    search=async ()=>{
        return {data:[],total:0};
    },
    initParams={},
    autoload=true
}){
    const [loading,setLoading] = useState(false);
    const [tableData,setTableData] = useState({dataSource:[],total:0});

    const paramsRef =useRef({
        current:1,
        size:20,
        ...initParams,
    });


    async function _innerSearch(values){
        try {
            setLoading(true);
            const {list,total} = await search(values);
            setTableData({dataSource:list||[],total});
            paramsRef.current = values;
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    function paginationChange(page,size){
        _innerSearch({...paramsRef.current,current:page,size});
    }

    function onFinish(values){
        _innerSearch({...paramsRef.current,...values,current:1});
    }

    useEffect(()=>{
        if(autoload){
            _innerSearch(paramsRef.current);
        }
    },[]);

    return {
        doSearch:onFinish,
        tableProps:{
            dataSource:tableData.dataSource,
            loading,
            pagination:false,
        },
        paginationProps:{
            showTotal:total => `共 ${total} 条`,
            current:paramsRef.current.current,
            total:tableData.total,
            defaultCurrent:1,
            defaultPageSize:20,
            pageSizeOptions:['1','10','20','50','100','200'],
            showQuickJumper:true,
            showSizeChanger:true,
            onChange:paginationChange,
        }
    };
}
