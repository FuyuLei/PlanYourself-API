//增加引用函式
const member = require('./utility/member');

member.displayMember('twiceisverycute').then(data => {
    if (data == -1) {
        console.log('找不到資料');
    } else if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log(data.user_id);
        console.log(data.photo);
        console.log(data.member_name);
        console.log(data.email);
        console.log(data.member_password);
        console.log(data.linebotpush);
    }
})

member.addMember('twiceisverycute', 'twice', 'TWICE', 'twice@twiceland.idol', 'once', false).then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('add ' + data + ' record(s)');
    }
})

member.deleteMember('twiceisverycute').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('delete ' + data + ' record(s)');
    }
})

member.updateMemberPhoto('twice', 'once').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('update ' + data + ' record(s)');
    }
})

member.updateMemberEmail('twiceis', 'twicen@gmail.com').then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('update ' + data + ' record(s)');
    }
})

member.updateMemberLinebotPush('twice', true).then(data => {
    if (data == -9) {
        console.log('執行錯誤');
    } else {
        console.log('update ' + data + ' record(s)');
    }
})