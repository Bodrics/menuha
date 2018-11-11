// var a = document.getElementById('link');
// var modal=document.getElementById('modal');
// a.addEventListener('click');
// function(){
//   modal.style.display="block";
// }
function divOp(type) { if (type == 1) { document.getElementById('closeBlock').style.display='block';
document.getElementById('blockLink').innerHTML='<a href="#" onclick="divOp(0);">Sign in</a>';
}
else {document.getElementById('closeBlock').style.display='none';
document.getElementById('blockLink').innerHTML='<a href="#" onclick="divOp(1);">Login</a>';
}
}
