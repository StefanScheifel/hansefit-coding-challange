import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Vorname ist ein Pflichtfeld!"),
  lastName: Yup.string().required("Nachname ist ein Pflichtfeld!"),
  unit: Yup.string().required("Abteilung ist ein Pflichtfeld!"),
  dateFrom: Yup.date().required("Color is required!"),
  dateTo: Yup.date("Invalides Datums Format ").required("Color is required!"),
  holidayType: Yup.string().required("Art des Urlaubs ist ein Pflichtfeld!"),
  email: Yup.string()
    .email("Bitte geben sie eine valide Email ein")
    .required("Email ist ein Pflichtfeld"),
});

export default validationSchema;
