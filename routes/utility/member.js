'use strict';

//引用操作資料庫的物件
const query = require('./asyncDB');


//------------------------------------------
// 用userID查詢
//------------------------------------------
var displayMember = async function (userID) {
    //存放結果
    let result;

    //讀取資料庫
    await query('select * from member where user_id = $1', [userID])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //學生資料(物件)
            } else {
                result = false;  //找不到資料
            }
        }, (error) => {
            result = false;  //執行錯誤
            console.log(error)
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 新增會員資料
//------------------------------------------
var addMember = async function (userID, photo, memberName, Email, memberPassword, LineBotPush) {
    //存放結果
    let result;

    //讀取資料庫
    await query('insert into member values ($1, $2, $3, $4, $5, $6)', [userID, photo, memberName, Email, memberPassword, LineBotPush])
        .then((data) => {
            if (data.rowCount > 0) {
                result = true;  //新增
            } else {
                result = false;
            }
        }, (error) => {
            result = false;  //執行錯誤
            console.log(error)
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 刪除會員資料
//------------------------------------------
var deleteMember = async function (userID) {
    //存放結果
    let result;

    //讀取資料庫
    await query('delete from member where user_id = $1', [userID])
        .then((data) => {
            if (data.rowCount > 0) {
                result = true;
            } else {
                result = false;
            }
        }, (error) => {
            result = false;  //執行錯誤
            console.log(error)
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 更改會員頭貼
//------------------------------------------
var updateMemberPhoto = async function (userID, photo) {
    //存放結果
    let result;

    //讀取資料庫
    await query('update member set photo = $2 where user_id = $1', [userID, photo])
        .then((data) => {
            if (data.rowCount > 0) {
                result = true;
            } else {
                result = false;
            }
        }, (error) => {
            result = false;  //執行錯誤
            console.log(error)
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 更改會員信箱
//------------------------------------------
var updateMemberEmail = async function (userID, email) {
    //存放結果
    let result;

    //讀取資料庫
    await query('update member set email = $2 where user_id = $1', [userID, email])
        .then((data) => {
            if (data.rowCount > 0) {
                result = true;
            } else {
                result = false;
            }
        }, (error) => {
            result = false;  //執行錯誤
            console.log(error)
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//------------------------------------------
// 更改會員Linebot推播
//------------------------------------------
var updateMemberLinebotPush = async function (userID, linebotpush) {
    //存放結果
    let result;

    //讀取資料庫
    await query('update member set linebotpush = $2 where user_id = $1', [userID, linebotpush])
        .then((data) => {
            if (data.rowCount > 0) {
                result = true;
            } else {
                result = false;
            }
        }, (error) => {
            result = false;  //執行錯誤
            console.log(error)
        });

    //回傳執行結果
    return result;
}
//------------------------------------------


//匯出
module.exports = { displayMember, addMember, deleteMember, updateMemberPhoto, updateMemberEmail, updateMemberLinebotPush };