import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// aos
import AOS from 'aos'
import 'aos/dist/aos.css'


// components
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Offer from '../../components/Offer/Offer'
import Etraining from '../../components/Etraining/Etraining'
import Knowledge from '../../components/Knowledge/Knowledge'
import News from '../../components/News/News'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import AlertPrivacy from '../../UI/AlertPrivacy/AlertPrivacy'



const App = () => {

  // privacy policy permission
  const [permissionPrivacyPolicy, setPermissionPrivacyPolicy] = useState(true)

  useEffect(() => {
    const permissionForPrivacyPolicy = localStorage.getItem("PRIVACY_POLICY_PERMISSION")
    if (permissionForPrivacyPolicy !== "true") {
      setPermissionPrivacyPolicy(false)
    }
  }, [])

  const setPermission = () => {
    localStorage.setItem("PRIVACY_POLICY_PERMISSION", true)
    setPermissionPrivacyPolicy(true)
  }


  // aos
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])


  return (
    <BrowserRouter>
      <Nav path='/' />
      <Switch>
        <Route path='/home' render={props => <Home {...props} />} />
        <Route path='/about' render={props => <About {...props} />} />
        <Route path='/offer' render={props => <Offer {...props} />} />
        <Route path='/etraining' render={props => <Etraining {...props} />} />
        <Route path='/knowledge' render={props => <Knowledge {...props} />} />
        <Route path='/news' render={props => <News {...props} />} />
        <Route path='/contact' render={props => <Contact {...props} />} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Redirect to='/home' />
      </Switch>
      <Footer path='/' />
      {permissionPrivacyPolicy ? null : <Route path='/' render={props => <AlertPrivacy {...props} click={setPermission} />} />}
    </BrowserRouter>
  );
}


export default App;
