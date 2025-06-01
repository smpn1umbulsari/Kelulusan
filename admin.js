// Fungsi untuk menampilkan logo yang diupload
document.getElementById("logo-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById("uploaded-logo").src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
