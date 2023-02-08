var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AdveriseParams = /** @class */ (function () {
    function AdveriseParams() {
    }
    AdveriseParams.prototype.addCss = function (el, css) {
        el.style.cssText = css;
    };
    AdveriseParams.prototype.createdEl = function (el) {
        return document.createElement(el);
    };
    AdveriseParams.prototype.createImage = function (url) {
        var image = new Image(this.width, this.height);
        image.src = url;
        return image;
    };
    AdveriseParams.prototype.cloneAdverise = function (el, timer) {
        el.style.display = "none";
        clearTimeout(timer);
    };
    AdveriseParams.prototype.afterClosed = function () { };
    AdveriseParams.prototype.countDownFn = function (div, el) {
        var _this = this;
        var timer = setTimeout(function () {
            _this.duration--;
            div.innerText = "".concat(_this.duration, "s \u5173\u95ED");
            _this.duration == 0 ? _this.cloneAdverise(el, timer) : _this.countDownFn(div, el);
        }, 1000);
        return timer;
    };
    return AdveriseParams;
}());
var Adverise = /** @class */ (function (_super) {
    __extends(Adverise, _super);
    function Adverise(option) {
        var _this = _super.call(this) || this;
        _this.el = option.el;
        _this.type = option.type;
        _this.imgUrl = option.imgUrl;
        _this.duration = (option.duration || 6000) / 1000;
        _this.width = option.width || 100;
        _this.height = option.height || 100;
        return _this;
    }
    return Adverise;
}(AdveriseParams));
// 首屏广告展示为屏幕的正中间; 默认3s后消失;
var FirstScreenAdverise = /** @class */ (function (_super) {
    __extends(FirstScreenAdverise, _super);
    function FirstScreenAdverise(option) {
        var _this = _super.call(this, option) || this;
        _this.exec();
        return _this;
    }
    FirstScreenAdverise.prototype.exec = function () {
        var _this = this;
        var el = document.querySelector(this.el);
        var image = this.createImage(this.imgUrl);
        var div = this.createdEl("div");
        this.addCss(el, "position:relative;width:".concat(this.width, "px;color: black;"));
        this.addCss(div, "position: absolute;right:0px;top:0px;");
        el === null || el === void 0 ? void 0 : el.appendChild(image);
        el.appendChild(div);
        div.innerText = "".concat(this.duration, "s \u5173\u95ED");
        div.addEventListener('click', function () { _this.cloneAdverise(el, _this.countDownFn()); }, false);
        this.countDownFn(div, el);
    };
    return FirstScreenAdverise;
}(Adverise));
// banner广告展示为某个div中, 默认6s后消失;
var BannerAdverise = /** @class */ (function (_super) {
    __extends(BannerAdverise, _super);
    function BannerAdverise(option) {
        var _this = _super.call(this, option) || this;
        _this.exec();
        return _this;
    }
    BannerAdverise.prototype.exec = function () {
        var _this = this;
        var el = document.querySelector(this.el);
        var image = this.createImage(this.imgUrl);
        var div = this.createdEl("div");
        this.addCss(el, "position:relative;width:".concat(this.width, "px;color: black;"));
        this.addCss(div, "position: absolute;right:0px;top:0px;");
        el === null || el === void 0 ? void 0 : el.appendChild(image);
        el.appendChild(div);
        div.innerText = "".concat(this.duration, "s \u5173\u95ED");
        div.addEventListener('click', function () { _this.cloneAdverise(el, _this.countDownFn()); }, false);
        this.countDownFn(div, el);
    };
    return BannerAdverise;
}(Adverise));
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
