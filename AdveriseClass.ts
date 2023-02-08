import FirstScreenImage from './image/banner.png'

class BaseAdverise {
    el: string;
    imgUrl: string;
    tick?: number;
    width?: number;
    height?: number;
    closeText?: string;
}

abstract class Adverise extends BaseAdverise {
    constructor(options: BaseAdverise) {
        super();
        this.el = options.el;
        this.imgUrl = options.imgUrl;
        this.tick = options.tick;
        this.width = options.width || 100;
        this.height = options.height;
        this.closeText = options.closeText || '关闭';
    }
    abstract exec(): void;
}

abstract class ImageAdverise extends Adverise {
    protected CONTAINER_CSSTEXT: string = '';
    protected IMAGE_CSSTEXT: string = '';

    constructor(options: BaseAdverise) {
        super(options);
    }

    exec(): void {
        // 最大的元素;
        let el: Element = this.createWrapElement();

        let img: Element = this.createImgElement();
        // 设置右上角关闭的样式；
        let closeEl: Element = this.createCloseElement();

        el.appendChild(img);
        el.appendChild(closeEl)
    }

    close(): void {
        let el = <HTMLElement>document.querySelector(this.el);
        el.style.display = 'none';
        this.afterClosed();
    }

    createImgElement() {
        let img = new Image();
        img.src = this.imgUrl;
        img.style.cssText = this.IMAGE_CSSTEXT;
        return img;
    }

    createWrapElement() {
        let el = <HTMLElement>document.querySelector(this.el);
        el.style.cssText = this.CONTAINER_CSSTEXT;
        return el;
    }

    createCloseElement() {
        let wrap = document.createElement('div');
        wrap.style.cssText = `
            position:absolute;
            right:0;
            top:0;
            color:#fff;
            background:#333;
            padding:4px;
        `

        let el = document.createElement('span');
        el.innerHTML = `${this.tick}s`
        let timer: NodeJS.Timeout;
        let timeout = () => {
            timer = setTimeout(() => {
                this.tick--;
                if (this.tick <= 0) {
                    this.close();
                    return;
                }
                el.innerHTML = `${this.tick}s`
                timeout();
            }, 1000)
        }
        timeout();

        let span = document.createElement('span');
        span.textContent = this.closeText;
        span.addEventListener('click', () => {
            this.close();
            clearTimeout(timer);
        }, false)

        wrap.appendChild(el);
        wrap.appendChild(span);

        return wrap;
    }

    afterClosed(): void{}
}

class FirstScreenAdverise extends ImageAdverise {
    constructor(options: BaseAdverise) {
        super(options);
        this.IMAGE_CSSTEXT = `
            display:block;
            width:${this.width};
        `
        this.CONTAINER_CSSTEXT = `
            backgrond-size:100% 100%;
            position:fixed;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        `
        this.exec();
    }
}

class BannerAdverise extends ImageAdverise {
    constructor(options: BaseAdverise) {
        super(options);
        this.exec();
    }
}

let firstScreen =  new FirstScreenAdverise({
    el:'#first-screen', 
    imgUrl:FirstScreenImage,
    tick:6, // 广告的持续时间
})

firstScreen.afterClosed = function(){
    new BannerAdverise({
        el: '#banner',
        imgUrl: FirstScreenImage,
        tick: 10, // 广告的持续时间
    })
}

