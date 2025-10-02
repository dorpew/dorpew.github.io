let currentSlide = 0;
        const totalSlides = 3;

        function updateSlider() {
            const slider = document.getElementById('projectsSlider');
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
            
            updateDots();
        }

        function changeSlide(direction) {
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = 0;
            if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }

        function createDots() {
            const dotsContainer = document.getElementById('sliderDots');
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === 0) dot.classList.add('active');
                dot.onclick = () => goToSlide(i);
                dotsContainer.appendChild(dot);
            }
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
        }

        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.querySelector('.menu-toggle');
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.querySelector('.menu-toggle');
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        document.addEventListener('click', function(event) {
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.querySelector('.menu-toggle');
            const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInside && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });

        window.addEventListener('DOMContentLoaded', () => {
            createDots();
            updateSlider();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });
