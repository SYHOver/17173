var ajaxFn = function (params) {
    var _a = params.AjaxType, AjaxType = _a === void 0 ? "post" : _a, Ajaxurl = params.Ajaxurl, AjaxData = params.AjaxData, AjaxSuccess = params.AjaxSuccess;
    var xhr = new XMLHttpRequest();
    xhr.open(AjaxType, Ajaxurl, false);
    xhr.send(AjaxData);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                var result = JSON.parse(xhr.responseText);
                AjaxSuccess(result);
            }
        }
    };
};
ajaxFn({
    AjaxType: 'POST',
    Ajaxurl: 'user/info',
    AjaxData: {
        username: 'xiaoming',
        age: 18
    },
    AjaxSuccess: function (res) {
        console.log(res);
    }
});
// interface UserInfo {
//     username: string;
//     password: number;
// }
// class Axios<T>{
//     post(url: string, data: T) : object {
//         let xhr: XMLHttpRequest = new XMLHttpRequest();
//         let res = {};
//         xhr.open("POST", url, false);
//         xhr.send(data as any);
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200 || xhr.status == 304) {
//                     let result = JSON.parse(xhr.responseText);
//                     res = result;
//                 }
//             }
//         }
//             return res;
//     }
// }
// let axios = new Axios<UserInfo>();
// function getUserInfo(data: UserInfo) {
//     return axios.post('/user/info', data);
// }
// (async function () {
//     let userInfo = await getUserInfo({
//         username: 'xiaoming',
//         password: 999999
//     })
//     console.log(userInfo) //  { username:'xiaoming', sex: 1, sexName:'男', phone:'13333333333' }
// })()
