import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez Shalom Service pour vos Réparations de Téléphones à Bamako",
  description:
    "Besoin d'une assistance rapide pour la réparation de votre téléphone à Bamako Senou? Contactez Shalom Service dès aujourd'hui. Nos coordonnées: téléphone 70504404, email shalomservices@gmail.com. Nous sommes là pour répondre à toutes vos questions et préoccupations.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nous contacter"
        description="Besoin d'aide? Contactez-nous dès maintenant! Notre équipe dévouée chez Shalom Service est là pour répondre à toutes vos questions et vous fournir une assistance rapide et professionnelle. Faites-nous part de vos préoccupations pour des solutions efficaces. Nous sommes à votre service!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
