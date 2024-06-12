import React, { useState } from "react";

const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    saddress: "",
    city: "",
    state: "",
    zip: "",
    ecomment: "",
    ecandidate: "",
    eoffer: "",
    push: "",
  });
  function changeHandlerAll(event) {
    const { name, value, checked, type } = event.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  console.log(formDetails);
  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted");
    console.log(formDetails);
  }
  return (
    <div>
      <form
        className="w-[60%] m-auto bg-gray-100  px-10 pt-4 pb-10"
        onSubmit={submitHandler}
      >
        <label htmlFor="firstname" className="font-bold">
          First Name
        </label>
        <br />
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Aryan"
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
          value={formDetails.firstname}
          onChange={changeHandlerAll}
        />
        <br />
        <label htmlFor="lastname" className="font-bold">
          Last Name
        </label>
        <br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="verma"
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
          value={formDetails.lastname}
          onChange={changeHandlerAll}
        />
        <br />
        <label htmlFor="email" className="font-bold">
          E-mail:{" "}
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="aryanverma@gmail.com"
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
          value={formDetails.email}
          onChange={changeHandlerAll}
        />
        <br />
        <label htmlFor="country" className="font-bold">
          Country{" "}
        </label>
        <br />
        <select
          name="country"
          id="country"
          value={formDetails.country}
          onChange={changeHandlerAll}
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
        >
          <option value="india">india</option>
          <option value="canada">canada</option>
          <option value="usa">usa</option>
          <option value="australia">australia</option>
        </select>
        <br />
        <label htmlFor="saddress" className="font-bold">
          Street Address
        </label>
        <br />
        <input
          type="text"
          name="saddress"
          id="saddress"
          placeholder="Main Road, Mohtli, Indora"
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
          value={formDetails.saddress}
          onChange={changeHandlerAll}
        />
        <br />
        <label htmlFor="city" className="font-bold">
          City
        </label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Indora"
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
          value={formDetails.city}
          onChange={changeHandlerAll}
        />
        <br />
        <label htmlFor="state" className="font-bold">
          State/Province
        </label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Himachal Pradesh"
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
          value={formDetails.state}
          onChange={changeHandlerAll}
        />
        <br />
        <label htmlFor="zip" className="font-bold">
          Postal Code/ZIP
        </label>
        <br />
        <input
          type="text"
          name="zip"
          id="zip"
          placeholder="176403"
          className="w-[80%] border-blue-400 border h-10 rounded-md my-2 px-3 text-black"
          value={formDetails.zip}
          onChange={changeHandlerAll}
        />
        <br />
        <label htmlFor="" className="font-bold">
          By Email
        </label>
        <br />
        <input
          type="checkbox"
          name="ecomment"
          id="ecomment"
          onChange={changeHandlerAll}
          className="w-4 h-4 mt-3"
        />
        <label htmlFor="ecomment">
          <span className="ml-1 font-bold text-xl">
            Comments{" "}
            <p className="ml-6 font-normal text-sm">
              Get notified when someones posts a comment on a posting.
            </p>
          </span>
        </label>
        <input
          type="checkbox"
          name="ecandidate"
          id="ecandidate"
          onChange={changeHandlerAll}
          className="w-4 h-4 mt-3"
        />
        <label htmlFor="ecandidate">
          <span className="ml-1 font-bold text-xl">
            Candidates{" "}
            <p className="ml-6 font-normal text-sm">
              Get notified when a candidate applies for a job.
            </p>
          </span>
        </label>
        <input
          type="checkbox"
          name="eoffer"
          id="eoffer"
          onChange={changeHandlerAll}
          className="w-4 h-4 mt-3"
        />
        <label htmlFor="eoffer">
          <span className="ml-1 font-bold text-xl">
            Offers
            <p className="ml-6 font-normal text-sm">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </span>
        </label>
        <br />
        <label htmlFor="" className="font-bold">
          Push Notifications
          <p className="font-normal text-sm">
            These are delivered via SMS to your mobile phone.
          </p>
        </label>
        <br />
        <input
          className="h-4 w-4 mr-2"
          type="radio"
          name="push"
          id="everything"
          onChange={changeHandlerAll}
          value="everything"
        />
        <label className="font-semibold" htmlFor="everything">
          Everything
        </label>
        <br />
        <input
          className="h-4 w-4 mr-2"
          type="radio"
          name="push"
          id="same-as-email"
          onChange={changeHandlerAll}
          value="same-as-email"
        />
        <label className="font-semibold" htmlFor="same-as-email">
          Same as email
        </label>
        <br />
        <input
          className="h-4 w-4 mr-2"
          type="radio"
          name="push"
          id="no-push-notifications"
          onChange={changeHandlerAll}
          value="no-push-notifications"
        />
        <label className="font-semibold" htmlFor="no-push-notifications">
          No push notifications
        </label>
        <br /> <br />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
        >
          Submit details
        </button>
      </form>
    </div>
  );
};
export default App;
