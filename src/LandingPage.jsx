import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

const LandingPage = () => {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="text-center py-4 bg-dark text-white animated fadeInDown">
        <h1>📘 MicroMuse</h1>
        <p className="lead">AI-Powered Daily Microfiction Generator</p>
      </header>

      {/* Hero */}
      <section className="text-center py-5 animated fadeIn">
        <h2 className="display-4 fw-bold">Small Stories. Big Impact.</h2>
        <p className="fs-5 mt-3">Enter a word or choose a genre. MicroMuse crafts a gripping micro-story under 100 words, every single day.</p>
      </section>

      {/* Features */}
      <section className="container text-center py-4 animated fadeInUp">
        <h3 className="mb-4">✨ What You Can Do</h3>
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5>🧠 AI Story Generator</h5>
            <p>Generate unique microfiction using AI.</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>🎭 Genre Selection</h5>
            <p>Pick your genre: Horror, Romance, Sci-Fi, and more.</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>🖼️ Quote Cards</h5>
            <p>Convert stories into beautiful images.</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>🔁 Daily Updates</h5>
            <p>Receive new stories daily with push alerts.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-light py-5 text-center animated fadeInUp delay-1s">
        <h3>🔍 How It Works</h3>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <p><strong>1️⃣</strong> Enter a word or pick a theme</p>
          </div>
          <div className="col-md-3">
            <p><strong>2️⃣</strong> MicroMuse generates a story instantly</p>
          </div>
          <div className="col-md-3">
            <p><strong>3️⃣</strong> Save, share, or get daily updates</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-4 animated fadeInUp delay-2s">
        <button className="btn btn-primary btn-lg px-5" onClick={handleLogin}>
          Get Started →
        </button>
        <p className="mt-3">
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 animated fadeInUp delay-3s">
        <small>&copy; 2025 MicroMuse | Powered by Gemini API & Firebase</small>
      </footer>
    </div>
  );
};

export default LandingPage;
