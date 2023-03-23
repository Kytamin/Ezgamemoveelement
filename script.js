function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="22222.jpg"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 150    ;

    }
    this.moveBelow=function (){
        this.top+=150
    }
    this.moveLeft =function (){
        this.left-=150;
    }
    this.moveabove=function (){
        this.top-=150;
    }

}

let hero = new Hero('22222.jpg', 20, 30, 200);
let turn_left = false
function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top === 20){
        hero.moveRight();
    }else if((hero.top <= window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size)){
        hero.moveBelow()
    } else if (hero.left >= 20 && hero.top >= window.innerHeight - hero.size ) {
        hero.moveLeft();
    } else {
        hero.moveabove()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();