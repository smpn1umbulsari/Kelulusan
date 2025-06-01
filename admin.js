// Menangani upload logo
document.getElementById("logo-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        // Menampilkan logo yang diupload
        document.getElementById("uploaded-logo").src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Menyimpan pengaturan
function saveSettings() {
    const logoFile = document.getElementById("logo-upload").files[0];
    const countdownDate = document.getElementById("countdown-date").value;
    const adminPassword = document.getElementById("admin-password").value;

    // Validasi
    if (!countdownDate || !adminPassword) {
        alert("Semua pengaturan harus diisi dengan benar!");
        return;
    }

    // Simulasi penyimpanan pengaturan
    localStorage.setItem("countdownDate", countdownDate);
    localStorage.setItem("adminPassword", adminPassword);

    if (logoFile) {
        localStorage.setItem("logo", URL.createObjectURL(logoFile));
    }

    alert("Pengaturan berhasil disimpan!");
}
