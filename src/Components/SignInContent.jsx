// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"
// import googleIcon from "../assets/google.png"
// import facebookIcon from "../assets/facebook.png"

// export default function SignInContent() {
//   const [showPassword, setShowPassword] = useState(false)

//   const togglePassword = () => {
//     setShowPassword((prev) => !prev)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Sign in form submitted")
//   }

//   return (
//     <div className="signin-left">
//       <h2 className="signin-heading">Sign In</h2>
//       <form className="signin-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <FaEnvelope className="icon" />
//           <input type="email" placeholder="abc@email.com" required />
//         </div>

//         <div className="form-group password-group">
//           <FaLock className="icon" />
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Your password"
//             required
//           />
//           <span className="toggle-password" onClick={togglePassword}>
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>

//         <div className="form-options">
//           <label>
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>{" "}
//             Remember me
//           </label>
//           <Link to="#">Forgot Password?</Link>
//         </div>

//         <button className="primary-btn full-width" type="submit">
//           Sign In
//         </button>

//         <div className="or-separator">
//           <div className="line"></div>
//           <span>OR</span>
//           <div className="line"></div>
//         </div>

//         <a href="#" className="social-btn">
//           <img src={googleIcon} alt="Google" />
//           Continue with Google
//         </a>

//         <a href="#" className="social-btn">
//           <img src={facebookIcon} alt="Facebook" />
//           Continue with Facebook
//         </a>

//         <p className="signup-prompt">
//           Don’t have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   )
// }
