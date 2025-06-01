let adminPassword = "admin123"; // Default password

// Admin login functionality
document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (password === adminPassword) {
        document.getElementById("admin-login-form").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
    } else {
        alert("Password salah!");
    }
});

// Show Add Student Form
function showAddStudent() {
    document.getElementById("add-student-form").style.display = "block";
}

// Change password functionality
function changePassword() {
    const newPassword = prompt("Masukkan password baru:");
    if (newPassword) {
        adminPassword = newPassword;
        alert("Password berhasil diubah!");
    }
}
