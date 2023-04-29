// видалення Z та об'єдання строк
function removeLetterZ(string){
    return string.join('').replace(/[Zz]/g, "");
}
module.exports = removeLetterZ
