let submit =document.querySelector('.header_record_submit');
let checkbox=document.querySelector('.header_record_checkbox');
checkbox.onclick = function(){
    if (checkbox.checked){
        submit.removeAttribute('disabled' ,'')
    }else{submit.setAttribute('disabled' ,'')}
};
let input =document.querySelectorAll('.submit')


for(i of input){
i.onclick=function  ( ){
    window.scrollTo(0,0)
}
}
