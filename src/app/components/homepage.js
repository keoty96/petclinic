import Hero from "./main-hero";

export default function Homepage() {
    return (
        <div className="text-xl">
            <Hero />
            {/* about */}
            <div className="max-w-5xl p-8 text-center m-auto md:pt-24 md:pb-24">
                <h2 className="font-serif text-3xl mb-4 md:text-5xl md:mb-6">Welcome to Petclinic</h2>
                <p className="md:text-xl">At Petclinic, we believe that all pets deserve exceptional, appropriate, and personalized medical care. And that’s why our experienced team of emergency veterinarians and technicians are available to provide comprehensive and compassionate care for your dog, cat, or other companion animals around the clock.</p>
            </div>
            {/* services */}
            <div className="bg-emerald-50">
                <div className="max-w-5xl p-8 text-center m-auto md:pt-24 md:pb-24">
                    <h2 className="font-serif text-3xl mb-4 md:text-5xl md:mb-6">Services</h2>
                    <div className="md:text-xl">
                        <div>Diagnostics</div>
                        <div>Emergency Care</div>
                        <div>Euthanasia</div>
                        <div>Hospitalization Services</div>
                        <div>In-house Laboratory</div>
                        <div>More Services</div>
                    </div>
                </div>
            </div>
            {/* contact */}
            <div className="max-w-5xl p-8 m-auto grid md:grid-cols-2 md:pt-24 md:pb-24">
                <div><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chorrera%20Panama+(Petclinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a></iframe></div>
                <div>
                    <h2 className="font-serif text-3xl mb-4 md:text-5xl md:mb-6">Come Visit Us</h2>
                    <p>120 US-16, Buffalo, WY 82834</p>
                    <p>Phone: 307-684-2851 <br />
                        buffalovetclinic@yahoo.com</p>
                    <p>Mon-Fri: 7:30am-5:30pm <br />
                        Saturday: Closed</p>
                </div>
            </div>
        </div>
    )
}