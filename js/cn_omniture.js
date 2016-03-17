var omniTag = '201603_hasbroatlantis';

function promoPageView(){
    try {
        trackMetrics({ 
            type: "promo-main", 
            data: ""
        });
    } catch (e) {
    }
}

function promoClick(info){
    try {
        trackMetrics({ 
            type: "promo-link", 
            data: omniTag + " : " + info
        });
    } catch (e) {
    }
}

function videoPlay(info){
    try {
		trackMetrics({
			type: "video-start",
			data: {
				video: {
					id: omniTag + " : " + info,
					title: omniTag + ": " + info,
					type: "promo"
				}
			}
		});
	}catch(e){}
}

function videoComplete(info){
    try {
		trackMetrics({
			type: "video-complete",
			data: {
				video: {
					id: omniTag + " : " + info,
					title: omniTag + ": " + info,
					type: "promo"
				}
			}
		});
	}catch(e){}
}

function videoJSPlay(info){
    try {
        trackMetrics({
           type: "video-start",
           data: {
              video: {
                 autoplayed: "false",
                 id: omniTag + " : " + info,
                 segment: "0",
                 title: omniTag + " : " + info,
                 type: "CLI",
                 promo_video: omniTag + " : " + info
              }
            }			 
        });
    } catch(e){
    }
}

function videoJSComplete(info){
    try {
        trackMetrics({
           type: "video-complete",
           data: {
              video: {
                 autoplayed: "false",
                 id: omniTag + " : " + info,
                 segment: "0",
                 title: omniTag + " : " + info,
                 type: "CLI",
                 promo_video:  omniTag + " : " + info
              }
            }			 
        });
    } catch(e){
    }
}


