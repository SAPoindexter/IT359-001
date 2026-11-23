# IT 359 Virtual Security Operations Center (VSOC)

**Authors:** Cannon and Ibi
**Project:** IT 359 Final Project
**Type:** Clickable front-end cybersecurity proof of concept

## Project Purpose

The IT 359 Virtual Security Operations Center (VSOC) is a three-page dashboard prototype designed to demonstrate how cybersecurity professionals could view operational status, incident response information, and security reporting in one centralized interface.

The project uses representative/notional cybersecurity data to show how a VSOC could help analysts and leadership maintain situational awareness, understand incident scope and status, track response actions, and review operational metrics.

This project is a **front-end proof of concept** and is not connected to live security telemetry, a backend server, or a production database.

## Main Dashboard Views

### Operations Overview — `index.html`

Provides a high-level operational picture, including:

- Open alerts
- Active incidents
- SLA misses
- Logging gaps
- Actions due
- Enclave status
- Active incident status
- Priority decisions

### Incident Response — `incident.html`

Provides a detailed operator view of an active cybersecurity incident, including:

- Incident severity and current phase
- Six-stage operational workflow
- Incident scope and assessment
- Affected assets and services
- Response status
- Action ownership and blockers
- Incident timeline
- Operator timeline notes
- MITRE ATT&CK context

### Data + Reports — `data.html`

Provides data-related context and operational reporting, including:

- Mean Time to Acknowledge (MTTA)
- Mean Time to Respond/Recover (MTTR)
- False positive rate
- Alert volume
- Logging coverage
- Linked data context
- Alert-volume trends
- Response-time trends
- Top alert types
- Incident closeout information

## Project Structure

```text
IT 359 VSOC/
├── index.html
├── incident.html
├── data.html
├── css/
│   └── styles.css
├── js/
│   └── interactive.js
└── README.md
```

### File Descriptions

- `index.html` — Operations Overview dashboard
- `incident.html` — Incident Response operator view
- `data.html` — Data + Reports dashboard
- `css/styles.css` — Shared dashboard layout, appearance, and styling
- `js/interactive.js` — Shared JavaScript for Learn More dialogs and other interactive demonstration controls
- `README.md` — Project documentation, setup instructions, and usage guidance

## Requirements and Dependencies

The VSOC does **not** require installation, a backend server, a database, a build process, or a command-line environment.

### Required

- A modern web browser such as:
  - Google Chrome
  - Microsoft Edge

### External Library

The project requests **DaisyUI version 5** through the jsDelivr Content Delivery Network (CDN) for additional interface components.

Because DaisyUI is loaded through a CDN, an internet connection is recommended when viewing the dashboard. The project also includes its own local shared stylesheet in `css/styles.css`.

No package manager or dependency installation is required.

## Setup and Execution

1. Download or clone the repository.
2. Keep the complete `IT 359 VSOC` folder structure together.
3. Open the `IT 359 VSOC` folder.
4. Double-click `index.html`.
5. If Windows asks which application to use, select Google Chrome or Microsoft Edge.
6. The Operations Overview page will open locally in the browser.
7. Use the navigation menu on the left side of the dashboard to move between the three VSOC views.

No server needs to be started.

## Usage Guide

### Example 1: Review the Operations Overview

1. Open `index.html`.
2. Review the Operational Snapshot at the top of the page.
3. View the active incident and enclave statuses.
4. Review the Next Priority Decision.
5. Select **Learn More** buttons for additional explanations of dashboard information.

### Example 2: Investigate the Active Incident

1. Select **Incident Response** from the left navigation menu.
2. Review the incident identifier, severity, phase, owner, and status.
3. Follow the six-stage Operational Workflow.
4. Review the Incident Scope and Current Assessment.
5. Examine the Response Status and required next actions.
6. Review the Incident Timeline and Incident Timeline Notes.

### Example 3: Review Security Metrics and Reporting

1. Select **Data + Reports** from the left navigation menu.
2. Review operational measures such as MTTA, MTTR, alert volume, and logging coverage.
3. Examine the linked data context associated with the active incident.
4. Review alert and response trends.
5. Review monitoring coverage and other reporting information.

## Interactive Features

The shared `js/interactive.js` file provides interactive behavior throughout the dashboard.

Examples include:

- Learn More information dialogs
- Enclave guidance
- Demonstration buttons
- Modal open and close behavior
- Clicking outside supported dialogs to close them

The three HTML pages share the same CSS and JavaScript files to provide a consistent interface and behavior.

##Representative Data

All incidents, organizations, assets, metrics, usernames, timestamps, and operational values displayed in this project are representative/notional information used for demonstration purposes.

The VSOC does not receive or process live cybersecurity telemetry.

##Current Limitations

The current project is a front-end proof of concept.

It does not currently include:

- Live security data sources
- Backend services
- Database storage
- User authentication
- Role-based access control
- Automated alert or incident updates

## Future Development

A future version of the VSOC could build on the existing HTML, CSS, and JavaScript structure by adding:

- Approved security APIs and live telemetry
- Backend services
- Database support
- Authentication and user roles
- Automated alert updates
- Automated incident tracking
- Expanded reporting and analytics

The current prototype provides the visual and structural foundation for those future capabilities.

