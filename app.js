// Set countdown target date (Pastikan formatnya benar)
const countdownDate = new Date("June 2, 2025 16:46:00 GMT+0700").getTime(); // WIB (GMT+7)

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime(); // Ambil waktu saat ini
    const distance = countdownDate - now; // Hitung selisih waktu

    // Hitung hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil pada elemen dengan ID yang sesuai
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Jika countdown selesai, tampilkan pesan
    if (distance < 0) {
        clearInterval(countdownFunction); // Hentikan interval
        document.getElementById("countdown-timer").innerHTML = "Pengumuman Telah Dibuka!";
    }
}, 1000); // Update setiap detik
