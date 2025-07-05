import React from 'react';
import ComponentServiceDetailsPage from './ComponentServiceDetailsPage';

const ServiceDetailsPage = () => {
  return (
    <ComponentServiceDetailsPage
      title="Cours particuliers de mathématiques"
      image="https://media.lesechos.com/api/v1/images/view/5e564738d286c275866fff96/1280x720/10577-1514976622-soutien-scolaire-job-etudes.jpg"
      price="20 €/h"
      category="Soutien scolaire"
      description="Je suis étudiant en Informatique en bachelor d'informatique à l'ESGI et je propose des cours particuliers de mathématiques pour les élèves du collège et du lycée."
    />
  );
};

export default ServiceDetailsPage;
