function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function submit () {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var id = document.getElementById('ID').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var string = fname + " " + lname + " is inviting you to a scheduled VidChat at " + time+ " on " + date +": <br> Link: agaudana.github.io/Vidchat/chat/index.html#" + id + "<br> Meeting ID: " + id;
    var str=document.getElementById('invite').innerHTML;
    var replace=str.replace("",  string);
    document.getElementById('invite').innerHTML = replace;

    // Get the snackbar div
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    copyToClipboard('#invite');
}