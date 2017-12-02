import Utility from './utility.js'
const Animation = {

	switchPage : function(callback, color=null){
		const blank = document.getElementById('blank_veil');
		const dark = document.getElementById('dark_veil');
		if(color){
			console.log(color)
			dark.style.backgroundColor = color;
		}

		dark.style.transform = 'translateX(0%)';
		blank.style.transform = 'translateX(0%)';

		setTimeout(function(){
			dark.style.transform = 'translateX(100%)';
			blank.style.transform = 'translateX(100%)';
			setTimeout(function(){
				dark.style.width = '0';
				blank.style.width = '0';
				dark.style.transform = 'translateX(-100%)';
				blank.style.transform = 'translateX(-100%)';

				setTimeout(function(){
					dark.style = null;
					blank.style = null;
				}, 500)
			}, 500)

			callback();
		},600)
	},

	openProject(id, color, callback){

		//Animation.switchPage(callback, color);
		
		const desc = document.querySelector('.desc.active');
		console.log(desc);
		desc.classList.remove('active');

		document.querySelector('.project.active > .project__image').style.overflow = 'visible';
		document.querySelector('.logo').style.opacity = '0';
		document.querySelector('.burger').style.opacity = '0';
		document.querySelector('.scrollDots').style.opacity = '0';
		document.querySelector('.projects .scroll').style.opacity = '0';

		const img = document.querySelector('.project__image__img.active');
		const x = Utility.getCenter(img).x;
		const transX = window.innerWidth/2 - x; 
		
		const scaleY = window.innerHeight /img.offsetHeight;
		const scaleX = window.innerWidth /img.offsetWidth;
		let scale = (scaleX > scaleY) ? scaleX : scaleY;
		scale += 0.1;
		img.style.transform = 'translateX('+transX+'px) scale('+scale+')';

		setTimeout(function(){
			document.querySelector('.burger').style=null;
		}, 1500);
		setTimeout(callback, 1000);


	},

	changeProjectMin : function(id, nextId, callback) {
	    const pImg = document.querySelector('#project_'+id+' .project__image__img');
	    const pDesc = document.querySelector('#project_'+id+' .desc');
	    const nextDesc = document.querySelector('#project_'+nextId+' .desc');
		const padding = 50;			

		const offsetLeft = pDesc.getBoundingClientRect().left;
		let translateX = -offsetLeft - pDesc.offsetWidth - padding;
		let translateNext = translateX;
		if (id%2 === 0) 
			translateX = Math.abs(offsetLeft - window.innerWidth) + padding ;
		if(nextId%2 === 0)
			translateNext = Math.abs(offsetLeft - window.innerWidth) + padding ;
	
		//console.log(translateX);
		
		pImg.style.transform = 'translateY(-150%)';
		pDesc.style.transform = 'translateX('+translateX+'px)';
		
		nextDesc.style.transform = 'translateX('+translateNext+'px)';
	    
	    setTimeout(function(){
	    	pImg.style = null;
	    	pDesc.style = null;
			
			setTimeout(function(){
	    		nextDesc.style = null;
			}, 250);
	    	callback();
	    }, 750);
	},

	scrollTo: function (element, to, duration) {

	    if (duration <= 0) return;
	    var difference = to - element.scrollTop;
	    var perTick = difference / duration * 10;

	    setTimeout(function() {
	        element.scrollTop = element.scrollTop + perTick;
	        if (element.scrollTop === to) return;
	        Animation.scrollTo(element, to, duration - 10);
	    }, 10);
	}
};

export default Animation;


