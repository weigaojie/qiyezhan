window.onload=function(){
	let mid=document.getElementsByClassName("mid")[0];
	let top=mid.getElementsByClassName("top");
	let yuan=document.getElementsByClassName("yuan");
	let before=document.querySelector(".before");
	let back=document.querySelector(".back");
	for(let i=0;i<yuan.length;i++){
		yuan[i].onclick=function(){
			for(let j=0;j<yuan.length;j++){
				top[j].style.display="none";
				yuan[j].style.background="#666";
			}
			top[i].style.display="block";
			yuan[i].style.background="#000";
		}
	}
	// top.onmouseenter=function(){
	// 	before.style.display="block";
	// 	back.style.display="block";
	// }
	// top.onmouseleave=function(){
	// 	before.style.display="none";
	// 	back.style.display="none";
	// }
	// let t=setInterval(move,2000);
	// let width=parseInt(getComputedStyle(top,null).width);
	// let now=0;
	// let next=0;
	// function move(){
	// 	next++;
	// 	if(next==top.length){
	// 		next=0;
	// 	}
	// 	// for(let j=0;j<top.length;j++){
	// 	// 	top[j].style.zIndex=5;
	// 	// }
	// 	top[next].style.left=width+"px";
	// 	animate(top[now],{left:-width});
 //        animate(top[next],{left:0});
 //        now=next;
	// }












	let logo=document.getElementsByClassName("logo")[0];
	let box=logo.getElementsByClassName("box");
	let search=logo.getElementsByClassName("search");
	for(let i=0;i<search.length;i++){
		search[i+1].onmouseenter=function(){
			box[i].style.display="block";
		}
		search[i+1].onmouseleave=function(){
			box[i].style.display="none";
		}
	}
}