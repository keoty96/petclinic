import Navbar from "../components/nav";
import Footer from "../components/footer";

export default async function Page() {

    return (
        <div className="font-sans">
            <Navbar />
            <div className="grid gap-4 container p-8 md:ml-auto md:mr-auto md:pt-12 xl:pt-24">
            <h1 className="font-serif text-4xl mb-12">Our Services</h1>
            <div className="grid gap-4 items-baseline md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <div className="grid gap-6">
                    <img 
                    className="rounded-full size-60 m-auto border-8 border-emerald-800 object-cover"
                    src="https://img.freepik.com/free-photo/veterinarian-taking-care-pet-dog_23-2149198639.jpg?t=st=1748807649~exp=1748811249~hmac=a65a8fbc61102e2a6bed2bb03b264f2d786f5a8d7cba0c75e90a68a4a188aad8&w=1380" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Wellness & Prevention</h3>
                        <ul>
                            <li> <strong>Annual Wellness Exams</strong> - Complete physical examinations and health assessments</li>
                            <li> <strong>Vaccinations</strong> - Core and lifestyle vaccines to protect your pet</li>
                            <li> <strong>Parasite Prevention</strong> - Flea, tick, and heartworm prevention programs</li>
                            <li> <strong>Microchipping</strong> - Permanent identification for lost pet recovery</li>
                            <li> <strong>Nutritional Counseling</strong> - Diet recommendations for optimal health</li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-6">
                    <img 
                    className="rounded-full size-60 m-auto border-8 border-emerald-800 object-cover"
                    src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100180.jpg?t=st=1748806546~exp=1748810146~hmac=cbfbce441c813569ddbdb353a13f5f9735927394e311ad2fc1dd340d5ca70b79&w=1380" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Medical Services</h3>
                        <ul>
                            <li> <strong>Diagnostic Testing</strong> - Blood work, X-rays, and ultrasound imaging</li>
                            <li> <strong>Internal Medicine</strong> - Treatment of chronic conditions and complex cases</li>
                            <li> <strong>Dermatology</strong> - Skin and coat health management</li>
                            <li> <strong>Pain Management</strong> - Comprehensive pain relief strategies</li>
                            <li> <strong>Senior Pet Care</strong> -  Specialized care for aging animals</li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-6">
                    <img 
                    className="rounded-full size-60 m-auto border-8 border-emerald-800 object-cover"
                    src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100180.jpg?t=st=1748806546~exp=1748810146~hmac=cbfbce441c813569ddbdb353a13f5f9735927394e311ad2fc1dd340d5ca70b79&w=1380" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Surgical Services</h3>
                        <ul>
                            <li> <strong>Spay & Neuter</strong> - Safe reproductive surgery with modern techniques</li>
                            <li> <strong>Soft Tissue Surgery</strong> - Advanced surgical procedures</li>
                            <li> <strong>Orthopedic Surgery</strong> - Bone and joint surgical interventions</li>
                            <li> <strong>Emergency Surgery</strong> - Urgent surgical care when needed</li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-6">
                    <img 
                    className="rounded-full size-60 m-auto border-8 border-emerald-800 object-cover"
                    src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100180.jpg?t=st=1748806546~exp=1748810146~hmac=cbfbce441c813569ddbdb353a13f5f9735927394e311ad2fc1dd340d5ca70b79&w=1380" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Dental Care</h3>
                        <ul>
                            <li> <strong>Dental Examination</strong> - Comprehensive oral health assessments</li>
                            <li> <strong>Professional Cleaning</strong> - Complete dental cleaning under anesthesia</li>
                            <li> <strong>Tooth Extractions</strong> - When necessary for oral health</li>
                            <li> <strong>Dental X-rays</strong> - Advanced imaging for hidden dental problems</li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-6">
                    <img 
                    className="rounded-full size-60 m-auto border-8 border-emerald-800 object-cover"
                    src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100180.jpg?t=st=1748806546~exp=1748810146~hmac=cbfbce441c813569ddbdb353a13f5f9735927394e311ad2fc1dd340d5ca70b79&w=1380" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Emergency & Urgent Care</h3>
                        <ul>
                            <li> <strong>24/7 Emergency Services</strong> - Round-the-clock urgent care</li>
                            <li> <strong>Critical Care</strong> - Intensive monitoring and treatment</li>
                            <li> <strong>Trauma Care</strong> - Immediate treatment for injuries</li>
                            <li> <strong>Poison Control</strong> - Emergency treatment for toxic exposure</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}