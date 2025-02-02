import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const paymentHistory = [
  { date: "2023-05-01", amount: "$49.99", status: "Paid" },
  { date: "2023-04-01", amount: "$49.99", status: "Paid" },
  { date: "2023-03-01", amount: "$49.99", status: "Paid" },
]

export function PaymentHistory() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
        <CardDescription>Your recent payments</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentHistory.map((payment, index) => (
              <TableRow key={index}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

