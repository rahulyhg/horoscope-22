/**
 * Created with JetBrains WebStorm.
 * User: maja
 * Date: 21.02.15
 * Time: 19:30
 * To change this template use File | Settings | File Templates.
 */
function isnumber (str) {
    return !isNaN(Number(str)) && str.length > 0;
}
function submitButtonClick () {
    if (isnumber (frames[0].window.document.getElementsByName("day").value)) {
        alert("Day: " + frames[0].window.document.getElementsByName("day").value);
    }
    else {
        alert("Please enter a valid day number.");
    }
}
window.onload = function () {
    frames[0].window.document.getElementById("submitButton1").addEventListener('click', submitButtonClick, false);
};
