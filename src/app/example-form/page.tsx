"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { countries, genders } from "@/components/Form/config";
import Link from "next/link";

interface props {
  submitBtnLable: string;
  title?: string;
  clearForm: () => void;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  age: Yup.number()
    .min(16, "Please enter age greater than 16 ")
    .max(60, "Please enter age less than 60")
    .required("Please enter your age"),
});

const clearForm = () => {
  const form = document.getElementById("signup-form") as HTMLFormElement | null;
  if (form) {
    form.reset();
  }
};

export default ({ submitBtnLable, title }: props) => (
  <div>
    <h3 className="text-center">{title}</h3>
    <Formik
      initialValues={{
        name: "",
        age: "",
        gender: "",
        country: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" placeholder="Name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}

          <Field name="age" type="number" placeholder="Age" />
          {errors.age && touched.age ? <div>{errors.age}</div> : null}

          <Field name="gender" as="select">
            <option value="">Select Gender</option>
            {genders.map((gender) => (
              <option key={gender} value={gender.toLowerCase()}>
                {gender}
              </option>
            ))}
          </Field>
          {errors.gender && touched.gender ? <div>{errors.gender}</div> : null}

          <Field name="country" as="select">
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country.toLowerCase()}>
                {country}
              </option>
            ))}
          </Field>
          {errors.country && touched.country ? (
            <div>{errors.country}</div>
          ) : null}

          <div className="buttons">
            <div className="d-flex flex-row mb-3">
              <div className=" p-3">
                <button type="submit" className="btn btn-primary">
                  {submitBtnLable}
                </button>
              </div>
              <div className="p-3">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={clearForm}
                >
                  CLEAR
                </button>
              </div>
              <div className="p-3 ">
                <Link href="/">
                  <button type="button" className="btn btn-danger">
                    CANCEL
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
