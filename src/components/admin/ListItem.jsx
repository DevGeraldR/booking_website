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
    <tr key={index} className="bg-white border-b border-b-black ">
      <td className="text-center  px-1 py-2">{index + 1}</td>
      <td className=" px-1 py-2">{visitor.visitorInfo[0].fullName}</td>
      <td className="text-center  px-1 py-2">
        <button
          className="text-black"
          onClick={() => {
            setVisitor(visitor);
            navigate("/admin/visitor_information");
          }}
        >
          open
        </button>
        <button
          className="text-red-600 pl-3"
          onClick={() => handleClickRemove(visitor.transactionNumber)}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
