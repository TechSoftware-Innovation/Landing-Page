export async function getTestimonialsData() {
    try {
        const response = await fetch('/data/testimonials.json');
        if (!response.ok) {
            throw new Error('Failed to fetch Testimonials');
        }
        const data = await response.json();
        return data.testimonials;
    }
    catch (error) {
        console.log('Error getting Testimonials data:', error);
    }
}