function createImg(imgSrc) {
    var image = new Image(5, 5);
    image.src = imgSrc;
    return image;
}
function createElement(text) {
    var span = document.createElement("span");
    span.innerHTML = text;
    return span;
}
function render(arr, el, childEl) {
    var elObj = document.querySelector(".".concat(el));
    var childObj = elObj === null || elObj === void 0 ? void 0 : elObj.querySelector(".".concat(childEl));
    elObj === null || elObj === void 0 ? void 0 : elObj.removeChild(childObj);
    arr.forEach(function (item) {
        var childTemplate = childObj === null || childObj === void 0 ? void 0 : childObj.cloneNode(true);
        if (item.imgSrc) {
            childTemplate === null || childTemplate === void 0 ? void 0 : childTemplate.appendChild(createImg(item.imgSrc));
        }
        childTemplate === null || childTemplate === void 0 ? void 0 : childTemplate.appendChild(createElement(item.lable));
        elObj === null || elObj === void 0 ? void 0 : elObj.appendChild(childTemplate);
    });
}
function setDisplay(elArr) {
    console.log(elArr);
    elArr.forEach(function (el) {
        el.style.display = "none";
    });
}
function tab(el) {
    var elObj = document.querySelector(".".concat(el));
    var eltext = document.querySelector(".game-collection_main");
    var elTextArr = Array.from(eltext === null || eltext === void 0 ? void 0 : eltext.children);
    var childList = elObj === null || elObj === void 0 ? void 0 : elObj.children;
    var list = Array.from(childList);
    var _loop_1 = function (index) {
        var item = list[index];
        elTextArr[index].setAttribute("index", index);
        item.addEventListener('click', function () {
            setDisplay(elTextArr);
            for (var i = 0; i < elTextArr.length; i++) {
                if (elTextArr[i].getAttribute("index") == index) {
                    elTextArr[i].style.display = "block";
                }
            }
        }, false);
    };
    for (var index = 0; index < list.length; index++) {
        _loop_1(index);
    }
}
function renderGameCollection(list) {
    var elObj = document.querySelector(".collection_remen");
    var el = document.querySelector(".game-collection");
    var title = document.querySelector(".game-collection_first");
    var elBox = document.querySelector(".game-collection_row");
    var renderItme = document.querySelector(".game-cr_itme");
    //   elObj?.removeChild(el as HTMLHeadingElement);
    list.forEach(function (itme) {
        // let elTemplate = el?.cloneNode(true);
        // if(itme.type==1){
        //     let titleTemplate:any = title?.cloneNode(true);
        //     let span = titleTemplate.querySelector(".game-collection_first");
        //     span.innerHTML=itme.title;
        //     titleTemplate.appendChild(span);
        //     elTemplate?.appendChild(titleTemplate);
        // }else{
        //     let renderItmeTemplate:any = renderItme?.cloneNode(true);
        //     renderItmeTemplate.innerHTML = itme.title;
        //     let elBoxTemplate:any = elBox?.cloneNode(true);
        //     elBoxTemplate?.appendChild(renderItmeTemplate);
        //     elTemplate?.appendChild(elBoxTemplate);
        // }
        // elObj?.appendChild(elTemplate as HTMLHeadingElement);
        var elTemplate = el === null || el === void 0 ? void 0 : el.cloneNode(true);
        if (itme.type == 1) {
            var titleTemplate = title === null || title === void 0 ? void 0 : title.cloneNode(true);
            titleTemplate.innerHTML = itme.title;
        }
        else {
            var template = renderItme === null || renderItme === void 0 ? void 0 : renderItme.cloneNode(true);
            template.innerHTML = itme.title;
            elTemplate === null || elTemplate === void 0 ? void 0 : elTemplate.appendChild(titleTemplate);
            elBox === null || elBox === void 0 ? void 0 : elBox.appendChild(template);
            elTemplate === null || elTemplate === void 0 ? void 0 : elTemplate.appendChild(elBox);
        }
        elObj === null || elObj === void 0 ? void 0 : elObj.appendChild(elTemplate);
    });
}
