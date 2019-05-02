//增加引用函式
const project = require('./utility/project');


project.fetchProject('twice').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.project_id);
        console.log(data.projectpermission_serno);
        console.log(data.project_password);
        console.log(data.project_name);
        console.log(data.project_startdate);
        console.log(data.project_enddate);
    }
})


project.addProject('twiceisno1', '12', 'TWICE', 'TWICE', '2019-04-25 12:12:12', '2019-12-25 21:21:21', true).then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('add ' + data + ' record(s)');
    }
})


project.deleteProject('twice').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('delete ' + data + ' record(s)');
    }
})


project.updateProjectName('twice', 'once').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('update ' + data + ' record(s)');
    }
})