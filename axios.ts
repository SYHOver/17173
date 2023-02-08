interface AjaxParams<T> {
    AjaxType: 'Get' | 'POST';
    Ajaxurl: string;
    AjaxData: T;
    AjaxSuccess: (res: object) => void;
}

const ajaxFn:<T>(params: AjaxParams<T>) => void = function (params) {
    let { AjaxType = "post", Ajaxurl, AjaxData, AjaxSuccess } = params;
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open(AjaxType, Ajaxurl, false);
    xhr.send(AjaxData  as any);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                let result = JSON.parse(xhr.responseText);
                AjaxSuccess(result);
            }
        }
    }
}
interface UserInfo {
    username: string;
    age: number;
}
ajaxFn<UserInfo>({
    AjaxType: 'POST',
    Ajaxurl: 'user/info',
    AjaxData: {
        username: 'xiaoming',
        age: 18
    },
    AjaxSuccess(res: object) {
        console.log(res)
    }
})




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