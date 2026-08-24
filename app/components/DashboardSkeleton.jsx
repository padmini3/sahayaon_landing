'use client';

export default function DashboardSkeleton() {
  return (
    <div className="mockup-frame">
      {/* App Window Chrome / Header */}
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="mockup-title">SahayaOn • IT Service Management</div>
      </div>

      {/* App Layout */}
      <div className="mockup-body">
        {/* Left Sidebar */}
        <aside className="mockup-sidebar">
          <div className="sidebar-brand">
            Sahaya<span>On</span>
          </div>

          <div className="sidebar-section">
            <span className="sidebar-heading">ACTIVITY</span>
            <div className="sidebar-item active">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Dashboard</span>
            </div>
          </div>

          <div className="sidebar-section">
            <span className="sidebar-heading">WORK</span>
            <div className="sidebar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>My Tickets</span>
            </div>
            <div className="sidebar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <span>My Assets</span>
              <span className="sidebar-badge">1</span>
            </div>
          </div>

          <div className="sidebar-footer">
            <div className="sidebar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Customize</span>
            </div>
            <div className="sidebar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span>Collapse</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="mockup-main">
          {/* Top Bar */}
          <header className="mockup-topbar">
            <div className="mockup-brand-tag">
              <span className="brand-logo-icon">▲</span>
              <span className="brand-name">KRIASOL</span>
              <span className="brand-sub">Technologies</span>
            </div>

            <div className="mockup-search">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Search...</span>
              <kbd>Ctrl K</kbd>
            </div>

            <div className="mockup-user-actions">
              <div className="action-icon">☼</div>
              <div className="mockup-avatar skeleton-shimmer"></div>
            </div>
          </header>

          {/* Breadcrumb */}
          <div className="mockup-breadcrumb">
            <span>⌂</span>
            <span>/</span>
            <span>Profile</span>
          </div>

          {/* Content Grid */}
          <div className="mockup-content-grid">
            {/* Left Profile Skeleton Card */}
            <div className="mockup-card profile-card">
              <div className="profile-avatar-circle skeleton-shimmer"></div>
              
              <div className="skeleton-line skeleton-shimmer title-line"></div>
              
              <div className="profile-meta-list">
                <div className="meta-item">
                  <span className="meta-label">EMAIL</span>
                  <div className="skeleton-line skeleton-shimmer meta-val"></div>
                </div>
                <div className="meta-item">
                  <span className="meta-label">ROLE</span>
                  <div className="skeleton-line skeleton-shimmer meta-val short"></div>
                </div>
                <div className="meta-item">
                  <span className="meta-label">ORGANIZATION</span>
                  <div className="skeleton-line skeleton-shimmer meta-val medium"></div>
                </div>
                <div className="meta-item">
                  <span className="meta-label">LAST ACTIVE</span>
                  <div className="skeleton-line skeleton-shimmer meta-val short"></div>
                </div>
                <div className="meta-item">
                  <span className="meta-label">MEMBER SINCE</span>
                  <div className="skeleton-line skeleton-shimmer meta-val short"></div>
                </div>
              </div>

              <div className="profile-card-actions">
                <div className="mockup-btn secondary">Change photo</div>
                <div className="mockup-btn primary">Update password</div>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="mockup-right-col">
              {/* Top Row Cards */}
              <div className="mockup-row">
                {/* Employment Details */}
                <div className="mockup-card flex-1">
                  <div className="card-header">
                    <span className="card-icon">🪪</span>
                    <h3>Employment Details</h3>
                  </div>
                  <div className="card-fields-grid">
                    <div className="field-group">
                      <span className="field-label">Employee ID</span>
                      <div className="skeleton-line skeleton-shimmer field-bar"></div>
                    </div>
                    <div className="field-group">
                      <span className="field-label">Job Title</span>
                      <div className="skeleton-line skeleton-shimmer field-bar"></div>
                    </div>
                    <div className="field-group">
                      <span className="field-label">Department</span>
                      <div className="skeleton-line skeleton-shimmer field-bar"></div>
                    </div>
                    <div className="field-group">
                      <span className="field-label">Manager</span>
                      <div className="skeleton-line skeleton-shimmer field-bar highlight"></div>
                    </div>
                  </div>
                </div>

                {/* Organization Info */}
                <div className="mockup-card flex-1">
                  <div className="card-header">
                    <span className="card-icon">🏢</span>
                    <h3>Organization Info</h3>
                  </div>
                  <div className="card-fields-grid">
                    <div className="field-group">
                      <span className="field-label">Company</span>
                      <div className="skeleton-line skeleton-shimmer field-bar"></div>
                    </div>
                    <div className="field-group">
                      <span className="field-label">Org ID</span>
                      <div className="skeleton-line skeleton-shimmer field-bar short"></div>
                    </div>
                    <div className="field-group">
                      <span className="field-label">Joined Date</span>
                      <div className="skeleton-line skeleton-shimmer field-bar short"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Contact Details Card */}
              <div className="mockup-card">
                <div className="card-header">
                  <span className="card-icon">📞</span>
                  <h3>Contact Details</h3>
                </div>
                <div className="card-fields-grid">
                  <div className="field-group">
                    <span className="field-label">Work Email</span>
                    <div className="skeleton-line skeleton-shimmer field-bar highlight"></div>
                  </div>
                  <div className="field-group">
                    <span className="field-label">Phone</span>
                    <div className="skeleton-line skeleton-shimmer field-bar"></div>
                  </div>
                  <div className="field-group">
                    <span className="field-label">Office Location</span>
                    <div className="skeleton-line skeleton-shimmer field-bar short"></div>
                  </div>
                  <div className="field-group">
                    <span className="field-label">Timezone</span>
                    <div className="skeleton-line skeleton-shimmer field-bar short"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
