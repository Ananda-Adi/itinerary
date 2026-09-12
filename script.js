// =========================
// CONFIGURATION
// =========================

// Nama yang diperbolehkan masuk
const correctName = "april";


// =========================
// ELEMENTS
// =========================

const nameInput = document.getElementById("nameInput");
const continueBtn = document.getElementById("continueBtn");
const nameToast = document.getElementById("nameToast");


// Bootstrap Toast
const toast = new bootstrap.Toast(nameToast, {
    delay: 2500
});


// =========================
// NAME VALIDATION
// =========================

function checkName() {

    const inputName = nameInput.value.trim().toLowerCase();

    // Kalau input kosong
    if (inputName === "") {
        nameInput.focus();
        return;
    }

    // Kalau nama benar
    if (inputName === correctName) {

        // Simpan nama untuk halaman berikutnya
        localStorage.setItem("visitorName", inputName);

        // Pindah ke halaman itinerary
        window.location.href = "itinerary.html";

    }

    // Kalau nama salah
    else {

        toast.show();

        // Kosongkan input
        nameInput.value = "";

        // Fokus kembali ke input
        nameInput.focus();
    }
}


// =========================
// BUTTON EVENT
// =========================

continueBtn.addEventListener("click", checkName);


// =========================
// ENTER KEY
// =========================

nameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkName();
    }

});