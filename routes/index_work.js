//增加引用函式
const work = require('./utility/work');


work.displayWork('10').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.work_serno);
        console.log(data.work_title);
        console.log(data.work_content);
        console.log(data.deadlint);
        console.log(data.tag);
        console.log(data.file);
        console.log(data.first_principal);
        console.log(data.second_principal);
    }
})


work.displayWorkTitle('10').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.work_serno);
        console.log(data.work_title);
    }
})


work.addWork('工作十五', '這是工作十五', '2019-05-05', '@工作', 'zip', '柯網頁', 'ET').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('add ' + data + ' record(s)');
    }
})


work.deleteWork('11').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('delete ' + data + ' record(s)');
    }
})


work.updateWork('11', '工作十一', '這是工作十一', '2019-05-05', '@工作', 'zip', '張志浩', '張智皓').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('update ' + data + ' record(s)');
    }
})


//--------deadline輸出格式有問題
work.fetchWrokPrincipal('13').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.first_principal);
        console.log(data.second_principal);
    }
})


//--------deadline輸出格式有問題
work.fetchMyWrok('柯網頁').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {data.forEach(work => {
        console.log(work.work_serno);
        console.log(work.work_title);
        console.log(work.work_content);
        console.log(work.deadline);
        console.log(work.tag);
        console.log(work.file);
        console.log(work.first_principal);
        console.log(work.second_principal);        
    });
    }
})