# Rippling Product Benchmark

**Reviewed:** 2026-11-24  
**Purpose:** Product-scope benchmark for the Canis-Lupus / Actriv Workforce company-system prototype.

## Sources and evidence limits

This benchmark uses Rippling's public product catalog and homepage:

- [Rippling product ecosystem](https://www.rippling.com/products)
- [Rippling homepage](https://www.rippling.com/)

Rippling publicly presents a unified platform spanning HR, payroll, IT, finance, global workforce products, and a shared data/automation/analytics layer. Its catalog lists products including HRIS, Recruiting, Benefits Administration, Payroll, Scheduling, Time & Attendance, Learning Management, Performance Management, Expense Management, Identity & Access, Device Management, Helpdesk, Analytics, and Automation Studio.

These are vendor-published descriptions. They establish product categories and positioning, not the exact behavior, service levels, APIs, or compliance of features behind a customer login. This document does not treat marketing copy as proof of private implementation details.

## Product pattern to benchmark

1. **One employee foundation:** employee identity, team, location, role, manager, and lifecycle changes should drive relevant workflows across the system.
2. **Separate daily workspaces:** employees, managers, and administrators need different entry points and different records. Navigation separation is useful, but access must also be enforced by the server in production.
3. **Connected lifecycle workflows:** a People change can affect payroll, benefits, app access, devices, learning assignments, time, and reporting.
4. **Operational follow-through:** time, leave, expenses, recruiting, and staffing should move through visible states with owners, dates, approvals, and history.
5. **Company-wide visibility with boundaries:** administrators need configured rollups; employees need their own information; managers need their assigned teams; staffing monitors need staffing data without admin controls.
6. **Automation and reporting require trustworthy inputs:** workflows and analytics should be driven by audited, permission-checked records rather than hard-coded counts.

## Capability comparison

| Capability | Rippling public catalog | Canis-Lupus direction | Current prototype behavior |
|---|---|---|---|
| People and employee lifecycle | HRIS and Recruiting | People workspace and recruiting pipeline | Admin people and candidate previews; demo form records save in this browser after the current update. No identity or lifecycle service. |
| Payroll | US and Global Payroll | Payroll documents, pay dates, preparation and review | Illustrative payroll review only. It does not calculate taxes, create pay statements, submit payroll, or transfer funds. |
| Benefits | Benefits Administration and Global Benefits | Plan catalog and employee enrollment entry point | Admin plan catalog can be edited in browser storage. No elections, eligibility calculations, coverage, or provider connection. |
| Time and attendance | Time & Attendance and Scheduling | Dashboard clock, breaks, timesheets, manager schedules, staffing monitor | Employee/admin clock sessions persist in the current browser; employee clock-out records can appear in the Admin time review. No authoritative timekeeping, policy engine, or payroll handoff. |
| Time off | HR and workforce products | Employee requests, assigned calendar, review status | Employee preview requests appear in Admin review on the same browser and the decision is reflected in the employee request list. No leave balance or holiday service. |
| Learning | Learning Management | Role-based catalog and progress | Admin course catalog persists locally; the progress action advances sample progress. No learner accounts, notifications, or connected LMS. |
| Performance | Performance Management | Review cycles, feedback, team goals | Admin can save demo goals locally. Review cycles and feedback remain illustrative. |
| Finance operations | Expense Management, Bill Pay, Cards, Travel, Banking | Expenses, invoices, bills, cards and travel sections | Expense preview requests can be reviewed locally; other records are illustrative or browser-only. No money movement, accounting ledger, receipt service, bank, or card connection. |
| IT and access | Identity & Access, Device Management, Helpdesk, Inventory | Apps, devices, support, and access requests | Catalog and device preview interactions only. No identity provider, provisioning, device management, ticketing, or audit integration. |
| Shared platform | Data Cloud, Analytics, Automation Studio, Permissions | Permission-aware cross-module workflows and company reporting | No backend data platform, role enforcement, automation engine, or analytics query service is present. |

## Product-specific direction for this company system

Canis-Lupus adds a healthcare staffing workflow around the broader company-system pattern:

- Managers create and assign shifts with a role, date, start/end time, facility, unit, coverage source, employee/provider, and notes.
- Employees see only shifts assigned to their profile in their calendar and can confirm a shift or request a change.
- The Staffing Monitor summarizes coverage and activity and has no Admin Hub navigation.
- The Manager Hub is limited to the manager's scheduling workspace, the manager's own Employee Hub profile, and Staffing Monitor.
- The Admin Hub retains the full company administration modules.
- The Employee Hub keeps personal clock, requests, and profile context on the employee side.

In the current static prototype, staffing shifts use a shared `localStorage` key on one browser origin. The employee profile context is selected client-side for the demo. These boundaries are presentation behavior, not secure authorization.

## Production gaps identified by the benchmark

A production company system needs foundational services before real employee data or payroll can be used:

1. Authentication tied to an authoritative employee identity.
2. Server-side tenant, role, manager-scope, and record-level authorization.
3. A central database, API, validation, migrations, concurrency rules, and audit history.
4. Data ownership and retention rules for sensitive payroll, benefits, support, time, and expense records.
5. Regional payroll, benefits, time, and holiday integrations with reviewed local compliance rules.
6. Notifications and recoverable approval workflows.
7. Reporting and automation built on verified permission-filtered data.
8. Security review, operational monitoring, backups, and tested failure recovery.

Until those foundations and authorized integrations exist, use synthetic records and label browser-only behavior as a preview.
