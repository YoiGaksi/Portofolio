const hiddenElements = document.querySelectorAll('.content');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Menambahkan kelas "show" saat elemen terlihat
            observer.unobserve(entry.target); // Menghentikan observasi setelah animasi muncul
        }
    });
}, {
    threshold: 0.1 
});

hiddenElements.forEach(el => observer.observe(el));
