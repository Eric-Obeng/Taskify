import React from "react";
// import "./styles.css";

function Footer({ tasks }) {
  const numItems = tasks.length;
  const numCompleted = tasks.filter((item) => item.completed).length;
  const percent = Math.round((numCompleted / numItems) * 100);

  return (
    <div className="footer">
      {percent === 100 ? (
        <p>All Tasks Completed ✅</p>
      ) : (
        <em>
          <p>
            You have {numItems} {numItems <= 1 ? "task" : "tasks"}
          </p>
          <p className="percent">
            You have Completed {numCompleted} ({percent ? percent : "0"}%)
          </p>
        </em>
      )}
    </div>
  );
}

export default Footer;
