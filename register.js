//hàm hiển thị thông báo
function hienThiThongBao(noiDung) {
    let thongBao = document.getElementById('thongbao');
    thongBao.innerHTML = noiDung;
}

//hàm đăng ký
function signup(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmedpassword = document.getElementById('confirmedpassword').value;

    //kiem tra 
    if (!username || !password || !confirmedpassword) {
        hienThiThongBao('xin đăng nhập thông tin đầy đủ');
        return;
    }

    if (password !== confirmedpassword) {
        hienThiThongBao('Mật khẩu không khớp, vui lòng nhập lại!')
        return;
    }

    let user = JSON.parse(localStorage.getItem('user') || '[]');

    let daTonTai = false;
    for(let i = 0 ; i < user.length; i++) {
        if (user[i].username === username){
            daTonTai = true;
            break;
        }
    }

    if (daTonTai) {
        hienThiThongBao('Tên đăng nhập đã tồn tại');
        return;
    }

    user.push({username, password});
    localStorage.setItem('user', JSON.stringify(user));

    hienThiThongBao('đăng ký thành công!')
}

//ham đăng nhập
function dangNhap() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (!username || !password){
        hienThiThongBao('xin đăng nhập thông tin đầy đủ');
        return;
    }

    let user = JSON.parse(localStorage.getItem('user') || '[]');
    
    let users = null;
    for (let i = 0; i< user.length; i++) {
        if (user[i].username === username && user[i].password === password){
            users = user[i];
            break;
        }
    }

    if (user) {
        hienThiThongBao('Đăng nhập thành công!');
        localStorage.setItem('currentUser', username);
        setTimeout(() => window.location.href = 'index.html',1500);
    } else {
        hienThiThongBao('sai tên đăng nhập hoặc mật khẩu!')
    }
}
