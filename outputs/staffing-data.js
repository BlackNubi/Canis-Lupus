(() => {
  const KEY = 'actriv_shared_staffing_v1';
  const roster = [
    { name: 'Robert Lumumba', role: 'Healthcare Recruiter', location: 'Nairobi', credential: 'Internal employee', roles: ['Healthcare Recruiter', 'Recruiting Support'] },
    { name: 'Joseph Azenga', role: 'Clinical Operations Manager', location: 'Nairobi', credential: 'Manager profile · sample', roles: ['Clinical Operations Manager', 'Clinical Operations Lead', 'Staffing Coordinator'] },
    { name: 'Maya Njoroge', role: 'Clinical Operations Lead', location: 'Nairobi', credential: 'Clinical lead · demo file', roles: ['Clinical Operations Lead', 'Care Coordinator'] },
    { name: 'Brian Otieno', role: 'Senior Recruiter', location: 'Nairobi', credential: 'Internal employee', roles: ['Healthcare Recruiter', 'Recruiting Support'] },
    { name: 'Amina Hassan', role: 'Care Coordinator', location: 'Mombasa', credential: 'Care credential · demo file', roles: ['Care Coordinator', 'Medical Assistant'] },
    { name: 'David Kamau', role: 'Finance Analyst', location: 'Nairobi', credential: 'Internal employee', roles: ['Finance Support'] },
    { name: 'Lucy Wanjiku', role: 'IT Administrator', location: 'Nairobi', credential: 'Internal employee', roles: ['IT Support'] },
    { name: 'Peter Mwangi', role: 'Talent Sourcer', location: 'Kisumu', credential: 'Internal employee', roles: ['Recruiting Support'] },
    { name: 'Naomi Kariuki', role: 'Registered Nurse', location: 'Nairobi', credential: 'RN credential · demo file', roles: ['Registered Nurse', 'Care Coordinator'] }
  ];

  const pad = n => String(n).padStart(2, '0');
  function dateISO(offset = 0) {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + offset);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }
  function seed() {
    return [
      { id: 'sample-robert', employee: 'Robert Lumumba', role: 'Recruiting Support', facility: 'Nairobi Field Office', unit: 'Field Recruiting', date: dateISO(1), start: '09:00', end: '17:00', source: 'Internal team', status: 'booked', confirmation: 'awaiting', notes: 'Sample shift for Employee Hub preview.', sample: true },
      { id: 'sample-amina', employee: 'Amina Hassan', role: 'Care Coordinator', facility: 'Mwangaza Health Network', unit: 'Outpatient', date: dateISO(1), start: '07:00', end: '15:00', source: 'Internal team', status: 'booked', confirmation: 'awaiting', notes: 'Sample provider shift for Employee Hub preview.', sample: true },
      { id: 'sample-open', employee: '', role: 'Registered Nurse', facility: 'Greenview Medical Centre', unit: 'Medical-surgical', date: dateISO(2), start: '07:00', end: '19:00', source: 'Internal team', status: 'open', confirmation: 'open', notes: 'Sample open coverage need.', sample: true }
    ];
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw === null) {
        const initial = seed();
        localStorage.setItem(KEY, JSON.stringify(initial));
        return initial;
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }
  function save(shifts) {
    try {
      localStorage.setItem(KEY, JSON.stringify(shifts));
      window.dispatchEvent(new CustomEvent('staffing:updated', { detail: shifts }));
      return true;
    } catch (_) {
      return false;
    }
  }
  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  }
  function dateLabel(value, options = { weekday: 'short', month: 'short', day: 'numeric' }) {
    if (!value) return 'Date not set';
    return new Intl.DateTimeFormat('en', options).format(new Date(`${value}T12:00:00`));
  }
  function weekStart(value = new Date()) {
    const d = new Date(value);
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return d;
  }
  function iso(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
  function addDays(value, amount) { const d = new Date(value); d.setDate(d.getDate() + amount); return d; }
  function hoursFor(employee, date) {
    return load().filter(s => s.employee === employee && s.date === date && s.status === 'booked').reduce((sum, s) => {
      const [sh, sm] = (s.start || '00:00').split(':').map(Number);
      const [eh, em] = (s.end || '00:00').split(':').map(Number);
      let hours = (eh * 60 + em - (sh * 60 + sm)) / 60;
      if (hours <= 0) hours += 24;
      return sum + hours;
    }, 0);
  }
  window.StaffingData = { KEY, roster, load, save, dateISO, dateLabel, weekStart, iso, addDays, escapeHTML, hoursFor };
})();
