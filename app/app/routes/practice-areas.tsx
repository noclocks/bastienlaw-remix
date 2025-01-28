import { Link } from "@remix-run/react";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import DefaultPage from '../components/DefaultPage';

export default function PracticeAreas() {
    const practiceAreas = [
        { title: "All Practice Areas", path: "/practice-areas" },
        { title: "Medical Malpractice", path: "/serious-injury" },
        { title: "Criminal Law Defense", path: "/criminal-law-defense" },
        { title: "Business General Counsel", path: "/business-general-counsel-business-transactions" },
        { title: "Nursing Home Abuse", path: "/nursing-home-abuse" },
        { title: "Other Practice Areas", path: "/other-practice-areas" },
    ];

    return (
        <DefaultPage
            title="Practice Areas"
            description={
                <>
                    <p>At the Law Offices of Villard Bastien, LLC, we specialize in various areas of law to provide comprehensive legal services to our clients. Our practice areas include:</p>
                    <ul>
                        {practiceAreas.map((area, index) => (
                            <li key={index}>
                                <Link to={area.path}>{area.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <p>Click on any practice area to learn more about our services and how we can assist you with your legal needs.</p>
                </>
            }
        />
    );
}
