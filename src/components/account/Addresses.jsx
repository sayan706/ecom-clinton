import React from "react";

const Addresses = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 justify-center gap-6 pt-4 pb-16 flex-col items-center">
        <div className="col-span-9 shadow-md rounded-md p-6">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
              <div className="mb-4 md:mb-0">
                <label htmlFor="first-name" className="text-gray-600 block">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input-box rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <label htmlFor="last-name" className="text-gray-600 block">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="input-box rounded-md px-4 py-2 w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="text-gray-600 block">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="input-box rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="region" className="text-gray-600 block">
                Country/Region
              </label>
              <input
                type="text"
                name="region"
                id="region"
                className="input-box rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="text-gray-600 block">
                Street address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="input-box rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="text-gray-600 block">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="input-box rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="text-gray-600 block">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="input-box rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-600 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-box rounded-md px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="text-gray-600 block">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="input-box rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addresses;
