export default function Contacts() {
    return (
        <section
            id="contacts"
            className="min-h-screen bg-gray-950 px-6 py-20 text-white"
        >
            <div className="mx-auto max-w-4xl">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold md:text-5xl">
                        Contact Me
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Have a project in mind or want to work together?
                        Feel free to reach out.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Get in Touch
                            </h3>

                            <p className="text-gray-400">
                                I'm always open to discussing new projects,
                                creative ideas, or opportunities.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-lg">
                                shimirwaremypatrick@email.com
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="text-lg">
                                +250 781 217 766
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="6"
                            required
                            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}