import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacter Shalomservices",
  description: "",
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
