/**
 * 生成table column数据
 * @param {String} title
 * @param {String,Number} key
 */
export function createTableColumn(title, key, width) {
    return {
        title,
        dataIndex: key,
        key,
        width,
        align:'center',
        ellipsis: width ? true : false
    };
}