import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="A propos"
        description="Bienvenue chez Shalom Service, votre partenaire de confiance pour toutes vos réparations à Bamako Senou, à deux pas du commissariat de police.."
      />
      {/* custom section */}
      <div className="container space-y-6">
        <div className="">
          <div className="w-full  md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Qui Sommes-Nous?
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color">
                Chez Shalom Service, nous sommes fiers d&lsquo;être une
                entreprise spécialisée dans la réparation, dévouée à offrir des
                services de qualité exceptionnelle. Forts de notre expertise,
                nous nous efforçons de redonner vie à vos appareils endommagés.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full  md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Notre Localisation
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color">
                Vous nous trouverez stratégiquement situés à{" "}
                <span className="font-bold">Bamako Senou</span>, à proximité
                immédiate du poste de police. Notre emplacement central rend
                l&lsquo;accès facile pour tous nos clients.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full  md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Nos Coordonnées
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color">
                <div>
                  <span className="pr-2 font-bold text-black">Téléphone:</span>
                  70504404
                </div>
                <div>
                  <span className="pr-2 font-bold text-black">Email:</span>
                  shalomservices@gmail.com
                </div>
              </p>
            </div>
          </div>
        </div>
        {/* custom section end */}
      </div>
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
