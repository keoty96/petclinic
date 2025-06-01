import Navbar from "../components/nav";
import Footer from "../components/footer";

export default async function Page() {

    return (
        <div className="font-sans">
            <Navbar />
            <div className="grid gap-4 container p-8 md:ml-auto md:mr-auto md:pt-12 xl:pt-24">
                <h1 className="font-serif text-4xl mb-12">About Us</h1>
                <h2 className="font-serif text-2xl">Our Story</h2>
                <p>Founded in 2018, Paws & Hearts Veterinary Clinic was born from a simple belief: every pet deserves exceptional medical care delivered with compassion and expertise. Dr. Sarah Martinez and her dedicated team bring together decades of experience in veterinary medicine, specializing in both routine wellness care and complex medical cases.</p>
                <p>Our state-of-the-art facility is designed with your pet's comfort in mind. From our calming waiting areas to our fully-equipped surgical suites, every detail reflects our commitment to providing the highest standard of veterinary care in a stress-free environment.</p>
                <h2 className="font-serif text-2xl">Our Mission</h2>
                <p>To provide exceptional veterinary care while building lasting relationships with pets and their families. We believe in preventive medicine, client education, and treating every animal with the respect and love they deserve.</p>
                <h2 className="font-serif text-2xl">Our Team</h2>
                <p>Dr. Sarah Martinez, DVM Lead Veterinarian with 12 years of experience in small animal medicine and surgery. Graduated from UC Davis School of Veterinary Medicine.</p>
                <p>Dr. Michael Chen, DVM Associate Veterinarian specializing in emergency and critical care. 8 years of experience in veterinary emergency medicine.</p>
                <p>Lisa Rodriguez, RVT Head Veterinary Technician with 10 years of experience in animal care and client education.</p>
            </div>
            <Footer />
        </div>
    )
}