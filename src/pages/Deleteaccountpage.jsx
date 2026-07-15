import React from 'react';

// ─── NetBill Account Deletion Request Page ──────────────────────────
// Static page, no API/backend call needed. Just plug this into a route
// like /netbill/delete-account in your website's router.
// Uses Tailwind classes (same as your other pages) + green/black theme.

export const DeleteAccountPage = () => {

  const supportEmail = "hello@madhavaglobal.in";
  const mailtoLink = `mailto:${supportEmail}?subject=Account Deletion Request&body=Please include your registered name, phone number/email, and business name below:%0D%0A%0D%0AName:%0D%0APhone/Email:%0D%0ABusiness Name:`;

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-slate-100 p-8">

        {/* ─── Header ─── */}
        <div className="mb-8 border-b border-slate-100 pb-6">
          <p className="text-xs font-black uppercase tracking-widest text-green-600 mb-2">
            NetBill · Madhava Global
          </p>
          <h1 className="text-3xl font-black text-slate-900">
            Delete Your Account and Data
          </h1>
        </div>

        {/* ─── How to Request ─── */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-3">
            How to Request Account Deletion
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Send an email to <span className="font-bold text-slate-900">{supportEmail}</span> with
            the subject line <span className="font-bold">"Account Deletion Request"</span>, and include
            the following details so we can verify and process your request:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mb-5">
            <li>Your registered name</li>
            <li>Your registered phone number or email address associated with your NetBill account</li>
            <li>Your business/restaurant name</li>
          </ul>

          <a
            href={mailtoLink}
            className="inline-block bg-black text-white text-sm font-bold px-6 py-3 rounded-md hover:bg-slate-800 transition-colors"
          >
            Request Account Deletion
          </a>
        </section>

        {/* ─── What Happens Next ─── */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-3">
            What Happens Next
          </h2>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>We will verify your request within <span className="font-bold">2 business days</span>.</li>
            <li>Once verified, your account and associated data will be permanently deleted within <span className="font-bold">7 business days</span>.</li>
            <li>You will receive a confirmation email once the deletion is complete.</li>
          </ul>
        </section>

        {/* ─── What Data Will Be Deleted ─── */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-3">
            What Data Will Be Deleted
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Upon a verified deletion request, the following data associated with your account
            will be permanently removed from our systems:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Account login details (name, phone number, email)</li>
            <li>Business profile information (restaurant name, address, contact details, logo)</li>
            <li>Order and billing history associated with your account</li>
            <li>Any uploaded images or menu data linked to your account</li>
          </ul>
        </section>

        {/* ─── Data We May Retain ─── */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-3">
            Data We May Retain
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In accordance with applicable Indian tax, accounting, and legal recordkeeping
            requirements, we may be required to retain certain transactional or billing records
            for a limited period even after account deletion, solely for legal and compliance
            purposes. This data will not be used for any other purpose and will be deleted once
            the applicable retention period expires.
          </p>
        </section>

        {/* ─── Contact ─── */}
        <section className="pt-6 border-t border-slate-100">
          <h2 className="text-lg font-black text-slate-900 mb-3">
            Contact Us
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">Madhava Global</span><br />
            Email: {supportEmail}<br />
            Website: <a href="https://www.madhavaglobal.in" className="text-green-600 underline">www.madhavaglobal.in</a><br />
            Location: Akola, Maharashtra, India
          </p>
        </section>

      </div>
    </div>
  );
};

export default DeleteAccountPage;
