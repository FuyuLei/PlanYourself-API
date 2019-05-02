'use strict';

//引用操作資料庫的物件
const query = require('./asyncDB');


//------------------------------------------
// 用list_serno查詢專案
//------------------------------------------
var fetchProjectListP = async function (list_serno) {
    //存放結果
    let result;

    //讀取資料庫
    await query('select * from projectlist where list_serno = $1', [list_serno])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //專案列表資料(物件)
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
// 用project_id查詢列表
//------------------------------------------
var fetchProjectListL = async function (project_id) {
    //存放結果
    let result;

    //讀取資料庫
    await query('select * from projectlist where project_id = $1', [project_id])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //專案列表資料(物件)
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
// 新增專案列表資料
//------------------------------------------
var addProjectList = async function (project_id, list_serno) {
    //存放結果
    let result;

    //讀取資料庫
    await query('insert into projectlist (project_id, list_serno) values ($1, $2)', [project_id, list_serno])
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
// 刪除專案列表資料
//------------------------------------------
var deleteProjectList = async function (projectlist_serno) {
    //存放結果
    let result;

    //讀取資料庫
    await query('delete from projectlist where projectlist_serno = $1', [projectlist_serno])
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
module.exports = { fetchProjectListP, fetchProjectListL, addProjectList, deleteProjectList }