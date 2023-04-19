/**
 * 用户名验证
 * @param {*} a 用户名
 * @returns 
 */

export function checkUsername(a){
    let regUsername=/^1\d{11}$/;
    return regUsername.test(a)
}

/**
 * 密码验证
 * @param {*} b密码 
 */
export function checkPassword(b){
    let regPassword=/^(?!\D+$)(?![^a-zA-Z]+$)\S{6,10}/;
    return regPassword.test(b)
}