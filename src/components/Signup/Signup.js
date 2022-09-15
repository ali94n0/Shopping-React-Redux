import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import signupUser from "../../services/signupService";
import Input from "../common/Input";
import "./signup.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuthAction } from "../../providers/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(3, "Name Length is not Valid"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Require"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(/[0-9]{11}/, "Phone Number is not Valid"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters and Numbers"
    ),
  passwordConfirm: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setAuth = useAuthAction();
  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = { name, email, password, phoneNumber };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      toast.success(`${name}, your account registered.`);
      navigate("/");
    } catch (error) {
      const err = error.response.data.message;
      if (error.response && err) {
        setError(err);
        toast.error(error);
      }
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="formContainer">
      <h2>Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name={"name"} label={"Name"} />
        <Input formik={formik} name={"email"} label={"Email"} />
        <Input
          formik={formik}
          name={"phoneNumber"}
          label={"Phone Number"}
          type={"tel"}
        />
        <Input
          formik={formik}
          name={"password"}
          label={"Password"}
          type={"password"}
        />
        <Input
          formik={formik}
          name={"passwordConfirm"}
          label={"Password Confirmation"}
          type={"password"}
        />
        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
        <Link to={"/signin"}>Already Signup ?</Link>
      </form>
    </div>
  );
};

export default Signup;
