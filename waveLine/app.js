class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
        /* 
        this의 함정에 빠지지 말자... bind에 대해 궁금하다면 
        https://ko.javascript.info/bind
        */

    }


    resize() {

    }
}