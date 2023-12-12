// popup.js

//import mongoose from "mongoose";

//const RecordSchema = new mongoose.Schema(
//   {
//     company: {
//       type: String,
//       required: true,
//       max: 50,
//     },
//     job: {
//       type: String,
//       required: true,
//       max: 50,
//     },
//     status: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// const Record = mongoose.model("Record", RecordSchema);
document.addEventListener("DOMContentLoaded", function () {
  const companyName = document.getElementById("company-name");
  const positionTitle = document.getElementById("job-title");
  const applicationStatus = document.getElementById("application-status");
  const submitButton = document.getElementById("submitButton");
  const closeButton = document.getElementById("closeButton");
  const modalBody = document.body;

  submitButton.addEventListener("click", function () {
    const company = companyName.value;
    const job = positionTitle.value;
    const status = applicationStatus.value;
    console.log(company, job, status);
    alert(`You entered: ${company}, ${job}, ${status}`);
    console.log(company, job, status);

    const entityData = {
      name: company,
      title: job,
      status: status,
    };

    chrome.runtime.sendMessage({
      action: "addEntity",
      data: entityData,
    });
  });
});
