//增加引用函式
const permission = require('./utility/permission');


permission.displayProjectPermission('11').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.list_permission);
        console.log(data.add_work);
        console.log(data.edit_work);
        console.log(data.delete_work);
    }
})


permission.addProjectPermission(false, false, false, false).then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('add ' + data + ' record(s)');
    }
})


permission.deleteProjectPermission('11').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('delete ' + data + ' record(s)');
    }
})


permission.updateProjectPermission('14', true, true, true, false).then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('update ' + data + ' record(s)');
    }
})