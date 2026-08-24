export default function Home() {
  return (
    <main className="page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          Sahaya<span>On</span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            ENTERPRISE IT SERVICE MANAGEMENT
          </div>

          <h1>
            IT Operations
            <br />
            <span>Without the Chaos.</span>
          </h1>

          <h2>
            One Platform for Tickets, Assets & IT Operations.
          </h2>

          <p>
            SahayaOn centralizes IT support, asset lifecycle, and
            service operations into one intelligent platform — from
            incident resolution to asset management, automating every
            workflow with faster response times, complete visibility,
            and measurable SLA performance.
          </p>

          <a
            href="https://my.sahayaon.com/login"
            className="get-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/dashboard.png"
            alt="SahayaOn IT Operations Dashboard"
          />
        </div>
      </section>

      {/* Footer */}
      <footer>
        Powered by KriaSol Technologies LLP
      </footer>
    </main>
  );
}
