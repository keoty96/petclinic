import Navbar from "../components/nav";
import AppointmentForm from "../components/appoinment-form";
import Footer from "../components/footer";

export default async function Page() {

    return (
        <div className="font-sans">
            <Navbar />
            <div className="grid gap-4 container p-8 justify-center md:ml-auto md:mr-auto md:pt-12 xl:pt-24">
                <h1 className="font-serif text-4xl mb-4">Make an Appointment</h1>
                <AppointmentForm />
            </div>
            <Footer />
        </div>
    )
}