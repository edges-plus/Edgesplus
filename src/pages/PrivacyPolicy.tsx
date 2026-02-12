import PageHeader from "@/components/PageHeader"

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen p-4 pt-48 lg:pt-24">
            <PageHeader title="Privacy Policy" />
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-muted-foreground mb-8">
                        Effective Date: February 2025
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Edges+ ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect information when you interact with our website and services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We may collect the following types of information:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Contact Information:</strong> Name, email address, phone number when you contact us or submit forms.</li>
                                <li><strong>Usage Information:</strong> IP address, browser type, device information, and pages visited.</li>
                                <li><strong>Social Media Data:</strong> Information from your public profile when you interact with us on social media platforms.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>To respond to your inquiries and provide customer support</li>
                                <li>To improve our website and services</li>
                                <li>To send communications about our products and services (with your consent)</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Sharing</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not sell your personal information. We may share data with trusted service providers who help us operate our business, and when required by law.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website uses cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may integrate with third-party services including Meta (Facebook, Instagram). These services have their own privacy policies that govern their use of your data.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="text-muted-foreground mt-4">
                                <strong>Edges+</strong><br />
                                Email: <a href="mailto:contact@edgesplus.com" className="text-primary hover:underline">contact@edgesplus.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
