export default function Footer() {
    return (
        <footer>
            <div className="max-w-5xl p-8 m-auto grid gap-6 md:grid-cols-2 md:pt-24 md:pb-24">
                <div><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chorrera%20Panama+(Petclinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a></iframe></div>
                <div className="text-center">
                    <h2 className="font-serif text-3xl mb-4 md:text-5xl md:mb-8">Come Visit Us</h2>
                    <p>120 US-16, Buffalo, WY 82834</p>
                    <p>Phone: 307-684-2851 <br />
                        buffalovetclinic@yahoo.com</p>
                    <p>Mon-Fri: 7:30am-5:30pm <br />
                        Saturday: Closed</p>
                </div>
            </div>
            <div className="copyrigth">
                <p>
                    <a href="/privacy-policy/">Privacy Policy</a> | <a href="/accessibility/">Accessibility</a> | © Copyright 2025 - PetClinic.</p>
            </div>
        </footer>
    )
}