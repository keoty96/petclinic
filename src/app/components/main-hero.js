import "../styles/hero.css"
export default function Hero() {
    return (
        <div className="hero w-svw relative">
            <div className="main-hero-content p-6 md:z-1 md:mt-auto md:mb-auto">
                <h1 className="uppercase text-4xl font-bold mb-3 md:text-amber-50">Petclinic is here to help!</h1>
                <button className="bg-green-700 text-white p-2 rounded-2xl">Make an Appointment</button>
            </div>
            {/* bg-no-repeat bg-cover bg-center m-auto */}
            <img className="md:absolute md:top-0 md:object-top md:h-full md:w-svw md:object-cover" src="https://img.freepik.com/free-photo/two-stylish-girls-sunny-field-with-dogs_1157-34644.jpg?t=st=1747000289~exp=1747003889~hmac=6497cf1c8f3ada9b94dc7ba793e8c97e6b1cd0abc7a59b464782b05f66aa6b2a&w=2000" />
        </div>
    )
}