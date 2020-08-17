import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";

import validationSchema from "./validationSchema";
import { addHolidays } from "./holidaySlice";

const StyledBox = styled(Box)`
  height: 70px;
`;

const initalState = {
  firstName: "",
  lastName: "",
  unit: "",
  dateFrom: null,
  dateTo: null,
  holidayType: "",
  email: "",
};

const FullWidth = { width: "100%" };

const FormikHolidayForm = (props) => {
  const history = useHistory();

  const handleRedirect = (url) => history.push(url);
  const dispatch = useDispatch();

  const today = new Date();

  const onSubmitHandler = async (values) => {
    const timestamp = Date.now();
    await new Promise((resolve) =>
      setTimeout(() => {
        values.dateFrom = values.dateFrom.getTime();
        values.dateTo = values.dateTo.getTime();
        dispatch(addHolidays(values, timestamp));
        handleRedirect("/bookedHolidays");
        resolve();
      }, 1000)
    );
  };

  const formik = useFormik({
    initialValues: initalState,
    validationSchema: validationSchema,
    onSubmit: onSubmitHandler,
    displayName: "HolidayForm",
  });

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    validateForm,
  } = formik;

  useEffect(() => {
    (() => validateForm())();
  }, [validateForm]);

  return (
    <form onSubmit={handleSubmit}>
      <Flex alignContent="center">
        <StyledBox width={1 / 3} mr={5}>
          <TextField
            style={FullWidth}
            label="Vorname"
            name="firstName"
            values={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName && touched.firstName}
            helperText={
              errors.firstName && touched.firstName ? errors.firstName : null
            }
          />
        </StyledBox>
        <StyledBox width={1 / 3} mr={5}>
          <TextField
            style={FullWidth}
            label="Nachname"
            name="lastName"
            values={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.lastName && touched.lastName}
            helperText={
              errors.lastName && touched.lastName ? errors.lastName : null
            }
          />
        </StyledBox>

        <StyledBox width={1 / 3}>
          <TextField
            style={FullWidth}
            label="e-Mail"
            name="email"
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : null}
          />
        </StyledBox>
      </Flex>
      <Flex>
        <StyledBox width={1 / 2} mr={5}>
          <FormControl
            style={FullWidth}
            error={Boolean(errors.unit && touched.unit)}
          >
            <InputLabel>Abteilung</InputLabel>
            <Select
              name="unit"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.unit}
            >
              <MenuItem value="Digital">Digital</MenuItem>
              <MenuItem value="Vertrieb">Vertrieb</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
            </Select>
            {errors.unit && touched.unit ? (
              <FormHelperText>{errors.unit}</FormHelperText>
            ) : null}
          </FormControl>
        </StyledBox>

        <StyledBox width={1 / 2}>
          <FormControl
            style={FullWidth}
            error={Boolean(errors.holidayType && touched.holidayType)}
          >
            <InputLabel>Art des Urlaubs</InputLabel>
            <Select
              name="holidayType"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.holidayType}
            >
              <MenuItem value="Erholungsurlaub">Erholungsurlaub</MenuItem>
              <MenuItem value="Resturlaub">Resturlaub</MenuItem>
              <MenuItem value="Ausgleich">Ausgleich</MenuItem>
            </Select>
            {errors.holidayType && touched.holidayType ? (
              <FormHelperText>{errors.holidayType}</FormHelperText>
            ) : null}
          </FormControl>
        </StyledBox>
      </Flex>
      <Flex>
        <StyledBox width={1 / 2} mr={5}>
          <FormControl
            style={FullWidth}
            error={Boolean(errors.dateFrom && touched.dateFrom)}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                error={Boolean(errors.dateFrom && touched.dateFrom)}
                style={FullWidth}
                minDate={today}
                margin="normal"
                name="dateFrom"
                label="Startdatum auswählen"
                format="dd/MM/yyyy"
                placeholder="dd/MM/yyyy"
                value={values.dateFrom}
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("dateFrom", e)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            {errors.dateFrom && touched.dateFrom ? (
              <FormHelperText>{errors.dateFrom}</FormHelperText>
            ) : null}
          </FormControl>
        </StyledBox>

        <StyledBox width={1 / 2}>
          <FormControl
            style={FullWidth}
            error={Boolean(errors.dateTo && touched.dateTo)}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                error={Boolean(errors.dateTo && touched.dateTo)}
                minDate={values.dateFrom}
                minDateMessage="Endatum darf nicht vor dem Startdatum liegen"
                margin="normal"
                name="dateTo"
                label="Enddatum auswählen"
                format="dd/MM/yyyy"
                placeholder="dd/MM/yyyy"
                value={values.dateTo}
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("dateTo", e)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            {errors.dateTo && touched.dateTo ? (
              <FormHelperText>{errors.dateTo}</FormHelperText>
            ) : null}
          </FormControl>
        </StyledBox>
      </Flex>
      <Flex justifyContent="center" mt={40}>
        <Button
          disabled={isSubmitting || !formik.isValid}
          variant="contained"
          style={{
            backgroundColor: formik.isValid ? "#003bb3 " : "",
            color: "white",
            width: "30%",
          }}
          onClick={handleSubmit}
        >
          Speichern
        </Button>
        {isSubmitting ? (
          <div style={{ marginLeft: "20px" }}>
            <CircularProgress />
          </div>
        ) : null}
      </Flex>
    </form>
  );
};

export default FormikHolidayForm;
