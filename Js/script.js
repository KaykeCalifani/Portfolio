const conteudos = document.querySelectorAll('.conteudo');

const observerOptions = {
    root: null,
    threshold: 0.1, 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

conteudos.forEach(conteudo => {
    observer.observe(conteudo); 
});


function openModal(modalId, title, description, imgSrc) {
    
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
    
    
    var modalTitle = modal.querySelector(".modal-title");
    var modalDescription = modal.querySelector(".modal-description");
    var modalImage = modal.querySelector(".modal-image");

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imgSrc;
}


function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}


document.querySelectorAll(".close").forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
        closeModal('modal1');
    });
});


window.onclick = function(event) {
    if (event.target == document.getElementById('modal1')) {
        closeModal('modal1');
    }
};



const menuLinks = document.querySelectorAll('.navbar-nav .nav-link');
const menuToggle = document.getElementById('navbarNav'); 

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const bootstrapCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false 
        });
        bootstrapCollapse.hide(); 
    });
});



