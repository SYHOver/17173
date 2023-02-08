class MemberList {
    constructor(option) {
        this.el = option.el;
        this.groups = option.groups;
        this.arr = option.arr
        this.exec();
        this.getRecentContacts();
    }

    exec() {
        this.processingData();
        this.renderPersonList();
        this.tab();
    }


    tab() {
        let pArr = document.querySelectorAll(".p")
        console.log(pArr);
        pArr.forEach(node => {
            node.addEventListener("click", () => {
                let nodeC = node.querySelector(".c-main");
                if (nodeC.style.display == "block") {
                    nodeC.style.display = "none"
                } else {
                    nodeC.style.display = "block"
                }
            }, false)
        })
    }

    getOnlineNumber(arr) {
        return arr.filter(itme => itme.onlineStatus == 1).length;
    }

    getRecentContacts() {
        let arr = [];
        this.groups.forEach(itme => {
            let res = itme.child.filter(child => child.lastContactTime)
            arr = arr.concat(res);
        })
        arr.sort((x,y)=> Number(y.lastContactTime) - Number(x.lastContactTime))
       return arr.slice(0,3);
    }

    renderPersonList() {
        let framgment = document.createDocumentFragment();
        let el = document.querySelector(this.el);
        let template = el.querySelector("template");
        let p = template.content.querySelector(".p");
        let c = p.querySelector(".c-main");
         
        let pTemplate = p.cloneNode(true);
        pTemplate.innerHTML = `最近联系人&nbsp;&nbsp;${this.getOnlineNumber(this.getRecentContacts())}/${this.getRecentContacts().length}`;
        let cTemplate = c.cloneNode(true);
        this.getRecentContacts().forEach(itme => {
            let div = document.createElement("div");
            div.innerHTML = itme.remark || itme.avatarName;
            cTemplate.appendChild(div);
        })
        pTemplate.appendChild(cTemplate);
        el.appendChild(pTemplate);


        this.groups.forEach(itme => {
            let pTemplate = p.cloneNode(true);
            pTemplate.innerHTML = `${itme.name}&nbsp;&nbsp;${this.getOnlineNumber(itme.child)}/${itme.child.length}`;
            if (itme.child) {
                let cTemplate = c.cloneNode(true);
                itme.child.forEach(itme => {
                    let div = document.createElement("div");
                    div.innerHTML = itme.remark || itme.avatarName;
                    cTemplate.appendChild(div);
                })
                pTemplate.appendChild(cTemplate);
            }
            framgment.appendChild(pTemplate);
        })
        el.appendChild(framgment);
    }

    processingData() {
        this.groups.forEach(p => {
            p.child = this.arr.filter(c => c.group == p.id)
        });
    }


}








