import React from "react";
import Images from "../../../constants/images";

function InstaSection() {
  return (
    <div className="flex flex-col mt-5 lg:container mx-auto">
      <div className="text-xl font-light text-center px-5 pt-7 mb-5">
        <p className="mb-7 tracking-wider">Shop Instagram</p>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex space-x-5 px-5 justify-between mb-5">
        {[Images.instaPhoto1, Images.instaPhoto2, Images.instaPhoto3].map(
          function (photo, index) {
            return (
              <img
                key={`instaPhoto-${index + 1}`}
                className="h-[101px] w-[101px]"
                src={photo}
                alt={`Instagram image ${index + 1}`}
              />
            );
          }
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-5 gap-5 px-5 mb-5">
        {[
          Images.instaPhoto1,
          Images.instaPhoto2,
          Images.instaPhoto3,
          Images.instaPhoto4,
          Images.instaPhoto5,
        ].map(function (photo, index) {
          return (
            <img
              key={`instaPhoto-${index + 1}`}
              className="w-full hover:grayscale"
              src={photo}
              alt={`Instagram image ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InstaSection;
