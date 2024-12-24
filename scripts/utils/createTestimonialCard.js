export function createTestimonialCard(imgSrc, comment, name, role) {
    const testimonial = document.createElement('article');
    testimonial.className = 'testimonials__card';
    testimonial.innerHTML = `
        <img class="testimonials__person-photo" src="${imgSrc}" alt="Illustrative photo of a beneficiary">
        <h6 class="testimonials__comment">"${comment}"</h6>
        <p class="testimonials__person">
            <span>${name}</span>
            <span>${role}</span>
        </p>
    `
    return testimonial;
}
