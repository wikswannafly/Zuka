function cekPassword() {
    let password = document.getElementById("password").value;
    if (password === "123456") {
        alert("Login berhasil!");
    } else {
        alert("Password salah!");
    }
}