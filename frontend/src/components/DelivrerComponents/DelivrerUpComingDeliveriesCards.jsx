const DelivrerUpComingDeliveriesCards = ({
  image,
  title,
  price,
  deliveryAddress,
  dimensions, //{ height, width, length }
  weight,
  customerName,
  date,
  horaire,
}) => (
  <div className="bg-white rounded-xl shadow-md flex overflow-hidden mt-8 hover:bg-zinc-100 hover:shadow-xl w-[70vw] hover:scale-102 duration-300">

    <img
      src={image || "https://cdn.vectorstock.com/i/500p/33/47/no-photo-available-icon-default-image-symbol-vector-40343347.jpg"}
      alt="Produit à livrer"
      className="w-60 h-full object-cover"
    />

    <div className="p-5 flex flex-col justify-between w-full">
      <div>
        <p className="text-grey-600 font-semibold text-xl">{price} €</p>
        <h2 className="text-lg font-bold mt-2">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">Client : <span className="font-medium">{customerName}</span></p>
        <p className="text-sm text-gray-600 mt-1">Adresse : <span className="font-medium">{deliveryAddress}</span></p>
        <p className="text-sm text-gray-600 mt-1">
          Dimensions : {dimensions?.height}h x {dimensions?.width}w x {dimensions?.length}l cm
        </p>
        <p className="text-sm text-gray-600 mt-1">Poids : {weight} kg</p>
        <p className="text-md text-gray-600 mt-8">Jour : <span className="font-medium">{date}</span></p>
        <p className="text-md text-gray-600 mt-1">Heure : <span className="font-medium">{horaire}</span></p>
      </div>
    </div>

    <div className="w-full">
      <iframe
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=CLE_API${encodeURI(deliveryAddress)}`}
    ></iframe>
    </div>
  </div>
);

export default DelivrerUpComingDeliveriesCards;
