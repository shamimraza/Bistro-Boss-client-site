import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className=" text-[#D1A054]">This Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className=" text-[#D1A054]">
                    This Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">
                    password must be 6 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-[#D1A054] mb-3">
              <small>
                Already registered? <Link to="/login">Go to log in </Link>
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

export default SignUp;