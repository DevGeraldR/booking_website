import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TermsAndCondition() {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-5 bg-gray-100">
      <div className="lg:w-3/5 bg-white shadow-lg p-10">
        <div className="text-xl">Terms And Condition</div>
        <div className="w-[100px] h-0.5 bg-black my-5"></div>
        <article>
          <br />
          <h2 className="text-lg">1. Introduction</h2>
          <div className="px-10">
            <p>
              (a) Bookings made through our website, and our and your rights and
              obligations in relation to such bookings, are governed by this
              terms and conditions.
              <br />
              (b) You will be asked to give your express agreement to these
              terms and conditions before you place a schedule on our website.
              <br />
              (c) This document does not affect any statutory rights you have as
              a consumer.
              <br />
            </p>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">2. Interpretation</h2>
          <p>In this terms and conditions:</p>
          <div className="px-10">
            <p>
              (a) “MPPMNGPL” means Mts. Palay-Palay/Mataas na Gulod Protected
              Landscape <br />
              (b) “PAMB” refers to Protected Area Management Board; <br />
              (c) “you” refers to our visitors/tourists/guests under these terms
              and conditions; <br />
              (d) “booking” means a secured schedule/reservation on our calendar
              for activities to be made inside MPPMNGPL; and <br />
              (e) “force majeure event” refers to an event that is, or a series
              of related events that are, beyond our reasonable control. <br />
            </p>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">3. Order process</h2>

          <div className="px-10">
            <article>
              (a) The advertising of bookings on our website constitutes an
              “invitation to treat” rather than a contractual offer. <br />
              (b) No contract will come into force between you and MPPMNGPL
              unless and until we have verified and accepted your reservation in
              accordance with the procedure provided in this section.
              <br />
              (c) To make a booking through our website, the following steps
              must be taken: <br />
              <div className="ml-10">
                <p>
                  (a) Click on the “visit us” tab on the website;
                  <br />
                  (b) Select an available date from the calendar;
                  <br />
                  (c) Fill out information once and every additional person;
                  <br />
                  (d) You agree on these terms and conditions;
                  <br />
                  (e) Click “proceed to payment”.
                  <br />
                  (f) You will be redirected to our payment merchant’s website;{" "}
                  <br />
                  (g) Complete payment on your chosen method according to the
                  available options;
                  <br />
                  (h) You will receive a booking confirmation; or
                  <br />
                  (i) We will notify you if the payment or booking was
                  unsuccessful.
                  <br />
                </p>
              </div>
              (d) Be careful in your information input as the records will have
              your information placed in the system and the only way to correct
              the input is by calling the PENRO Office three (3) days prior to
              your scheduled visit. Anyone not listed in our system will be
              denied entry.
              <br />
            </article>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">4. Schedule of Fees</h2>
          <p>
            Fees collected are under the guidelines of DENR Department
            Administrative Order (DAO) and Technical Bulletins (TBs) issued for
            Protected Areas. Fees are classified into two (2):
          </p>
          <div className="px-10">
            <article>
              (a) Online fees <br />
              The website will be automatically charge two hundred (200) pesos
              per visitor inclusive of the following:
              <br />
              <div className="ml-10">
                <p>
                  (a) Entrance to MPPMNGPL;
                  <br />
                  (b) Hiking fee; <br />
                  (c) Parking fee; and
                  <br />
                  (d) Use of facilities (except picnic tables.
                  <br />
                  (e) Fees collected by the website will automatically deduct
                  tax exemptions, as needed.
                  <br />
                </p>
              </div>
              (b) On-site Fees
              <div className="ml-10">
                <p>
                  (a) Mandatory Eco-guide fee is five hundred (500) pesos for a
                  maximum ratio of 1:5. Anything in excess shall incur an
                  additional Eco-guide;
                  <br />
                  (b) Any violations of the existing House Rules will incur
                  fines; and
                  <br />
                  (c) Fines and penalties incurred by violation of any existing
                  environmental laws that may also involve criminal charges.
                  <br />
                </p>
              </div>
            </article>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">5. Variation of Booking</h2>
          <div className="px-10">
            <p>
              (a) Minimum time of booking
              <br />
              Bookings can be made for as close as one (1) week before the
              chosen date for as long as the schedule is available. Canceled
              bookings that are less than one (1) week after its cancellation
              will not open up and will remain closed in the system.
              <br />
              (b) Maximum time of booking <br />
              Bookings can be made in advance for up to three (3) months for as
              long as the schedule is available. Canceled bookings that are not
              less than one (1) week will be available to be booked again.{" "}
              <br />
            </p>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">6. Cancellation of booking by us</h2>
          <p>We may cancel a booking under these terms and conditions:</p>
          <div className="px-10">
            <article>
              (a)Any force majeure for which the park will close for safety
              reasons
              <br />
              <div className="ml-10">
                <p>
                  i. Earthquake;
                  <br />
                  ii. Tropical storm;
                  <br />
                  iii. Forest fire; and
                  <br />
                  iv. Landslide <br />
                </p>
              </div>
              (b) Any circumstance for which the park cannot be opened to the
              public and/or halts its operation at any given time:
              <div className="ml-10">
                <p>
                  i. Rescue operation;
                  <br />
                  ii. Accidents that may require full use of the trail and
                  attention of the staff;
                  <br />
                  iii. Military operations;
                  <br />
                  iv. Government policy;
                  <br />
                  v. Imposed Moratorium; and
                  <br />
                  vi. Seasonal Moratorium <br />
                </p>
              </div>
              (c) We will give you a written notice of the cancellation by the
              email you have provided.
              <br />
              (d) If we cancel any bookings in accordance with this section, you
              will be entitled to a full refund of the price paid under that
              contract.
              <br />
            </article>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">7. Cancellation made by you</h2>
          <div className="px-10">
            <p>
              (1) Any rights you may have under this section are additional to
              your statutory rights. <br />
              (2) You may cancel a booking under these terms and conditions:
            </p>
            <div className="px-10">
              <article>
                Cancellations can be done only if it will be re-booked on a
                different schedule, and only if it is:
                <br />
                <div className="ml-10">
                  <p>
                    i. One (1) week prior to the schedule; and
                    <br />
                    ii. The schedule is open for booking.
                    <br />
                  </p>
                </div>
              </article>
            </div>
            <p>
              (3) Any cancellation with no re-book processed will be subject to
              a Partial Refund for which a 30% cancellation fee will be deducted
              to the full booking price to cover for the transfer fees incurred
              as payment to our online payment merchant and bank fees.
              <br />
              (4) Changes in any information submitted during online reservation
              can be only made once by contacting the PENRO Office (see the
              ABOUT US section) and any succeeding changes shall incur a fee in
              the sum of one hundred (100) pesos per information changed.
              <br />
              (5) As provided in this section, otherwise specified elsewhere in
              these terms and conditions or mandated by law, you will not
              receive any refund upon the cancellation of a booking under these
              terms and conditions. <br />
            </p>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">
            8. Limitations and exclusions of liability
          </h2>
          <p>In this terms and conditions:</p>
          <div className="px-10">
            <p>
              (a) You acknowledge that you are entering a Protected Area that is
              governed by existing laws.
              <br />
              (b) You acknowledge that there will be a House Rules that will be
              made known to you upon your arrival to the park, and will require
              you to sign a waiver and assumption of risks.
              <br />
              (c) You acknowledge and accept that any violation to existing
              environmental laws has a penalty, and may subject you to criminal
              charges that will be enforced by the authorities inside the park.
              <br />
            </p>
          </div>
        </article>
        <article>
          <br />
          <h2 className="text-lg">9. Law and jurisdiction</h2>
          <p>In this terms and conditions:</p>
          <div className="px-10">
            <p>
              (1) In accordance with the NIPAS Act of 1992 (RA 7586) as amended
              by E-NIPAS Law of 2018 (RA 11038) Section 11-A (g), the PAMB has
              the power to “Set fees and charges with existing guidelines.”
              <br />
              (2) RA 11038, Sec 11-B (f) the PASu has the power to “Enforce the
              laws, rules and regulations relevant to the protected area,
              commence and institute administrative and legal actions in
              collaboration with other government agencies or organizations, and
              assist in the prosecution of offenses committed in violation of
              this act.” <br />
            </p>
          </div>
          <br />
        </article>

        <label>
          <input
            type="checkbox"
            checked={!isDisabled}
            onChange={(e) => setIsDisabled(!isDisabled)}
          />
          <span className="pl-2">I agree to the Terms And Condition</span>
        </label>
      </div>
      <div className="items-end gap-4">
        <button
          type="button"
          className="inline-flex rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => {
            navigate("/input_information");
          }}
        >
          Back
        </button>
        <button
          className={`${
            isDisabled
              ? "bg-gray-300 text-gray-900 cursor-not-allowed"
              : "bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500"
          } inline-flex justify-center rounded-md border border-transparent px-4 py-2 m-5 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
          disabled={isDisabled}
          onClick={() => navigate("/receipt")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default TermsAndCondition;
