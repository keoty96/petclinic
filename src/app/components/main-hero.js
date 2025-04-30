import "../styles/hero.css"
export default function Hero() {
    return (
        <div className="hero relative max-w-2xl m-auto my-8">
            <img
                className="rounded-2xl"
                src="https://d3p3fw3rutb1if.cloudfront.net/photos/c9bfffaa-fe07-4802-87f8-c40ea69ab060" alt="dog smiling" />
            <div className="main-hero-content mt-10 bg-sky-200">
                <h1>Welcome to PetClinic!</h1>
                <button className="bg-green-700 text-white p-2 rounded-2xl">Make an Appointment</button>
            </div>
        </div>
    )
}