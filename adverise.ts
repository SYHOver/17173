class AdveriseParams {
    el!: string;
    type!: number;
    imgUrl!: string;
    duration?: number;
    width?: number;
    height?: number;
    addCss(el: HTMLAnchorElement, css: string) {
        el.style.cssText = css;
    }
    createdEl(el: string) {
        return document.createElement(el) as HTMLAnchorElement;
    }
    createImage(url: string) {
        let image = new Image(this.width, this.height);
        image.src = url;
        return image;
    }
    cloneAdverise(el: HTMLAnchorElement, timer: number) {
        el.style.display = "none";
        clearTimeout(timer);

        
    }

    afterClosed(): void{}

    countDownFn(div?: HTMLAnchorElement, el?: HTMLAnchorElement): number {
        let timer = setTimeout(() => {
            this.duration!--;
            div!.innerText = `${this.duration}s 关闭`;
            this.duration == 0 ? this.cloneAdverise(el!, timer) : this.countDownFn(div, el);
        }, 1000);
        
        return timer;
    }
}

abstract class Adverise extends AdveriseParams {
    constructor(option: AdveriseParams) {
        super();
        this.el = option.el;
        this.type = option.type;
        this.imgUrl = option.imgUrl;
        this.duration = (option.duration || 6000) / 1000;
        this.width = option.width || 100;
        this.height = option.height || 100;
    }
    abstract exec(): void;
}



// 首屏广告展示为屏幕的正中间; 默认3s后消失;
class FirstScreenAdverise extends Adverise {
    constructor(option: AdveriseParams) {
        super(option);
        this.exec();
    }

    exec(): void {
        let el = document.querySelector(this.el) as HTMLAnchorElement;
        let image = this.createImage(this.imgUrl);
        let div = this.createdEl("div");
        this.addCss(el, `position:relative;width:${this.width}px;color: black;`);
        this.addCss(div, `position: absolute;right:0px;top:0px;`);
        el?.appendChild(image);
        el.appendChild(div);
        div.innerText = `${this.duration}s 关闭`;
        div.addEventListener('click', () => { this.cloneAdverise(el, this.countDownFn()) }, false);
        this.countDownFn(div, el);   
    }
}

// banner广告展示为某个div中, 默认6s后消失;
class BannerAdverise extends Adverise {
    constructor(option: AdveriseParams) {
        super(option);
        this.exec();
    }
    exec(): void {
        let el = document.querySelector(this.el) as HTMLAnchorElement;
        let image = this.createImage(this.imgUrl);
        let div = this.createdEl("div");
        this.addCss(el, `position:relative;width:${this.width}px;color: black;`);
        this.addCss(div, `position: absolute;right:0px;top:0px;`);
        el?.appendChild(image);
        el.appendChild(div);
        div.innerText = `${this.duration}s 关闭`;
        div.addEventListener('click', () => { this.cloneAdverise(el, this.countDownFn()) }, false);
        this.countDownFn(div, el);
    }
}




// 作业:
//  定义一个抽象类 广告类 Adverise

// 该类接收 { el:'#elName', type: 1, imgUrl:'./1.png', duration: 1500, width: 100; height:100 };
// 抽象类中必须有一个抽象的exec方法;
// 参数说明: el: 元素   type: 1 广告类型 1: 首屏广告 2: banner广告;  必填项;
// imgUrl:'' 广告图, 必填项
// duration: 广告的展示总时长;  非必填项
// width : 广告的宽   非必填项
// height: 广告的高  非必填项

// 声明两个子类, 一种是 首屏广告FirstScreenAdverise类
// 另一个子类是 banner广告  BannerAdverise类


// 首屏广告展示为屏幕的正中间; 默认3s后消失;
// banner广告展示为某个div中, 默认6s后消失;

// 两种广告的类型都有倒计时功能;
// 倒计时显示在广告的右上角
// 字样:   6s 关闭
// 用户点击右上角关闭字样;
// 立即关闭广告;
// 首屏广告关闭之后会执行banner广告;

// html 展示内容:
// 首屏广告
// <div id="first-screen"></div>

// banner广告:
// <div id="banner"></div>

// js调用效果
// 首屏广告:
// let firtScreen =  new FirstScreenAdverise({
//     el:'#first-screen',
//     imgUrl:'',
//     duration:1500, // 广告的持续时间
// })
// //
// let banner = new BannerAdverse({
//     el:"#banner",
//     imgUrl:'',
//     duration:1500
// })