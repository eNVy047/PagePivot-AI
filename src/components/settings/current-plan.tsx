import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SubscriptionCard from "../Dialogs/subscriptionCard"

export function CurrentPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
        <CardDescription>Your subscription details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <strong>Plan:</strong> Pro
          </p>
          <p>
            <strong>Billing cycle:</strong> Monthly
          </p>
          <p>
            <strong>Next billing date:</strong> June 1, 2023
          </p>
          <SubscriptionCard>
          <Button className="mt-4">Upgrade Plan</Button>
          </SubscriptionCard>
        </div>
      </CardContent>
    </Card>
  )
}

