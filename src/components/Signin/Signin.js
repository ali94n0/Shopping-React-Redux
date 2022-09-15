import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useAuthAction } from "../../providers/AuthProvider";
import signinUser from "../../services/signinService";
import Input from "../common/Input";
import "../Signup/signup.css";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Require"),
  password: Yup.string().required("Password is Required"),
});

const Signin = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setAuth = useAuthAction();
  const onSubmit = async (values) => {
    try {
      const { data } = await signinUser(values);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      toast.success(`welcome, ${data.name} !`);
      navigate("/");
    } catch (error) {
      const err = error.response.data.message;
      if (error.response && err) {
        setError(err);
        toast.error(err);
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
      <h2>Login Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name={"email"} label={"Email"} />
        <Input
          formik={formik}
          name={"password"}
          label={"Password"}
          type={"password"}
        />
        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
        <Link to={"/signup"}>Not Signup yet ?</Link>
      </form>
    </div>
  );
};
export default Signin;
