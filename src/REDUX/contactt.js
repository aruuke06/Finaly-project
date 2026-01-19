export function handleSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!fullName || !email || !company || !subject || !message) {
    alert("❌ Please fill in all fields");
    return;
  }

  alert(
    `✅ Message sent successfully!\n
Name: ${fullName}
Email: ${email}
Company: ${company}
Subject: ${subject}
Message: ${message}`
  );

  document.getElementById("contactForm").reset();
}


export function sendEmail() {
  window.location.href = "mailto:zozobekovaaruuke58@gmail.com";
}


export function callPhone() {
  window.location.href = "tel:+996550219237";
}