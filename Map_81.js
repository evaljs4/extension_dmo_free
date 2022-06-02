	var x = 0;
	var r=0;
	var delayAtkmon =190;
	var start_date = new Date();
	var mapPointer = document.getElementById('map_id')
	if(mapPointer.value == 81){
		certificated();
			setTimeout(walk_81, 0);
		}

function certificated(){
    document.body.style.background = 'Black';
	document.getElementById('canvasRight').remove();
	document.querySelector('.button-swap').remove();
	var element = document.getElementById('forswap').nextElementSibling.nextElementSibling;
	var parent = element.parentNode;
	parent.removeChild(element);
}

function click(x, y) {
        var ev = document.createEvent("MouseEvent");
        var el = document.elementFromPoint(x, y);
        ev.initMouseEvent(
            "click",
            true /* bubble */, true /* cancelable */,
            window, null,
            0, 0, x, y, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/, null
        );
        el.dispatchEvent(ev);
    }
	

async function walk_81() {
	if(r>2){location.reload();}
	var othername = document.getElementById('popup-other-character');
	if(othername)othername.remove();
    var char = document.getElementById('myCharacter');
    var fight = document.getElementById('vs-area');
    if (char) {
	var active_date = new Date();
    if (active_date.getTime() - start_date.getTime() > 360000) {
		location.reload();
    } else {
        x = 0;
        //console.log("Walk active_1");
        fight = document.getElementById('vs-area');
        if (fight) {
            x = 1;
            setTimeout(monsterDetect_81, 0);
            return;
        } else
        if (x != 1) {
            click(158, 136);
            await wait(300);
			fight = document.getElementById('vs-area');
			if (fight) {
            x = 1;
            setTimeout(monsterDetect_81, 0);
            return;
			}else await wait(300);
        }
        fight = document.getElementById('vs-area');
        if (fight) {
            x = 1;
            //console.log("mon detect");
            setTimeout(monsterDetect_81, 0);
            return;
        }else
        //console.log("Walk active_2");
        if (x != 1) {
            click(282, 271);
            await wait(300);
			fight = document.getElementById('vs-area');
			if (fight) {
            x = 1;
            setTimeout(monsterDetect_81, 0);
            return;
			}else await wait(300);
        }
        fight = document.getElementById('vs-area');
        if (fight) {
            x = 1;
            //console.log("mon detect");
            setTimeout(monsterDetect_81, 0);
            return;
        }else
        //console.log("Walk active_3");
        if (x != 1) {
            click(461, 330);
            await wait(300);
			fight = document.getElementById('vs-area');
			if (fight) {
            x = 1;
            setTimeout(monsterDetect_81, 0);
            return;
			}else await wait(300);
        }
        fight = document.getElementById('vs-area');
        if (fight) {
            x = 1;
            //console.log("mon detect");
            setTimeout(monsterDetect_81, 0);
            return;
        }else
        //console.log("Walk active_4");
        if (x != 1) {
            click(307, 465);
            await wait(300);
			fight = document.getElementById('vs-area');
			if (fight) {
            x = 1;
            setTimeout(monsterDetect_81, 0);
            return;
			}else await wait(300);
        }
        fight = document.getElementById('vs-area');
        if (fight) {
            x = 1;
            //console.log("mon detect");
            setTimeout(monsterDetect_81, 0);
            return;
        }else
        //console.log("Walk active_5");
        if (x != 1) {
            click(239, 456);
           await wait(300);
			fight = document.getElementById('vs-area');
			if (fight) {
            x = 1;
            setTimeout(monsterDetect_81, 0);
            return;
			}else await wait(300);
        }
        fight = document.getElementById('vs-area');
        if (fight) {
            x = 1;
            //console.log("mon detect");
            setTimeout(monsterDetect_81, 0);
            return;
        }else
        //console.log("Walk active_6");
        if (x != 1) {
            click(88, 291);
			await wait(300)
			r++;
        }
        setTimeout(walk_81, 0);
		}
	}	else if (fight) {
        //console.log("mon detect");
        setTimeout(monsterDetect_81, 0);
    } else {setTimeout(walk_81, 0);}
}


async function monsterDetect_81() {
    var fight = document.getElementById('vs-area');
	//var fight1 = document.getElementById('fight-result');
	//if (fight1)fight1.remove();
    if (fight) {
       var mon = document.getElementById('ico_fighting');
			if(mon){
				mon.click();
			}
			setTimeout(f_nextMonster_81, delayAtkmon);
    } else setTimeout(walk_81, 0);

}

async function f_nextMonster_81() {
    var nextMonster = document.querySelector('.button-nextmonster2020');
    var backHome = document.querySelector('.button-go2home2020');
    if (nextMonster) {
        //console.log("Next Button detect");
        nextMonster.click();
        //click(392,229);
        setTimeout(walk_81, 0);
    } else if (backHome) {
        if (currentMonster  > targetMonster ) {
		currentMonster = 0
		setTimeout(b2home_81, 0);
		} else setTimeout(walk_81, 0);
    } else setTimeout(walk_81, 0);
}

async function b2home_81() {
    var backHome = document.querySelector('.button-go2home2020');
    if (backHome) {
        //console.log("back detect");
        backHome.click();
        //click(372,220);
        setTimeout(walk_81, 0);
    } else setTimeout(walk_81, 0);
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}