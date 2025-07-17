import { Fragment } from "react";

const steps = [
  {
    title: "Départ",
    icon: "../cart-check-icon.svg",
    checkpoint: "Marseille, France",
  },
  {
    title: "Point de transit",
    icon: "../sorting-icon.svg",
    checkpoint: "Lyon, France",
  },
  {
    title: "Destination",
    icon: "../truck-icon.svg",
    checkpoint: "Paris, France",
  },
];

const StepItem = ({ title, icon, checkpoint }) => (
  <div className="flex flex-col items-center text-center">
    <img className="h-14 mb-1" src={icon} alt={title} />
    <h3 className="font-semibold">{title}</h3>
    {checkpoint && (
      <p className="text-sm text-gray-500 mt-1 max-w-[120px]">{checkpoint}</p>
    )}
  </div>
);

const Arrow = () => (
  <div className="flex flex-col items-center">
    <img className="h-10 mt-4" src="../arrow-icon.svg" alt="→" />
  </div>
);

const CustomerStep = () => {
  return (
    <div className="flex flex-row gap-5 text-md justify-center">
      {steps.map((step, index) => (
        <Fragment key={index}>
          <StepItem {...step} />
          {index < steps.length - 1 && <Arrow />}
        </Fragment>
      ))}
    </div>
  );
};

export default CustomerStep;
