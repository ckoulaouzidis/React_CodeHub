import React from "react";
import { Link } from "react-router-dom";

const CourseTableItem = ({ id, title, open, price, dates }) => {
  const { normal } = price;
  const { start_date, end_date } = dates;

  return (
    <tr>
      <td>{ title }</td>
      <td>{ open ? "YES" : "NO" }</td>
      <td>{ normal } €</td>
      <td>{ start_date } ---- { end_date }</td>
      <td className="has-text-right">
        <Link to={`/course/${id}`} className="btn btn-warning btn-xs pull-right rounded " >View details</Link>
      </td>
    </tr>
  );
};

export default CourseTableItem;
