import React from 'react';
import DelivrerUpComingDeliveriesCards from '../../components/DelivrerComponents/DelivrerUpComingDeliveriesCards';


const DelivrerUpComingDeliveries = () => {
  return (

    <div className="bg-white pt-0 h-screen 2xl:ml-72 py-10 w-full overflow-x-hidden">
      <div className="p-10 bg-white w-screen mb-8 shadow-md"></div>

      <div className='flex flex-col items-center mr-72'>
        <DelivrerUpComingDeliveriesCards
            image="https://img.leboncoin.fr/api/v1/lbcpb1/images/f7/a1/f6/f7a1f6d2dbdc3a2a7b0adf719e5151111f4d672b.jpg?rule=ad-large"
            title="Livraison Moto Yamaha R7"
            price={50}
            deliveryAddress="128 Avenue de la Liberté, 34000 Montpellier"
            dimensions={{ height: 115, width: 72, length: 210 }}
            weight={180}
            customerName="Alexandre Martin"
            date="19 Février"
            horaire="10:20"
        />

        <DelivrerUpComingDeliveriesCards
            image="https://img.leboncoin.fr/api/v1/lbcpb1/images/2a/95/3b/2a953b49bba5b1732c2df6f44a6fb15e290e6634.jpg?rule=ad-image"
            title="Livraison Moto Yamaha R7"
            price={50}
            deliveryAddress="31 rue Charle de Gaulle, Le Plessis-Bouchard"
            dimensions={{ height: 115, width: 72, length: 210 }}
            weight={180}
            customerName="Alexandre Martin"
            date="21 Juin"
            horaire="19:40"
        />
        <DelivrerUpComingDeliveriesCards
            image="https://img.leboncoin.fr/api/v1/lbcpb1/images/2a/95/3b/2a953b49bba5b1732c2df6f44a6fb15e290e6634.jpg?rule=ad-image"
            title="Livraison Moto Yamaha R7"
            price={50}
            deliveryAddress="31 rue Charle de Gaulle, Le Plessis-Bouchard"
            dimensions={{ height: 115, width: 72, length: 210 }}
            weight={180}
            customerName="Alexandre Martin"
            date="21 Juin"
            horaire="19:40"
        />
        <DelivrerUpComingDeliveriesCards
            image="https://img.leboncoin.fr/api/v1/lbcpb1/images/2a/95/3b/2a953b49bba5b1732c2df6f44a6fb15e290e6634.jpg?rule=ad-image"
            title="Livraison Moto Yamaha R7"
            price={50}
            deliveryAddress="31 rue Charle de Gaulle, Le Plessis-Bouchard"
            dimensions={{ height: 115, width: 72, length: 210 }}
            weight={180}
            customerName="Alexandre Martin"
            date="21 Juin"
            horaire="19:40"
        />
        <DelivrerUpComingDeliveriesCards
            image="https://img.leboncoin.fr/api/v1/lbcpb1/images/2a/95/3b/2a953b49bba5b1732c2df6f44a6fb15e290e6634.jpg?rule=ad-image"
            title="Livraison Moto Yamaha R7"
            price={50}
            deliveryAddress="31 rue Charle de Gaulle, Le Plessis-Bouchard"
            dimensions={{ height: 115, width: 72, length: 210 }}
            weight={180}
            customerName="Alexandre Martin"
            date="21 Juin"
            horaire="19:40"
        />
        <DelivrerUpComingDeliveriesCards
            image="https://img.leboncoin.fr/api/v1/lbcpb1/images/2a/95/3b/2a953b49bba5b1732c2df6f44a6fb15e290e6634.jpg?rule=ad-image"
            title="Livraison Moto Yamaha R7"
            price={50}
            deliveryAddress="31 rue Charle de Gaulle, Le Plessis-Bouchard"
            dimensions={{ height: 115, width: 72, length: 210 }}
            weight={180}
            customerName="Alexandre Martin"
            date="21 Juin"
            horaire="19:40"
        />
         </div>
      </div>
  );
};

export default DelivrerUpComingDeliveries;