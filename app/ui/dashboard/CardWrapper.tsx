import { fetchCardData } from "@/app/lib/data";
import { Card } from "./cards";

export default async function CardWrapper() {
  const cardData = await fetchCardData();

  return (
    <>
      <Card
        title="Collected"
        value={cardData.totalPaidInvoices}
        type="collected"
      />
      <Card
        title="Pending"
        value={cardData.totalPendingInvoices}
        type="pending"
      />
      <Card
        title="Total Invoices"
        value={cardData.numberOfInvoices}
        type="invoices"
      />
      <Card
        title="Total Customers"
        value={cardData.numberOfCustomers}
        type="customers"
      />
    </>
  );
}
