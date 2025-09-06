import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm"
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import ContactHeader from "@/components/ContacHeader"
const ContactPage = () => {
    
    return (
        <div className="min-h-screen p-4 pt-48 lg:pt-24">
            <ContactHeader />
            <ContactForm />
        </div>
    );
};

export default ContactPage;
