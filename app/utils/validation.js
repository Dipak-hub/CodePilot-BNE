export function validatePhone(mobile){
    var regex=/^[6-9]\d{9}$/;
    return regex.test(String(mobile))
}