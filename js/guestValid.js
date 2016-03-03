(function(){
 	//校验
	$('#regValidate').click(function(){
    	var valid = $('#regForm').valid();
	    if(valid.flag){
	        }else{
	            alertTip(valid.msg);
	        }
	        return;
    });
    
    $('#loginValidate').click(function(){
    	var loginValid = $('#loginForm').valid();
	    if(loginValid.flag){
	    	location.href = "/pawn-weiChat/guestLoan.html";
        }else{
            alertTip(loginValid.msg);
        }
    });
    
    $('#loanValidate').click(function(){
    	var loanValid = $('#loanForm').valid();
    	if(loanValid.flag){
	    	location.href = "/pawn-weiChat/guestLoanCheck.html";
        }else{
            alertTip(loanValid.msg);
        }
    });
    
    //手机验证码
	var wait=60;
	function time(o) {
		if (wait == 0) {
			o.attr("disabled",false);
			o.css('background-color','#f8761f');
			o.html("获取验证码");
			wait = 60;
		} else {
	
			o.attr("disabled", true);
			o.html("重新发送(" + wait + ")");
			wait--;
			setTimeout(function() {
				time(o)
			},
			1000)
		}
	}
	
	$('#getcode').click(function(){
		time($(this));
	});
    
    
})();




