import React from "react";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useGlobal } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function ListItem({ visitor, index }) {
  const { setVisitor } = useGlobal();
  const navigate = useNavigate();
  const handleClickRemove = async (tag) => {
    const userRef = doc(db, "visitors", tag);
    const timeRef = doc(
      db,
      "bookDetails",
      visitor.scheduledDate,
      "bookTime",
      visitor.scheduledTime
    );

    await deleteDoc(userRef);

    const docSnap = await getDoc(timeRef);

    if (docSnap.exists()) {
      await updateDoc(timeRef, {
        visitorsNumber:
          docSnap.data().visitorsNumber - visitor.visitorInfo.length,
      });
    }

    alert("Admin sucessfully deleted");
  };

  return (
    <tr
      key={index}
      className="bg-white hover:bg-gray-100 border-b border-b-black cursor-pointer"
      onClick={() => {
        setVisitor(visitor);
        navigate("/admin/visitor_information");
      }}
    >
      <td className="text-center  px-1 py-2">{index + 1}</td>
      <td className=" px-1 py-2">{visitor.visitorInfo[0].fullName}</td>
      <td className="text-center  px-1 py-2 ">
        <button
          className="text-red-600"
          onClick={() => handleClickRemove(visitor.transactionNumber)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
