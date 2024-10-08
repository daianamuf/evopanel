import { useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";

const initialState = {
  inputs: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  },
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case "setInput":
      return {
        ...state,
        inputs: { ...state.inputs, [action.field]: action.value },
      };
    case "setError":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "resetForm":
      return initialState;
    default:
      return state;
  }
}

function Contact() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formKey, setFormKey] = useState(Date.now());

  const validateInput = (id, value) => {
    let error = "";
    switch (id) {
      case "lastName":
      case "firstName":
      case "message":
        if (!value.trim()) {
          error = "Acest câmp este obligatoriu.";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Acest câmp este obligatoriu.";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          error = "Adresa de email nu este validă.";
        }
        break;
      case "phoneNumber":
        if (!value.trim()) {
          error = "Acest câmp este obligatoriu.";
        } else if (!/^(07[0-8]\d{7}|02\d{8}|03\d{8})$/.test(value)) {
          error = "Număr de telefon invalid.";
        }
        break;

      default:
        error = "";
    }
    dispatch({ type: "setError", field: id, error });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: "setInput", field: id, value: value });
    validateInput(id, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isFormValid = true;
    let newErrors = {};

    Object.keys(state.inputs).forEach((key) => {
      const value = state.inputs[key];
      if (!value.trim()) {
        newErrors[key] = "Acest câmp este obligatoriu.";
        isFormValid = false;
      } else {
        if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[key] = "Adresa de email nu este validă.";
          isFormValid = false;
        } else if (
          key === "phoneNumber" &&
          !/^(07[0-8]\d{7}|02\d{8}|03\d{8})$/.test(value)
        ) {
          newErrors[key] = "Număr de telefon invalid.";
          isFormValid = false;
        }
      }
    });

    if (!isFormValid) {
      Object.entries(newErrors).forEach(([field, error]) => {
        dispatch({ type: "setError", field, error });
      });
      return;
    }

    if (Object.values(state.errors).every((error) => error === "")) {
      console.log("Form submitted", state.inputs);
    }

    if (isFormValid) {
      const formData = new FormData(e.target);
      Object.entries(state.inputs).forEach(([key, value]) => {
        formData.append(key, value);
      });
      // CHANGE ACCESS KEY!!! //////////////
      formData.append("access_key", "be6eeaf9-8feb-4de2-be37-79c3273c0ada");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setSubmissionMessage("Mesajul a fost trimis cu succes!");
      } else {
        console.log("Error", res);
        setSubmissionMessage(
          "A apărut o eroare, mesajul nu a putut fi trimis!"
        );
      }

      dispatch({ type: "resetForm" });

      setFormKey(Date.now());

      setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contactați-ne | Evosiding România</title>
        <meta
          name="description"
          content="Contactați echipa Evosiding pentru mai multe informații despre panourile noastre sau pentru a solicita o ofertă. Suntem aici pentru a vă ajuta cu orice întrebare despre proiectele dvs. în București sau România."
        />
        <meta
          name="keywords"
          content="contact Evosiding, panouri sandwich, panouri metalice, panouri case, design case, București, România, oferte construcții, oferte panouri, Evosiding"
        />
      </Helmet>
      <section className="contact">
        <div className="contact__data">
          <p>
            <ion-icon name="mail-outline"></ion-icon> contact@evosiding.ro
          </p>

          <p>
            <ion-icon name="call-outline"></ion-icon> 0727 849 241
          </p>
          <p>
            <ion-icon name="location-outline"></ion-icon> Str. Drumul Morii 7C -
            Mogoșoaia, Ilfov
          </p>
        </div>

        <form className="contact__form" key={formKey} onSubmit={handleSubmit}>
          {state.errors.lastName && (
            <span className="error-message">{state.errors.lastName}</span>
          )}
          <input
            id="lastName"
            type="text"
            placeholder="Nume"
            className="contact__form--input"
            autoComplete="true"
            onChange={handleChange}
          />
          <label htmlFor="lastName" className="contact__form--label">
            Nume
          </label>

          {state.errors.firstName && (
            <span className="error-message">{state.errors.firstName}</span>
          )}
          <input
            id="firstName"
            type="text"
            placeholder="Prenume"
            className="contact__form--input"
            autoComplete="true"
            onChange={handleChange}
          />
          <label htmlFor="firstName" className="contact__form--label">
            Prenume
          </label>

          {state.errors.email && (
            <span className="error-message">{state.errors.email}</span>
          )}
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="contact__form--input"
            autoComplete="true"
            onChange={handleChange}
          />
          <label htmlFor="email" className="contact__form--label">
            Email
          </label>

          {state.errors.phoneNumber && (
            <span className="error-message">{state.errors.phoneNumber}</span>
          )}
          <input
            id="phoneNumber"
            placeholder="Telefon"
            className="contact__form--input"
            autoComplete="true"
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber" className="contact__form--label">
            Telefon
          </label>

          {state.errors.message && (
            <span className="error-message">{state.errors.message}</span>
          )}
          <textarea
            id="message"
            type="text"
            placeholder="Mesaj"
            className="contact__form--input"
            onChange={handleChange}
            rows={10}
          />
          <label htmlFor="message" className="contact__form--label">
            Mesaj
          </label>

          <button type="submit" className="contact__form--btn">
            Trimite
          </button>
          {submissionMessage && (
            <div className="submission-message">{submissionMessage}</div>
          )}
        </form>
      </section>
    </>
  );
}

export default Contact;
