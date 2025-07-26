// Animação de entrada na hero section
window.addEventListener('DOMContentLoaded', function() {
  var hero = document.querySelector('.hero-content');
  if(hero) {
    setTimeout(function() {
      hero.classList.add('animated');
    }, 100);
  }
});
// Número do WhatsApp (substitua pelo número real da cliente)
const WHATSAPP_NUMBER = '5565999872636'; // Formato: código do país + DDD + número

// Função para redirecionar para o WhatsApp
function redirectToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos quando a página carregar
window.addEventListener('load', function() {
    const animatedElements = document.querySelectorAll('.product-card, .usage-card, .recipe-card, .contact-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Destacar link ativo no menu baseado na seção visível
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Adicionar efeito de hover nos cards de produto
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Função para copiar informações de contato
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Criar notificação visual
        const notification = document.createElement('div');
        notification.innerHTML = '✓ Copiado!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 10000;
            font-weight: bold;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });
}

// Adicionar CSS para animação de notificação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .nav-menu a.active {
        color: #4CAF50 !important;
    }
    
    .nav-menu a.active::after {
        width: 100% !important;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Preloader (opcional)
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// Lazy loading para imagens (se houver)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Gerenciar erro de carregamento de imagens dos produtos
document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-photo');
    
    productImages.forEach(img => {
        img.addEventListener('error', function() {
            // Se a imagem não carregar, tenta usar uma imagem padrão
            if (!this.dataset.fallback) {
                this.dataset.fallback = 'true';
                this.src = 'images/notfound/notfound.png';
            } else {
                // Se nem a fallback carregar, oculta a imagem e mostra o ícone
                this.style.display = 'none';
                if (this.classList.contains('active')) {
                    const gallery = this.closest('.product-gallery');
                    const nextImg = gallery.querySelector('.product-photo:not([style*="display: none"])');
                    if (nextImg && nextImg !== this) {
                        this.classList.remove('active');
                        nextImg.classList.add('active');
                    } else {
                        const overlay = gallery.parentElement.querySelector('.product-icon-overlay');
                        if (overlay) {
                            overlay.style.position = 'static';
                            overlay.style.width = '80px';
                            overlay.style.height = '80px';
                            overlay.style.fontSize = '2.5rem';
                            overlay.style.background = '#4CAF50';
                        }
                    }
                }
            }
        });
        img.addEventListener('load', function() {
            this.style.display = 'block';
        });
    });
    
    // Inicializar galerias
    initializeGalleries();
});

// Função para inicializar as galerias
function initializeGalleries() {
    const galleries = document.querySelectorAll('.product-gallery');
    
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.product-photo');
        const navButtons = gallery.querySelectorAll('.gallery-nav');
        const dots = gallery.querySelector('.gallery-dots');
        
        // Só mostrar navegação se houver mais de uma imagem
        if (images.length > 1) {
            navButtons.forEach(nav => nav.style.display = 'flex');
            if (dots) dots.style.display = 'flex';
            
            // Auto-play opcional (a cada 5 segundos)
            setInterval(() => {
                const activeImg = gallery.querySelector('.product-photo.active');
                const nextButton = gallery.querySelector('.gallery-nav.next');
                if (activeImg && nextButton && !gallery.matches(':hover')) {
                    changeImage(nextButton, 1);
                }
            }, 5000);
        }
    });
}

// Função para mudar imagem do carrossel
function changeImage(button, direction) {
    const gallery = button.closest('.product-gallery');
    const images = gallery.querySelectorAll('.product-photo');
    const dots = gallery.querySelectorAll('.dot');
    const activeImg = gallery.querySelector('.product-photo.active');
    const activeDot = gallery.querySelector('.dot.active');
    
    let currentIndex = parseInt(activeImg.dataset.index);
    let newIndex = currentIndex + direction;
    
    // Loop infinito
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    
    // Atualizar imagens
    activeImg.classList.remove('active');
    images[newIndex].classList.add('active');
    
    // Atualizar indicadores
    if (activeDot) activeDot.classList.remove('active');
    if (dots[newIndex]) dots[newIndex].classList.add('active');
}

// Função para ir para imagem específica
function currentImage(dot, index) {
    const gallery = dot.closest('.product-gallery');
    const images = gallery.querySelectorAll('.product-photo');
    const dots = gallery.querySelectorAll('.dot');
    const activeImg = gallery.querySelector('.product-photo.active');
    const activeDot = gallery.querySelector('.dot.active');
    
    // Atualizar imagens
    if (activeImg) activeImg.classList.remove('active');
    images[index].classList.add('active');
    
    // Atualizar indicadores
    if (activeDot) activeDot.classList.remove('active');
    dot.classList.add('active');
}
