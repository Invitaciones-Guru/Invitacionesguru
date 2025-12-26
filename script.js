<script>
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            // Cambia a estado de pausa
            musicText.innerText = "PAUSE";
            musicIcon.innerText = "II";
            musicBtn.classList.add('is-playing');
        } else {
            audio.pause();
            // Cambia a estado de play
            musicText.innerText = "PLAY MUSIC";
            musicIcon.innerText = "▶";
            musicBtn.classList.remove('is-playing');
        }
    });

    // Mantener la animación de scroll AOS
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
</script>
