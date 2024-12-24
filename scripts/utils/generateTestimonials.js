import {getCommentersData} from "./getCommentersData.js";
import {getTestimonialsData} from "./getTestimonialsData.js";
import {createTestimonialCard} from "./createTestimonialCard.js";
import {startTestimonialsCarrousel, testimonialsContent} from "../modules/constants.js";

export async function generateTestimonials() {
    const listTestimonials = await getTestimonialsData();
    const amountTestimonials = await listTestimonials.length;
    const listCommenters = await getCommentersData(amountTestimonials);
    const listComments = [];
    for (const [index, testimonial] of listTestimonials.entries()) {
        const comment = testimonial.comment;
        const role = testimonial.role;
        const user = listCommenters[index];
        const name = await user.name.first;
        const srcImg = await user.picture.medium;
        const generatedComment = await createTestimonialCard(srcImg,comment, name, role);
        listComments.push(generatedComment);
    }
    testimonialsContent.append(...listComments);

    startTestimonialsCarrousel();
}