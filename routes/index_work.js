//增加引用函式
const work = require('./utility/work');


// work.displayWork('10').then(data => {
//     if (!data) {
//         console.log('notFound');
//     } else {
//         console.log(data.work_serno);
//         console.log(data.work_title);
//         console.log(data.work_content);
//         console.log(data.deadline);
//         console.log(data.tag);
//         console.log(data.file);
//         console.log(data.first_principal);
//         console.log(data.second_principal);
//     }
// })


// work.displayWorkTitle('10').then(data => {
//     if (!data) {
//         console.log('notFound');
//     } else {
//         console.log(data.work_serno);
//         console.log(data.work_title);
//     }
// })


// work.addWork('工作二三', '這是工作二三', '2019-05-05', '@工作', 'zip', '科學yee', '柯網頁').then(data => {
//     if (!data) {
//         console.log('notFound');
//     } else {
//         console.log(data);
//     }
// })


// work.deleteWork('22').then(data => {
//     if (!data) {
//         console.log('notFound');
//     } else {
//         console.log(data);
//     }
// })


// work.updateWork('21', '工作十四', '這是工作十四', '2019-05-05', '@工作', 'zip', '之晴麻麻', '組長大大').then(data => {
//     if (!data) {
//         console.log('notFound');
//     } else {
//         console.log(data);
//     }
// })


work.displayWrokPrincipal('23').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (!data) {
        console.log('notFound');
    } else {
        console.log(data.first_principal);
        console.log(data.second_principal);
    }
})


//--------deadline輸出格式有問題
work.displayMyWork('柯網頁').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (!data) {
        console.log('notFound');
    } else {
        data.forEach(work => {
            console.log(work.work_serno);
            console.log(work.work_title);
        });
    }
})