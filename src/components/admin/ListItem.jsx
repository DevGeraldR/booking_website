import React from "react";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useGlobal } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function ListItem({ visitor, index }) {
  const { setVisitor } = useGlobal();
  const navigate = useNavigate();

  const handleClickRemove = async (tag) => {
    const confirm = window.confirm("Are you sure you want to remove visitor?");
    if (confirm) {
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
    }
  };

  return (
    <tr key={index} className="bg-white border-b border-b-black ">
      <td className="text-center px-2 py-2">{index + 1}</td>
      <td className=" px-2 py-2">{visitor.visitorInfo[0]?.fullName}</td>
      <td className=" px-2 py-2">{visitor.visitorInfo[0]?.companySchoolOrg}</td>
      <td className=" px-2 py-2">{visitor.visitorInfo[0]?.email}</td>
      <td className=" px-2 py-2">{visitor.visitorInfo[0]?.contactNumber}</td>
      <td className=" px-2 py-2">{visitor.scheduledDate}</td>
      <td className=" px-2 py-2">{visitor.scheduledTime}</td>
      <td className="text-center  px-1 py-2">
        <button
          className="text-black hover:text-gray-600"
          onClick={() => {
            setVisitor(visitor);
            navigate("/admin/visitor_information");
          }}
        >
          Full Details
        </button>
        <button
          className="text-red-600 pl-3 hover:text-red-900"
          onClick={() => handleClickRemove(visitor.transactionNumber)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
