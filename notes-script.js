(function() {
  // 1. Inject Styles dynamically into the page head
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    .portal-root {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #1e293b;
      max-width: 850px;
      margin: 24px auto;
    }

    .checkin-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 32px 24px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
      max-width: 440px;
      margin: 0 auto;
    }

    .checkin-badge {
      display: inline-block;
      background: #e0f2fe;
      color: #0369a1;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 20px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .checkin-title { color: #0f172a; font-size: 1.4rem; font-weight: 700; margin: 0 0 6px 0; }
    .checkin-subtitle { color: #64748b; font-size: 0.875rem; margin-bottom: 20px; }
    .form-field { margin-bottom: 16px; }
    .form-field label { display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 6px; text-transform: uppercase; }
    .form-field input, .form-field select {
      width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px;
      background-color: #f8fafc; box-sizing: border-box; outline: none; font-size: 0.925rem;
    }
    .btn-primary {
      width: 100%; background-color: #0f172a; color: #ffffff; border: none;
      padding: 12px; border-radius: 8px; font-weight: 600; font-size: 0.95rem; cursor: pointer;
    }
    .btn-primary:hover { background-color: #0284c7; }

    .notes-container {
      background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03); display: none; -webkit-user-select: none;
      -moz-user-select: none; user-select: none;
    }
    .notes-header-title { font-size: 1.35rem; font-weight: 700; color: #0f172a; margin: 0 0 18px 0; }
    .tabs-flex { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
    .tab-pill { background-color: #f1f5f9; color: #475569; border: none; padding: 8px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; }
    .tab-pill.active { background-color: #0284c7; color: #ffffff; }
    .tab-panel { display: none; }
    .tab-panel.active { display: block; }
    .faculty-tag { font-size: 0.85rem; font-weight: 600; color: #0369a1; background: #f0f9ff; padding: 6px 12px; border-radius: 6px; display: inline-block; margin-bottom: 16px; }
    .text-note-entry { background-color: #f8fafc; border-left: 4px solid #0284c7; border-radius: 6px; padding: 16px; margin-bottom: 16px; }
    .date-header { font-weight: 700; color: #0f172a; margin-bottom: 8px; font-size: 1.05rem; }
    .note-body { color: #334155; line-height: 1.6; font-size: 0.95rem; }
    .note-body ul { margin-top: 4px; margin-bottom: 8px; padding-left: 20px; }
    .note-body p { margin: 6px 0; }

    @media print { body { display: none !important; } }
  `;
  document.head.appendChild(style);

  // 2. Render Check-In Screen & Notes App HTML Layout
  document.addEventListener("DOMContentLoaded", function() {
    const rootDiv = document.querySelector('.portal-root');
    if (!rootDiv) return;

    rootDiv.innerHTML = `
      <div id="checkinScreen" class="checkin-card">
        <span class="checkin-badge">Student Access</span>
        <h2 class="checkin-title">RGNUL Ninth Semester Notes</h2>
        <p class="checkin-subtitle">Please complete a quick one-time check-in to access daily class notes.</p>
        <div class="form-field">
          <label for="fullName">Your Name</label>
          <input type="text" id="fullName" placeholder="Enter your full name..." />
        </div>
        <div class="form-field">
          <label for="discoverySource">How did you find out about these notes?</label>
          <select id="discoverySource">
            <option value="">Choose an option...</option>
            <option value="Word of mouth">Word of mouth</option>
            <option value="WhatsApp link">WhatsApp link</option>
            <option value="Friends">Friends</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button class="btn-primary" onclick="processCheckin()">Access Notes Portal →</button>
      </div>

      <div id="notesPortal" class="notes-container">
        <h2 class="notes-header-title">📖 RGNUL Ninth Semester - Daily Class Notes (2026)</h2>
        <div class="tabs-flex">
          <button class="tab-pill active" onclick="switchSubjectTab(event, 'sub-drugs')">Law of Drugs & Narcotics</button>
          <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-forensics')">Forensic Sciences</button>
          <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-poverty')">Law & Poverty</button>
          <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-pil')">Public Interest Lawyering</button>
          <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-adr')">ADR</button>
          <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-research')">Research Class</button>
        </div>

        <div id="sub-drugs" class="tab-panel active">
          <div class="faculty-tag">Faculty: Dr. Basant Singh (@D)</div>
          <div class="text-note-entry"><div class="date-header">📅 Wednesday, 05 August 2026</div>
          <div class="note-body">
            <p><strong>1. Course Administration and Approach to the Syllabus</strong></p>
            <ul><li><strong>Curriculum Shift:</strong> Moved from 10th to 9th semester.</li><li><strong>Philosophy:</strong> Uncover the syllabus rather than merely cover it.</li></ul>
            <p><strong>2. Foundational Concept: Special Law vs General Law</strong></p>
            <ul><li>Special Law overrides General Procedure (CrPC/BNSS). Remand limit starts at 180 days.</li></ul>
          </div></div>
        </div>

        <div id="sub-forensics" class="tab-panel">
          <div class="faculty-tag">Faculty: Dr. Basant Singh (@F)</div>
          <div class="text-note-entry"><div class="date-header">📅 Wednesday, 05 August 2026</div>
          <div class="note-body"><p><strong>1. Statutory Mandate under BNSS, 2023</strong></p><ul><li>Seven-Year Rule: Crimes carrying 7+ years sentence require mandatory crime scene forensic visits.</li></ul></div></div>
        </div>

        <div id="sub-poverty" class="tab-panel">
          <div class="faculty-tag">Faculty: Dr. Gurneet Singh (PG) / Mr. Aditya (PA)</div>
          <div class="text-note-entry"><div class="date-header">📅 Wednesday, 05 August 2026</div>
          <div class="note-body"><p><strong>1. Right to Food & Legal Precedents</strong></p><ul><li>PUCL v. UOI (2001): Right to Food held as a fundamental right under Art. 21.</li></ul></div></div>
        </div>

        <div id="sub-pil" class="tab-panel">
          <div class="faculty-tag">Faculty: Dr. Renuka Soni (LR) / Dr. Gurneet Singh (LG)</div>
          <div class="text-note-entry"><div class="date-header">📅 Wednesday, 05 August 2026</div>
          <div class="note-body"><p><strong>1. Introduction to PIL</strong></p><ul><li>Public Interest Lawyering enables public-spirited citizens to bring causes on behalf of underrepresented groups.</li></ul></div></div>
        </div>

        <div id="sub-adr" class="tab-panel">
          <div class="faculty-tag">Faculty: Dr. Gurmanpreet Kaur (AG) / Dr. Abhinandan Bassi (AA)</div>
          <div class="text-note-entry"><div class="date-header">📅 Wednesday, 05 August 2026</div>
          <div class="note-body"><p><strong>1. Pendency vs Delay vs Arrears</strong></p><ul><li>Pendency is total case lifespan; Delay refers to external impediments; Arrears is statistical judicial backlog.</li></ul></div></div>
        </div>

        <div id="sub-research" class="tab-panel">
          <div class="faculty-tag">Faculty: Scheduled Research Hour</div>
          <div class="text-note-entry"><div class="date-header">📅 Wednesday, 05 August 2026</div>
          <div class="note-body"><p>Reserved for library preparation and dissertation work.</p></div></div>
        </div>
      </div>
      <iframe name="hidden_gform" id="hidden_gform" style="display:none;"></iframe>
    `;

    // Initialize check-in validation state
    if (localStorage.getItem("rgnul_notes_access") === "granted") {
      document.getElementById("checkinScreen").style.display = "none";
      document.getElementById("notesPortal").style.display = "block";
    }

    document.getElementById("notesPortal").addEventListener('contextmenu', e => e.preventDefault());
  });

  // Protection against copy/print hotkeys
  document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && ['p', 'c', 'u', 'P', 'C', 'U'].includes(e.key)) {
      e.preventDefault();
      return false;
    }
  });
})();

// Global Handler Functions
function processCheckin() {
  var nameVal = document.getElementById("fullName").value.trim();
  var sourceVal = document.getElementById("discoverySource").value;

  if (!nameVal || !sourceVal) {
    alert("Please provide your name and selection.");
    return;
  }

  var googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSe71m5h2HjQCisux6abVduaijDRnAz1zr_6zBjEoLKdz1seIw/formResponse";
  var tempForm = document.createElement("form");
  tempForm.action = googleFormAction;
  tempForm.method = "POST";
  tempForm.target = "hidden_gform";

  var inputName = document.createElement("input");
  inputName.type = "hidden"; inputName.name = "entry.241153369"; inputName.value = nameVal;
  tempForm.appendChild(inputName);

  var inputSource = document.createElement("input");
  inputSource.type = "hidden"; inputSource.name = "entry.1744506893"; inputSource.value = sourceVal;
  tempForm.appendChild(inputSource);

  document.body.appendChild(tempForm);
  tempForm.submit();
  document.body.removeChild(tempForm);

  localStorage.setItem("rgnul_notes_access", "granted");
  localStorage.setItem("rgnul_student_name", nameVal);

  document.getElementById("checkinScreen").style.display = "none";
  document.getElementById("notesPortal").style.display = "block";
}

function switchSubjectTab(evt, panelId) {
  let panels = document.getElementsByClassName("tab-panel");
  for (let p of panels) p.classList.remove("active");

  let tabs = document.getElementsByClassName("tab-pill");
  for (let t of tabs) t.classList.remove("active");

  document.getElementById(panelId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
