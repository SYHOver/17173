var AppVue = /** @class */ (function () {
    function AppVue(app) {
        this.data = app.data();
    }
    AppVue.prototype.mount = function (el) {
        var elObj = document.querySelector(el);
        var elChild = elObj.childNodes;
        elChild.forEach(function (node) {
            if (node.nodeType == 1) {
                var nodeArr = node.attributes;
                console.log(nodeArr);
                //   Array.from(nodeArr).forEach(itme=>{
                // console.log(JSON.stringify(itme));
                //  (JSON.stringify(itme)).replace(/(\S+)\=[a-zA-z]+/,(val:string,$1:string)=>{
                //              console.log(val);
                //              console.log($1);
                //              return "Aaa"
                //  })
                //  console.log( (<HTMLElement>node).getAttribute(attributes));
                //   })
            }
        });
        // elChild.forEach(node => {
        //     if (node.nodeType == 1) {
        //         if((<HTMLElement>node).getAttribute("v-html")){
        //             elObj.removeChild((<HTMLElement>node));
        //             let key:string = (<HTMLElement>node).getAttribute("v-html")!;
        //             let template = node.cloneNode(true) as HTMLElement;
        //             template.innerHTML = this.data[key];
        //             elObj.appendChild(template)
        //         }
        //     }
        // })
        // let str: string = elObj.innerText.replace(/\{\{\s*([a-zA-z]+)\s*\}\}/g, (val: string, $1: string) => {
        //     return this.data[$1];
        // });
        // if (str != "undefined") elObj.innerText = str;
    };
    return AppVue;
}());
var createApp = function (app) {
    return new AppVue(app);
};
