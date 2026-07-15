import React from 'react';

// ─── NetBill Account Deletion Request Page ──────────────────────────
// Static page, no API/backend call needed, no Tailwind dependency.
// Plain inline styles only. Plug this into a route like
// /netbill/delete-account in your website's router.

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    padding: '40px 16px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    border: '1px solid #f1f5f9',
    padding: '32px',
  },
  headerWrap: {
    marginBottom: '32px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '24px',
  },
  eyebrow: {
    fontSize: '12px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#16a34a',
    marginBottom: '8px',
  },
  h1: {
    fontSize: '28px',
    fontWeight: 900,
    color: '#0f172a',
    margin: 0,
  },
  section: {
    marginBottom: '32px',
  },
  h2: {
    fontSize: '18px',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '12px',
  },
  paragraph: {
    fontSize: '14px',
    color: '#475569',
    lineHeight: 1.6,
    marginBottom: '16px',
  },
  list: {
    fontSize: '14px',
    color: '#475569',
    lineHeight: 1.7,
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  bold: {
    fontWeight: 700,
    color: '#0f172a',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 700,
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
  },
  contactSection: {
    paddingTop: '24px',
    borderTop: '1px solid #f1f5f9',
  },
  link: {
    color: '#16a34a',
    textDecoration: 'underline',
  },
};

export const DeleteAccountPage = () => {

  const supportEmail = "hello@madhavaglobal.in";
  const mailtoLink = `mailto:${supportEmail}?subject=Account Deletion Request&body=Please include your registered name, phone number/email, and business name below:%0D%0A%0D%0AName:%0D%0APhone/Email:%0D%0ABusiness Name:`;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* ─── Header ─── */}
        <div style={styles.headerWrap}>
          <p style={styles.eyebrow}>NetBill · Madhava Global</p>
          <h1 style={styles.h1}>Delete Your Account and Data</h1>
        </div>

        {/* ─── How to Request ─── */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How to Request Account Deletion</h2>
          <p style={styles.paragraph}>
            Send an email to <span style={styles.bold}>{supportEmail}</span> with
            the subject line <span style={styles.bold}>"Account Deletion Request"</span>, and include
            the following details so we can verify and process your request:
          </p>
          <ul style={styles.list}>
            <li>Your registered name</li>
            <li>Your registered phone number or email address associated with your NetBill account</li>
            <li>Your business/restaurant name (if applicable)</li>
          </ul>

          <a href={mailtoLink} style={styles.button}>
            Request Account Deletion
          </a>
        </section>

        {/* ─── What Happens Next ─── */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What Happens Next</h2>
          <ul style={styles.list}>
            <li>We will verify your request within <span style={styles.bold}>2 business days</span>.</li>
            <li>Once verified, your account and associated data will be permanently deleted within <span style={styles.bold}>7 business days</span>.</li>
            <li>You will receive a confirmation email once the deletion is complete.</li>
          </ul>
        </section>

        {/* ─── What Data Will Be Deleted ─── */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What Data Will Be Deleted</h2>
          <p style={styles.paragraph}>
            Upon a verified deletion request, the following data associated with your account
            will be permanently removed from our systems:
          </p>
          <ul style={styles.list}>
            <li>Account login details (name, phone number, email)</li>
            <li>Business profile information (restaurant name, address, contact details, logo)</li>
            <li>Order and billing history associated with your account</li>
            <li>Any uploaded images or menu data linked to your account</li>
          </ul>
        </section>

        {/* ─── Data We May Retain ─── */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Data We May Retain</h2>
          <p style={{ ...styles.paragraph, marginBottom: 0 }}>
            In accordance with applicable Indian tax, accounting, and legal recordkeeping
            requirements, we may be required to retain certain transactional or billing records
            for a limited period even after account deletion, solely for legal and compliance
            purposes. This data will not be used for any other purpose and will be deleted once
            the applicable retention period expires.
          </p>
        </section>

        {/* ─── Contact ─── */}
        <section style={styles.contactSection}>
          <h2 style={styles.h2}>Contact Us</h2>
          <p style={{ ...styles.paragraph, marginBottom: 0 }}>
            <span style={styles.bold}>Madhava Global</span><br />
            Email: {supportEmail}<br />
            Website: <a href="https://www.madhavaglobal.in" style={styles.link}>www.madhavaglobal.in</a><br />
            Location: Akola, Maharashtra, India
          </p>
        </section>

      </div>
    </div>
  );
};

export default DeleteAccountPage;
