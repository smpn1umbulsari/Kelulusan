// Default admin password for login
let adminPassword = "admin123"; // You can change this password as needed

// Admin login functionality
document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;
    
    // Simple validation: Check if the password matches the predefined one
    if (password === adminPassword) {
        // Hide login form and display the admin dashboard
        document.getElementById("admin-login-form").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
    } else {
        alert("Password salah!");
    }
});

// Handle the logo upload functionality
document.getElementById("logo-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Display the uploaded logo
        document.getElementById("uploaded-logo").src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
});

// Function to show the "Add Student" form
function showAddStudent() {
    document.getElementById("add-student-form").style.display = "block";
}

// Change password functionality (admin only)
function changePassword() {
    const newPassword = prompt("Masukkan password baru:");
    if (newPassword) {
        adminPassword = newPassword;
        alert("Password berhasil diubah!");
    }
}

// Handle countdown timer change functionality
function changeCountdown() {
    const newDate = prompt("Masukkan tanggal dan waktu baru (format: YYYY-MM-DD HH:MM:SS)", "2025-06-02 16:46:00");
    if (newDate) {
        // Update the countdown target date with the new input
        countdownDate = new Date(newDate).getTime();
        alert("Countdown berhasil diubah!");
    }
}

// Optional: Initialize an array or database to store student data (example)
let students = []; 

// Handle adding a new student (Example form submission)
document.getElementById("add-student-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get data from form inputs
    const nis = document.getElementById("student-nis").value;
    const nisn = document.getElementById("student-nisn").value;
    const name = document.getElementById("student-name").value;
    const className = document.getElementById("student-class").value;
    
    // You can add validation to check if the fields are not empty
    if (nis && nisn && name && className) {
        // Add student data to the array (simulating saving to a database)
        students.push({ nis, nisn, name, class: className });

        // Clear the form after submission
        document.getElementById("add-student-form").reset();

        alert("Siswa berhasil ditambahkan!");
    } else {
        alert("Semua data harus diisi!");
    }
});
