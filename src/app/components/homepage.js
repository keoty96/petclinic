import Hero from "./main-hero";

export default function Homepage() {
    return (
        <div className="text-xl">
            <Hero />
            {/* about */}
            <div className="max-w-5xl p-8 text-center m-auto md:pt-24 md:pb-24">
                <h2 className="font-serif text-3xl mb-4 md:text-5xl md:mb-8">Welcome to Petclinic</h2>
                <p className="md:text-xl">At Petclinic, we believe that all pets deserve exceptional, appropriate, and personalized medical care. And that’s why our experienced team of emergency veterinarians and technicians are available to provide comprehensive and compassionate care for your dog, cat, or other companion animals around the clock.</p>
            </div>
            {/* services */}
            <div className="bg-emerald-50">
                <div className="max-w-5xl p-8 text-center m-auto md:pt-24 md:pb-24">
                    <h2 className="font-serif text-3xl mb-4 md:text-5xl md:mb-8">Services</h2>
                    <div className="grid gap-3 items-center justify-items-center text-emerald-900 font-semibold md:text-xl md:grid-cols-3 md:gap-4">
                        <div className="flex items-center justify-center p-3 rounded-full size-40 bg-emerald-400">Diagnostics</div>
                        <div className="flex items-center justify-center p-3 rounded-full size-40 bg-emerald-400">Emergency Care</div>
                        <div className="flex items-center justify-center p-3 rounded-full size-40 bg-emerald-400">Euthanasia</div>
                        <div className="flex items-center justify-center p-3 rounded-full size-40 bg-emerald-400">Hospitalization Services</div>
                        <div className="flex items-center justify-center p-3 rounded-full size-40 bg-emerald-400">In-house Laboratory</div>
                        <div className="flex items-center justify-center p-3 rounded-full size-40 bg-emerald-400">More Services</div>
                    </div>
                </div>
            </div>
        </div>
    )
}