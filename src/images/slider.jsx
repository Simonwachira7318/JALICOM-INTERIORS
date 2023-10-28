import React from "react";

const sliders = [
  { image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", title: "Innovative Interior Creations", slogan: "Designing Dreams, Creating Reality" },
  { image: "https://images.unsplash.com/photo-1630298465577-3924a8b0e110?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWVwcmludHxlbnwwfHwwfHx8MA%3D%3D", title: "Tailored Interiors, Tailored Experiences", slogan: "Luxury Redefined, Comfort Redesigned" },
  // Add more slide objects as needed
];

const Slider = () => {
  return (
    <div className="z-0 flex items-center justify-center bg-center bg-cover">
      {sliders.map((slide, index) => (
        <div key={index} className={`w-full ${index === 0 ? 'block' : 'hidden'}`}>
          <img src={slide.image} alt={`Slide ${index + 1}`} className="object-cover w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="p-4 text-center text-black bg-teal-200 opacity-100 cursor-pointer rounded-xl">
              <h1 className="mb-4 text-5xl font-bold hover:text-red-900">{slide.title}</h1>
              <p className="text-xl font-bold">{slide.slogan}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
