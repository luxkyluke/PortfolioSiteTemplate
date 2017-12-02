const utility = {
    clamp(value, min, max){
        if(value > max)
            return max
        else if(value <min){
            return min;
        }
        return value;
    },

    getCenter(elem){
    	const rect = elem.getBoundingClientRect();
		const width = elem.offsetWidth;
		const height = elem.offsetHeight;
		
		return {
			x: rect.left + width / 2,
			y: rect.top + height / 2
		} 
    },

    getBlurImg(src){
    	const decompPath = src.split('.');
		return decompPath[0]+'.blur'+'.jpg';
    },

    isTablet(){
    	return window.innerWidth < 1059;
    },

    isTabletPortrait(){
    	return window.innerWidth < 800;
    },

    isVideo(src){
    	const re = /(?:\.([^.]+))?$/;
    	const ext = re.exec(src)[0];
    	return ext === ".mp4" || ext === ".mov";
    }
}





module.exports = utility;