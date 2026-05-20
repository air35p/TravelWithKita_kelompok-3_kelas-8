// Menunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Mengambil elemen tombol berdasarkan ID-nya
    const contactButton = document.getElementById("btnAlert");

    // Menambahkan aksi klik pada tombol
    contactButton.addEventListener("click", function() {
        // Memunculkan pesan pop-up sederhana
        alert("Terima kasih! Anda akan diarahkan ke WhatsApp Customer Service TravelWithKita.");
    });

});