
# Privacy Policy

**Effective Date:** [03 Jul 2026]
**Version:** 1.1.1

Madhava Global ("we", "us", "our") operates NetBill ("the App"), a restaurant management and billing platform for hotel and restaurant owners in India. This Privacy Policy explains what information we collect through the App, how we use it, who we share it with, and the choices and rights available to you. By creating an account or using the App, you agree to the practices described here.

## 1. Who This Policy Covers

This Policy applies to two categories of individuals:

- **Business Users** — restaurant/hotel owners and their staff who register on NetBill to manage billing and operations.
- **End Customers** — diners whose order or contact details a Business User may enter into the App while taking an order or generating a bill.

If you are an End Customer and have questions about how a specific restaurant handles your data, please contact that restaurant directly, as they act as the data controller for the customer records they enter.

## 2. Information We Collect

| Category | Examples | When Collected |
|---|---|---|
| Account Credentials | Mobile number, chosen username, password (stored as a secure hash, never in plain text) | At sign-up |
| Business Profile | Restaurant/hotel name, logo image, address, contact phone number, UPI ID (for the payment QR shown on receipts) | After registration, during business setup |
| Menu Data | Menu item names, prices, and item images | Ongoing, as you manage your menu |
| Billing & Order Data | Table numbers, order items, quantities, receipt totals, GST/tax values | Ongoing, during daily use |
| Subscription Payment Proof | Payment screenshot and transaction/UTR ID you submit after paying via the displayed UPI QR code | When you purchase or renew a plan |
| Device & Diagnostic Data | App version, device model, OS version, crash logs (if any) | Automatically, for stability and support |

We do not collect card numbers, bank account numbers, or CVV/OTP data. NetBill does not use a third-party payment gateway; subscription payments are made by you directly via UPI using a displayed QR code, and you separately upload a screenshot and transaction/UTR ID for manual verification by our team.

## 3. Permissions We Request on Android

NetBill only requests device permissions that are directly tied to a feature you use. We never request permission for a feature you have not accessed.

| Permission | Purpose | Data Retained? |
|---|---|---|
| Bluetooth (Connect / Scan) | Discover and connect to the thermal receipt printer used for billing. | No — used only for the live connection session. |
| Location (used only for Bluetooth device discovery) | Required by Android OS to discover nearby Bluetooth devices. NetBill does not read, store, or transmit GPS coordinates. | No — never logged or stored. |
| Storage / Media Images | Select an existing photo (menu image, logo, or payment screenshot) from your device's gallery to upload. NetBill does not access the device camera directly. | Only the selected file is uploaded; no other files are accessed. |
| Internet | Communicate with our backend server to sync orders, menu, and account data. | N/A — required for core app function. |

## 4. How We Use Your Information

- To create and secure your account and authenticate logins.
- To operate core billing features: generating receipts, calculating totals and taxes, printing via Bluetooth thermal printers, and managing your menu.
- To display your business's UPI QR code on customer receipts, exactly as configured by you.
- To verify subscription/plan payments you submit and activate your plan.
- To provide customer support and respond to your requests.
- To maintain, secure, and improve the App, including diagnosing crashes and bugs.
- To comply with legal obligations, including tax, accounting, and law enforcement requests where legally required.

We do not sell your personal data, and we do not use your business or customer data for third-party advertising.

## 5. Third-Party Service Providers

We use the following infrastructure providers to operate NetBill. Each provider only receives the specific data needed to perform its function, and each maintains its own security and privacy practices.

| Service Provider | What We Share | Purpose |
|---|---|---|
| Cloudinary | Restaurant/hotel logo images | Image hosting and delivery for your business profile |
| Backblaze B2 (via Cloudflare) | Menu item images | Image hosting and delivery for your menu |
| MongoDB (database host) | Account, business, menu, and order records | Primary application database |
| Backend hosting provider (Spring Boot server host) | All application data in transit | Runs the core NetBill backend and API |

These providers are contractually/technically restricted to using the data solely to provide their service to us and are not permitted to use it for their own purposes.

## 6. Data Storage & Security

- Application data (accounts, business profiles, menus, orders, billing records) is stored in a MongoDB database accessed exclusively through our Spring Boot backend.
- Passwords are never stored in plain text; they are hashed before storage.
- Data in transit between the App and our servers is encrypted (HTTPS/TLS).
- Access to production data is restricted to authorized personnel on a need-to-know basis.

While we take reasonable technical and organizational measures to protect your data, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.

## 7. Data Retention

- Account and business data is retained for as long as your account remains active.
- If you request account deletion, we will delete or anonymize your personal data within 30 days, except where retention is required by law (for example, tax or billing records that Indian law requires businesses to retain for a minimum period).
- Payment verification screenshots are retained only for the period necessary to verify and audit the transaction, after which they are deleted.

## 8. Your Rights

Under India's Digital Personal Data Protection Act, 2023, and as a matter of our own policy, you have the right to:

- Access the personal data we hold about you.
- Correct inaccurate or incomplete data.
- Request deletion of your account and associated personal data, subject to legal retention requirements.
- Withdraw consent for optional data processing at any time (this may limit certain features).
- Lodge a complaint with our Grievance Officer (Section 12) if you believe your data has been mishandled.

To exercise any of these rights, contact us using the details in Section 13.

## 9. Children's Privacy

NetBill is a business tool intended for use by restaurant owners, managers, and staff who are 18 years of age or older. We do not knowingly collect personal data from children. If we learn that a child's data has been submitted without appropriate consent, we will delete it.

## 10. Data Sharing & Disclosure

Beyond the service providers listed in Section 5, we may share information:

- With law enforcement or regulatory authorities, where required by a valid legal request under Indian law.
- In connection with a merger, acquisition, or sale of business assets, subject to equivalent privacy protections for your data.
- With your explicit consent, for any purpose not otherwise described in this Policy.

## 11. Data Storage Location

Our servers and database infrastructure may be hosted within India or, where our infrastructure providers require it, in other jurisdictions with comparable data protection standards. Where data is transferred outside India, we take reasonable steps to ensure it remains protected consistent with this Policy.

## 12. Grievance Officer

In accordance with the Information Technology Act, 2000 and applicable rules, we have designated a Grievance Officer to address concerns regarding this Policy or your data:

- **Name:** Krishna Ingle
- **Designation:** Co-founder, Madhava Global
- **Email:** hello@madhavaglobal.in
- **Address:** Madhava Global, Akola, Maharashtra, India

Response timeline: We will acknowledge grievances within 24 hours and aim to resolve them within 15 days, as required under Indian IT Rules.

## 13. Contact Us

For any questions about this Privacy Policy, or to exercise your data rights, please contact:

**Madhava Global**
Email: hello@madhavaglobal.in
Location: Akola, Maharashtra, India

## 14. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will update the version number and effective date above and, for material changes, notify you via an in-app notice. Continued use of the App after changes take effect constitutes acceptance of the revised Policy.

## 15. Governing Law

This Privacy Policy is governed by the laws of India. Any disputes arising from this Policy shall be subject to the exclusive jurisdiction of the courts at Akola, Maharashtra.