import { useContext, useEffect, useState } from "react";
import "./Login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import loginImg from "../../assets/others/authentication1.png";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";
  console.log("state in the login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "logged in success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Log In</title>
      </Helmet>
      <div className="hero min-h-screen  login">
        <div className="hero-content  flex-col justify-between md:flex-row-reverse">
          <div className="text-center md:w-1/2 flex-1 lg:text-left">
            <img className="w-[648px] h-[600px]" src={loginImg} alt="" />
          </div>
          <div className="card md:w-1/2 flex-1  max-w-sm shadow-2xl ">
            <h2 className="text-3xl text-center font-bold"> Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center text-[#D1A054] mb-3">
              <small>
                New here? <Link to="/signup">Create a New Account</Link>
              </small>
            </p>
            <p className="text-center">Or sign in with</p>
            <div className="flex justify-center text-3xl mt-4 gap-7 mb-5">
              <button>
                <FaGithub></FaGithub>
              </button>
              <button>
                <FaGoogle></FaGoogle>
              </button>
              <button>
                <FaFacebook></FaFacebook>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
