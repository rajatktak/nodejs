  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hostelmanagementupes@gmail.com",
      pass: "Rt@123456",
    },
  });

  var mailOptions = {
    from: "hostelmanagementupes@gmail.com",
    to: "rajatktak@gmail.com",
    subject: "Sending Email using Node.js",

    html: "<div style='background-color:#fff;'><h1>Welcome on board</h1></div>",
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);

    } else {
      console.log("Email sent: " + info.response);

    }
  });