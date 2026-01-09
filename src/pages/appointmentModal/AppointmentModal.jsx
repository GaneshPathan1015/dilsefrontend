import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./AppointmentModal.module.css";

const AppointmentModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // If modal not open, do not render anything
  if (!isOpen) return null;

  const handleAppointmentType = (type) => {
    onClose(); // Close modal
    navigate("/book-appointment", { state: { appointment_type: type } }); // Navigate
  };

  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.overlay2} />
        <div className={styles.content}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={28} />
          </button>

          <div className={styles.subtitle}>Tailored to You</div>
          <h1 className={styles.title}>Virtual or In-Person</h1>

          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={() => handleAppointmentType("virtual")}
            >
              Virtual Appointment
            </button>

            <button
              className={styles.button}
              onClick={() => handleAppointmentType("showroom")}
            >
              Showroom Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal into body to avoid z-index issues
  return ReactDOM.createPortal(modalContent, document.body);
};

export default AppointmentModal;
