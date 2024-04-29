import React from "react";

const Account = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 justify-center gap-6 pt-4 pb-16 flex-col items-center">
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4 text-center">
            Profile information
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="first" className="text-sm font-medium">
                  First name
                </label>
                <input
                  type="text"
                  name="first"
                  id="first"
                  className="input-box py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last" className="text-sm font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  name="last"
                  id="last"
                  className="input-box py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="birthday" className="text-sm font-medium">
                  Birthday
                </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className="input-box py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className="text-sm font-medium">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="input-box py-2 px-3 rounded-md border border-gray-300"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-box py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input-box py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
            >
              save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
