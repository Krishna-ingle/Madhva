import React from 'react';
import '../assets/styles/currentProject.css'; // Import the CSS file

const currentProject = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Smart Store</h1>
          <p>
            Manage shopping, city-based suggestions, and Firebase-powered features in one seamless React Native app.
            Deployed on Android—your daily store companion.
          </p>
          <img src="/assets/smartstore-app.png" alt="Smart Store Android App Screenshot" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>City Suggestions</h3>
            <p>Indian city dataset for smart search and location-based shopping.</p>
          </div>
          <div className="feature-card">
            <h3>Firebase Integration</h3>
            <p>Real-time data with react-native-firebase for smooth Android builds.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive UI</h3>
            <p>Green gradients and animations for engaging mobile experience.</p>
          </div>
          <div className="feature-card">
            <h3>Local Deployment</h3>
            <p>Built with npm, Gradle for Windows—ready for npx react-native run-android.</p>
          </div>
          <div className="feature-card">
            <h3>Portfolio Ready</h3>
            <p>GitHub-hosted, Vercel-deployed companion web showcase.</p>
          </div>
          <div className="feature-card">
            <h3>Download Now</h3>
            <p>Grab the APK and start shopping smarter on your device.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Shop Smart?</h2>
        <p>Experience the future of mobile shopping with Smart Store.</p>
        <button>Get the App</button>
      </section>
    </div>
  );
};

export default currentProject;
