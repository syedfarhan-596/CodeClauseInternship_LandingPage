var userName = document.getElementById('nameBox');
var error = document.getElementById('errorText');
var password = document.getElementById('passwordBox');
var error1 = document.getElementById('errorText1');

userName.addEventListener('input', function(e){
    var inputValue = e.target.value;
    var pattern = /^[\w]{6,8}$/g;
    var value = pattern.test(inputValue);
    if(inputValue === null){
        error.style.display ="none"
    }
    else if(value) {
        error.style.display ="none"
    }
    else{
        error.style.display ="block";
    }
})
password.addEventListener('input',function(e){
    var inputValue1 = e.target.value;
    var pattern1 = /^[\w]{5}$/g;
    var value1 = pattern1.test(inputValue1);
    if(inputValue1 === null){
        error1.style.display ="none"
    }
    else if(value1) {
        error1.style.display ="none"
    }
    else{
        error1.style.display ="block";
    }
});