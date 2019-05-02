//增加引用函式
const project = require('./utility/project');


project.fetchProject('twice').then(data => {
    if (!data) {
        console.log('notFound');
    } else {
        console.log(data.project_id);
        console.log(data.projectpermission_serno);
        console.log(data.project_password);
        console.log(data.project_name);
        console.log(data.project_startdate);
        console.log(data.project_enddate);
    }
})


project.addProject('twice', '10', 'TWICE', 'TWICE', '2019-04-25 12:12:12', '2019-12-25 21:21:21').then(data => {
    if (!data) {
        console.log('notFound');
    } else {
        console.log(data);
    }
})


project.deleteProject('twice').then(data => {
    if (!data) {
        console.log('notFound');
    } else {
        console.log(data);
    }
})


project.updateProjectName('twice', 'once').then(data => {
    if (!data) {
        console.log('notFound');
    } else {
        console.log(data);
    }
})