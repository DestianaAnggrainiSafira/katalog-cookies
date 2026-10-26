
const pencarian = document.getElementById("pencarian");
const produk = document.querySelectorAll(".produk");
const tidakDitemukan = document.getElementById("tidakDitemukan");

// FITUR PENCARIAN
pencarian.addEventListener("input", function () {
    const kataKunci = pencarian.value.toLowerCase().trim();
    let jumlahDitemukan = 0;

    produk.forEach(function (item) {
        const nama = item.dataset.nama;

        if (nama.includes(kataKunci)) {
            item.style.display = "";
            jumlahDitemukan++;
        } else {
            item.style.display = "none";
        }
    });

    tidakDitemukan.hidden = jumlahDitemukan > 0;
});

// ANIMASI LOGO
function animasiLogo() {
    const logo = document.querySelector(".logo");
    const tagline = document.getElementById("tagline");

    logo.classList.toggle("aktif");

    if (logo.classList.contains("aktif")) {
        tagline.textContent = "Freshly Baked Just for You ♡";
    } else {
        tagline.textContent = "Homemade cookies for your happy days";
    }
}

// PESAN MELALUI WHATSAPP
function pesan(namaProduk) {
    const nomorWhatsApp = "6281234567890";

    const teksPesan =
        "Halo Soft Cookies by Fira, saya ingin memesan "
        + namaProduk + ". Apakah masih tersedia?";

    const link = "https://wa.me/" + nomorWhatsApp
        + "?text=" + encodeURIComponent(teksPesan);

    window.open(link, "_blank");
}
