export default function autogen() {
    let length = 6;
    let charset = "abcdefghijklmnopqrstuvwxyz";
    let retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}