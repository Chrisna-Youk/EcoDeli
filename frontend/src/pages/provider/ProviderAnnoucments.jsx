import React from 'react';
import DelivrerAnnouncementCard from '../../components/DelivrerComponents/DelivrerAnnouncementCards';


const ProviderAnnouncements = () => {
  return (
    <div className="bg-white pt-0 h-screen 2xl:ml-120 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col sm:ml-20">
          <p className="text-black text-xl font-semibold">Your Announcements</p>
          <p>You can edit, create or delete an announcements here.</p>
        </div>
        <a href="DelivrerCreateAnnoucements" className='mr-100'>
        <svg className='h-10 hover:opacity-80 duration-300' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M853.333333 874.666667H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334V234.666667c0-46.933333 38.4-85.333333 85.333334-85.333334h682.666666c46.933333 0 85.333333 38.4 85.333334 85.333334v554.666666c0 46.933333-38.4 85.333333-85.333334 85.333334z" fill="#d4d58b"></path><path d="M746.666667 341.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#f5f3b2"></path><path d="M426.666667 341.333333L192 682.666667h469.333333z" fill="#e4c99b"></path><path d="M661.333333 469.333333l-170.666666 213.333334h341.333333z" fill="#f5f3b2"></path><path d="M810.666667 810.666667m-213.333334 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z" fill="#43A047"></path><path d="M768 682.666667h85.333333v256h-85.333333z" fill="#FFFFFF"></path><path d="M682.666667 768h256v85.333333H682.666667z" fill="#FFFFFF"></path></g></svg>
        </a>
      </div>

      <div className='flex flex-row flex-wrap mt-8 gap-5 p-8 2xl:mr-72 ml-10'>

      <DelivrerAnnouncementCard
        image="https://preview.redd.it/23-yamaha-r7-v0-dsk2foyjizud1.jpg?width=1080&crop=smart&auto=webp&s=819cf6fdaa1ff4e67d26e599bfd42460e14acfaf"
        title="Moto · Paris"
        date="20 juil"
        city_start="Paris"
        city_end="Toulouse"
        price="84 €"
        rating="4,9"
      />

      <DelivrerAnnouncementCard
        image="https://www.theparisphotographer.com/wp-content/uploads/2020/02/The-Paris-Photographer-Best-photography-team-in-Paris.jpg"
        title="Photographe Pro · Paris"
        date="20 juil"
        price="20 €"
        rating="4,2"
      />

      <DelivrerAnnouncementCard
        image="https://media.istockphoto.com/id/516329534/fr/photo/en-paille.jpg?s=612x612&w=0&k=20&c=AbUPoF0rjp_EbQDt4HneiYtXRozIyb79YTvvpAeJmDg="
        title="Traiteur · Paris"
        date="20 juil"
        price="200 €"
        rating="4,6"
      />

      <DelivrerAnnouncementCard
        image="https://www.aufauteuilducoiffeur.fr/img/images/3-original.jpg"
        title="Coiffeur · Paris"
        date="20 juil"
        price="15 €"
        rating="5"
      />

      <DelivrerAnnouncementCard
        image="https://i.notretemps.com/2000x1125/smart/2024/04/30/illustration-de-travaux-de-jardinage.jpeg"
        title="Jardinage à Domicile · Paris"
        date="20 juil"
        price="30 €"
        rating="4,8"
      />

      <DelivrerAnnouncementCard
        image="https://cdn.prod.website-files.com/6413856d54d41b5f298d5953/67ae1d4b1945f7be580af6a5_65815eec29effcc74349ed64_passageres-covoiturage-nuit.jpeg"
        title="Covoiturage · Paris - Toulouse"
        date="20 juil"
        price="50 €"
        rating="4,9"
      />

    <DelivrerAnnouncementCard
        image="https://demarchesadministratives.fr/images/demarches/189/garde_enfant_domicile_nounou.jpg"
        title="Garde d'enfant · Paris"
        date="20 juil"
        price="35 €"
        rating="4,9"
      />

    <DelivrerAnnouncementCard
        image="https://www.domaliance.fr/wp-content/uploads/2022/10/lit-senior-garde.jpg"
        title="Aide personnes agées · Paris"
        date="20 juil"
        price="84 €"
        rating="4,9"
      />
      </div>
    </div>
  );
};

export default ProviderAnnouncements;