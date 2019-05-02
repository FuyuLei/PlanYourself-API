//增加引用函式
const list = require('./utility/list');


list.fetchList('10').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.list_serno);
        console.log(data.list_name);
    }
})


list.addList('列表十一').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('add ' + data + ' record(s)');
    }
})


list.deleteList('11').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('delete ' + data + ' record(s)');
    }
})


list.updateListName('11', '列表11').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('update ' + data + ' record(s)');
    }
})