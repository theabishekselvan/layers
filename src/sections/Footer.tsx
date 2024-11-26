import Image from "next/image";
import logoImage from '@/assets/images/logo.svg';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between  gap-6">
                    <div> 
                        <Image src={logoImage} alt="Layers logo" />
                    </div>
                    <nav className="flex gap-6">
                        {footerLinks.map((link) => (
                            <a href={link.href} key={link.label} className="text-white/50 text-sm"> {link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    )
}
