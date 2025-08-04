// import React from "react";
// import { Link } from "react-router-dom";
// import InputField from "../../Components/InputFeild/InputField";
// import SocialButton from "../../components/SocialButton";
// import Button from "../../components/Button/Button";

// import GoogleIcon from "../../assets/icons/GoogIeIcon";
// import FacebookIcon from "../../assets/icons/FaceBook";
// import MailIcon from "../../assets/icons/MailIcon";
// import PasswordLock from "../../assets/icons/PasswordLock";
// import PasswordShowIcon from "../../assets/icons/PasswordShowIcon";
// import ProfileIcon from "../../assets/icons/ProfileIcon";

// import "../../styles/SignInContent.css";

// export default function SignUpContent({
//   showPassword,
//   togglePassword,
//   handleSubmit,
//   handleChange,
//   formData,
//   handleGoogleLogin,
//   handleFacebookLogin,
//   errors,
// }) {
//   const iconProps = {
//     width: "20",
//     height: "20",
//     color: "#807A7A",
//   };

//   const showPasswordInstructions = formData.password.length > 0;

//   const isFormValid =
//     formData.name &&
//     formData.email &&
//     formData.password &&
//     formData.confirmPassword &&
//     !errors.password &&
//     !errors.confirmPassword;

//   return (
//     <div className="signin-content">
//       <h2 className="signin-heading">Sign Up</h2>

//       <form className="signin-form" onSubmit={handleSubmit} noValidate>
//         {/* Name Field */}
//         <div className="input-wrapper">
//           <InputField
//             type="text"
//             name="name"
//             placeholder="Your full name"
//             value={formData.name}
//             onChange={handleChange}
//             leftIcon={<ProfileIcon {...iconProps} />}
//             required={required} 
//           />
//         </div>

//         {/* Email Field */}
//         <div className="input-wrapper">
//           <InputField
//             type="email"
//             name="email"
//             placeholder="abc@email.com"
//             value={formData.email}
//             onChange={handleChange}
//             leftIcon={<MailIcon {...iconProps} />}
//             required={required} 
//           />
//         </div>

//         {/* Password Field */}
//         <div className="input-wrapper">
//           <InputField
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Create password"
//             value={formData.password}
//             onChange={handleChange}
//             leftIcon={<PasswordLock {...iconProps} />}
//             rightIcon={
//               <span className="toggle-password" onClick={togglePassword}>
//                 {showPassword ? (
//                   <PasswordShowIcon {...iconProps} />
//                 ) : (
//                   <i className="bi bi-eye"></i>
//                 )}
//               </span>
//             }
            
//           />
//           {errors?.password && (
//             <p className="error-text">{errors.password}</p>
//           )}
//         </div>

//         {/* Password Instructions */}
//         {showPasswordInstructions && (
//           <div className="password-instruction">
//             <ul>
//               <li>At least 8 characters</li>
//               <li>1 uppercase & 1 lowercase letter</li>
//               <li>1 number & 1 special character</li>
//             </ul>
//           </div>
//         )}

//         {/* Confirm Password Field */}
//         <div className="input-wrapper">
//           <InputField
//             type={showPassword ? "text" : "password"}
//             name="confirmPassword"
//             placeholder="Confirm password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             leftIcon={<PasswordLock {...iconProps} />}
//             required
//           />
//           {errors?.confirmPassword && (
//             <p className="error-text">{errors.confirmPassword}</p>
//           )}
//         </div>

//         {/* Sign Up Button */}
//         <Button
//           variant="filled"
//           type="submit"
//           onClick={handleSubmit}
//           className="full-width signin-left"
//           disabled={!isFormValid}
//         >
//           Sign Up
//         </Button>

//         {/* OR Separator */}
//         <div className="or-separator">
//           <div className="line-left"></div>
//           <span>OR</span>
//           <div className="line-right"></div>
//         </div>

//         {/* Social Buttons */}
//         <SocialButton
//           type="button"
//           icon={<GoogleIcon {...iconProps} />}
//           text="Continue with Google"
//           onClick={handleGoogleLogin}
//         />

//         <SocialButton
//           type="button"
//           icon={<FacebookIcon {...iconProps} />}
//           text="Continue with Facebook"
//           onClick={handleFacebookLogin}
//         />

//         {/* Link to Sign In */}
//         <p className="signup-prompt">
//           Already have an account?{" "}
//           <Link to="/signin" className="signUp-link">
//             Sign In
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// } 