import React, { useState, useEffect } from "react";
import { Send, Calendar, Clock, MapPin, User, Mail, Phone } from "lucide-react"; // Using lucide-react for icons
import axiosClient from "../../api/axios";
import { useLocation } from "react-router-dom";

const BookAppointment = () => {
  const location = useLocation();

  // Helper functions for date/time validation
  const getTodayDate = () => {
    const today = new Date();
    // Returns date in YYYY-MM-DD format
    return today.toISOString().split("T")[0];
  };

  const getCurrentTime = () => {
    const now = new Date();
    // Add a 5-minute buffer to ensure a usable time slot is always available now
    now.setMinutes(now.getMinutes() + 5);
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    // Returns time in HH:MM format
    return `${hours}:${minutes}`;
  };

  const todayDate = getTodayDate();

  const [form, setForm] = useState({
    name: "",
    contact_number: "",
    email: "",
    appointment_date: "",
    appointment_time: "",
    appointment_type: "virtual",
    location: "",
  });
  useEffect(() => {
    if (location.state?.appointment_type) {
      setForm((prev) => ({
        ...prev,
        appointment_type: location.state.appointment_type,
      }));
    }
  }, [location.state]);

  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    let newForm = { ...form, [name]: value };

    const minTimeToday = getCurrentTime();

    // Logic to clear time if the newly selected date is today and the existing time is invalid
    if (
      name === "appointment_date" &&
      value === todayDate &&
      newForm.appointment_time &&
      newForm.appointment_time < minTimeToday
    ) {
      newForm.appointment_time = ""; // Clear time if it's in the past for today
    }

    // Logic to clear time if date is changed to a future date but the current time is set to an invalid one
    // This is primarily a safeguard for user experience.
    if (
      name === "appointment_time" &&
      newForm.appointment_date === todayDate &&
      value < minTimeToday
    ) {
      // The HTML input min attribute should prevent submission, but we'll allow the UI to show the invalid selection until submit.
    }

    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setIsSuccess(false);
    setIsSubmitting(true);

    try {
      const res = await axiosClient.post("/api/book-appointment", form);

      setMsg(res.data.message);
      setIsSuccess(true);
      setForm({
        name: "",
        contact_number: "",
        email: "",
        appointment_date: "",
        appointment_time: "",
        appointment_type: form.appointment_type,
        location: "",
      });
    } catch (error) {
      console.error("API Error:", error);
      setMsg("Booking failed. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic minimum time setting for the input field
  const minTimeForInput =
    form.appointment_date === todayDate ? getCurrentTime() : "00:00";

  // Bootstrap classes for the active/inactive toggle buttons
  const activeToggle = "shadow-sm text-white";
  const inactiveToggle = "btn-light border text-dark";

  return (
    // Outer container using Bootstrap utility classes for centering and full height
    <div
      className="d-flex align-items-center justify-content-center bg-light min-vh-100 p-3"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Main card/form container */}
      <div
        className="card shadow-lg p-4 p-md-5 w-100"
        style={{ maxWidth: "500px", borderRadius: "1rem" }}
      >
        <h2 className="text-3xl fw-bold text-center mb-2 text-dark">
          Schedule Consultation
        </h2>
        <p className="text-center text-muted mb-4">
          Select your preferred consultation method and details below.
        </p>

        {/* Appointment Type Toggle (Bootstrap Button Group Style) */}
        <div
          className="btn-group mb-4 w-100"
          role="group"
          style={{ borderRadius: "0.75rem", overflow: "hidden" }}
        >
          <button
            type="button"
            onClick={() => setForm({ ...form, appointment_type: "virtual" })}
            className={`btn btn-lg d-flex align-items-center justify-content-center ${form.appointment_type === "virtual"
                ? activeToggle
                : inactiveToggle
              }`}
            style={{
              borderRadius: "0.75rem 0 0 0.75rem",
              backgroundColor:
                form.appointment_type === "virtual" ? "#0060AC" : "white",
            }}
          >
            <Send size={16} className="me-2" /> Virtual Call
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, appointment_type: "showroom" })}
            className={`btn btn-lg d-flex align-items-center justify-content-center ${form.appointment_type === "showroom"
                ? activeToggle
                : inactiveToggle
              }`}
            style={{
              borderRadius: "0 0.75rem 0.75rem 0",
              backgroundColor:
                form.appointment_type === "showroom" ? "#0060AC" : "white",
            }}
          >
            <MapPin size={16} className="me-2" /> Showroom Visit
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="row g-3">
          {/* Name Input */}
          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 rounded-start-3">
                <User size={20} color="#6c757d" />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="form-control form-control-lg border-start-0 rounded-end-3"
                required
              />
            </div>
          </div>

          {/* Phone Input */}
          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 rounded-start-3">
                <Phone size={20} color="#6c757d" />
              </span>
              <input
                type="tel"
                name="contact_number"
                placeholder="Phone Number"
                value={form.contact_number}
                onChange={handleChange}
                className="form-control form-control-lg border-start-0 rounded-end-3"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 rounded-start-3">
                <Mail size={20} color="#6c757d" />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email Address (Required for Virtual)"
                value={form.email}
                onChange={handleChange}
                className="form-control form-control-lg border-start-0 rounded-end-3"
                required={form.appointment_type === "virtual"}
              />
            </div>
          </div>

          {/* Location Field (Conditional) */}
          <div
            className="col-12"
            style={{
              transition: "all 0.7s ease",
              maxHeight: form.appointment_type === "showroom" ? "100px" : "0",
              opacity: form.appointment_type === "showroom" ? "1" : "0",
              overflow: "hidden",
            }}
          >
            <div className="input-group mt-2">
              <span className="input-group-text bg-light border-end-0 rounded-start-3">
                <MapPin size={20} color="#6c757d" />
              </span>
              <input
                type="text"
                name="location"
                placeholder="Preferred Showroom Location"
                value={form.location}
                onChange={handleChange}
                className="form-control form-control-lg border-start-0 rounded-end-3"
                required={form.appointment_type === "showroom"}
                disabled={form.appointment_type !== "showroom"}
                style={{
                  visibility:
                    form.appointment_type === "showroom" ? "visible" : "hidden",
                  transition: "opacity 0.7s ease",
                }}
              />
            </div>
          </div>

          {/* Date and Time Group */}
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 rounded-start-3">
                <Calendar size={20} color="#6c757d" />
              </span>
              <input
                type="date"
                name="appointment_date"
                value={form.appointment_date}
                onChange={handleChange}
                className="form-control form-control-lg border-start-0 rounded-end-3"
                required
                min={todayDate} // Restrict date to today or later
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 rounded-start-3">
                <Clock size={20} color="#6c757d" />
              </span>
              <input
                type="time"
                name="appointment_time"
                value={form.appointment_time}
                onChange={handleChange}
                className="form-control form-control-lg border-start-0 rounded-end-3"
                required
                min={minTimeForInput} // Dynamically restrict time if date is today
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12 mt-4">
            <button
              type="submit"
              className={`btn btn-lg w-100 shadow text-white ${isSubmitting ? "disabled" : ""
                }`}
              disabled={isSubmitting}
              style={{
                backgroundColor: "#0060AC",
              }}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2 text-white"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Booking...
                </>
              ) : (
                "Confirm Appointment"
              )}
            </button>
          </div>
        </form>

        {/* Message Area */}
        {msg && (
          <div
            className={`mt-4 p-3 rounded-3 text-center fw-medium ${isSuccess ? "alert alert-success" : "alert alert-danger"
              }`}
            role="alert"
          >
            {msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
