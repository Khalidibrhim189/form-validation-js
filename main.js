function masukAkun(){
    var username  = document.getElementById("username").value;
    var katasandi = document.getElementById("password").value;

    if((username === 'khalid') && (kataSandi == "pashagober2")){
        alert("selamat anda berhasil login!");
    }else{
        alert("mohon coba masukan username dan password dengan benar");
    }
}