// EmailJS Configuration with NEW Template ID: template_v03098d
const EMAILJS_CONFIG = {
    publicKey: "E44ZuVI8Vhn2BZ5qy",
    serviceId: "service_kjkf775", 
    templateId: "template_v03098d"  // NEW TEMPLATE ID
};

let emailjsInitialized = false;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio Loading with NEW Template ID: template_v03098d');

    // Initialize EmailJS first
    initEmailJS();

    // Initialize all other functionality
    initLoader();
    initCursor();
    initNavigation();
    initScrollAnimations();
    initCounters();
    initSkillBars();
    initContactForm();
    initParticles();
    initSmoothScroll();

    // Update config display
    updateConfigDisplay();
});

// Enhanced EmailJS initialization
function initEmailJS() {
    try {
        console.log('📧 Initializing EmailJS with NEW configuration...');
        console.log('🔑 Public Key:', EMAILJS_CONFIG.publicKey);
        console.log('📮 Service ID:', EMAILJS_CONFIG.serviceId);
        console.log('📝 Template ID:', EMAILJS_CONFIG.templateId, '(NEW)');

        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS library not loaded');
        }

        emailjs.init(EMAILJS_CONFIG.publicKey);
        emailjsInitialized = true;

        console.log('✅ EmailJS initialized successfully with NEW template');
        updateEmailJSStatus('Ready ✅');

    } catch (error) {
        console.error('❌ EmailJS initialization failed:', error);
        emailjsInitialized = false;
        updateEmailJSStatus('Failed ❌');
    }
}

// Update configuration display
function updateConfigDisplay() {
    const configInfo = document.getElementById('config-info');
    if (configInfo) {
        configInfo.style.display = 'block';
    }
}

// Update EmailJS status
function updateEmailJSStatus(status) {
    const statusElement = document.getElementById('emailjs-status');
    if (statusElement) {
        statusElement.textContent = status;
        statusElement.style.color = status.includes('Ready') ? '#10b981' : '#ef4444';
    }
}

// Loading Screen Animation
function initLoader() {
    const loader = document.getElementById('loader');
    const progressBar = document.querySelector('.loader-progress');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'visible';
                startEntranceAnimations();
            }, 500);
        }
    }, 100);
}

// Custom Cursor
function initCursor() {
    if (window.innerWidth <= 768) return;

    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function updateFollower() {
        const speed = 0.2;
        followerX += (mouseX - followerX) * speed;
        followerY += (mouseY - followerY) * speed;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(updateFollower);
    }
    updateFollower();

    const hoverElements = document.querySelectorAll('a, button, .project-card, .achievement-card, .stat-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

// Navigation
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll(
        '.stat-card, .project-card, .achievement-card, .skill-category, .experience-card'
    );

    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                const increment = target / 100;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');

                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 200);

                observer.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
}

// Contact Form with NEW Template ID
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const retryBtn = document.getElementById('retry-btn');
    const errorDetails = document.getElementById('error-details');

    // Hide messages initially
    hideAllMessages();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('📝 Form submission started with NEW template ID');

        // Validate form input
        if (!validateForm()) {
            console.log('❌ Form input validation failed');
            return;
        }

        sendEmail();
    });

    // Retry button functionality
    if (retryBtn) {
        retryBtn.addEventListener('click', function() {
            console.log('🔄 Retrying email send with NEW template...');
            hideAllMessages();
            sendEmail();
        });
    }

    function sendEmail() {
        if (!emailjsInitialized) {
            console.error('❌ EmailJS not initialized');
            showErrorMessage('EmailJS service not available. Please contact directly.');
            return;
        }

        showLoadingState();
        console.log('📧 Attempting to send email with NEW template ID:', EMAILJS_CONFIG.templateId);

        // Log form data for debugging
        const formData = {
            from_name: form.from_name.value,
            from_email: form.from_email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        console.log('📝 Form data being sent:', formData);

        // Send email using EmailJS with NEW template configuration
        emailjs.sendForm(
            EMAILJS_CONFIG.serviceId,    // service_kjkf775
            EMAILJS_CONFIG.templateId,   // template_v03098d (NEW)
            form                         // form element with correct field names
        )
        .then(function(response) {
            console.log('✅ Email sent successfully with NEW template:', response);
            showSuccessMessage();
            form.reset();
        })
        .catch(function(error) {
            console.error('❌ Email sending failed with NEW template:', error);

            let errorMsg = 'Unknown error occurred';

            if (error.status === 400) {
                errorMsg = 'Template configuration issue. Check template variables.';
            } else if (error.status === 401) {
                errorMsg = 'Authentication failed. Check EmailJS credentials.';
            } else if (error.status === 404) {
                errorMsg = 'Service or template not found. Verify NEW template ID: template_v03098d';
            } else if (error.status === 422) {
                errorMsg = 'Template variables mismatch detected.';
            } else if (error.text) {
                errorMsg = error.text;
            }

            console.log('📊 Detailed error information:', {
                status: error.status,
                text: error.text,
                message: error.message,
                template_id: EMAILJS_CONFIG.templateId,
                full_error: error
            });

            showErrorMessage(errorMsg);
        })
        .finally(function() {
            hideLoadingState();
        });
    }

    function validateForm() {
        const name = form.from_name.value.trim();
        const email = form.from_email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !subject || !message) {
            showErrorMessage('Please fill in all fields.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showErrorMessage('Please enter a valid email address.');
            return false;
        }

        console.log('✅ Form validation passed');
        return true;
    }

    function showLoadingState() {
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        hideAllMessages();
    }

    function hideLoadingState() {
        submitBtn.disabled = false;
        btnText.style.display = 'inline-flex';
        btnLoading.style.display = 'none';
    }

    function showSuccessMessage() {
        hideAllMessages();
        successMessage.style.display = 'flex';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 8000);
    }

    function showErrorMessage(customMessage) {
        hideAllMessages();

        if (customMessage && errorDetails) {
            errorDetails.textContent = customMessage;
        }

        errorMessage.style.display = 'flex';

        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 10000);
    }

    function hideAllMessages() {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    }
}

// Particles Animation
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        particlesContainer.appendChild(particle);
    }
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Entrance Animations
function startEntranceAnimations() {
    const heroElements = document.querySelectorAll('.hero-photo, .hero-text, .scroll-indicator');

    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate');
        }, index * 200);
    });
}

// Console debug information with NEW template ID
console.log(`
🚀 Ankur Singh's Portfolio - UPDATED with NEW Template ID
📧 EmailJS Configuration:
- Public Key: ${EMAILJS_CONFIG.publicKey}
- Service ID: ${EMAILJS_CONFIG.serviceId}
- Template ID: ${EMAILJS_CONFIG.templateId} (NEW TEMPLATE)

📝 Template Variables Expected:
- {{from_name}} - from form field 'from_name'
- {{from_email}} - from form field 'from_email'  
- {{subject}} - from form field 'subject'
- {{message}} - from form field 'message'

🔧 NEW Template Content Should Be:
Subject: New Contact from Portfolio - {{subject}}

Hello Ankur,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
`);

// Error handling for uncaught errors
window.addEventListener('error', function(e) {
    console.error('💥 Uncaught error:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('💥 Unhandled promise rejection:', e.reason);
});