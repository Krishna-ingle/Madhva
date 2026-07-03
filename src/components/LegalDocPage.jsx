// src/components/LegalDocPage.jsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// ─── Config ──────────────────────────────────────────────────
// Point this at your live backend. Use an environment variable so
// the same component works in local dev and production without edits.
// Create a `.env` file in your project root with:
//   REACT_APP_API_BASE_URL=https://api.yourdomain.in/api/v1
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://hotelview.onrender.com/api/v1';

const ENDPOINTS = {
  privacy: `${API_BASE_URL}/info/privacy`,
  terms: `${API_BASE_URL}/info/terms`,
};

// ─── Reusable Legal Document Page ───────────────────────────────
// Renders whatever the backend returns for /info/privacy or /info/terms.
// Both endpoints share the same response shape:
// { software_name, parent_entity, doc_type, version, title, contentMarkdown }
const LegalDocPage = ({ docType }) => {
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDoc = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(ENDPOINTS[docType], { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        setDoc(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(`Failed to load ${docType}:`, err);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
    return () => controller.abort();
  }, [docType]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {loading && (
          <div style={styles.centerBox}>
            <div style={styles.spinner} />
            <p style={styles.loadingText}>Loading…</p>
          </div>
        )}

        {error && !loading && (
          <div style={styles.centerBox}>
            <p style={styles.errorTitle}>Couldn't load this page</p>
            <p style={styles.errorSubtitle}>Please refresh, or try again in a moment.</p>
          </div>
        )}

        {doc && !loading && (
          <>
            <header style={styles.header}>
              <h1 style={styles.title}>{doc.title}</h1>
              <p style={styles.meta}>
                {doc.parent_entity} &middot; Version {doc.version}
              </p>
            </header>

            <div style={styles.markdownBody} className="legal-doc-markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {doc.contentMarkdown}
              </ReactMarkdown>
            </div>
          </>
        )}
      </div>

      {/* Minimal styling for the rendered markdown elements (headings, lists, etc.) */}
      <style>{`
        .legal-doc-markdown h1 { font-size: 1.6rem; font-weight: 800; margin: 1.75rem 0 0.75rem; color: #111827; }
        .legal-doc-markdown h2 { font-size: 1.3rem; font-weight: 700; margin: 1.5rem 0 0.6rem; color: #111827; }
        .legal-doc-markdown h3 { font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.5rem; color: #1f2937; }
        .legal-doc-markdown p { margin: 0.75rem 0; line-height: 1.7; color: #374151; }
        .legal-doc-markdown ul, .legal-doc-markdown ol { margin: 0.75rem 0; padding-left: 1.5rem; line-height: 1.7; color: #374151; }
        .legal-doc-markdown li { margin: 0.35rem 0; }
        .legal-doc-markdown a { color: #ea580c; text-decoration: underline; }
        .legal-doc-markdown strong { color: #111827; }
        .legal-doc-markdown table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
        .legal-doc-markdown th, .legal-doc-markdown td { border: 1px solid #e5e7eb; padding: 0.5rem 0.75rem; text-align: left; font-size: 0.9rem; }
        .legal-doc-markdown th { background: #f9fafb; font-weight: 700; }
      `}</style>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: '#fafafa',
    padding: '2rem 1rem',
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  },
  container: {
    maxWidth: 760,
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: 20,
    padding: '2.5rem 2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    border: '1px solid #f0f0f0',
  },
  header: {
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '1.25rem',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '1.9rem',
    fontWeight: 800,
    color: '#111827',
    margin: 0,
  },
  meta: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginTop: '0.5rem',
  },
  markdownBody: {
    fontSize: '0.95rem',
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 0',
    textAlign: 'center',
  },
  spinner: {
    width: 32,
    height: 32,
    border: '3px solid #fed7aa',
    borderTopColor: '#ea580c',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  loadingText: {
    marginTop: 12,
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  errorTitle: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#374151',
  },
  errorSubtitle: {
    fontSize: '0.8rem',
    color: '#9ca3af',
    marginTop: 4,
  },
};

export default LegalDocPage;
