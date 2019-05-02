//增加引用函式
const projectlist = require('./utility/projectlist');


projectlist.fetchProjectListP('8').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.projectlist_serno);
        console.log(data.project_id);
        console.log(data.list_serno);
    }
})


projectlist.fetchProjectListL('A001').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.projectlist_serno);
        console.log(data.project_id);
        console.log(data.list_serno);
    }
})


projectlist.addProjectList('C001', '9').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('add ' + data + ' record(s)');
    }
})


projectlist.deleteProjectList('23').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('delete ' + data + ' record(s)');
    }
})
