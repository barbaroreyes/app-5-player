import React from 'react'
import LandingPage from './components/LandingPage'
import Amplify from 'aws-amplify';
import awsconfi from './aws-exports';
import {AmplifySignOut,withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfi)
const Authentication = () => {
  
  return (
    <div>
        <AmplifySignOut/>
        <LandingPage/>
    </div>
  )
}

export default withAuthenticator( Authentication);