function subscribe_footer(){
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if(user == "" || email == ""){
        alert("Không được bỏ trống thông tin !");
        return;
    }
    if(user.length < 6){
        alert("Tên người dùng phải ít nhất 6 kí tự !");
        return;
    }
    if (filter.test(email) == false) { 
        alert('Hãy nhập email hợp lệ !');
        return;
    }
    alert("Bạn đã đăng ký thành công !");
}

function sign_up_header() {
    var user_Sigup =  document.getElementById('user_Sigup').value;
    var password_Sigup = document.getElementById('password_Sigup').value;
    var re_password_Sigup = document.getElementById('re_password_Sigup').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
   
    if(user_Sigup == "" || password_Sigup == "" || re_password_Sigup == ""){
        alert("Không được bỏ trống thông tin !");
        return;
    }
    if (filter.test(user_Sigup) == false) { 
        alert('Hãy nhập email hợp lệ !');
        return;
    }
    if(password_Sigup.length < 8){
        alert("Mật khẩu phải lớn hơn 8 kí tự !");
        return;
    }
     if(password_Sigup != re_password_Sigup){
         alert("Sai thông tin xác nhận mật khẩu !");
         return;
     }
    alert("Bạn đã đăng ký thành công !");
}