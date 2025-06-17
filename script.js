// Simple JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', function(e) {
					e.preventDefault();
            
					const targetId = this.getAttribute('href');
					if (targetId === '#') return;
            
					const targetElement = document.querySelector(targetId);
					if (targetElement) {
						targetElement.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
                
						// Update URL (optional)
						history.pushState(null, null, targetId);
					}
				});
			});
            
            // Animation for feature cards on scroll
            const featureCards = document.querySelectorAll('.feature-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            featureCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
			
			// Highlight nav link khi scroll đến section
			const sections = document.querySelectorAll('section[id]');
			const navLinks = document.querySelectorAll('.nav-links a');

			window.addEventListener('scroll', () => {
				let current = '';
            
				sections.forEach(section => {
					const sectionTop = section.offsetTop;
					const sectionHeight = section.clientHeight;
                
					if (pageYOffset >= sectionTop - 300) {
						current = section.getAttribute('id');
					}
				});
            
				navLinks.forEach(link => {
					link.classList.remove('active');
					if (link.getAttribute('href') === `#${current}`) {
						link.classList.add('active');
					}
				});
			});
        });