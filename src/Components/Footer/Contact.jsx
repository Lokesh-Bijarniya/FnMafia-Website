import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setemial] = useState("");
  const [message, setmessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("email:", email);
    console.log("message", message);
    if (!name.trim() || !message.trim()) {
      toast.error("Please enter your name and message");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Enter valid email");
      return;
    }
    const messageData = {
      name: name,
      email: email,
      message: message,
    };
    localStorage.setItem("messageData", JSON.stringify(messageData));
    setName("");
    setemial("");
    setmessage("");
    toastify();
  }
  function toastify() {
    toast.success("Meessage passed successful");
  }
  function validateEmail(inputEmail) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputEmail);
  }
  return (
    <>
      <div className="flex justify-center items-centre gap-5 p-20 w-full h-screen text-white">
        <div className="border-solid border-2 border-black-600  h-full w-4/5 rounded-lg text-white ">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-2">
            <img
              class="mx-auto  h-24 w-28 rounded-full "
              src="https://assets-global.website-files.com/6527fd1691c6b050ff920c18/653637e2851558e8d2eff5b3_The%204%20Benefits%20an%20Internship%20Program%20Can%20Bring%20to%20Your%20Business.webp"
              alt="Your Company"
            />
            <h2 class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Contact us
            </h2>
          </div>

          <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div class="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autocomplete="name"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 h-12"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Emaid id"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 h-12"
                    value={email}
                    onChange={(e) => setemial(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="meesage"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                </div>
                <div class="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Write your messsage"
                    autocomplete="password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 h-24"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-40 h-14 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-24 pt-4"
                  onClick={handleSubmit}
                >
                  Message me
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className=" border-solid border-2 border-blue-800 rounded-lg h-full w-3/5 bg-blue-800 text-white">
          <div className="flex mt-4">
            <div className="h-48 w-48 mt-3">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/addresses-icon.png?d=120x120"
                alt="remote"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-xl">Our Address</h3>
              <p className="text-sm mt-3">
                Delhi Office: FnMafia, Somdutt Chamber 1,5,
                <br /> Bhikaji Cama Place, Rama Krishna Puram, New Delhi 110066.{" "}
                <br /> Registered Office: FnMafia <br />
                c/o FLIVE Consulting Private Limited, <br /> #6317, B9, Vasant
                Kunj, New Delhi - 110070
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="h-48 w-44 mt-2">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/company-icon.png?d=120x120"
                alt="remote"
              />
            </div>
            <div className="mt-2 mr-2">
              <h3 className="text-xl">Company</h3>
              <p className="text-sm mt-6">
                FLIVE Consulting Pvt. Ltd. <br /> GST Number: 07AADCF7366C1ZP{" "}
                <br /> PAN Number: AADCF7366C
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="h-48 w-44 mt-2">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/inquiries-icon.png?d=120x120"
                alt="remote"
              />
            </div>
            <div className="">
              <h3 className="text-xl">Inquries</h3>
              <p className="text-sm">
                Sales Inquiries <br />
                <b>sales@fnmafia.com</b>, +91 9311777388 <br /> (Monday to
                Saturday, 9 AM to 7 PM) <br /> Partnerships <br />{" "}
                partner@fnamfia.com <br />
                Helpdesk and general queriesb<b>support@fnmafia.com</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
