// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './screens/MainScreen/Home';
import VerificationPage from './screens/VarificatonScreen/VerificationPage';
import ErrorPage from './screens/ErrorScreen/ErrorPage';
import SignUp from './screens/SignupScreen/SignUp';
import SignIn from './screens/SignInScreen/SignIn';
import ForgotPage from './screens/ForgotScreen/ForgotPage';
import CreatePassword from './screens/CreateNPScreen/CreatePassword';
import PasswordChanged from './screens/PasswordChanged/PasswordChanged';
import SearchLocation from './screens/SearchLocationScreen/SearchLocation';
import MapScreen from './screens/MapScreen/MapScreen';
import PhotographerScreen from './screens/PGScreen';
import PScreen from './screens/PackagesScreen/PScreen';
import Dashboard from './Pages/DashBoard';
import PDetailScreen from './screens/PlanDetailScreen/PDetailScreen';

// Route Guards
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import PGProfileContent from './screens/PGProfileScreen/PGProfileContent';
import CircleCardDetail from './screens/CircleCardDetail';
import ConfirmBookingDetail from './screens/ConfirmBookingDetailScreen/ConfirmBookingDetail';
import UserProfileScreen from './screens/UserProfileScreen/UserProfileScreen';

export default function App() {
  return (
    <Routes>
      {/*  Public-only routes (including Home) */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/VerificationPage" element={<VerificationPage />} />
        <Route path="/ForgotMessage" element={<ForgotPage />} />
        <Route path="/CreateNewPassword" element={<CreatePassword />} />
        <Route path="/PasswordChanged" element={<PasswordChanged />} />
        <Route path="/error" element={<ErrorPage />} />
      </Route>

      {/*  Private-only routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/SearchLocation" element={<SearchLocation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Map" element={<MapScreen />} />
        <Route path="/PGL" element={<PhotographerScreen />} />
        <Route path="/PGProfile/photographer/:id" element={<PGProfileContent/>} />
        <Route path="/Packages" element={<PScreen />} />
        <Route path="/Packages/:planId" element={<PDetailScreen />} />
        <Route path="/Paymentdetailcard" element={<CircleCardDetail/>} />
        <Route path="/ConfirmBookingDetail" element={<ConfirmBookingDetail/>} />
        <Route path="/UserProfile" element={<UserProfileScreen/>} />
      </Route>

      {/*  Catch-all route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
