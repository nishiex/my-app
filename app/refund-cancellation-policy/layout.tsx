import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "ARCADELX refund and cancellation terms for orders and bookings of our motion-sensing gaming kiosks.",
  alternates: {
    canonical: "/refund-cancellation-policy",
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
