import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import CustomersHomeCards from "../../components/CustomerComponents/CustomersHomeCards";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import DisplayCards from '../../components/MerchantComponents/DisplayCards';
import MerchantAnnouncementCards from "../../components/MerchantComponents/MerchantAnnouncementCards"

const ViewAnnoucement = () => {
  return (

    <div class="p-5 flex flex-wrap gap-4">
      <MerchantAnnouncementCards
        id="12"
        index="oui"
        href="/"
        image="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
        title="x"
        date="12/25/23"
        price="10€"
        rating="5"
        city_start="paris"
        city_end="nice"
      />
      <MerchantAnnouncementCards
        id="12"
        index="oui"
        href="/"
        image="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
        title="x"
        date="12/25/23"
        price="10€"
        rating="5"
        city_start="paris"
        city_end="nice"
      />
      <MerchantAnnouncementCards
        id="12"
        index="oui"
        href="/"
        image="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
        title="x"
        date="12/25/23"
        price="10€"
        rating="5"
        city_start="paris"
        city_end="nice"
      />
      <MerchantAnnouncementCards
        id="12"
        index="oui"
        href="/"
        image="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
        title="x"
        date="12/25/23"
        price="10€"
        rating="5"
        city_start="paris"
        city_end="nice"
      />
      <MerchantAnnouncementCards
        id="12"
        index="oui"
        href="/"
        image="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
        title="x"
        date="12/25/23"
        price="10€"
        rating="5"
        city_start="paris"
        city_end="nice"
      />

    </div>
  );
};

export default ViewAnnoucement;

