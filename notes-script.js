<!-- RGNUL 9th Sem Custom Date Notes Portal -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .portal-root {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #1e293b;
    max-width: 850px;
    margin: 24px auto;
  }

  /* Aesthetic Check-In Card */
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

  .checkin-title {
    color: #0f172a;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 0 6px 0;
  }

  .checkin-subtitle {
    color: #64748b;
    font-size: 0.875rem;
    margin-bottom: 20px;
  }

  .form-field {
    margin-bottom: 16px;
  }

  .form-field label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .form-field input, .form-field select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background-color: #f8fafc;
    box-sizing: border-box;
    outline: none;
    font-size: 0.925rem;
  }

  .btn-primary {
    width: 100%;
    background-color: #0f172a;
    color: #ffffff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .btn-primary:hover {
    background-color: #0284c7;
  }

  /* Notes Container */
  .notes-container {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    display: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .notes-header-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 18px 0;
  }

  .tabs-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 12px;
  }

  .tab-pill {
    background-color: #f1f5f9;
    color: #475569;
    border: none;
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
  }

  .tab-pill.active {
    background-color: #0284c7;
    color: #ffffff;
  }

  .tab-panel {
    display: none;
  }

  .tab-panel.active {
    display: block;
  }

  .faculty-tag {
    font-size: 0.85rem;
    font-weight: 600;
    color: #0369a1;
    background: #f0f9ff;
    padding: 6px 12px;
    border-radius: 6px;
    display: inline-block;
    margin-bottom: 16px;
  }

  /* Text Entry Box */
  .text-note-entry {
    background-color: #f8fafc;
    border-left: 4px solid #0284c7;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .date-header {
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 8px;
    font-size: 1.05rem;
  }

  .note-body {
    color: #334155;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .note-body ul {
    margin-top: 4px;
    margin-bottom: 8px;
    padding-left: 20px;
  }

  .note-body p {
    margin: 6px 0;
  }

  /* Print Protection: Blocks printing and PDF exporting */
  @media print {
    body {
      display: none !important;
    }
    html::after {
      content: "Printing and exporting notes is disabled for this portal.";
      font-family: sans-serif;
      font-size: 18px;
      font-weight: bold;
      color: #0f172a;
      display: block;
      padding: 50px;
      text-align: center;
    }
  }
</style>

<!-- Hidden target iframe for silent Google Form submissions -->
<iframe name="hidden_gform" id="hidden_gform" style="display:none;"></iframe>

<div class="portal-root">
  <!-- Check-In Screen -->
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

  <!-- Main Notes Section -->
  <div id="notesPortal" class="notes-container">
    <h2 class="notes-header-title">📖 RGNUL Ninth Semester - Daily Class Notes (2026)</h2>

    <!-- Subject Tabs -->
    <div class="tabs-flex">
      <button class="tab-pill active" onclick="switchSubjectTab(event, 'sub-drugs')">Law of Drugs & Narcotics</button>
      <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-forensics')">Forensic Sciences</button>
      <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-poverty')">Law & Poverty</button>
      <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-pil')">Public Interest Lawyering</button>
      <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-adr')">ADR</button>
      <button class="tab-pill" onclick="switchSubjectTab(event, 'sub-research')">Research Class</button>
    </div>

    <!-- Subject 1: Law of Drugs & Narcotics -->
    <div id="sub-drugs" class="tab-panel active">
      <div class="faculty-tag">Faculty: Dr. Basant Singh (@D)</div>

      <div class="text-note-entry">
        <div class="date-header">📅 Wednesday, 05 August 2026</div>
        <div class="note-body">
          <p><strong>1. Course Administration and Approach to the Syllabus</strong></p>
          <ul>
            <li><strong>Curriculum Shift:</strong> The NDPS (Narcotic Drugs and Psychotropic Substances) course, which was previously a 10th-semester subject, has been moved by the administration to the 9th semester.</li>
            <li><strong>The "Uncover" Philosophy:</strong>
              <ul>
                <li>The educator emphasizes that the objective of this course is to "uncover" the syllabus rather than merely "cover" it.</li>
                <li>Covering a syllabus acts as a limitation that finishes the subject prematurely, whereas uncovering it allows for a deeper, more practical understanding of the law.</li>
                <li>The subject will not be taught rigidly section-by-section; instead, the focus will be strictly on important concepts and practical applications.</li>
              </ul>
            </li>
            <li><strong>The "Double Dhamaka" Academic Gift:</strong>
              <ul>
                <li>Rather than enforcing strict classroom attendance, the educator expects students to be active, self-driven, and utilize the library for their preparation.</li>
              </ul>
            </li>
            <li><strong>Grading and Passing Standards:</strong>
              <ul>
                <li>Historically, no student has ever failed NDPS or Forensic Science under this educator unless they wrote absolutely nothing on their answer scripts.</li>
              </ul>
            </li>
          </ul>

          <p><strong>2. Legal Updates and Bar Association Strikes</strong></p>
          <ul>
            <li><strong>Pending Judicial Recruitment Judgments:</strong> There is a highly anticipated judicial judgment pending regarding recruitment exams. The educator notes there is a 99% probability of a student-favourable outcome.</li>
            <li><strong>Bar Association Strike against LADC:</strong> The entire Punjab and Haryana Bar Association has been on strike for over a month. The strike is a protest against the new LADC (Legal Aid Defense Counsel) policy. As part of the protest, the Bar is scheduled to demonstrate at Jantar Mantar on 7th August.</li>
          </ul>

          <p><strong>3. Foundational Concept: Special Law vs General Law</strong></p>
          <p>The educator introduces NDPS through the lens of its classification as a "Special Law", contrasting it with general penal codes:</p>
          <ul>
            <li><strong>Definition of Special Law:</strong> It is a law framed by the legislature for a specific, designated purpose.</li>
            <li><strong>Analogies representing the "Special" Character:</strong>
              <ul>
                <li><em>The Special School Analogy:</em> Just as a district has general schools and "special schools" designed specifically for children with unique needs, a Special Law targets a specific class of issues.</li>
                <li><em>The Gym Trainer Analogy:</em> Paying a general gym fee provides access to basic equipment, but paying extra for a "special trainer" secures tailored, dedicated guidance.</li>
                <li><em>The Restaurant Waiter Analogy:</em> A general order follows standard procedures, but tipping a waiter secures customized, "special" service.</li>
              </ul>
            </li>
            <li><strong>Triggers for enacting Special Laws:</strong> Special Laws are created by the State or Central Government when General Law becomes obsolete, silent, or fails to function effectively to address evolving societal challenges. (e.g., Sexual Offences prior to 2012, Punjab Sacrilege Laws).</li>
            <li><strong>The Special Apparatus:</strong> A Special Law mandates a dedicated machinery—including Special Courts and Special Procedures—to achieve its specific objectives.</li>
          </ul>

          <p><strong>4. Societal Threat and Narco-Terrorism</strong></p>
          <ul>
            <li><strong>Definition of Narco-Terrorism:</strong> This refers to the illicit alliance where drug smugglers generate immense proceed money (profits) from drug trafficking and utilize these funds directly to finance activities against the state. It poses a severe threat to national interest, internal security, and the stability of the government.</li>
            <li><strong>Pivotal Judicial Precedent:</strong> The educator highlights a landmark High Court Bail Order from February (Punjab & Haryana High Court). The High Court explicitly rejected the accused's bail application, employing the term "Narco-Terrorism".</li>
          </ul>

          <p><strong>5. Interplay between Special and General Procedure</strong></p>
          <ul>
            <li><strong>The Procedural Prevalence Rule:</strong> Special procedure always prevails (supersedes) over the general procedure.</li>
            <li><strong>The Exhaustiveness of NDPS:</strong> The NDPS Act is not an exhaustive or complete code. Where the NDPS Act is silent, the general provisions of the CrPC/BNSS apply.</li>
            <li><strong>The Remand Distinction:</strong> Under general criminal procedure, investigative remand limits are capped to shorter intervals (e.g., 60 or 90 days). Under the NDPS Act, the investigative remand period starts at 180 days.</li>
          </ul>

          <p><strong>6. Geopolitical Context: Border Control and Technology</strong></p>
          <ul>
            <li><strong>Geopolitical Vulnerabilities:</strong> India shares highly sensitive international borders with countries like Bangladesh and Golden Crescent nations (Afghanistan and Pakistan).</li>
            <li><strong>The Drone Smuggling Menace:</strong> Smugglers utilize advanced drone fleets operating like "fireflies" (Jugnus) at night to drop drug shipments across the international border.</li>
            <li><strong>State Initiatives:</strong> This menace is the primary driver behind major state-led campaigns like Punjab's "Yudh Nasha Virudh" (War Against Drugs).</li>
          </ul>

          <p><strong>7. Professional Ethics and Career Choices</strong></p>
          <ul>
            <li><strong>The Reality of Drug Abuse in Institutions:</strong> Severe warning against substance abuse; four university students were expelled/removed in the previous year.</li>
            <li><strong>Why Choose Criminal Law?</strong> Represents society directly. Demands immense patience (young lawyers often self-fund for up to five years).</li>
            <li><strong>The Limitations of AI (ChatGPT) in Law:</strong> AI lacks professional decorum, advocacy skills, and relies on uncurated datasets. Human professional clarity and oral advocacy remain irreplaceable.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Subject 2: Forensic Sciences -->
    <div id="sub-forensics" class="tab-panel">
      <div class="faculty-tag">Faculty: Dr. Basant Singh (@F)</div>

      <div class="text-note-entry">
        <div class="date-header">📅 Wednesday, 05 August 2026</div>
        <div class="note-body">
          <p><strong>1. Introduction and Etymology of Forensic Science</strong></p>
          <ul>
            <li><strong>Definition:</strong> Applied scientific discipline used by investigating agencies to assist in legal investigations.</li>
            <li><strong>Etymological Roots:</strong> Root "For" — refers to things made available "for" the purposes of legal procedures when regular mechanisms fail.</li>
          </ul>

          <p><strong>2. Legal Philosophy of "Upholding" vs "Delivering" Justice</strong></p>
          <ul>
            <li><strong>The Fallacy of "Justice Delivery":</strong> Courts do not "deliver" justice; the actual function of the court is to "hold" or "uphold" justice strictly on the basis of evidence.</li>
          </ul>

          <p><strong>3. Historical Evolution of Forensic Science in India</strong></p>
          <ul>
            <li><strong>Post-Independence Machinery:</strong> Establishment of specialized chemical laboratories following Chopra and Mitra Reports.</li>
            <li><strong>Modern Adaptation ("Tom and Jerry" Dynamic):</strong> Perpetrators become highly sophisticated, requiring investigative agencies to depend heavily on forensic science.</li>
          </ul>

          <p><strong>4. UPSC vs Judiciary Perspectives</strong></p>
          <ul>
            <li><strong>Judiciary Perspective:</strong> Evolving societal patterns require courts to rely on scientific tools.</li>
            <li><strong>UPSC Perspective:</strong> Welfare State Policy under the Constitution obligates the State to protect citizens using modern forensics.</li>
          </ul>

          <p><strong>5. Statutory Mandate under BNSS, 2023</strong></p>
          <ul>
            <li><strong>The "Seven-Year" Rule:</strong> Under BNSS Sections 319 and 329, if an offence carries imprisonment of 7 years or more, the police <em>shall</em> summon forensic experts to the crime scene.</li>
          </ul>

          <p><strong>6. Applications & Case Study</strong></p>
          <ul>
            <li><strong>Civil/Criminal Use:</strong> Questioned Documents in CPC; physical evidence in murder/accident trials.</li>
            <li><strong>Harvester Accident Case (2018):</strong> Reconstructed scene proved 3 blood types 2 years after incident, turning a 304A IPC accident charge into a 302 IPC murder trial.</li>
            <li><strong>Digital Forensics:</strong> Smartphones as the "traitor in the pocket" — deleted data is recoverable via chip/ECG extraction.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Subject 3: Law & Poverty -->
    <div id="sub-poverty" class="tab-panel">
      <div class="faculty-tag">Faculty: Dr. Gurneet Singh (PG) / Mr. Aditya (PA)</div>

      <div class="text-note-entry">
        <div class="date-header">📅 Wednesday, 05 August 2026</div>
        <div class="note-body">
          <p><strong>1. Poverty Measurement in India</strong></p>
          <ul>
            <li><strong>Lakdawala Committee:</strong> Calorie intake (2,400 rural / 2,100 urban).</li>
            <li><strong>Suresh Tendulkar Committee (2005):</strong> Private consumer expenditure (₹27 rural / ₹33 urban per day).</li>
            <li><strong>NITI Aayog (2015-Present):</strong> Replaced Planning Commission as the apex body.</li>
          </ul>

          <p><strong>2. Right to Food & NFSA, 2013</strong></p>
          <ul>
            <li>Codified under National Food Security Act (30-35 kg grain per BPL household/month).</li>
            <li>Schemes: ICDS, Midday Meal Scheme, Antyodaya Anna Yojana.</li>
            <li>Constitutional Articles: Art. 21 (Life), Art. 47 (Nutrition), Art. 41 (Work).</li>
            <li><em>PUCL v. UOI (2001):</em> Supreme Court ruled Right to Food is a fundamental right under Art. 21.</li>
          </ul>

          <p><strong>3. Sustainable Development & Legal Precedents</strong></p>
          <ul>
            <li>Generational Equity, Stockholm Declaration (1972), Agenda 21, Kyoto Protocol (CBDR).</li>
            <li><em>Olga Tellis v. BMC:</em> Pavement dwellers' right to livelihood protected under Art. 21.</li>
            <li><em>Khatri v. State of Bihar:</em> Free legal aid is an absolute fundamental right from the stage of arrest/FIR.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Subject 4: Public Interest Lawyering -->
    <div id="sub-pil" class="tab-panel">
      <div class="faculty-tag">Faculty: Dr. Renuka Soni (LR) / Dr. Gurneet Singh (LG)</div>

      <div class="text-note-entry">
        <div class="date-header">📅 Wednesday, 05 August 2026</div>
        <div class="note-body">
          <p><strong>1. Introduction to PIL & Legal Aid</strong></p>
          <ul>
            <li>PIL allows public-spirited individuals to file lawsuits on behalf of marginalized sections.</li>
            <li>Answer Structuring Rule: Avoid filling pages; cite case laws with specific provisions, purpose, and exact relevance.</li>
          </ul>

          <p><strong>2. Constitutional Mapping Protocol</strong></p>
          <ul>
            <li>Sequence: Preamble (Socialistic Structure) → Fundamental Rights (Art. 14, 21) → Fundamental Duties → Writs.</li>
            <li>Jurisprudential Angle: Apply Realist School (law on paper vs practical ground realities).</li>
          </ul>

          <p><strong>3. Definitions & Concepts</strong></p>
          <ul>
            <li><strong>Justice P.N. Bhagwati Definition:</strong> Providing arrangements so judicial machinery becomes accessible.</li>
            <li><strong>Legal Illiteracy:</strong> Anyone who does not understand the specific legal concept in question (applies to educated individuals too).</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Subject 5: ADR -->
    <div id="sub-adr" class="tab-panel">
      <div class="faculty-tag">Faculty: Dr. Gurmanpreet Kaur (AG) / Dr. Abhinandan Bassi (AA)</div>

      <div class="text-note-entry">
        <div class="date-header">📅 Wednesday, 05 August 2026</div>
        <div class="note-body">
          <p><strong>1. Introduction to Alternative Dispute Resolution</strong></p>
          <ul>
            <li>Party-driven, voluntary framework providing options: Arbitration, Conciliation, Mediation, Permanent Lok Adalat.</li>
          </ul>

          <p><strong>2. Court Backlog & Legal Distinctions</strong></p>
          <ul>
            <li><strong>Pendency (4 Crore+ Cases):</strong> Lifespan of a case from filing to final disposal.</li>
            <li><strong>Delay:</strong> Procedural impediments outside control of parties (absent witnesses, 15-day adjournment rules).</li>
            <li><strong>Arrears:</strong> Statistical deficit between new cases instituted and cases disposed of by a judge.</li>
          </ul>

          <p><strong>3. Systemic Causes</strong></p>
          <ul>
            <li>Shortage of judicial officers/staff, advocate adjournment tactics, cultural bias favoring litigation over ADR.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Subject 6: Research Class -->
    <div id="sub-research" class="tab-panel">
      <div class="faculty-tag">Faculty: Scheduled Research Hour</div>

      <div class="text-note-entry">
        <div class="date-header">📅 Wednesday, 05 August 2026</div>
        <div class="note-body">
          <p><strong>Research Methodology & Library Work</strong></p>
          <ul>
            <li>Reserved for self-driven research, law journal reviews, and dissertation topic selection.</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var checkinStatus = localStorage.getItem("rgnul_notes_access");
    var mainPortal = document.getElementById("notesPortal");
    var checkinScreen = document.getElementById("checkinScreen");

    if (checkinStatus === "granted") {
      if (checkinScreen) checkinScreen.style.display = "none";
      if (mainPortal) mainPortal.style.display = "block";
    }

    if (mainPortal) {
      // Disable Right Click menu
      mainPortal.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });
    }

    // Disable Keyboard Shortcuts (Ctrl+P, Ctrl+C, Ctrl+U)
    document.addEventListener("keydown", function(e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        alert("Printing is disabled on this portal.");
        return false;
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        return false;
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
    });
  });

  function processCheckin() {
    var nameVal = document.getElementById("fullName").value.trim();
    var sourceVal = document.getElementById("discoverySource").value;

    if (nameVal === "") {
      alert("Please provide your name.");
      return;
    }
    if (sourceVal === "") {
      alert("Please select how you found out about these notes.");
      return;
    }

    // --- GOOGLE FORM SUBMISSION VIA HIDDEN IFRAME ---
    var googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSe71m5h2HjQCisux6abVduaijDRnAz1zr_6zBjEoLKdz1seIw/formResponse";
    var nameEntryID = "entry.241153369";
    var sourceEntryID = "entry.1744506893";

    var tempForm = document.createElement("form");
    tempForm.action = googleFormAction;
    tempForm.method = "POST";
    tempForm.target = "hidden_gform";

    var inputName = document.createElement("input");
    inputName.type = "hidden";
    inputName.name = nameEntryID;
    inputName.value = nameVal;
    tempForm.appendChild(inputName);

    var inputSource = document.createElement("input");
    inputSource.type = "hidden";
    inputSource.name = sourceEntryID;
    inputSource.value = sourceVal;
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
</script>
