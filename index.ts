 interface navDataObj {
     lable:string,
     imgSrc:string
 }

 function createImg(imgSrc:string){
        let image = new Image(5,5);
        image.src=imgSrc;
        return image;
 }

 function createElement(text:string){
    let span = document.createElement("span");
     span.innerHTML=text;
     return span;
 }
 
 function render(arr:navDataObj[],el:string,childEl:string) : void {
     let elObj  =  document.querySelector(`.${el}`);
     let  childObj = elObj?.querySelector(`.${childEl}`);
     elObj?.removeChild(childObj as HTMLHeadingElement);
    arr.forEach(item=>{
     let  childTemplate =  childObj?.cloneNode(true); 
     if(item.imgSrc){
           childTemplate?.appendChild(createImg(item.imgSrc));
     }
     childTemplate?.appendChild(createElement(item.lable));
     elObj?.appendChild(childTemplate as HTMLHeadingElement);
    })
 }

 function setDisplay(elArr:HTMLHeadingElement[]) :void{
     console.log(elArr);
     elArr.forEach(el=>{
          el.style.display = "none";      
     })
 }

 function tab(el:string){
    let elObj = document.querySelector(`.${el}`);
    let eltext = document.querySelector(".game-collection_main");
   
    let elTextArr:any = Array.from(eltext?.children as any); 
    let childList =  elObj?.children;  
    
    let list:any = Array.from(childList as any);

     for (let index = 0; index < list.length; index++) {
        const item = list[index];
        elTextArr[index].setAttribute("index",index);
        item.addEventListener('click',function(){
            setDisplay(elTextArr);
            for (let i = 0; i < elTextArr.length; i++) {
                  if(elTextArr[i].getAttribute("index")==index){
                     elTextArr[i].style.display = "block";
                  }
             }
        },false)
     }
 }


 function renderGameCollection(list:any[]) : void{
          let elObj = document.querySelector(".collection_remen")
          let el = document.querySelector(".game-collection");
          let title = document.querySelector(".game-collection_first");
          
          let elBox = document.querySelector(".game-collection_row");
          let renderItme = document.querySelector(".game-cr_itme")

       
        //   elObj?.removeChild(el as HTMLHeadingElement);
          list.forEach(itme=>{   
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

            let elTemplate = el?.cloneNode(true);
              if(itme.type==1){  
                var  titleTemplate:any  = title?.cloneNode(true);              
                titleTemplate!.innerHTML= itme.title;
              }else{
                let template:any = renderItme?.cloneNode(true);
                template.innerHTML = itme.title;
                elTemplate?.appendChild(titleTemplate as HTMLHeadingElement)
                elBox?.appendChild(template);
                elTemplate?.appendChild(elBox as HTMLHeadingElement);
              }
              elObj?.appendChild(elTemplate as HTMLHeadingElement);
          })
          
 }