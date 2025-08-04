import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/MainScreen/Home'

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
import PGProfile from './screens/PGProfileScreen';
import PScreen from './screens/PackagesScreen/PScreen';
import Dashboard from './Pages/DashBoard';

import PDetailScreen from './screens/PlanDetailScreen/PDetailScreen';
import ScheduleScreen from './screens/ScheduleScreen/ScheduleScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/VerificationPage" element={<VerificationPage />} />
      <Route path="/error" element={<ErrorPage />} /> 
      <Route path="/ForgotMessage" element={<ForgotPage />} /> 
      <Route path="/CreateNewPassword" element={<CreatePassword />} /> 
      <Route path="/PasswordChanged" element={<PasswordChanged />} /> 
      <Route path="/SearchLocation" element={<SearchLocation />} /> 
      <Route path="/Map" element={<MapScreen />} /> 
      <Route path="/PGL" element={<PhotographerScreen/>} /> 
      <Route path="/PGProfile" element={<PGProfile/>} /> 
      <Route path="/Packages" element={<PScreen/>} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Packages/:planId" element={<PDetailScreen/>} />
      <Route path="/Schedule" element={<ScheduleScreen />} />

    </Routes>
  )
}
