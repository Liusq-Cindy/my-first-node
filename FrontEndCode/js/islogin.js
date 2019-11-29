$(function() {
  let userName = sessionStorage.getItem("userName");
  let userId = sessionStorage.getItem("id");
  // sessionStorage存储登陆信息，如果存在，显示名称，隐藏登陆注册按钮的显示
  if(userName && userId) {
    $("#nav-link-register").hide();
    $("#nav-link-login").hide();
    $("#nav-link-user").show();
    $("#nav-link-user").text(userName);
  }
})