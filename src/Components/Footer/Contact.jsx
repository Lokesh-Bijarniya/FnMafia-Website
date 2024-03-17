import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Contact() {
  function handleSubmit(e) {
    alert("Thanks we will contact soon");
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">Contact Us</h1>
      <form id="contact" onSubmit={handleSubmit}>
        <div>
          <input
            id="user"
            name="user"
            type="text"
            autocomplete="current-password"
            required
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mt-6"
            placeholder="Enter Name"
          />
          <input
            id="number"
            type="number"
            autocomplete="current-password"
            required
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 mt-6 mb-6"
            placeholder="Enter Mob. No."
          />
        </div>
        <div className="mx-7">
          <Button variant="contained" size="medium" type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Submit
          </Button>
        </div>
      </form>
      
    </div>
  );
}
