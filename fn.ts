// interface AjaxParams {
//     type: string,
//     url: string,
//     data: any,
//     success: AjaxSuccessCallback;
// }

// interface AjaxSuccessCallback {
//     (params:object): void;
// }

// interface Ajax {
//     (params: AjaxParams): void;
// }

// const ajax: Ajax = function (params) {
//     let { type = "post", url, data, success } = params;
//     let xhr:XMLHttpRequest = new XMLHttpRequest();
//     xhr.open(type, url, false);
//     xhr.send(data);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200 || xhr.status == 304) {
//                 let result  = JSON.parse(xhr.responseText);
//                 success(result);
//             }
//         }
//     }
// }

// ajax({
//     type:"post",
//     url:"http:***********",
//     data:{
//         username:"xiaoming",
//         password:"888888"
//     },
//     success(obj:object){
//          console.log(obj);
         
//     }
// })