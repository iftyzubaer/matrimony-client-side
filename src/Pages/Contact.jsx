const Contact = () => {
    return (
        <div className="my-5">
            <h3 className="text-5xl font-bold text-center py-4">Contact Us</h3>
            <p>At EternalMatches, we value your feedback, questions, and concerns. Our dedicated support team is here to assist you on your journey to find eternal love. Feel free to reach out to us using the following contact information:</p>

            <div className="py-4">
                <h3 className="text-3xl font-bold">Customer Support:</h3>
                <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex-1">

                        <p>
                            <ul>
                                <li><span className="font-bold">Email:</span> <a href="mailto:iftyzubaer1304@gmail.com">contact@eternalmatches.com</a></li>
                                <li><span className="font-bold">Phone:</span> <a href="tel:+8801317264362">+123-456-7890</a></li>
                                <li><span className="font-bold">Working Hours:</span> Monday to Friday, 9:00 AM - 6:00 PM (GMT)</li>
                            </ul>
                        </p>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold">Address:</p>
                        <p>Eternal Matches Headquarters<br />123 Love Lane<br />Cityville, State 12345</p>
                    </div>
                </div>
            </div>

            <h3 className="text-3xl font-bold py-4">Connect With Us Online:</h3>
            <p>Follow us on social media for updates, success stories, and tips on building lasting relationships:</p>
            <ul className="list-disc ml-11">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
            </ul>

            <p className="py-6">Thank you for choosing EternalMatches. We appreciate your trust and look forward to assisting you on your journey to finding everlasting love.</p>
        </div>
    );
};

export default Contact;