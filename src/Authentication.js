import React from 'react'
// import HomePage from './components/HomePage'
import Amplify from 'aws-amplify';
import awsconfi from './aws-exports';
import {AmplifySignOut,withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfi)
const Authentication = () => {
  
  return (
    <div>
        <AmplifySignOut/>
        hello
      {/* <HomePage/> */}
    </div>
  )
}

export default withAuthenticator( Authentication);