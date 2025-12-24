import './App.css';


function App() {
    return (
        <div>
            <div class="states-grid">
                <div class="card-container">
                    <span class="state-label">Empty state</span>
                    <div class="app-card">
                        <div class="header">
                            <div class="icon-placeholder"></div>
                            <h2>GitHub Repository Finder</h2>
                        </div>
                        <select class="dropdown">
                            <option>Select a Language</option>
                        </select>
                        <div class="status-box">Please select a language</div>
                    </div>
                </div>

                <div class="card-container">
                    <span class="state-label">Loading State</span>
                    <div class="app-card">
                        <div class="header">
                            <div class="icon-placeholder"></div>
                            <h2>GitHub Repository Finder</h2>
                        </div>
                        <select class="dropdown">
                            <option>JavaScript</option>
                        </select>
                        <div class="status-box">Loading, please wait..</div>
                    </div>
                </div>

                <div class="card-container">
                    <span class="state-label">Error State</span>
                    <div class="app-card">
                        <div class="header">
                            <div class="icon-placeholder"></div>
                            <h2>GitHub Repository Finder</h2>
                        </div>
                        <select class="dropdown">
                            <option>JavaScript</option>
                        </select>
                        <div class="status-box error">Error fetching repositories</div>
                        <button class="btn retry">Click to retry</button>
                    </div>
                </div>
            </div>

            <hr class="divider"/>

            <div class="main-result">
                <div class="app-card">
                    <div class="header">
                        <div class="icon-placeholder"></div>
                        <h2>GitHub Repository Finder</h2>
                    </div>
                    <select class="dropdown">
                        <option>JavaScript</option>
                    </select>

                    <div class="repo-card">
                        <div class="repo-header">
                            <h3>driver.js</h3>
                            <span class="external-icon">↗</span>
                        </div>
                        <p class="repo-desc">A light-weight, no-dependency, vanilla JavaScript engine to drive user's
                            focus across the page.</p>
                        <div class="repo-stats">
                            <span><i class="dot yellow"></i> JavaScript</span>
                            <span>⭐ 24,442</span>
                            <span>🍴 1,571</span>
                            <span>ⓘ 120</span>
                        </div>
                    </div>

                    <button class="btn dark">Refresh</button>
                </div>
            </div>
        </div>
    );
}

export default App
