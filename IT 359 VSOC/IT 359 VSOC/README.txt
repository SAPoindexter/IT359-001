IT 359 VSOC DASHBOARD - CLICKABLE FRONT-END PROOF OF CONCEPT

WHAT THIS IS
A three-page dashboard demonstration using representative data and a shared visual design.
The pages are Operations Overview, Incident Response, and Data + Reports.

FOLDER STRUCTURE
- index.html = Operations Overview
- incident.html = Incident Response operator view
- data.html = Data + Reports
- css/styles.css = shared dashboard appearance and layout
- js/interactive.js = Learn More popups and demonstration-button behavior
- README.txt = opening, structure, and handoff guidance

HOW TO OPEN IT
1. Keep the full folder structure together.
2. Double-click index.html.
3. Choose Microsoft Edge or Google Chrome if Windows asks.
4. Use the left navigation and dashboard buttons to move between pages.

WHAT CHANGED IN THIS VERSION
- The three dashboard views are separate HTML pages.
- Shared styling and JavaScript are separated into css and js folders.
- Incident timeline entries use full date/time values in GMT for cross-time-zone coordination.
- The six-step Operational Workflow is shown horizontally on the Incident Response page.
- Incident Timeline Notes show example usernames, operator notes, and GMT timestamps.

TECHNICAL NOTE
- No installation, server, database, or command line is required.
- DaisyUI is requested from a CDN when internet access is available.
- The local shared stylesheet provides the dashboard layout and primary appearance.
- Learn More popup content remains inside the relevant HTML page and uses the shared JavaScript file to open and close.

HANDOFF
A future development team can reuse the HTML structure, shared CSS, and shared JavaScript, then replace the representative values with approved APIs and backend services.
