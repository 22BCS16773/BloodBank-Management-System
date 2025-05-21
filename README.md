# 🩸 BloodBuddy - Blood Bank Management System

BloodBuddy is a web-based blood donation and management platform designed to bridge the gap between blood donors and recipients. It simplifies the process of blood donation, request, and appointment scheduling through a user-friendly interface.

---

## 🚀 Features

- 🔐 **User Authentication** – Signup and Login system using Mock API
- 💉 **Donate Blood Form** – Collects personal and medical info with eligibility check
- 🔎 **Request Blood** – Allows users to request specific blood groups
- 📅 **Appointment Booking** – Donors receive email confirmations with date/time
- 📬 **Email Notification System** – Email integration for registration and appointment alerts
- 🧠 **Age Verification** – Prevents underage users from donating
- 🧾 **Clean UI** – Homepage with health facts, donation reasons, and CTA buttons
- 📱 **Responsive Design** – Works on various devices
- 📂 **Modular Codebase** – Clean and separated JS for login, signup, donation, appointment

---

## 🛠️ Tech Stack

| Frontend         | Backend/API       | Tools & Services        |
|------------------|-------------------|--------------------------|
| HTML5, CSS3, JS  | MockAPI (REST)    | Elastic Email (SMTP)    |
| Bootstrap/Custom | JS Event Handling | Git, GitHub              |
| Font Awesome     | Form Validation   |                         |

---

## 📸 Screenshots

> Add screenshots or GIFs of:
- Homepage
- Donation Form
- Email Confirmation
- Appointment Page

---

## 📂 Project Structure

BloodBuddy/
│
├── index.html # Homepage
├── donate.html # Donation form (with age & medical check)
├── login.html / signup.html # Authentication
├── appointment.js # Email scheduling system
├── login.js / signup.js # User handling & form validation
├── donate.js # Eligibility logic
├── css/ # Styling folder
└── images/ # Image assets

---

## 🧠 How It Works

- Users sign up → receive confirmation email
- Eligible users (18+) can fill out donation form
- Appointments can be scheduled → donors get email alerts
- Admin/staff can later access & fulfill requests

---

## 📬 Email Integration

The system uses **Elastic Email SMTP** to send:
- 📥 Signup confirmation
- 📆 Appointment scheduling

---

## 🛡️ Security Note

🚨 **Do not expose your SMTP credentials in production**. Use environment variables or secure backends.

---

## 🧪 Future Improvements

- 🧾 Admin Dashboard
- 🧬 Search by blood group/location
- 🧠 Smart Matching Algorithm
- ☁️ Backend with Node.js + MongoDB
- 📱 PWA support

---

## 🙌 Author

👤 **Deepanshu Negi**  
📧 [22bcs16773@cuchd.in](mailto:22bcs16773@cuchd.in)  
🔗 [LinkedIn](https://www.linkedin.com/in/deepanshu-negi-687a70251/)

---

## ❤️ Donate Blood, Save Lives

> *“Blood Donation Costs You Nothing, But It Can Mean the World to Someone in Need.”*

