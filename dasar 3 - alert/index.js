
var coba = true;

while (coba === true) {
    var tes = confirm("apakah kamu jenius?");
if (tes === true) {
    alert("kamu jenius");

    var data = prompt("isi nama anda");
    alert("halo " + data);
    coba = confirm("isi lagi?");
}else{
    alert("kamu tidak jenius");
}

   
}