import { CurrentPlan } from '@/components/settings/current-plan'
import { PaymentHistory } from '@/components/settings/payment-history'
import { UserDetails } from '@/components/settings/user-details'
import React from 'react'

const Settings = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <UserDetails />
        <CurrentPlan />
        <PaymentHistory />
      </div>
    </div>
  );
}

export default Settings