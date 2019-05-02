'use strict';

//引用操作資料庫的物件
const query = require('./asyncDB');


//------------------------------------------
// 用list_serno查詢
//------------------------------------------
var fetchList = async function (list_serno) {
    //存放結果
    let result;

    //讀取資料庫
    await query('select * from list where list_serno = $1', [list_serno])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //專案資料(物件)
            } else {
                result = -1;  //找不到資料
            }
        }, (error) => {
            result = -9;  //執行錯誤
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 新增列表資料
//------------------------------------------
var addList = async function (list_name) {
    //存放結果
    let result;

    //讀取資料庫
    await query('insert into list (list_name) values ($1)', [list_name])
        .then((data) => {
            result = data.rowCount;  //新增資料數 
        }, (error) => {
            result = -9;  //執行錯誤
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 刪除列表資料
//------------------------------------------
var deleteList = async function (list_serno) {
    //存放結果
    let result;

    //讀取資料庫
    await query('delete from list where list_serno = $1', [list_serno])
        .then((data) => {
            result = data.rowCount;  //新增資料數
        }, (error) => {
            result = -9;  //執行錯誤
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 更改列表名稱
//------------------------------------------
var updateListName = async function (list_serno, list_name) {
    //存放結果
    let result;

    //讀取資料庫
    await query('update list set list_name = $2 where list_serno = $1', [list_serno, list_name])
        .then((data) => {
            result = data.rowCount;  //新增資料數
        }, (error) => {
            result = -9;  //執行錯誤
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//匯入
module.exports = { fetchList, addList, deleteList, updateListName }