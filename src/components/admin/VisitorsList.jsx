import React from "react";
import ListItem from "./ListItem";

function VisitorsList({ visitors }) {
  return (
    <table className="table w-full max-h-[500px]">
      <thead>
        <tr>
          <th className="text-center px-1 py-2 bg-black text-white sticky top-0">
            #
          </th>
          <th className="text-left px-1 py-2 bg-black text-white sticky top-0">
            Visitors
          </th>
          <th className=" px-1 py-1 bg-black text-white sticky top-0">
            Manage
          </th>
        </tr>
      </thead>
      <tbody>
        {visitors.length <= 0 ? (
          <tr>
            <td className="text-center pt-5" colSpan="3">
              No visitors.
            </td>
          </tr>
        ) : (
          ""
        )}
        {visitors.map((visitor, index) => {
          return <ListItem key={index} visitor={visitor} index={index} />;
        })}
      </tbody>
    </table>
  );
}

export default VisitorsList;
