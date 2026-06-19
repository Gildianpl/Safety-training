const PASS_THRESHOLD = 70;
const STORAGE_KEY = "bhp-training-program-v9";
const ADMIN_SESSION_KEY = "bhp-command-center-admin";
const EMPLOYEE_SESSION_KEY = "bhp-employee-portal";
const LANGUAGE_KEY = "bhp-training-language";
const BROCHURE_PAGE_COUNT = 29;
const BROCHURE_URLS = {
  pl: "assets/welcoming-brochure-concepts-2026-pl.pdf",
  en: "assets/welcoming-brochure-concepts-2026-en.pdf",
  nl: "assets/welcoming-brochure-concepts-2026-pl.pdf"
};

const UI = {
  pl: {
    languageName: "Polski",
    languageLabel: "Język",
    pageTitle: "Program szkoleniowy BHP",
    commandCenter: "Centrum dowodzenia",
    employeePortal: "Portal pracownika",
    knowledgeBase: "Baza wiedzy",
    adminPanel: "Panel administratora",
    employeeTraining: "Szkolenie pracownika",
    questionBank: "Baza wiedzy i pytań",
    accessEyebrow: "Dostęp do systemu",
    accessTitle: "Centrum BHP",
    accessIntro: "Administrator zarządza szkoleniami, pytaniami i raportami. Pracownik używa wyłącznie swojego kodu dostępu.",
    authorizedPerson: "Osoba uprawniona",
    adminCode: "Kod administratora",
    enterCenter: "Wejdź do centrum",
    employeeCode: "Kod pracownika",
    startTraining: "Rozpocznij szkolenie",
    passThreshold: "Próg zaliczenia",
    passThresholdText: "70% poprawnych odpowiedzi",
    logout: "Wyloguj",
    savedBrowser: "Dane zapisują się w tej przeglądarce",
    employees: "Pracownicy",
    passed: "Zaliczone",
    questionPool: "Pula pytań",
    trainingModules: "Moduły szkolenia",
    drawnInTest: "Losowane w teście",
    addEmployee: "Dodaj pracownika",
    addEmployeeInfo: "Po dodaniu pracownik otrzyma kod dostępu i rozpocznie szkolenie od broszury bezpieczeństwa.",
    fullName: "Imię i nazwisko",
    position: "Stanowisko",
    settings: "Ustawienia szkolenia",
    settingsInfo: "Temat będzie widoczny w podsumowaniu i teście wiedzy.",
    summaryTopic: "Temat podsumowania",
    drawCount: "Liczba pytań losowanych do testu",
    saveSettings: "Zapisz ustawienia",
    knowledgeSummary: "Podsumowanie wiedzy",
    editableParts: "Edytowalne części przed testem",
    authorizedPeople: "Osoby uprawnione",
    centerAccess: "Dostęp do centrum dowodzenia",
    addPermission: "Dodaj uprawnienie",
    restoreData: "Przywróć dane startowe",
    employeePath: "Ścieżka pracownika",
    safetyTraining: "Szkolenie BHP",
    employee: "Pracownik",
    stages: "Etapy szkolenia",
    stepBrochure: "1. Broszura",
    stepSummary: "2. Podsumowanie",
    stepTest: "3. Test",
    stepResult: "4. Wynik",
    mandatoryPolicy: "Obowiązkowa polityka bezpieczeństwa",
    brochureTitle: "Broszura powitalna MEGA - Container Concepts",
    page: "Strona",
    brochureIncomplete: "Broszura nieukończona",
    brochureComplete: "Broszura ukończona - można przejść do podsumowania",
    brochureProgress: "Postęp broszury",
    previousPage: "Poprzednia strona",
    nextPage: "Następna strona",
    goSummary: "Przejdź do podsumowania",
    brochurePreview: "Podgląd broszury",
    translatedBrochure: "Tłumaczenie strony broszury",
    zoomOut: "Pomniejsz",
    zoomIn: "Powiększ",
    resetZoom: "Reset",
    brochureZoom: "Powiększenie broszury",
    trainingAnimation: "Animacja szkoleniowa",
    summaryTopicTitle: "Podsumowanie wiedzy",
    summaryIntro: "Krótka powtórka najważniejszych zasad z broszury przed testem wiedzy.",
    stage: "Etap",
    summaryIncomplete: "Podsumowanie nieukończone",
    summaryComplete: "Podsumowanie ukończone - można poprosić o test",
    reviewed: "Przejrzano",
    parts: "części",
    summaryProgress: "Postęp podsumowania",
    importantInfo: "Najważniejsze informacje",
    summaryPart: "Część podsumowania",
    moduleTitle: "Tytuł modułu",
    previousStage: "Poprzedni etap",
    nextStage: "Następny etap",
    requestTest: "Poproś o test",
    finalTest: "Test końcowy",
    testContext: "Pytania zostaną wybrane losowo z puli.",
    previous: "Poprzednie",
    next: "Następne",
    newAttempt: "Nowe podejście",
    checkResult: "Sprawdź wynik",
    startFromBrochure: "Rozpocznij od broszury",
    questionText: "Treść pytania",
    answerA: "Odpowiedź A",
    answerB: "Odpowiedź B",
    answerC: "Odpowiedź C",
    correctAnswer: "Poprawna odpowiedź",
    addToPool: "Dodaj do puli",
    poolInfo: "Test losuje pytania z tej listy przy każdym podejściu.",
    emptyTitle: "Brak danych",
    emptyDescription: "Dodaj pierwszą pozycję, aby kontynuować.",
    code: "Kod",
    remove: "Usuń",
    noEmployees: "Brak pracowników",
    noEmployeesInfo: "Dodaj osobę, aby uruchomić ścieżkę szkoleniową.",
    accessCode: "Kod dostępu",
    lastScore: "Ostatni wynik",
    reports: "Raporty",
    trainingRegister: "Rejestr szkoleń i testów",
    trainingRegisterInfo: "Potwierdzenia odbycia testu wiedzy",
    reportNumber: "Nr raportu",
    trainingDate: "Data szkolenia",
    testDate: "Data testu",
    employeeName: "Imię i nazwisko",
    employeeRole: "Stanowisko",
    testScore: "Wynik testu",
    testStatus: "Status",
    noReports: "Brak raportów",
    noReportsInfo: "Raport pojawi się po zakończeniu testu przez pracownika.",
    start: "Rozpocznij",
    latestReport: "Ostatni raport",
    passedReport: "zaliczony",
    failedReport: "niezaliczony",
    noQuestions: "Brak pytań",
    noQuestionsInfo: "Dodaj pytania, aby test mógł zostać uruchomiony.",
    edit: "Edytuj",
    removeQuestion: "Usuń pytanie",
    noSummary: "Brak części podsumowania",
    noSummaryInfo: "Dodaj lub przywróć dane startowe.",
    knowledgePoints: "punktów wiedzy",
    trainingPrefix: "Szkolenie",
    drawnQuestions: "Losowanych pytań",
    fromPool: "z puli",
    requiredToPass: "Do zaliczenia wymagane jest",
    selectAll: "Wybierz wszystkie poprawne odpowiedzi.",
    selectOne: "Wybierz jedną poprawną odpowiedź.",
    answerAll: "Odpowiedz na wszystkie pytania przed sprawdzeniem wyniku",
    answersSaved: "Odpowiedzi zapisane",
    question: "Pytanie",
    passedTraining: "Szkolenie zaliczone",
    failedTraining: "Szkolenie niezaliczone",
    congratulations: "Gratulacje",
    retakeRequired: "Wymagane jest ponowne podejście",
    correctAnswers: "Poprawne odpowiedzi",
    addedEmployee: "Dodano pracownika. Kod dostępu",
    settingsSaved: "Ustawienia zapisane",
    permissionAdded: "Dodano uprawnienie dla",
    cannotRemoveLastAdmin: "Nie można usunąć ostatniej osoby uprawnionej.",
    loginRequired: "Zaloguj się jako osoba uprawniona, aby wejść do centrum dowodzenia.",
    loggedIn: "Zalogowano",
    noPermission: "Brak uprawnień do centrum dowodzenia albo błędny kod.",
    noEmployeeCode: "Nie znaleziono pracownika z takim kodem dostępu.",
    loggedOut: "Wylogowano z centrum dowodzenia.",
    statusPassed: "Zaliczone",
    statusFailed: "Do poprawy",
    statusTraining: "W trakcie",
    statusNew: "Nowy",
    graphicAlt: "Grafika z instrukcji bezpieczeństwa",
    signGraphic: "Grafika znaku bezpieczeństwa",
    titlePrompt: "Tytuł części podsumowania:",
    summaryPrompt: "Krótki opis:",
    pointsPrompt: "Punkty wiedzy oddzielone średnikiem:",
    questionPrompt: "Treść pytania:",
    answerPrompt: "Odpowiedź",
    correctPrompt: "Poprawne odpowiedzi jako numery, np. 1 albo 1,2,3:",
    alertCorrect: "Nie zapisano zmian: podaj co najmniej jedną poprawną odpowiedź."
  },
  en: {
    languageName: "English",
    languageLabel: "Language",
    pageTitle: "Safety training program",
    commandCenter: "Command center",
    employeePortal: "Employee portal",
    knowledgeBase: "Knowledge base",
    adminPanel: "Administrator panel",
    employeeTraining: "Employee training",
    questionBank: "Knowledge and question bank",
    accessEyebrow: "System access",
    accessTitle: "Safety Center",
    accessIntro: "The administrator manages training, questions and reports. The employee uses only their personal access code.",
    authorizedPerson: "Authorized person",
    adminCode: "Administrator code",
    enterCenter: "Enter center",
    employeeCode: "Employee code",
    startTraining: "Start training",
    passThreshold: "Pass threshold",
    passThresholdText: "70% correct answers",
    logout: "Log out",
    savedBrowser: "Data is stored in this browser",
    employees: "Employees",
    passed: "Passed",
    questionPool: "Question pool",
    trainingModules: "Training modules",
    drawnInTest: "Drawn in test",
    addEmployee: "Add employee",
    addEmployeeInfo: "After being added, the employee receives an access code and starts with the safety brochure.",
    fullName: "Full name",
    position: "Position",
    settings: "Training settings",
    settingsInfo: "The topic will be shown in the summary and knowledge test.",
    summaryTopic: "Summary topic",
    drawCount: "Number of questions drawn for the test",
    saveSettings: "Save settings",
    knowledgeSummary: "Knowledge summary",
    editableParts: "Editable sections before the test",
    authorizedPeople: "Authorized people",
    centerAccess: "Command center access",
    addPermission: "Add permission",
    restoreData: "Restore starter data",
    employeePath: "Employee path",
    safetyTraining: "Safety training",
    employee: "Employee",
    stages: "Training stages",
    stepBrochure: "1. Brochure",
    stepSummary: "2. Summary",
    stepTest: "3. Test",
    stepResult: "4. Result",
    mandatoryPolicy: "Mandatory safety policy",
    brochureTitle: "MEGA - Container Concepts welcome brochure",
    page: "Page",
    brochureIncomplete: "Brochure not completed",
    brochureComplete: "Brochure completed - the summary is available",
    brochureProgress: "Brochure progress",
    previousPage: "Previous page",
    nextPage: "Next page",
    goSummary: "Go to summary",
    brochurePreview: "Brochure preview",
    translatedBrochure: "Translated brochure page",
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    resetZoom: "Reset",
    brochureZoom: "Brochure zoom",
    trainingAnimation: "Training animation",
    summaryTopicTitle: "Knowledge summary",
    summaryIntro: "A short review of the most important rules from the brochure before the knowledge test.",
    stage: "Stage",
    summaryIncomplete: "Summary not completed",
    summaryComplete: "Summary completed - the test can be requested",
    reviewed: "Reviewed",
    parts: "sections",
    summaryProgress: "Summary progress",
    importantInfo: "Key information",
    summaryPart: "Summary section",
    moduleTitle: "Module title",
    previousStage: "Previous stage",
    nextStage: "Next stage",
    requestTest: "Request test",
    finalTest: "Final test",
    testContext: "Questions will be randomly selected from the pool.",
    previous: "Previous",
    next: "Next",
    newAttempt: "New attempt",
    checkResult: "Check result",
    startFromBrochure: "Start from brochure",
    questionText: "Question text",
    answerA: "Answer A",
    answerB: "Answer B",
    answerC: "Answer C",
    correctAnswer: "Correct answer",
    addToPool: "Add to pool",
    poolInfo: "The test randomly selects questions from this list on every attempt.",
    emptyTitle: "No data",
    emptyDescription: "Add the first item to continue.",
    code: "Code",
    remove: "Remove",
    noEmployees: "No employees",
    noEmployeesInfo: "Add a person to start the training path.",
    accessCode: "Access code",
    lastScore: "Last score",
    reports: "Reports",
    trainingRegister: "Training and test register",
    trainingRegisterInfo: "Proof of completed knowledge tests",
    reportNumber: "Report no.",
    trainingDate: "Training date",
    testDate: "Test date",
    employeeName: "Full name",
    employeeRole: "Position",
    testScore: "Test score",
    testStatus: "Status",
    noReports: "No reports",
    noReportsInfo: "A report will appear after an employee completes the test.",
    start: "Start",
    latestReport: "Latest report",
    passedReport: "passed",
    failedReport: "failed",
    noQuestions: "No questions",
    noQuestionsInfo: "Add questions so the test can be started.",
    edit: "Edit",
    removeQuestion: "Remove question",
    noSummary: "No summary sections",
    noSummaryInfo: "Add or restore starter data.",
    knowledgePoints: "knowledge points",
    trainingPrefix: "Training",
    drawnQuestions: "Drawn questions",
    fromPool: "from pool",
    requiredToPass: "Required to pass",
    selectAll: "Select all correct answers.",
    selectOne: "Select one correct answer.",
    answerAll: "Answer all questions before checking the result",
    answersSaved: "Answers saved",
    question: "Question",
    passedTraining: "Training passed",
    failedTraining: "Training failed",
    congratulations: "Congratulations",
    retakeRequired: "Another attempt is required",
    correctAnswers: "Correct answers",
    addedEmployee: "Employee added. Access code",
    settingsSaved: "Settings saved",
    permissionAdded: "Permission added for",
    cannotRemoveLastAdmin: "The last authorized person cannot be removed.",
    loginRequired: "Log in as an authorized person to enter the command center.",
    loggedIn: "Logged in",
    noPermission: "No command center permission or incorrect code.",
    noEmployeeCode: "No employee was found with this access code.",
    loggedOut: "Logged out of the command center.",
    statusPassed: "Passed",
    statusFailed: "Needs retake",
    statusTraining: "In progress",
    statusNew: "New",
    graphicAlt: "Image from the safety instructions",
    signGraphic: "Safety sign graphic",
    titlePrompt: "Summary section title:",
    summaryPrompt: "Short description:",
    pointsPrompt: "Knowledge points separated with semicolons:",
    questionPrompt: "Question text:",
    answerPrompt: "Answer",
    correctPrompt: "Correct answers as numbers, e.g. 1 or 1,2,3:",
    alertCorrect: "Changes were not saved: provide at least one correct answer."
  },
  nl: {
    languageName: "Nederlands",
    languageLabel: "Taal",
    pageTitle: "VGM-opleidingsprogramma",
    commandCenter: "Commandocentrum",
    employeePortal: "Werknemersportaal",
    knowledgeBase: "Kennisbank",
    adminPanel: "Beheerderspaneel",
    employeeTraining: "Werknemersopleiding",
    questionBank: "Kennis- en vragenbank",
    accessEyebrow: "Toegang tot het systeem",
    accessTitle: "VGM-centrum",
    accessIntro: "De beheerder beheert opleidingen, vragen en rapporten. De werknemer gebruikt alleen zijn persoonlijke toegangscode.",
    authorizedPerson: "Bevoegde persoon",
    adminCode: "Beheerderscode",
    enterCenter: "Ga naar centrum",
    employeeCode: "Werknemerscode",
    startTraining: "Start opleiding",
    passThreshold: "Slaaggrens",
    passThresholdText: "70% juiste antwoorden",
    logout: "Afmelden",
    savedBrowser: "Gegevens worden in deze browser opgeslagen",
    employees: "Werknemers",
    passed: "Geslaagd",
    questionPool: "Vragenpool",
    trainingModules: "Opleidingsmodules",
    drawnInTest: "Getrokken in test",
    addEmployee: "Werknemer toevoegen",
    addEmployeeInfo: "Na toevoeging ontvangt de werknemer een toegangscode en start hij met de veiligheidsbrochure.",
    fullName: "Naam en achternaam",
    position: "Functie",
    settings: "Opleidingsinstellingen",
    settingsInfo: "Het onderwerp wordt weergegeven in de samenvatting en kennistest.",
    summaryTopic: "Onderwerp samenvatting",
    drawCount: "Aantal vragen voor de test",
    saveSettings: "Instellingen opslaan",
    knowledgeSummary: "Kennisoverzicht",
    editableParts: "Bewerkbare onderdelen voor de test",
    authorizedPeople: "Bevoegde personen",
    centerAccess: "Toegang tot commandocentrum",
    addPermission: "Bevoegdheid toevoegen",
    restoreData: "Startgegevens herstellen",
    employeePath: "Werknemerstraject",
    safetyTraining: "VGM-opleiding",
    employee: "Werknemer",
    stages: "Opleidingsstappen",
    stepBrochure: "1. Brochure",
    stepSummary: "2. Samenvatting",
    stepTest: "3. Test",
    stepResult: "4. Resultaat",
    mandatoryPolicy: "Verplicht veiligheidsbeleid",
    brochureTitle: "Welkomstbrochure MEGA - Container Concepts",
    page: "Pagina",
    brochureIncomplete: "Brochure niet voltooid",
    brochureComplete: "Brochure voltooid - de samenvatting is beschikbaar",
    brochureProgress: "Voortgang brochure",
    previousPage: "Vorige pagina",
    nextPage: "Volgende pagina",
    goSummary: "Ga naar samenvatting",
    brochurePreview: "Brochurevoorbeeld",
    translatedBrochure: "Vertaalde brochurepagina",
    zoomOut: "Verkleinen",
    zoomIn: "Vergroten",
    resetZoom: "Reset",
    brochureZoom: "Brochurezoom",
    trainingAnimation: "Opleidingsanimatie",
    summaryTopicTitle: "Kennisoverzicht",
    summaryIntro: "Een korte herhaling van de belangrijkste regels uit de brochure voor de kennistest.",
    stage: "Stap",
    summaryIncomplete: "Samenvatting niet voltooid",
    summaryComplete: "Samenvatting voltooid - de test kan worden aangevraagd",
    reviewed: "Bekeken",
    parts: "onderdelen",
    summaryProgress: "Voortgang samenvatting",
    importantInfo: "Belangrijkste informatie",
    summaryPart: "Samenvattingsonderdeel",
    moduleTitle: "Moduletitel",
    previousStage: "Vorige stap",
    nextStage: "Volgende stap",
    requestTest: "Test aanvragen",
    finalTest: "Eindtest",
    testContext: "Vragen worden willekeurig uit de pool gekozen.",
    previous: "Vorige",
    next: "Volgende",
    newAttempt: "Nieuwe poging",
    checkResult: "Resultaat controleren",
    startFromBrochure: "Start vanaf brochure",
    questionText: "Vraagtekst",
    answerA: "Antwoord A",
    answerB: "Antwoord B",
    answerC: "Antwoord C",
    correctAnswer: "Juist antwoord",
    addToPool: "Toevoegen aan pool",
    poolInfo: "De test kiest bij elke poging willekeurig vragen uit deze lijst.",
    emptyTitle: "Geen gegevens",
    emptyDescription: "Voeg het eerste item toe om verder te gaan.",
    code: "Code",
    remove: "Verwijderen",
    noEmployees: "Geen werknemers",
    noEmployeesInfo: "Voeg een persoon toe om het opleidingstraject te starten.",
    accessCode: "Toegangscode",
    lastScore: "Laatste score",
    reports: "Rapporten",
    trainingRegister: "Register opleidingen en testen",
    trainingRegisterInfo: "Bewijzen van afgelegde kennistesten",
    reportNumber: "Rapportnr.",
    trainingDate: "Datum opleiding",
    testDate: "Datum test",
    employeeName: "Naam en achternaam",
    employeeRole: "Functie",
    testScore: "Testscore",
    testStatus: "Status",
    noReports: "Geen rapporten",
    noReportsInfo: "Een rapport verschijnt nadat een werknemer de test voltooit.",
    start: "Start",
    latestReport: "Laatste rapport",
    passedReport: "geslaagd",
    failedReport: "niet geslaagd",
    noQuestions: "Geen vragen",
    noQuestionsInfo: "Voeg vragen toe zodat de test kan starten.",
    edit: "Bewerken",
    removeQuestion: "Vraag verwijderen",
    noSummary: "Geen samenvattingsonderdelen",
    noSummaryInfo: "Voeg toe of herstel startgegevens.",
    knowledgePoints: "kennispunten",
    trainingPrefix: "Opleiding",
    drawnQuestions: "Getrokken vragen",
    fromPool: "uit pool",
    requiredToPass: "Vereist om te slagen",
    selectAll: "Selecteer alle juiste antwoorden.",
    selectOne: "Selecteer één juist antwoord.",
    answerAll: "Beantwoord alle vragen voordat u het resultaat controleert",
    answersSaved: "Antwoorden opgeslagen",
    question: "Vraag",
    passedTraining: "Opleiding geslaagd",
    failedTraining: "Opleiding niet geslaagd",
    congratulations: "Gefeliciteerd",
    retakeRequired: "Een nieuwe poging is vereist",
    correctAnswers: "Juiste antwoorden",
    addedEmployee: "Werknemer toegevoegd. Toegangscode",
    settingsSaved: "Instellingen opgeslagen",
    permissionAdded: "Bevoegdheid toegevoegd voor",
    cannotRemoveLastAdmin: "De laatste bevoegde persoon kan niet worden verwijderd.",
    loginRequired: "Meld u aan als bevoegde persoon om het commandocentrum te openen.",
    loggedIn: "Aangemeld",
    noPermission: "Geen toegang tot het commandocentrum of onjuiste code.",
    noEmployeeCode: "Geen werknemer gevonden met deze toegangscode.",
    loggedOut: "Afgemeld bij het commandocentrum.",
    statusPassed: "Geslaagd",
    statusFailed: "Opnieuw doen",
    statusTraining: "Bezig",
    statusNew: "Nieuw",
    graphicAlt: "Afbeelding uit de veiligheidsinstructies",
    signGraphic: "Afbeelding van veiligheidsteken",
    titlePrompt: "Titel van samenvattingsonderdeel:",
    summaryPrompt: "Korte beschrijving:",
    pointsPrompt: "Kennispunten gescheiden door puntkomma's:",
    questionPrompt: "Vraagtekst:",
    answerPrompt: "Antwoord",
    correctPrompt: "Juiste antwoorden als nummers, bv. 1 of 1,2,3:",
    alertCorrect: "Wijzigingen niet opgeslagen: geef minstens één juist antwoord op."
  }
};

const MODULE_TRANSLATIONS = {
  en: [
    {
      title: "Entering the site and moving around the yard",
      summary: "Pedestrians, ECH operators, forklift trucks, lorries and external suppliers work on the Container Concepts site. Visibility and eye contact are the basis of safe movement.",
      points: [
        "Container Concepts is located at Treurenborg 9.",
        "Always use the walkway when entering and moving around the manoeuvring yard.",
        "When passing ECH machines, forklifts or lorries, make eye contact with the driver.",
        "In the yard and warehouse, wear fluorescent clothing and a chest light.",
        "The critical risk is a collision between a pedestrian and a machine or vehicle."
      ]
    },
    {
      title: "Emergencies, accidents and fire",
      summary: "In an accident, fast reporting, calm behaviour, correct information for emergency services and following evacuation instructions are essential.",
      points: [
        "In an emergency, contact the foreman or call 112.",
        "The first aid point is in the foreman's office.",
        "SIHWA, the port ambulance service, can be reached at 03/541.00.23.",
        "When calling an ambulance, give: MEGA, Treurenborg 9, victim details, age, circumstances and severity of injuries.",
        "Contact safety immediately: Emily Meers 0032489113337 or Joyce Van Geffen 0032 492 11 24 47.",
        "Minor accidents without lost time must also be entered in the first aid register and reported to safety.",
        "A witness informs the supervisor, gives no drinks to the victim, keeps bystanders away and covers the victim.",
        "In case of electric shock, do not touch the victim. Switch off the power first.",
        "In case of fire, stay calm, shout 'FIRE', warn others, inform the supervisor and do not take risks.",
        "After using a fire extinguisher, always report it to the foreman so it can be replaced or refilled."
      ]
    },
    {
      title: "Evacuation and assembly points",
      summary: "Container Concepts has two assembly points. During evacuation, employees follow the evacuation leader's instructions.",
      points: [
        "One assembly point is in the car park in front of the tower building.",
        "The second assembly point is on the other side of the workshop, near the petrol station.",
        "After an accident or during evacuation, go to the nearest assembly point.",
        "The evacuation officer will check attendance.",
        "Do not leave the assembly point without registration and permission.",
        "During evacuation, close windows and doors if it is safe to do so.",
        "Switch off electrical equipment that creates a fire risk, such as heating or air conditioning.",
        "Leave the building or department calmly and wait for further instructions."
      ]
    },
    {
      title: "Personal protective equipment and prohibitions",
      summary: "Required PPE is a condition for starting work. A person without the correct equipment may not start work and may be asked to leave.",
      points: [
        "In the concession area and workshops, a helmet, safety shoes and high-visibility vest are mandatory.",
        "MEGA provides safety glasses, protective gloves and hearing protection.",
        "The outsourcing company provides work overalls and safety shoes.",
        "Work clothing must meet EN ISO 11612, EN ISO 11611 and EN 1149-5.",
        "Work above 2 metres must be done according to the Code and with fall protection.",
        "Alcohol, drugs and intoxicating substances are forbidden at work.",
        "Loose hanging clothing is forbidden.",
        "Machine maintenance during use is forbidden.",
        "Machine guards must not be removed.",
        "Machines and workshop access must not be given to unauthorized persons.",
        "Mobile phone use in the workshop is forbidden.",
        "Food must be stored in the dining room, not in the workshop."
      ]
    },
    {
      title: "Technical gases and welding",
      summary: "Gas cylinders are never completely empty and may contain residual gas. Gas work requires training, correct transport, ventilation and ignition control.",
      points: [
        "Gases are stored outside the workshop.",
        "Only experienced and properly trained staff may handle gases.",
        "Smoking while working with gases is strictly forbidden.",
        "Cylinders must be transported on a cylinder trolley, even over short distances.",
        "Cylinders must be stored upright and secured with a chain.",
        "Acetylene is extremely flammable and can cause suffocation in high concentrations.",
        "Oxygen accelerates combustion and reacts strongly with flammable materials.",
        "Oxygen and acetylene must not be stored directly next to each other; keep at least 2 metres distance.",
        "Sagox, nitrogen and argon can displace oxygen and cause suffocation.",
        "Propane is highly flammable, can form explosive mixtures and collect in low areas.",
        "Do not release gases into sewers, basements, pits or places where they can accumulate.",
        "In case of accidental gas release, evacuate the area, isolate ignition sources and ventilate."
      ]
    },
    {
      title: "Housekeeping, tools and waste",
      summary: "Good housekeeping prevents trips, unplanned vehicle manoeuvres and blocked emergency equipment. Waste must be sorted according to the foreman's instructions.",
      points: [
        "Disorder creates hazards such as tripping over cables, trays or abandoned equipment.",
        "Materials must not block corridors, doors, exits, rescue equipment or extinguishers.",
        "The workplace must be cleaned after work.",
        "Tools must be returned to designated containers.",
        "Ladders, trestles and scaffolds must be stored carefully.",
        "Every person in the workshop receives a toolbox and is responsible for their tools.",
        "The toolbox is not for clothes, food or personal belongings.",
        "Lock the toolbox when leaving the workshop.",
        "Report damaged tools to the foreman and do not repair them yourself.",
        "Sort waste according to the foreman's instructions.",
        "Burning any waste is forbidden.",
        "Hazardous waste must be stored separately and handed over to an authorized company."
      ]
    },
    {
      title: "Field work and daily procedures",
      summary: "The same rules apply outside the workshop. Before installation, the assistant foreman prepares tools, materials and the checklist.",
      points: [
        "The priority is your own health and safety and that of colleagues.",
        "Report every dangerous situation immediately to the safety advisor.",
        "Report defects in tools, ladders, racks and similar equipment immediately.",
        "Stay alert while working.",
        "Use provided equipment according to instructions: ladders, scaffolds and trestles.",
        "For field work, the assistant foreman prepares tools and required PBM materials.",
        "After returning, check that everything has been returned and there are no missing or damaged items.",
        "In case of an accident or collision in the field, know who to contact.",
        "Contacts for field work: Hubert 0032492 39 48 87 and Tommy 0032468 26 30 01."
      ]
    },
    {
      title: "ISPS, port security and drug risk",
      summary: "The Port of Antwerp is exposed to drug smuggling attempts and worker recruitment. Every employee must remain alert and report irregularities.",
      points: [
        "ISPS means International Ship & Port Facility Security Code.",
        "ISPS rules concern the security of ships and port facilities.",
        "Report irregularities and incidents to PFSO port facility security officers.",
        "There are five PFSO officers in the Eucore - Mega - Thornton group.",
        "Officers are responsible for inspections, patrols, awareness, exercises and incident monitoring.",
        "Criminals may contact people in person or through social media such as Snapchat, LinkedIn or Facebook.",
        "Suspicious persons may offer money or ask about work in the port.",
        "For a suspicious proposal, answer briefly: 'No, I am not interested'.",
        "Do not continue the conversation and never agree to meet.",
        "Suspicious situations can be reported anonymously via www.onzehavendrugsvrij.be or 03 236 62 25.",
        "For online contact, take a screenshot and forward it through the reporting point.",
        "Also report suspicious facts to the safety advisor."
      ]
    }
  ],
  nl: [
    {
      title: "Toegang tot het terrein en verkeer op de site",
      summary: "Op de site van Container Concepts werken voetgangers, ECH-bestuurders, heftrucks, vrachtwagens en externe leveranciers. Zichtbaarheid en oogcontact vormen de basis van veilig verkeer.",
      points: [
        "Container Concepts bevindt zich op Treurenborg 9.",
        "Gebruik altijd het voetpad bij het betreden van en bewegen op het manoeuvreerterrein.",
        "Maak oogcontact met de bestuurder wanneer u langs ECH-machines, heftrucks of vrachtwagens gaat.",
        "Draag op het terrein en in het magazijn fluorescerende kleding en een borstlamp.",
        "Het kritieke risico is een aanrijding tussen een voetganger en een machine of voertuig."
      ]
    },
    {
      title: "Noodsituaties, ongevallen en brand",
      summary: "Bij een ongeval zijn snelle melding, kalm blijven, correcte informatie voor hulpdiensten en het opvolgen van evacuatie-instructies essentieel.",
      points: [
        "Neem bij nood contact op met de ploegbaas of bel 112.",
        "De EHBO-post bevindt zich in het kantoor van de ploegbaas.",
        "SIHWA, de havenambulance, is bereikbaar op 03/541.00.23.",
        "Geef bij het bellen van een ambulance: MEGA, Treurenborg 9, slachtoffergegevens, leeftijd, omstandigheden en ernst van de verwondingen.",
        "Neem onmiddellijk contact op met veiligheid: Emily Meers 0032489113337 of Joyce Van Geffen 0032 492 11 24 47.",
        "Ook kleine ongevallen zonder werkverlet worden geregistreerd en gemeld aan veiligheid.",
        "Een getuige verwittigt de leidinggevende, geeft het slachtoffer geen drank, houdt omstaanders weg en dekt het slachtoffer toe.",
        "Bij elektrocutie: raak het slachtoffer niet aan. Schakel eerst de stroom uit.",
        "Bij brand: blijf kalm, roep 'BRAND', waarschuw anderen, verwittig de leidinggevende en neem geen risico.",
        "Meld het gebruik van een brandblusser altijd aan de ploegbaas zodat deze vervangen of bijgevuld kan worden."
      ]
    },
    {
      title: "Evacuatie en verzamelplaatsen",
      summary: "Container Concepts heeft twee verzamelplaatsen. Tijdens evacuatie volgen medewerkers de instructies van de evacuatieleider.",
      points: [
        "Eén verzamelplaats ligt op de parking voor het torengebouw.",
        "De tweede verzamelplaats ligt aan de andere kant van de werkplaats, nabij het tankstation.",
        "Ga na een ongeval of bij evacuatie naar de dichtstbijzijnde verzamelplaats.",
        "De evacuatieverantwoordelijke controleert de aanwezigheid.",
        "Verlaat de verzamelplaats niet zonder registratie en toestemming.",
        "Sluit ramen en deuren tijdens evacuatie als dit veilig kan.",
        "Schakel elektrische toestellen uit die brandgevaar veroorzaken, zoals verwarming of airco.",
        "Verlaat het gebouw of de afdeling rustig en wacht op verdere instructies."
      ]
    },
    {
      title: "Persoonlijke beschermingsmiddelen en verboden",
      summary: "Vereiste PBM zijn een voorwaarde om te mogen starten. Zonder juiste uitrusting mag men niet beginnen en kan men gevraagd worden de werkplek te verlaten.",
      points: [
        "In de concessiezone en werkplaatsen zijn helm, veiligheidsschoenen en fluohesje verplicht.",
        "MEGA voorziet veiligheidsbrillen, beschermhandschoenen en gehoorbescherming.",
        "Het outsourcingbedrijf voorziet overall en veiligheidsschoenen.",
        "Werkkleding moet voldoen aan EN ISO 11612, EN ISO 11611 en EN 1149-5.",
        "Werk boven 2 meter gebeurt volgens de Code en met valbeveiliging.",
        "Alcohol, drugs en verdovende middelen zijn verboden op het werk.",
        "Loshangende kleding is verboden.",
        "Onderhoud aan machines tijdens gebruik is verboden.",
        "Machineafschermingen mogen niet verwijderd worden.",
        "Machines en toegang tot de werkplaats mogen niet aan onbevoegden gegeven worden.",
        "Gebruik van mobiele telefoons in de werkplaats is verboden.",
        "Voedsel wordt bewaard in de eetzaal, niet in de werkplaats."
      ]
    },
    {
      title: "Technische gassen en lassen",
      summary: "Gasflessen zijn nooit volledig leeg en kunnen restgas bevatten. Werken met gassen vereist opleiding, correct transport, ventilatie en controle van ontstekingsbronnen.",
      points: [
        "Gassen worden buiten de werkplaats opgeslagen.",
        "Alleen ervaren en goed opgeleid personeel mag met gassen werken.",
        "Roken tijdens werken met gassen is strikt verboden.",
        "Flessen worden vervoerd op een flessenkar, ook over korte afstanden.",
        "Flessen worden rechtop opgeslagen en met een ketting beveiligd.",
        "Acetyleen is uiterst ontvlambaar en kan bij hoge concentraties verstikking veroorzaken.",
        "Zuurstof versnelt verbranding en reageert sterk met brandbare materialen.",
        "Zuurstof en acetyleen mogen niet direct naast elkaar staan; houd minstens 2 meter afstand.",
        "Sagox, stikstof en argon kunnen zuurstof verdringen en verstikking veroorzaken.",
        "Propaan is zeer ontvlambaar, kan explosieve mengsels vormen en zich ophopen in lage zones.",
        "Laat geen gassen vrij in riolen, kelders, putten of plaatsen waar ze kunnen ophopen.",
        "Bij onbedoelde gasvrijgave: evacueer, isoleer ontstekingsbronnen en ventileer."
      ]
    },
    {
      title: "Orde, gereedschap en afval",
      summary: "Goede orde voorkomt struikelen, onverwachte manoeuvres van bestuurders en geblokkeerde noodmiddelen. Afval wordt gesorteerd volgens de instructies van de ploegbaas.",
      points: [
        "Wanorde veroorzaakt risico's zoals struikelen over kabels, werkbakken of achtergelaten materiaal.",
        "Materialen mogen gangen, deuren, uitgangen, reddingsmiddelen of blussers niet blokkeren.",
        "Na het werk moet de werkplek opgeruimd worden.",
        "Gereedschap wordt teruggelegd in de voorziene bakken.",
        "Ladders, schragen en steigers worden zorgvuldig opgeborgen.",
        "Iedereen in de werkplaats krijgt een gereedschapskist en is verantwoordelijk voor zijn gereedschap.",
        "De gereedschapskist is niet bedoeld voor kleding, voedsel of persoonlijke spullen.",
        "Sluit de gereedschapskist bij het verlaten van de werkplaats.",
        "Meld beschadigd gereedschap aan de ploegbaas en herstel het niet zelf.",
        "Sorteer afval volgens de instructies van de ploegbaas.",
        "Afval verbranden is verboden.",
        "Gevaarlijk afval wordt apart opgeslagen en afgegeven aan een erkende firma."
      ]
    },
    {
      title: "Werk op locatie en dagelijkse procedures",
      summary: "Dezelfde regels gelden buiten de werkplaats. Voor montage bereidt de assistent-ploegbaas gereedschap, materialen en checklist voor.",
      points: [
        "Prioriteit is uw eigen veiligheid en gezondheid en die van collega's.",
        "Meld elke gevaarlijke situatie onmiddellijk aan de veiligheidsadviseur.",
        "Meld defecten aan gereedschap, ladders, rekken en vergelijkbare uitrusting onmiddellijk.",
        "Blijf alert tijdens het werk.",
        "Gebruik beschikbaar materiaal volgens instructies: ladders, steigers en schragen.",
        "Bij werk op locatie bereidt de assistent-ploegbaas gereedschap en vereiste PBM-materialen voor.",
        "Na terugkeer wordt gecontroleerd of alles terug is en of er niets ontbreekt of beschadigd is.",
        "Bij een ongeval of aanrijding op locatie moet u weten wie u moet contacteren.",
        "Contacten voor werk op locatie: Hubert 0032492 39 48 87 en Tommy 0032468 26 30 01."
      ]
    },
    {
      title: "ISPS, havenbeveiliging en drugsrisico",
      summary: "De haven van Antwerpen is blootgesteld aan drugssmokkel en rekrutering van werknemers. Elke werknemer moet alert blijven en onregelmatigheden melden.",
      points: [
        "ISPS betekent International Ship & Port Facility Security Code.",
        "ISPS-regels gaan over beveiliging van schepen en havenfaciliteiten.",
        "Meld onregelmatigheden en incidenten aan PFSO-beveiligingsofficieren.",
        "Binnen Eucore - Mega - Thornton zijn vijf PFSO's actief.",
        "Zij zijn verantwoordelijk voor inspecties, rondes, bewustmaking, oefeningen en opvolging van incidenten.",
        "Criminelen kunnen persoonlijk of via sociale media contact opnemen, zoals Snapchat, LinkedIn of Facebook.",
        "Verdachte personen kunnen geld aanbieden of vragen stellen over werk in de haven.",
        "Antwoord kort op een verdacht voorstel: 'Nee, ik ben niet geïnteresseerd'.",
        "Ga niet verder in gesprek en spreek nooit af.",
        "Verdachte situaties kunnen anoniem gemeld worden via www.onzehavendrugsvrij.be of 03 236 62 25.",
        "Maak bij online contact een screenshot en bezorg dit via het meldpunt.",
        "Meld verdachte feiten ook aan de veiligheidsadviseur."
      ]
    }
  ]
};

const QUESTION_TRANSLATIONS = {
  en: [
    ["You enter on foot a yard where ECH machines, forklifts and lorries are moving. What behaviour is correct?", ["Use the walkway, stay visible and make eye contact with the operator before crossing", "Take the shortest route if the vehicle is still far away", "Assume the operator sees pedestrians in every situation"]],
    ["Which actions reduce the risk of a pedestrian being hit in the manoeuvring yard?", ["Use designated crossings and walkways", "Wear fluorescent clothing and a chest light", "Make eye contact with the vehicle operator", "Walk behind a reversing vehicle if the audible signal works"]],
    ["An employee does not have the required helmet or safety shoes. What must happen before work starts?", ["The employee does not start work until the required PPE is available", "The employee may work if the task takes less than 15 minutes", "The employee may replace PPE with their own risk assessment"]],
    ["Which protective equipment is required or provided in MEGA training for work in the workshop and concession area?", ["Helmet", "Safety shoes", "High-visibility vest", "Safety glasses, gloves or hearing protection when required by the task"]],
    ["Work must be carried out above 2 metres. What is the most important condition for admission to work?", ["Use proper fall protection and equipment according to instructions", "Do the job quickly without setting up extra equipment", "Work only if another employee is standing nearby"]],
    ["You see a damaged ladder, tool or rack. What reaction follows the rules?", ["Report the defect immediately to the foreman or responsible person and do not use the equipment", "Repair the equipment temporarily if you know tools", "Put the equipment aside without informing anyone"]],
    ["An accident occurs. What is the correct first step?", ["Stay calm, inform the foreman and call 112 if needed", "Move the victim elsewhere without assessing hazards", "First determine who is to blame"]],
    ["What information should be prepared when calling medical help?", ["Company name and exact accident location", "Victim's name, surname and age", "Accident circumstances and severity of injuries", "Private financial data of the employee"]],
    ["You witness an accident. Which behaviours are correct?", ["Inform the supervisor or foreman", "Keep bystanders away", "Do not give the victim drinks", "Gather a group around the victim to watch"]],
    ["You suspect electric shock. What must be done first?", ["Do not touch the victim and first disconnect power if it can be done safely", "Immediately pull the victim away with your hands", "Give the victim water"]],
    ["You see the beginning of a fire. Which action follows the safety rule?", ["Warn the surroundings, inform the supervisor and try to extinguish only without taking risks", "Extinguish at all costs, even without proper equipment", "Leave without warning others"]],
    ["During evacuation you reach the assembly point. When may you leave it?", ["Only after registration and permission from the evacuation officer", "When the alarm is no longer audible", "After calling a colleague"]],
    ["Which actions are correct during evacuation?", ["Follow the evacuation leader's instructions", "Leave the building or department calmly", "Go to the designated assembly point", "Return for personal belongings before leaving"]],
    ["Who may handle technical gases?", ["Only experienced and properly trained personnel", "Any employee if the cylinder is marked empty", "Any employee if the job is short"]],
    ["Which rules apply to safe transport and storage of gas cylinders?", ["Transport them on a cylinder trolley", "Store them upright", "Secure them with a chain against falling", "Roll them on the floor if the distance is short"]],
    ["Why must a cylinder marked empty not be treated as completely safe?", ["It may still contain residual gas", "An empty cylinder is always heavier than a full one", "It requires no marking"]],
    ["How should oxygen be stored in relation to acetylene in the gas store?", ["Separately, keeping at least 2 metres distance", "Directly next to each other to save time", "Together if the cylinders are attached with the same chain"]],
    ["Why must gases not be released into sewers, basements or pits?", ["Gases can accumulate there and create suffocation or explosion risk", "It may dirty the floor", "It may make waste sorting harder"]],
    ["Which items must not be blocked by materials or tools?", ["Corridors and passages", "Doors and exits", "Fire extinguishers and rescue equipment", "Designated evacuation routes"]],
    ["After work, cables, tools and a ladder remain at the workplace. What is correct?", ["Clean the workplace and return tools and equipment to designated places", "Leave everything for the next shift", "Move the equipment under the nearest exit"]],
    ["What should be done with a damaged tool?", ["Report the damage to the foreman and do not repair the tool yourself", "Mark it with your own tape and keep using it", "Put it in the toolbox without reporting"]],
    ["How should hazardous waste be handled?", ["Store it separately and hand it over to an authorized company", "Burn it if the amount is small", "Throw it into the nearest general bin"]],
    ["What does ISPS mean in port work?", ["International code for the security of ships and port facilities", "Workshop waste sorting instruction", "Employee attendance assessment system"]],
    ["Who should receive a report about an irregularity or port security incident?", ["The PFSO port facility security officer or designated safety responsible person", "Only a colleague from the team", "Nobody if the situation caused no damage"]],
    ["Someone offers money for information about work in the port. What reaction is correct?", ["Refuse briefly, do not meet and report the suspicious contact", "Continue the conversation to check the offer", "Accept the contact if the conversation is outside work"]],
    ["Suspicious contact happened through social media. What should you do before reporting?", ["Keep evidence, for example take a screenshot of the conversation", "Delete the conversation to avoid problems", "Reply and ask for more details"]],
    ["What information does the sign shown in the graphic give?", ["It prohibits a specific behaviour", "It orders an action", "It indicates a first aid point"]],
    ["How should the sign shown in the graphic be understood?", ["It indicates an obligation to perform a specific action or use required PPE", "It warns about a flammable substance", "It means emergency exit"]],
    ["What does the sign shown in the graphic mean?", ["Warning of electrical hazard", "No mobile phone use", "Fire extinguisher storage place"]],
    ["What does the sign shown in the graphic indicate?", ["Direction of evacuation route or safe exit", "Gas storage area", "No passage"]],
    ["What type of information does the sign shown in the graphic give?", ["Location of fire-fighting equipment", "Obligation to wear hearing protection", "Warning of forklift traffic"]],
    ["Before using a ladder you notice a cracked rung or damaged anti-slip foot. What do you do?", ["Do not use the ladder and report the damage", "Use the ladder if the job is short", "Repair the ladder temporarily and continue"]],
    ["When may a ladder be used as access or a working position according to the instruction?", ["For short occasional work when no large force or heavy loads are needed", "For permanent work with heavy elements", "Near power lines if the employee is careful"]],
    ["What must be checked before using a ladder?", ["Damage, cracks or deformation", "Condition of rungs", "Cleanliness of rungs and condition of anti-slip feet", "Colour of the ladder"]],
    ["What is the correct way to position a leaning ladder?", ["On a firm, level surface, at the correct angle and with proper support", "On any surface if another person holds it", "As close as possible to the work even on uneven ground"]],
    ["What type of risk is indicated by the pictogram from the ladder instruction?", ["Risk of falling from a ladder", "Obligation to sort waste", "Evacuation assembly point"]],
    ["Which protective equipment is indicated by the visibility instruction pictograms in the warehouse?", ["Safety shoes, gloves and protective/work clothing", "Fire extinguisher, hydrant and fire alarm", "No smoking, no phone and no open flame"]],
    ["Which protective equipment is indicated by the pictograms in the gas transport instruction?", ["Gloves, head/face protection, safety shoes and protective clothing", "Only high-visibility vest", "Only prescription glasses"]],
    ["Which interpretation best matches the pictograms from the gas transport instruction?", ["Explosion risk, injury from cylinder and fire hazard", "Only obligation to clean the workstation", "Evacuation route information"]],
    ["What do the pictograms from the oxy-fuel welding instruction mean?", ["There are hazards related to gases, fire, explosion and radiation", "This is only information about the tool store", "These are evacuation route signs"]],
    ["Before using a power tool you notice a damaged cable, cracked casing or missing guard. What do you do?", ["Do not use the tool, remove it from use and report the defect", "Use the tool if it still works", "Wrap the cable with tape and continue"]],
    ["Which rules are correct when using power tools?", ["Use the tool according to the instruction and intended purpose", "Check the cable, casing, plug and guards before work", "Use required PPE such as glasses, gloves or hearing protection", "Remove guards if they limit access to the workpiece"]],
    ["During work a power tool starts to vibrate unusually, spark or make an unusual sound. What is the safest reaction?", ["Stop work, disconnect the tool from power and report the problem", "Finish the task if little time remains", "Increase pressure to finish cutting or grinding faster"]],
    ["Who should repair a damaged power tool?", ["An authorized person or service according to procedure, after the defect is reported", "Any employee with basic tools", "The tool user during a work break"]]
  ],
  nl: [
    ["U betreedt te voet een terrein waar ECH-machines, heftrucks en vrachtwagens rijden. Welk gedrag is correct?", ["Gebruik het voetpad, blijf zichtbaar en maak oogcontact met de bestuurder voor u oversteekt", "Neem de kortste weg als het voertuig nog ver weg is", "Ga ervan uit dat de bestuurder voetgangers altijd ziet"]],
    ["Welke acties verkleinen het risico dat een voetganger wordt aangereden op het manoeuvreerterrein?", ["Gebruik aangeduide oversteekplaatsen en voetpaden", "Draag fluorescerende kleding en een borstlamp", "Maak oogcontact met de bestuurder", "Loop achter een achteruitrijdend voertuig als het geluidssignaal werkt"]],
    ["Een werknemer heeft geen verplichte helm of veiligheidsschoenen. Wat moet er gebeuren voor het werk start?", ["De werknemer start niet tot de vereiste PBM beschikbaar zijn", "De werknemer mag werken als de taak minder dan 15 minuten duurt", "De werknemer mag PBM vervangen door een eigen risico-inschatting"]],
    ["Welke beschermingsmiddelen zijn vereist of voorzien in de MEGA-opleiding voor werk in de werkplaats en concessiezone?", ["Helm", "Veiligheidsschoenen", "Fluohesje", "Veiligheidsbril, handschoenen of gehoorbescherming wanneer de taak dit vereist"]],
    ["Er moet boven 2 meter gewerkt worden. Wat is de belangrijkste voorwaarde om te mogen starten?", ["Correcte valbeveiliging en materiaal volgens de instructie gebruiken", "Snel werken zonder extra materiaal op te stellen", "Alleen werken als een andere werknemer naast u staat"]],
    ["U ziet een beschadigde ladder, gereedschap of rek. Welke reactie volgt de regels?", ["Meld het defect onmiddellijk aan de ploegbaas of verantwoordelijke en gebruik het materiaal niet", "Herstel het tijdelijk als u gereedschap kent", "Leg het materiaal opzij zonder iemand te informeren"]],
    ["Er gebeurt een ongeval. Wat is de juiste eerste stap?", ["Blijf kalm, verwittig de ploegbaas en bel indien nodig 112", "Verplaats het slachtoffer zonder gevaren te beoordelen", "Bepaal eerst wie schuld heeft"]],
    ["Welke informatie moet klaar zijn bij het bellen van medische hulp?", ["Bedrijfsnaam en exacte locatie van het ongeval", "Naam, achternaam en leeftijd van het slachtoffer", "Omstandigheden van het ongeval en ernst van de verwondingen", "Privé financiële gegevens van de werknemer"]],
    ["U bent getuige van een ongeval. Welke gedragingen zijn correct?", ["Verwittig de leidinggevende of ploegbaas", "Houd omstaanders weg", "Geef het slachtoffer geen drank", "Verzamel mensen rond het slachtoffer om te kijken"]],
    ["U vermoedt elektrocutie. Wat moet eerst gebeuren?", ["Raak het slachtoffer niet aan en schakel eerst de stroom uit als dit veilig kan", "Trek het slachtoffer onmiddellijk met de handen weg", "Geef het slachtoffer water"]],
    ["U ziet het begin van een brand. Welke actie volgt de veiligheidsregel?", ["Waarschuw de omgeving, verwittig de leidinggevende en blus alleen zonder risico", "Blus tegen elke prijs, zelfs zonder juist materiaal", "Verlaat de plaats zonder anderen te waarschuwen"]],
    ["Tijdens evacuatie bereikt u de verzamelplaats. Wanneer mag u die verlaten?", ["Alleen na registratie en toestemming van de evacuatieverantwoordelijke", "Wanneer het alarm niet meer hoorbaar is", "Na een telefoontje naar een collega"]],
    ["Welke acties zijn correct tijdens evacuatie?", ["Volg de instructies van de evacuatieleider", "Verlaat gebouw of afdeling rustig", "Ga naar de aangeduide verzamelplaats", "Keer terug voor persoonlijke spullen"]],
    ["Wie mag met technische gassen werken?", ["Alleen ervaren en goed opgeleid personeel", "Elke werknemer als de fles leeg gemarkeerd is", "Elke werknemer als het werk kort duurt"]],
    ["Welke regels gelden voor veilig vervoer en opslag van gasflessen?", ["Vervoer ze op een flessenkar", "Bewaar ze rechtop", "Beveilig ze met een ketting tegen omvallen", "Rol ze over de vloer als de afstand kort is"]],
    ["Waarom mag een fles die als leeg is aangeduid niet als volledig veilig worden beschouwd?", ["Ze kan nog restgas bevatten", "Een lege fles is altijd zwaarder dan een volle", "Ze heeft geen markering nodig"]],
    ["Hoe moet zuurstof ten opzichte van acetyleen worden opgeslagen in de gasopslag?", ["Apart, met minstens 2 meter afstand", "Direct naast elkaar om tijd te besparen", "Samen als de flessen met dezelfde ketting vastzitten"]],
    ["Waarom mogen gassen niet in riolen, kelders of putten worden vrijgelaten?", ["Gassen kunnen zich daar ophopen en verstikkings- of explosiegevaar creëren", "Dit kan de vloer vuil maken", "Dit kan afvalsortering bemoeilijken"]],
    ["Welke zaken mogen niet door materialen of gereedschap geblokkeerd worden?", ["Gangen en doorgangen", "Deuren en uitgangen", "Brandblussers en reddingsmateriaal", "Aangeduide evacuatiewegen"]],
    ["Na het werk blijven kabels, gereedschap en een ladder liggen. Wat is correct?", ["Ruim de werkplek op en leg gereedschap en materiaal terug op de aangeduide plaats", "Laat alles liggen voor de volgende ploeg", "Verplaats het materiaal onder de dichtstbijzijnde uitgang"]],
    ["Wat moet gebeuren met beschadigd gereedschap?", ["Meld de schade aan de ploegbaas en herstel het gereedschap niet zelf", "Markeer het met eigen tape en gebruik het verder", "Leg het zonder melding in de gereedschapskist"]],
    ["Hoe moet gevaarlijk afval worden behandeld?", ["Apart opslaan en afgeven aan een erkende firma", "Verbranden als de hoeveelheid klein is", "In de dichtstbijzijnde algemene container gooien"]],
    ["Wat betekent ISPS in havenwerk?", ["Internationale code voor beveiliging van schepen en havenfaciliteiten", "Instructie voor afvalsortering in de werkplaats", "Systeem voor aanwezigheidsbeoordeling"]],
    ["Wie moet een melding krijgen over een onregelmatigheid of havenbeveiligingsincident?", ["De PFSO of aangeduide veiligheidsverantwoordelijke", "Alleen een collega uit het team", "Niemand als er geen schade is"]],
    ["Iemand biedt geld voor informatie over werk in de haven. Welke reactie is correct?", ["Kort weigeren, niet afspreken en het verdachte contact melden", "Het gesprek voortzetten om het aanbod te controleren", "Het contact aanvaarden als het gesprek buiten het werk plaatsvindt"]],
    ["Verdacht contact gebeurde via sociale media. Wat doet u best voor de melding?", ["Bewaar bewijs, bijvoorbeeld een screenshot van het gesprek", "Verwijder het gesprek om problemen te vermijden", "Antwoord en vraag meer details"]],
    ["Welke informatie geeft het teken op de afbeelding?", ["Het verbiedt bepaald gedrag", "Het verplicht een handeling", "Het wijst een EHBO-punt aan"]],
    ["Hoe moet het teken op de afbeelding begrepen worden?", ["Het geeft een verplichting aan om een handeling uit te voeren of vereiste PBM te gebruiken", "Het waarschuwt voor een ontvlambare stof", "Het betekent nooduitgang"]],
    ["Wat betekent het teken op de afbeelding?", ["Waarschuwing voor elektrisch gevaar", "Verbod op telefoon", "Plaats voor brandblusser"]],
    ["Wat duidt het teken op de afbeelding aan?", ["Richting van evacuatieroute of veilige uitgang", "Gasopslagzone", "Verboden doorgang"]],
    ["Welk type informatie geeft het teken op de afbeelding?", ["Locatie van brandbestrijdingsmateriaal", "Verplichting om gehoorbescherming te dragen", "Waarschuwing voor heftruckverkeer"]],
    ["Voor gebruik van een ladder ziet u een gebarsten sport of beschadigde antislipvoet. Wat doet u?", ["Gebruik de ladder niet en meld de schade", "Gebruik de ladder als het werk kort duurt", "Herstel de ladder tijdelijk en werk verder"]],
    ["Wanneer mag een ladder volgens de instructie als toegangsmiddel of werkplek gebruikt worden?", ["Voor korte occasionele werken zonder grote kracht of zware lasten", "Voor permanent werk met zware elementen", "In de buurt van elektriciteitslijnen als de werknemer voorzichtig is"]],
    ["Wat moet gecontroleerd worden voor gebruik van een ladder?", ["Schade, barsten of vervorming", "Staat van de sporten", "Netheid van de sporten en staat van de antislipvoeten", "Kleur van de ladder"]],
    ["Wat is de juiste manier om een aanleunladder te plaatsen?", ["Op een stevige, vlakke ondergrond, onder de juiste hoek en met goede steun", "Op eender welke ondergrond als iemand ze vasthoudt", "Zo dicht mogelijk bij het werk, ook op ongelijke grond"]],
    ["Welk risico geeft het pictogram uit de ladderinstructie aan?", ["Risico om van de ladder te vallen", "Verplichting om afval te sorteren", "Evacuatieverzamelplaats"]],
    ["Welke beschermingsmiddelen tonen de pictogrammen uit de zichtbaarheidsinstructie in het magazijn?", ["Veiligheidsschoenen, handschoenen en bescherm-/werkkleding", "Brandblusser, hydrant en brandalarm", "Rookverbod, telefoonverbod en verbod op open vuur"]],
    ["Welke beschermingsmiddelen tonen de pictogrammen bij de instructie voor gastransport?", ["Handschoenen, hoofd-/gelaatsbescherming, veiligheidsschoenen en beschermkleding", "Alleen fluohesje", "Alleen correctiebril"]],
    ["Welke interpretatie past het best bij de pictogrammen uit de gastransportinstructie?", ["Explosierisico, letsel door fles en brandgevaar", "Alleen verplichting om de werkpost schoon te maken", "Informatie over evacuatieroute"]],
    ["Wat betekenen de pictogrammen uit de instructie voor autogeen lassen?", ["Er zijn gevaren door gassen, vuur, explosie en straling", "Dit is alleen informatie over de gereedschapsopslag", "Dit zijn evacuatiewegtekens"]],
    ["Voor gebruik van een elektrisch gereedschap ziet u een beschadigde kabel, gebarsten behuizing of ontbrekende afscherming. Wat doet u?", ["Gebruik het gereedschap niet, neem het uit gebruik en meld het defect", "Gebruik het gereedschap als het nog werkt", "Wikkel tape rond de kabel en werk verder"]],
    ["Welke regels zijn juist bij gebruik van elektrisch gereedschap?", ["Gebruik het gereedschap volgens instructie en bestemming", "Controleer kabel, behuizing, stekker en afschermingen voor het werk", "Gebruik vereiste PBM zoals bril, handschoenen of gehoorbescherming", "Verwijder afschermingen als ze toegang tot het werkstuk bemoeilijken"]],
    ["Tijdens het werk begint elektrisch gereedschap vreemd te trillen, vonken of geluid te maken. Wat is de veiligste reactie?", ["Stop het werk, koppel het gereedschap los van de stroom en meld het probleem", "Werk de taak af als er weinig tijd over is", "Verhoog de druk om sneller te snijden of slijpen"]],
    ["Wie moet beschadigd elektrisch gereedschap herstellen?", ["Een bevoegde persoon of service volgens procedure, na melding van het defect", "Elke werknemer met basisgereedschap", "De gebruiker tijdens een werkpauze"]]
  ]
};

const BROCHURE_PAGE_TRANSLATIONS = {
  en: [
    ["Welcome brochure for subcontractors", ["MEGA - Container Concepts safety welcome brochure."]],
    ["Index", ["Contents: welcome, Container Concepts, emergency procedures, general safety, gas storage, housekeeping, toolbox, waste, ISPS, drug risk, breaks, contacts and safety appendices."]],
    ["Welcome", ["The brochure introduces every new subcontractor to safety, health and environmental rules.", "The workshop manager explains the brochure and shows the workplace.", "MEGA has reefer repair and Container Concepts departments; Container Concepts is at Treurenborg 9.", "Report unsafe situations immediately. Your safety is the priority."]],
    ["Container Concepts site", ["People on site include ECH operators, forklifts, external suppliers and pedestrians.", "Always use the walkway on the yard.", "Make eye contact with drivers near machines, forklifts and lorries.", "Wear fluorescent clothing and a chest light.", "There are two assembly points: near the tower building and near the petrol station."]],
    ["Emergencies and accidents", ["Go to the nearest assembly point after an accident.", "Call the foreman or 112 in emergencies.", "First aid is in the foreman's office.", "When calling an ambulance, give MEGA, Treurenborg 9, victim details, age, circumstances and injury severity.", "Witnesses inform the supervisor, give no drinks, keep bystanders away and protect the victim.", "For electric shock, do not touch the victim; switch off power."]],
    ["Fire, evacuation and general safety", ["In fire: stay calm, shout FIRE, warn colleagues, inform the supervisor and extinguish only without risk.", "After using an extinguisher, report it to the foreman.", "During evacuation follow the evacuation leader, close doors/windows, switch off fire-risk equipment and go calmly to the assembly point.", "Contractors must follow CODEX, AREI and VLAREM rules.", "Helmet, safety shoes and high-visibility vest are mandatory; fall protection is required for work above 2 metres."]],
    ["Prohibitions and gas storage", ["Alcohol, drugs, loose clothing, phone use in the workshop, removing guards and unauthorized machine use are forbidden.", "Food must be stored in the dining room.", "Gases are stored outside the workshop and handled only by trained staff.", "Smoking during gas work is strictly forbidden.", "Gas cylinders must be transported with a cylinder trolley."]],
    ["Gas hazards", ["Cylinders are never completely empty and may contain residual gas.", "Acetylene is extremely flammable and can cause suffocation.", "Oxygen accelerates combustion.", "Sagox, nitrogen and argon can displace oxygen.", "Propane is highly flammable and can collect in low places.", "Do not release gases into sewers, pits or basements."]],
    ["Gas storage distances", ["Store cylinders upright and secured with a chain.", "Keep oxygen and acetylene separated by at least 2 metres.", "Secure empty cylinders and treat them as potentially hazardous.", "Ventilate and isolate ignition sources if gas is released."]],
    ["Housekeeping", ["Keep corridors, doors, exits, emergency equipment and fire extinguishers clear.", "Clean the workplace after work.", "Return tools to designated containers.", "Store ladders, trestles and scaffolds properly."]],
    ["Procedures", ["Report dangerous situations immediately.", "Use equipment according to instructions.", "Report defects in tools, ladders, racks and other equipment.", "Stay alert and protect your own safety and that of colleagues."]],
    ["Toolbox", ["Each workshop worker receives a toolbox and is responsible for their tools.", "Do not store clothes, food or personal belongings in the toolbox.", "Lock the toolbox when leaving the workshop.", "Report damaged tools and do not repair them yourself."]],
    ["Waste and environment", ["Sort waste according to the foreman's instructions.", "Burning waste is forbidden.", "Hazardous waste must be stored separately and collected by an authorized company.", "Keep the workplace clean to protect people and the environment."]],
    ["ISPS security", ["ISPS protects ships and port facilities.", "Report security incidents to PFSO officers.", "PFSO officers handle inspections, patrols, awareness, exercises and incident monitoring."]],
    ["Drug risk in the Port of Antwerp", ["The port is exposed to drug smuggling and attempts to recruit employees.", "Criminals may contact workers in person or via social media.", "They may offer money or ask questions about port work.", "Respond briefly: No, I am not interested. Do not meet them."]],
    ["Reporting suspicious contacts", ["Suspicious situations can be reported anonymously via www.onzehavendrugsvrij.be or 03 236 62 25.", "For online contact, make a screenshot and report it.", "Also inform the safety advisor."]],
    ["Breaks, remuneration and contacts", ["Follow local rules for breakfast breaks, other breaks and remuneration.", "Use the indicated contacts when questions or incidents occur."]],
    ["PPE overview: gloves", ["Use the correct gloves for the task.", "Select gloves according to mechanical, chemical or thermal risk.", "Damaged or unsuitable gloves must not be used."]],
    ["Ladder safety card", ["Inspect the ladder before use.", "Do not use a ladder with damaged rungs, feet or structure.", "Use ladders only for short occasional work when appropriate.", "Keep three points of contact and do not overreach."]],
    ["Ladder with handrail instruction", ["Place the ladder on a firm, level surface.", "Set the ladder at the correct angle and secure support.", "Do not use near electrical hazards unless this is controlled.", "Do not carry heavy loads on a ladder."]],
    ["Ladder continued", ["Keep rungs clean and dry.", "Never improvise repairs.", "Report damage and remove defective ladders from use."]],
    ["Visibility instruction in storage area", ["Wear required high-visibility clothing.", "Use chest lighting where required.", "Stay visible to drivers and machine operators.", "Use marked pedestrian routes."]],
    ["Gas storage safety instruction", ["Store gases outside the workshop.", "Keep incompatible gases separated.", "Secure cylinders upright.", "Prevent ignition sources and ensure ventilation."]],
    ["Gas transport safety instruction", ["Transport cylinders with a cylinder trolley.", "Use required PPE such as gloves, face/head protection, safety shoes and protective clothing.", "Do not roll or carry cylinders by the valve.", "Secure cylinders against falling."]],
    ["Oxy-fuel welding instruction", ["Be aware of fire, explosion, radiation and gas hazards.", "Check hoses, regulators and cylinders before work.", "Keep ignition sources controlled.", "Ensure ventilation and required PPE."]],
    ["Oxy-fuel welding continued", ["Never use damaged equipment.", "Store cylinders correctly after work.", "Report irregularities immediately."]],
    ["Evacuation Container Concepts", ["Know both assembly points.", "Follow the evacuation leader.", "Do not leave the assembly point without registration and permission.", "Wait for instructions before returning."]],
    ["ISPS awareness training", ["Understand port security duties.", "Stay alert to suspicious behaviour.", "Do not share access information.", "Report suspicious contacts and incidents immediately."]],
    ["Final ISPS reminder", ["Security awareness is part of safe work.", "When in doubt, report. Never handle suspicious approaches alone."]]
  ],
  nl: [
    ["Welkomstbrochure voor onderaannemers", ["MEGA - Container Concepts veiligheidswelkomstbrochure."]],
    ["Index", ["Inhoud: welkom, Container Concepts, noodprocedures, algemene veiligheid, gasopslag, orde, gereedschapskist, afval, ISPS, drugsrisico, pauzes, contacten en veiligheidsbijlagen."]],
    ["Welkom", ["De brochure maakt elke nieuwe onderaannemer vertrouwd met veiligheids-, gezondheids- en milieuregels.", "De werkplaatsleider bespreekt de brochure en toont de werkplek.", "MEGA heeft afdelingen voor reeferherstel en Container Concepts; Container Concepts ligt op Treurenborg 9.", "Meld onveilige situaties onmiddellijk. Uw veiligheid is de prioriteit."]],
    ["Site Container Concepts", ["Op de site zijn ECH-bestuurders, heftrucks, externe leveranciers en voetgangers aanwezig.", "Gebruik altijd het voetpad op het terrein.", "Maak oogcontact met bestuurders bij machines, heftrucks en vrachtwagens.", "Draag fluorescerende kleding en een borstlamp.", "Er zijn twee verzamelplaatsen: bij het torengebouw en bij het tankstation."]],
    ["Noodsituaties en ongevallen", ["Ga na een ongeval naar de dichtstbijzijnde verzamelplaats.", "Bel de ploegbaas of 112 bij nood.", "EHBO bevindt zich in het kantoor van de ploegbaas.", "Geef bij een ambulanceoproep MEGA, Treurenborg 9, slachtoffergegevens, leeftijd, omstandigheden en ernst van verwondingen.", "Getuigen verwittigen de leidinggevende, geven geen drank, houden omstaanders weg en beschermen het slachtoffer.", "Bij elektrocutie: raak het slachtoffer niet aan; schakel de stroom uit."]],
    ["Brand, evacuatie en algemene veiligheid", ["Bij brand: blijf kalm, roep BRAND, waarschuw collega's, verwittig de leidinggevende en blus alleen zonder risico.", "Meld gebruik van een brandblusser aan de ploegbaas.", "Bij evacuatie volgt u de evacuatieleider, sluit deuren/ramen, schakelt brandgevaarlijke toestellen uit en gaat rustig naar de verzamelplaats.", "Aannemers moeten CODEX, AREI en VLAREM naleven.", "Helm, veiligheidsschoenen en fluohesje zijn verplicht; valbeveiliging is vereist boven 2 meter."]],
    ["Verboden en gasopslag", ["Alcohol, drugs, loshangende kleding, telefoongebruik in de werkplaats, verwijderen van afschermingen en onbevoegd machinegebruik zijn verboden.", "Voedsel wordt bewaard in de eetzaal.", "Gassen worden buiten de werkplaats opgeslagen en alleen door opgeleid personeel behandeld.", "Roken tijdens gaswerk is strikt verboden.", "Gasflessen worden vervoerd met een flessenkar."]],
    ["Gasgevaren", ["Flessen zijn nooit volledig leeg en kunnen restgas bevatten.", "Acetyleen is uiterst ontvlambaar en kan verstikking veroorzaken.", "Zuurstof versnelt verbranding.", "Sagox, stikstof en argon kunnen zuurstof verdringen.", "Propaan is zeer ontvlambaar en kan zich in lage zones ophopen.", "Laat geen gassen vrij in riolen, putten of kelders."]],
    ["Afstanden bij gasopslag", ["Bewaar flessen rechtop en beveiligd met ketting.", "Houd zuurstof en acetyleen minstens 2 meter gescheiden.", "Beveilig lege flessen en behandel ze als mogelijk gevaarlijk.", "Ventileer en isoleer ontstekingsbronnen bij gasvrijgave."]],
    ["Orde en netheid", ["Houd gangen, deuren, uitgangen, noodmateriaal en brandblussers vrij.", "Ruim de werkplek op na het werk.", "Leg gereedschap terug in de aangeduide bakken.", "Berg ladders, schragen en steigers correct op."]],
    ["Procedures", ["Meld gevaarlijke situaties onmiddellijk.", "Gebruik materiaal volgens de instructies.", "Meld defecten aan gereedschap, ladders, rekken en ander materiaal.", "Blijf alert en bescherm uw eigen veiligheid en die van collega's."]],
    ["Gereedschapskist", ["Elke werknemer in de werkplaats krijgt een gereedschapskist en is verantwoordelijk voor zijn gereedschap.", "Bewaar geen kleding, voedsel of persoonlijke spullen in de kist.", "Sluit de kist bij het verlaten van de werkplaats.", "Meld beschadigd gereedschap en herstel het niet zelf."]],
    ["Afval en milieu", ["Sorteer afval volgens de instructies van de ploegbaas.", "Afval verbranden is verboden.", "Gevaarlijk afval wordt apart opgeslagen en opgehaald door een erkende firma.", "Houd de werkplek schoon om mensen en milieu te beschermen."]],
    ["ISPS-beveiliging", ["ISPS beschermt schepen en havenfaciliteiten.", "Meld beveiligingsincidenten aan PFSO's.", "PFSO's zorgen voor inspecties, rondes, bewustmaking, oefeningen en opvolging van incidenten."]],
    ["Drugsrisico in de haven van Antwerpen", ["De haven is gevoelig voor drugssmokkel en rekrutering van werknemers.", "Criminelen kunnen werknemers persoonlijk of via sociale media contacteren.", "Ze kunnen geld aanbieden of vragen stellen over havenwerk.", "Antwoord kort: Nee, ik ben niet geïnteresseerd. Spreek niet af."]],
    ["Verdachte contacten melden", ["Verdachte situaties kunnen anoniem gemeld worden via www.onzehavendrugsvrij.be of 03 236 62 25.", "Maak bij online contact een screenshot en meld dit.", "Informeer ook de veiligheidsadviseur."]],
    ["Pauzes, vergoeding en contacten", ["Volg de lokale regels voor ontbijtpauze, andere pauzes en vergoeding.", "Gebruik de aangeduide contacten bij vragen of incidenten."]],
    ["PBM-overzicht: handschoenen", ["Gebruik de juiste handschoenen voor de taak.", "Kies handschoenen volgens mechanisch, chemisch of thermisch risico.", "Beschadigde of ongeschikte handschoenen mogen niet gebruikt worden."]],
    ["Veiligheidskaart ladder", ["Controleer de ladder voor gebruik.", "Gebruik geen ladder met beschadigde sporten, voeten of structuur.", "Gebruik ladders alleen voor korte occasionele werken indien geschikt.", "Houd drie contactpunten en reik niet te ver."]],
    ["Instructie ladder met leuning", ["Plaats de ladder op een stevige, vlakke ondergrond.", "Zet de ladder onder de juiste hoek en met goede steun.", "Gebruik niet bij elektrische gevaren tenzij beheerst.", "Draag geen zware lasten op een ladder."]],
    ["Ladder vervolg", ["Houd sporten schoon en droog.", "Improviseer nooit herstellingen.", "Meld schade en neem defecte ladders uit gebruik."]],
    ["Zichtbaarheid in opslagzone", ["Draag verplichte zichtbaarheidskleding.", "Gebruik borstverlichting waar vereist.", "Blijf zichtbaar voor bestuurders en machinebedieners.", "Gebruik aangeduide voetgangersroutes."]],
    ["Veiligheidsinstructie gasopslag", ["Sla gassen buiten de werkplaats op.", "Houd onverenigbare gassen gescheiden.", "Beveilig flessen rechtop.", "Voorkom ontstekingsbronnen en zorg voor ventilatie."]],
    ["Veiligheidsinstructie gastransport", ["Vervoer flessen met een flessenkar.", "Gebruik vereiste PBM zoals handschoenen, hoofd-/gelaatsbescherming, veiligheidsschoenen en beschermkleding.", "Rol flessen niet en draag ze niet aan de kraan.", "Beveilig flessen tegen omvallen."]],
    ["Instructie autogeen lassen", ["Let op gevaren door brand, explosie, straling en gassen.", "Controleer slangen, reduceerventielen en flessen voor het werk.", "Beheers ontstekingsbronnen.", "Zorg voor ventilatie en vereiste PBM."]],
    ["Autogeen lassen vervolg", ["Gebruik nooit beschadigd materiaal.", "Sla flessen na het werk correct op.", "Meld onregelmatigheden onmiddellijk."]],
    ["Evacuatie Container Concepts", ["Ken beide verzamelplaatsen.", "Volg de evacuatieleider.", "Verlaat de verzamelplaats niet zonder registratie en toestemming.", "Wacht op instructies voor u terugkeert."]],
    ["ISPS-bewustzijnstraining", ["Begrijp uw taken rond havenbeveiliging.", "Blijf alert voor verdacht gedrag.", "Deel geen toegangsgegevens.", "Meld verdachte contacten en incidenten onmiddellijk."]],
    ["Laatste ISPS-herinnering", ["Beveiligingsbewustzijn hoort bij veilig werken.", "Bij twijfel: melden. Behandel verdachte benaderingen nooit alleen."]]
  ]
};

const starterData = {
  settings: {
    topic: "Broszura powitalna MEGA - Container Concepts",
    drawCount: 10
  },
  admins: [
    {
      id: crypto.randomUUID(),
      name: "Hubert Zajac",
      code: "MEGA-ADMIN"
    }
  ],
  modules: [
    {
      title: "Wejście na teren i ruch po placu",
      summary: "Na terenie Container Concepts pracują piesi, operatorzy ECH, wózki widłowe, ciężarówki i dostawcy zewnętrzni. Widoczność i kontakt wzrokowy są podstawą bezpiecznego ruchu.",
      points: [
        "Container Concepts mieści się przy Treurenborg 9.",
        "Zawsze korzystaj z chodnika podczas wejścia i poruszania się po placu manewrowym.",
        "Przechodząc w pobliżu ECH, wózków widłowych lub ciężarówek, nawiąż kontakt wzrokowy z kierowcą.",
        "Na placu manewrowym i w magazynie noś odzież fluorescencyjną oraz latarkę na klatce piersiowej.",
        "Ryzykiem krytycznym jest kolizja pieszego z maszyną lub pojazdem."
      ]
    },
    {
      title: "Sytuacje awaryjne, wypadki i pożar",
      summary: "W razie wypadku liczy się szybkie zgłoszenie, zachowanie spokoju, właściwe informacje dla służb i podporządkowanie się osobom odpowiedzialnym za ewakuację.",
      points: [
        "W nagłych wypadkach skontaktuj się z brygadzistą lub dzwoń pod numer 112.",
        "Punkt pierwszej pomocy znajduje się w biurze brygadzisty.",
        "SIHWA, pogotowie ratunkowe portu, ma numer 03/541.00.23.",
        "Przy wzywaniu karetki podaj: MEGA, Treurenborg 9, imię i nazwisko ofiary, wiek, okoliczności i stopień obrażeń.",
        "Natychmiast skontaktuj się z BHP: Emily Meers 0032489113337 lub Joyce Van Geffen 0032 492 11 24 47.",
        "Drobne wypadki bez utraty czasu pracy też wpisuje się do rejestru pierwszej pomocy i zgłasza BHP.",
        "Świadek wypadku powiadamia przełożonego, nie podaje poszkodowanemu napojów, odsuwa osoby postronne i okrywa poszkodowanego.",
        "Przy porażeniu prądem nie dotykaj poszkodowanego. Najpierw natychmiast wyłącz zasilanie.",
        "Przy pożarze zachowaj spokój, krzyknij 'POŻAR', ostrzeż innych, powiadom przełożonego i nie podejmuj ryzyka.",
        "Po użyciu gaśnicy zawsze zgłoś to brygadziście, żeby sprzęt został wymieniony lub uzupełniony."
      ]
    },
    {
      title: "Ewakuacja i punkty zbiórki",
      summary: "W Container Concepts są dwa miejsca zbiórki. W czasie ewakuacji pracownik nie działa samodzielnie, tylko wykonuje polecenia kierownika ewakuacji.",
      points: [
        "Jedno miejsce zbiórki znajduje się na parkingu przed budynkiem wieży.",
        "Drugie miejsce zbiórki znajduje się po drugiej stronie warsztatu, w pobliżu stacji benzynowej.",
        "Po wypadku lub podczas ewakuacji udaj się do najbliższego punktu zbiórki.",
        "Ewakuator sprawdzi obecność pracowników.",
        "Nie wolno opuścić punktu zbiórki bez rejestracji i zgody ewakuatora.",
        "Podczas ewakuacji zamknij okna i drzwi, jeśli możesz zrobić to bezpiecznie.",
        "Wyłącz urządzenia elektryczne stwarzające zagrożenie pożarowe, np. ogrzewanie lub klimatyzację.",
        "Opuść budynek lub dział spokojnie i płynnie, a potem czekaj na instrukcje."
      ]
    },
    {
      title: "Środki ochrony indywidualnej i zakazy",
      summary: "Wymagane PPE jest warunkiem rozpoczęcia pracy. Osoba bez właściwego wyposażenia nie może rozpocząć pracy i może zostać poproszona o opuszczenie miejsca pracy.",
      points: [
        "W strefie koncesyjnej i warsztatach obowiązkowe są kask, obuwie ochronne i kamizelka odblaskowa.",
        "MEGA zapewnia okulary ochronne, rękawice ochronne i ochronniki słuchu.",
        "Firma outsourcingowa zapewnia kombinezon roboczy i obuwie ochronne.",
        "Odzież robocza musi spełniać wymagania ISO: EN ISO 11612, EN ISO 11611 i EN 1149-5.",
        "Prace na wysokości powyżej 2 metrów wykonuje się zgodnie z wymogami Kodeksu i z zabezpieczeniem przed upadkiem.",
        "Nie wolno pracować pod wpływem alkoholu lub środków odurzających ani wnosić ich do pracy.",
        "Zabronione jest noszenie luźno zwisającej odzieży.",
        "Nie wolno wykonywać konserwacji maszyn podczas ich użytkowania.",
        "Nie wolno zdejmować osłon maszyn.",
        "Nie wolno udostępniać maszyn ani dostępu do warsztatu osobom nieupoważnionym.",
        "Korzystanie z telefonu komórkowego w warsztacie jest zabronione.",
        "Żywność przechowuje się w jadalni, nie w warsztacie."
      ]
    },
    {
      title: "Gazy techniczne i spawanie",
      summary: "Butle z gazami nigdy nie są całkowicie puste i mogą zawierać resztki gazu. Praca z gazami wymaga przeszkolenia, właściwego transportu, wentylacji i kontroli źródeł zapłonu.",
      points: [
        "Gazy przechowuje się poza warsztatem.",
        "Gazami może zajmować się tylko doświadczony i dobrze przeszkolony personel.",
        "Palenie podczas pracy z gazami jest surowo zabronione.",
        "Butle przewozi się na wózku przeznaczonym do transportu butli, nawet na krótkie odległości.",
        "Butle przechowuje się w pozycji pionowej i zabezpiecza łańcuchem przed upadkiem.",
        "Acetylen jest skrajnie łatwopalny; w wysokich stężeniach może powodować uduszenie.",
        "Tlen przyspiesza spalanie i gwałtownie reaguje z materiałami palnymi.",
        "Tlen i acetylen nie mogą stać bezpośrednio obok siebie. W magazynie gazu zachowaj co najmniej 2 metry odstępu.",
        "Sagox, azot i argon mogą wypierać tlen i powodować uduszenie w wysokich stężeniach.",
        "Propan jest bardzo łatwopalny, może tworzyć mieszaniny wybuchowe i zalegać w nisko położonych miejscach.",
        "Nie wypuszczaj gazów do kanalizacji, piwnic, wykopów ani miejsc, gdzie mogą się gromadzić.",
        "Przy przypadkowym uwolnieniu gazu ewakuuj teren, odizoluj źródła zapłonu i zapewnij wentylację."
      ]
    },
    {
      title: "Porządek, narzędzia i odpady",
      summary: "Dobre utrzymanie porządku zapobiega potknięciom, nieplanowanym manewrom operatorów i blokowaniu sprzętu awaryjnego. Odpady trzeba sortować zgodnie z zasadami brygadzisty.",
      points: [
        "Nieporządek powoduje zagrożenia, np. potknięcie o kable, tace robocze lub porzucony sprzęt.",
        "Materiałów nie wolno umieszczać przed korytarzami, drzwiami, wyjściami, sprzętem ratunkowym ani gaśnicami.",
        "Po pracy miejsce pracy musi zostać uporządkowane.",
        "Narzędzia odkłada się do wyznaczonych pojemników.",
        "Drabiny, kozły i rusztowania muszą być starannie odłożone.",
        "Każda osoba w warsztacie otrzymuje skrzynkę narzędziową i odpowiada za swoje narzędzia.",
        "Skrzynka narzędziowa nie służy do przechowywania ubrań, żywności ani rzeczy osobistych.",
        "Opuszczając warsztat, zamknij skrzynkę narzędziową.",
        "Uszkodzone narzędzia zgłaszaj brygadzistom i nie naprawiaj ich samodzielnie.",
        "Odpady sortuj zgodnie z instrukcjami brygadzisty.",
        "Zabronione jest spalanie jakichkolwiek odpadów.",
        "Odpady niebezpieczne składuje się oddzielnie i przekazuje autoryzowanej firmie."
      ]
    },
    {
      title: "Praca w terenie i procedury codzienne",
      summary: "Te same zasady obowiązują podczas pracy poza warsztatem. Przed montażem asystent brygadzisty przygotowuje narzędzia, materiały i listę kontrolną.",
      points: [
        "Priorytetem jest bezpieczeństwo i zdrowie własne oraz współpracowników.",
        "Każdą niebezpieczną sytuację natychmiast zgłoś inspektorowi BHP.",
        "Usterki narzędzi, drabin, regałów i podobnego wyposażenia zgłaszaj natychmiast.",
        "Podczas pracy zachowuj stałą czujność.",
        "Używaj udostępnionego sprzętu zgodnie z instrukcjami: drabin, rusztowań i kozłów.",
        "Przy pracy w terenie asystent brygadzisty przygotowuje narzędzia i wymagane materiały PBM.",
        "Po powrocie z terenu sprawdza się, czy wszystko zostało zwrócone i czy nie ma braków lub uszkodzeń.",
        "W razie wypadku lub kolizji w terenie musisz wiedzieć, z kim się skontaktować.",
        "Osoby kontaktowe dla pracy w terenie: Hubert 0032492 39 48 87 oraz Tommy 0032468 26 30 01."
      ]
    },
    {
      title: "ISPS, ochrona portu i ryzyko narkotykowe",
      summary: "Port w Antwerpii jest narażony na próby przemytu narkotyków i rekrutacji pracowników. Każdy pracownik ma obowiązek zachować czujność i zgłaszać nieprawidłowości.",
      points: [
        "ISPS oznacza International Ship & Port Facility Security Code.",
        "Przepisy ISPS dotyczą ochrony statków i obiektów portowych.",
        "Nieprawidłowości i incydenty zgłaszaj oficerom ochrony obiektu portowego PFSO.",
        "W grupie Eucore - Mega - Thornton działa pięciu oficerów ochrony obiektu portowego.",
        "Oficerowie odpowiadają za inspekcje, patrole, świadomość, ćwiczenia i monitorowanie incydentów.",
        "Przestępcy mogą kontaktować się osobiście lub przez media społecznościowe, np. Snapchat, LinkedIn lub Facebook.",
        "Podejrzane osoby mogą oferować pieniądze lub pytać o pracę w porcie.",
        "Na podejrzaną propozycję odpowiedz krótko: 'Nie, nie jestem zainteresowany'.",
        "Nie wdawaj się w rozmowę i nigdy nie umawiaj się na spotkanie.",
        "Podejrzane sytuacje można zgłaszać anonimowo przez www.onzehavendrugsvrij.be lub telefonicznie 03 236 62 25.",
        "Przy kontakcie online zrób zrzut ekranu i przekaż go przez punkt zgłaszania.",
        "Podejrzane fakty zgłaszaj także inspektorowi BHP."
      ]
    }
  ],
  employees: [
    {
      id: crypto.randomUUID(),
      name: "Jan Nowak",
      role: "Pracownik produkcji",
      status: "new",
      lastScore: null,
      completedAt: null
    }
  ],
  trainingReports: [],
  questions: [
    {
      id: crypto.randomUUID(),
      text: "Jak należy poruszać się po placu manewrowym Container Concepts?",
      answers: ["Korzystać z chodnika i nawiązywać kontakt wzrokowy z operatorami pojazdów", "Przechodzić najkrótszą drogą między kontenerami", "Zakładać odzież odblaskową tylko po zmroku"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Które środki ochrony są obowiązkowe w strefie koncesyjnej i warsztatach?",
      answers: ["Kask, obuwie ochronne i kamizelka odblaskowa", "Tylko rękawice ochronne", "Dowolna odzież robocza bez dodatkowych wymagań"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jak należy postąpić w nagłym wypadku?",
      answers: ["Skontaktować się z brygadzistą lub zadzwonić pod numer 112", "Najpierw zakończyć rozpoczętą pracę", "Samodzielnie transportować poszkodowanego bez zgłoszenia"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Gdzie znajduje się punkt pierwszej pomocy według broszury?",
      answers: ["W biurze brygadzisty", "Przy bramie głównej", "Wyłącznie w pojeździe serwisowym"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jakie informacje należy podać przy wzywaniu karetki?",
      answers: ["Nazwę firmy, miejsce wypadku, dane ofiary, okoliczności i stopień obrażeń", "Tylko numer telefonu zgłaszającego", "Wyłącznie nazwę firmy outsourcingowej"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Czego nie wolno robić świadkowi wypadku?",
      answers: ["Podawać poszkodowanemu napojów", "Powiadomić brygadzistę", "Odsunąć osoby postronne"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Co należy zrobić przy porażeniu prądem?",
      answers: ["Nie dotykać poszkodowanego i natychmiast wyłączyć zasilanie", "Odciągnąć poszkodowanego gołymi rękami", "Podać wodę i kontynuować pracę"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jak należy zachować się w razie pożaru?",
      answers: ["Zachować spokój, krzyknąć 'POŻAR', ostrzec innych i nie podejmować ryzyka", "Gasić pożar za wszelką cenę", "Opuścić teren bez informowania kogokolwiek"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Co jest wymagane podczas ewakuacji?",
      answers: ["Postępować zgodnie z wytycznymi kierownika ewakuacji i udać się do punktu zbiórki", "Wrócić po rzeczy osobiste", "Opuścić punkt zbiórki po dojściu na miejsce"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Kiedy można opuścić punkt zbiórki?",
      answers: ["Po rejestracji i uzyskaniu zgody ewakuatora", "Od razu po spotkaniu znajomych", "Gdy alarm ucichnie, bez dodatkowych instrukcji"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jakie prace wymagają zabezpieczenia przed upadkiem z wysokości?",
      answers: ["Prace na wysokości powyżej 2 metrów", "Każda praca przy stole roboczym", "Tylko prace poza terenem firmy"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Co zrobić w przypadku uszkodzenia instalacji MEGA?",
      answers: ["Natychmiast zgłosić to brygadziście", "Naprawić samodzielnie bez informowania", "Kontynuować pracę do końca zmiany"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Kto może zajmować się gazami technicznymi?",
      answers: ["Tylko doświadczony i dobrze przeszkolony personel", "Każdy pracownik po krótkim obejrzeniu butli", "Dostawcy bez nadzoru"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jak należy przewozić butle z gazem, nawet na krótkich odległościach?",
      answers: ["Na wózku przeznaczonym do transportu butli", "Tocząc je po ziemi", "Przenosząc ręcznie za zawór"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jak powinny być przechowywane butle z gazem?",
      answers: ["W pozycji pionowej i zabezpieczone łańcuchem przed upadkiem", "Poziomo pod stołem roboczym", "Bez zabezpieczenia, jeśli są opisane jako puste"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jaka odległość musi dzielić tlen i acetylen w magazynie gazu?",
      answers: ["Co najmniej 2 metry", "50 centymetrów", "Nie ma wymogu odległości"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Dlaczego nie wolno uwalniać gazów do kanalizacji, piwnic lub wykopów?",
      answers: ["Mogą się tam gromadzić, powodując ryzyko uduszenia lub wybuchu", "Utrudnia to sprzątanie", "Może obniżyć temperaturę w warsztacie"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Czego nie wolno blokować materiałami i narzędziami?",
      answers: ["Korytarzy, drzwi, wyjść, sprzętu ratunkowego i gaśnic", "Wyłącznie miejsc parkingowych", "Tylko wejścia do jadalni"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jak należy postąpić z narzędziami po zakończeniu pracy?",
      answers: ["Odłożyć je do wyznaczonych pojemników lub skrzynki narzędziowej", "Zostawić przy stanowisku dla kolejnej osoby", "Przechowywać razem z żywnością i ubraniami"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Co należy zrobić z uszkodzonym narzędziem?",
      answers: ["Zgłosić brygadziście i nie naprawiać samodzielnie", "Naprawić prowizorycznie taśmą", "Odłożyć do skrzynki bez informacji"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Co jest zabronione w warsztacie?",
      answers: ["Korzystanie z telefonu komórkowego", "Noszenie wymaganych środków ochrony", "Zgłaszanie niebezpiecznych sytuacji"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jak należy postępować z odpadami niebezpiecznymi?",
      answers: ["Składować oddzielnie i przekazywać autoryzowanej firmie", "Spalać, jeśli jest ich mało", "Mieszać ze zwykłymi odpadami"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Co oznacza ISPS?",
      answers: ["International Ship & Port Facility Security Code", "Instrukcja Sprzątania Placów Składowych", "Indywidualny System Pracy Spawalniczej"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Komu należy zgłaszać nieprawidłowości lub incydenty związane z ochroną portu?",
      answers: ["Oficerom ochrony obiektu portowego PFSO oraz BHP zgodnie z procedurą", "Wyłącznie współpracownikom", "Nikomu, jeśli nie ma szkody"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Jak zareagować na podejrzaną propozycję związaną z narkotykami w porcie?",
      answers: ["Krótko odmówić, nie wdawać się w rozmowę, nie spotykać się i zgłosić sprawę", "Negocjować warunki, żeby zdobyć więcej informacji", "Zignorować i nikomu nie mówić"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      text: "Co zrobić, gdy ktoś kontaktuje się online z podejrzaną propozycją?",
      answers: ["Zrobić zrzut ekranu i zgłosić przez punkt zgłoszeniowy lub BHP", "Usunąć wiadomość i zapomnieć", "Przesłać dane dostępowe, jeśli prosi o pracę w porcie"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      type: "multiple",
      text: "Które działania są prawidłowe, gdy jesteś świadkiem wypadku?",
      answers: ["Natychmiast powiadomić przełożonego lub brygadzistę", "Nie podawać poszkodowanemu napojów", "Odsunąć osoby postronne", "Przenieść poszkodowanego bez oceny ryzyka"],
      correct: [0, 1, 2]
    },
    {
      id: crypto.randomUUID(),
      type: "multiple",
      text: "Które elementy są obowiązkowe lub wymagane na terenie warsztatu i strefy koncesyjnej?",
      answers: ["Kask", "Obuwie ochronne", "Kamizelka odblaskowa", "Korzystanie z telefonu komórkowego w warsztacie"],
      correct: [0, 1, 2]
    },
    {
      id: crypto.randomUUID(),
      type: "multiple",
      text: "Czego nie wolno blokować materiałami ani narzędziami?",
      answers: ["Korytarzy", "Drzwi i wyjść", "Gaśnic i sprzętu ratunkowego", "Własnej skrzynki narzędziowej"],
      correct: [0, 1, 2]
    },
    {
      id: crypto.randomUUID(),
      type: "multiple",
      text: "Które zasady dotyczą bezpiecznego postępowania z butlami gazowymi?",
      answers: ["Przewozić je na wózku przeznaczonym do transportu butli", "Przechowywać je w pozycji pionowej", "Zabezpieczać je łańcuchem przed upadkiem", "Zakładać, że puste butle są całkowicie wolne od gazu"],
      correct: [0, 1, 2]
    },
    {
      id: crypto.randomUUID(),
      type: "multiple",
      text: "Które informacje należy podać przy wzywaniu karetki?",
      answers: ["Nazwa firmy i miejsce wypadku", "Imię, nazwisko i wiek ofiary", "Okoliczności wypadku i stopień obrażeń", "Informacja niezwiązana z udzieleniem pomocy"],
      correct: [0, 1, 2]
    },
    {
      id: crypto.randomUUID(),
      type: "graphic",
      graphic: "prohibition",
      text: "Co oznacza czerwony okrąg z ukośną linią, taki jak na tym znaku?",
      answers: ["Zakaz określonego zachowania", "Obowiązek wykonania czynności", "Droga ewakuacyjna"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      type: "graphic",
      graphic: "mandatory",
      text: "Jaka kategoria znaku jest pokazana na grafice?",
      answers: ["Znak nakazu, np. użyj wymaganego PPE", "Znak ostrzegawczy", "Znak sprzętu przeciwpożarowego"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      type: "graphic",
      graphic: "warning-electricity",
      text: "Jak należy interpretować żółty trójkątny znak z symbolem błyskawicy?",
      answers: ["Ostrzeżenie przed zagrożeniem elektrycznym", "Nakaz noszenia kasku", "Informacja o punkcie pierwszej pomocy"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      type: "graphic",
      graphic: "emergency-exit",
      text: "Co wskazuje zielony znak z kierunkiem ewakuacji?",
      answers: ["Drogę ewakuacyjną lub bezpieczne wyjście", "Zakaz wejścia", "Miejsce przechowywania gazów"],
      correct: 0
    },
    {
      id: crypto.randomUUID(),
      type: "graphic",
      graphic: "fire-equipment",
      text: "Do jakiej informacji służy czerwony znak ze sprzętem gaśniczym?",
      answers: ["Lokalizacja sprzętu przeciwpożarowego", "Ostrzeżenie przed promieniowaniem", "Nakaz użycia ochronników słuchu"],
      correct: 0
    }
  ]
};

starterData.questions = [
  {
    id: crypto.randomUUID(),
    text: "Wchodzisz pieszo na plac, po którym poruszają się ECH, wózki widłowe i ciężarówki. Jakie zachowanie jest prawidłowe?",
    answers: ["Korzystasz z chodnika, zachowujesz widoczność i nawiązujesz kontakt wzrokowy z operatorem przed przejściem", "Przechodzisz najkrótszą drogą, jeśli pojazd jest jeszcze daleko", "Zakładasz, że operator widzi pieszego w każdej sytuacji"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Które działania zmniejszają ryzyko potrącenia pieszego na placu manewrowym?",
    answers: ["Korzystanie z wyznaczonych przejść i chodników", "Noszenie odzieży fluorescencyjnej oraz latarki na klatce piersiowej", "Nawiązanie kontaktu wzrokowego z operatorem pojazdu", "Przechodzenie za cofającym pojazdem, jeśli działa sygnał dźwiękowy"],
    correct: [0, 1, 2]
  },
  {
    id: crypto.randomUUID(),
    text: "Pracownik nie ma wymaganego kasku lub obuwia ochronnego. Co powinno się wydarzyć przed rozpoczęciem pracy?",
    answers: ["Pracownik nie rozpoczyna pracy, dopóki nie ma wymaganego wyposażenia ochronnego", "Pracownik może pracować, jeśli zadanie potrwa krócej niż 15 minut", "Pracownik może zastąpić PPE własną oceną ryzyka"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Które środki ochrony są wymagane lub przewidziane w szkoleniu MEGA dla pracy w warsztacie i strefie koncesyjnej?",
    answers: ["Kask", "Obuwie ochronne", "Kamizelka odblaskowa", "Okulary, rękawice lub ochronniki słuchu, gdy wymaga tego zadanie"],
    correct: [0, 1, 2, 3]
  },
  {
    id: crypto.randomUUID(),
    text: "Praca ma być wykonywana powyżej 2 metrów. Co jest najważniejszym warunkiem dopuszczenia do pracy?",
    answers: ["Zastosowanie właściwego zabezpieczenia przed upadkiem i sprzętu zgodnego z instrukcją", "Szybkie wykonanie pracy bez rozstawiania dodatkowego sprzętu", "Praca tylko wtedy, gdy obok stoi inny pracownik"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Widzisz uszkodzoną drabinę, narzędzie lub regał. Jaka reakcja jest zgodna z zasadami?",
    answers: ["Natychmiast zgłaszasz usterkę brygadziście lub osobie odpowiedzialnej i nie używasz sprzętu", "Naprawiasz sprzęt prowizorycznie, jeśli znasz się na narzędziach", "Odkładasz sprzęt na bok bez informowania kogokolwiek"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Dochodzi do wypadku. Który pierwszy krok jest właściwy?",
    answers: ["Zachować spokój, powiadomić brygadzistę i w razie potrzeby wezwać pomoc pod 112", "Przenieść poszkodowanego w inne miejsce bez oceny zagrożeń", "Najpierw ustalić, kto zawinił"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Jakie informacje należy przygotować przy wzywaniu pomocy medycznej?",
    answers: ["Nazwa firmy i dokładne miejsce wypadku", "Imię, nazwisko i wiek poszkodowanego", "Okoliczności wypadku i stopień obrażeń", "Prywatne dane finansowe pracownika"],
    correct: [0, 1, 2]
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Jesteś świadkiem wypadku. Które zachowania są prawidłowe?",
    answers: ["Powiadomić przełożonego lub brygadzistę", "Odsunąć osoby postronne", "Nie podawać poszkodowanemu napojów", "Zebrać grupę osób wokół poszkodowanego, żeby obserwowały sytuację"],
    correct: [0, 1, 2]
  },
  {
    id: crypto.randomUUID(),
    text: "Podejrzewasz porażenie prądem. Co należy zrobić najpierw?",
    answers: ["Nie dotykać poszkodowanego i najpierw odłączyć zasilanie, jeśli można to zrobić bezpiecznie", "Natychmiast odciągnąć poszkodowanego rękami", "Podać poszkodowanemu wodę"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Widzisz początek pożaru. Jakie działanie jest zgodne z zasadą bezpieczeństwa?",
    answers: ["Ostrzec otoczenie, powiadomić przełożonego i próbować gasić tylko bez podejmowania ryzyka", "Gasić za wszelką cenę, nawet bez właściwego sprzętu", "Opuścić miejsce bez ostrzegania innych"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Podczas ewakuacji docierasz do punktu zbiórki. Kiedy możesz go opuścić?",
    answers: ["Dopiero po rejestracji i zgodzie ewakuatora", "Gdy alarm przestanie być słyszalny", "Po telefonie do współpracownika"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Które działania są prawidłowe podczas ewakuacji?",
    answers: ["Wykonywanie poleceń kierownika ewakuacji", "Spokojne opuszczenie budynku lub działu", "Udajanie się do wyznaczonego punktu zbiórki", "Powrót po rzeczy osobiste przed wyjściem"],
    correct: [0, 1, 2]
  },
  {
    id: crypto.randomUUID(),
    text: "Kto może zajmować się gazami technicznymi?",
    answers: ["Wyłącznie doświadczony i odpowiednio przeszkolony personel", "Każdy pracownik, jeśli butla jest oznaczona jako pusta", "Każdy pracownik, jeśli praca trwa krótko"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Które zasady dotyczą bezpiecznego transportu i przechowywania butli gazowych?",
    answers: ["Przewozić je na wózku przeznaczonym do transportu butli", "Przechowywać je w pozycji pionowej", "Zabezpieczać je łańcuchem przed upadkiem", "Toczyć po podłożu, jeśli odległość jest krótka"],
    correct: [0, 1, 2]
  },
  {
    id: crypto.randomUUID(),
    text: "Dlaczego butli oznaczonej jako pusta nie wolno traktować jako całkowicie bezpiecznej?",
    answers: ["Może nadal zawierać resztki gazu", "Bo pusta butla zawsze jest cięższa od pełnej", "Bo nie wymaga żadnego oznaczenia"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Jak należy przechowywać tlen względem acetylenu w magazynie gazów?",
    answers: ["Oddzielnie, z zachowaniem co najmniej 2 metrów odstępu", "Bezpośrednio obok siebie, żeby skrócić czas pracy", "Razem, jeśli butle są przypięte tym samym łańcuchem"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Dlaczego nie wolno uwalniać gazów do kanalizacji, piwnic lub wykopów?",
    answers: ["Gazy mogą się tam gromadzić i stworzyć ryzyko uduszenia lub wybuchu", "Może to spowodować zabrudzenie podłogi", "Może to utrudnić sortowanie odpadów"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Które elementy nie mogą być zastawiane materiałami ani narzędziami?",
    answers: ["Korytarze i przejścia", "Drzwi oraz wyjścia", "Gaśnice i sprzęt ratunkowy", "Wyznaczone drogi ewakuacyjne"],
    correct: [0, 1, 2, 3]
  },
  {
    id: crypto.randomUUID(),
    text: "Po zakończeniu pracy przy stanowisku zostają kable, narzędzia i drabina. Co jest właściwe?",
    answers: ["Uporządkować stanowisko, odłożyć narzędzia i sprzęt na wyznaczone miejsce", "Zostawić wszystko dla kolejnej zmiany", "Przesunąć sprzęt pod najbliższe wyjście"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Co należy zrobić z uszkodzonym narzędziem?",
    answers: ["Zgłosić uszkodzenie brygadziście i nie naprawiać narzędzia samodzielnie", "Oznaczyć je własną taśmą i dalej używać", "Odłożyć do skrzynki bez zgłoszenia"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Jak należy postępować z odpadami niebezpiecznymi?",
    answers: ["Składować oddzielnie i przekazywać autoryzowanej firmie", "Spalać, jeśli ilość jest mała", "Wrzucać do najbliższego pojemnika ogólnego"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Co oznacza ISPS w kontekście pracy w porcie?",
    answers: ["Międzynarodowy kodeks ochrony statków i obiektów portowych", "Instrukcję sortowania odpadów w warsztacie", "System oceny obecności pracowników"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Kto powinien otrzymać zgłoszenie o nieprawidłowości lub incydencie związanym z ochroną portu?",
    answers: ["Oficer ochrony obiektu portowego PFSO lub wskazana osoba odpowiedzialna za bezpieczeństwo", "Wyłącznie kolega z zespołu", "Nikt, jeśli sytuacja nie spowodowała szkody"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Ktoś oferuje pieniądze za informacje o pracy w porcie. Jaka reakcja jest właściwa?",
    answers: ["Krótko odmówić, nie umawiać się i zgłosić podejrzany kontakt", "Kontynuować rozmowę, aby sprawdzić ofertę", "Przyjąć kontakt, jeśli rozmowa odbywa się poza pracą"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Podejrzany kontakt nastąpił przez media społecznościowe. Co warto zrobić przed zgłoszeniem?",
    answers: ["Zachować dowód, np. wykonać zrzut ekranu rozmowy", "Usunąć rozmowę, żeby uniknąć problemów", "Odpisać i poprosić o więcej szczegółów"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    graphic: "prohibition",
    text: "Jaką informację przekazuje znak pokazany na grafice?",
    answers: ["Zakazuje określonego zachowania", "Nakazuje wykonanie czynności", "Wskazuje miejsce pierwszej pomocy"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    graphic: "mandatory",
    text: "Jak należy rozumieć znak pokazany na grafice?",
    answers: ["Wskazuje obowiązek wykonania określonego działania lub użycia wymaganego PPE", "Ostrzega przed substancją łatwopalną", "Oznacza wyjście ewakuacyjne"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    graphic: "warning-electricity",
    text: "Co oznacza znak pokazany na grafice?",
    answers: ["Ostrzeżenie przed zagrożeniem elektrycznym", "Zakaz używania telefonu", "Miejsce przechowywania gaśnicy"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    graphic: "emergency-exit",
    text: "Co wskazuje znak pokazany na grafice?",
    answers: ["Kierunek drogi ewakuacyjnej lub bezpiecznego wyjścia", "Strefę składowania gazów", "Zakaz przejścia"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    graphic: "fire-equipment",
    text: "Jaki rodzaj informacji przekazuje znak pokazany na grafice?",
    answers: ["Lokalizację sprzętu przeciwpożarowego", "Obowiązek założenia ochronników słuchu", "Ostrzeżenie przed ruchem wózków widłowych"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Przed użyciem drabiny zauważasz pęknięcie szczebla albo uszkodzenie stopy antypoślizgowej. Co robisz?",
    answers: ["Nie używasz drabiny i zgłaszasz uszkodzenie", "Używasz drabiny, jeśli praca potrwa krótko", "Naprawiasz drabinę prowizorycznie i kontynuujesz pracę"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Kiedy zgodnie z instrukcją drabina może być używana jako środek dostępu lub pracy?",
    answers: ["Do krótkotrwałych prac okazjonalnych, gdy nie wymaga się dużej siły i przenoszenia ciężarów", "Do stałej pracy z ciężkimi elementami", "Do pracy w pobliżu linii elektrycznych, jeśli pracownik zachowa ostrożność"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Co należy sprawdzić przed użyciem drabiny?",
    answers: ["Uszkodzenia, pęknięcia lub deformacje", "Stan szczebli", "Czystość szczebli i stan stóp antypoślizgowych", "Kolor drabiny"],
    correct: [0, 1, 2]
  },
  {
    id: crypto.randomUUID(),
    text: "Jaki jest prawidłowy sposób ustawienia drabiny przystawnej?",
    answers: ["Na twardej, równej powierzchni, pod właściwym kątem i z odpowiednim oparciem", "Na dowolnym podłożu, jeśli druga osoba ją przytrzyma", "Jak najbliżej miejsca pracy, nawet jeśli stoi na nierównym podłożu"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    image: "assets/pdf-graphics/ladder-warning-icon.png",
    imageAlt: "Piktogram ostrzegawczy z instrukcji drabiny",
    text: "Jaki rodzaj ryzyka sygnalizuje piktogram z instrukcji drabiny?",
    answers: ["Ryzyko upadku z drabiny", "Obowiązek sortowania odpadów", "Miejsce zbiórki ewakuacyjnej"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    image: "assets/pdf-graphics/visibility-ppe-icons.jpg",
    imageAlt: "Piktogramy środków ochrony indywidualnej z instrukcji widoczności",
    text: "Które środki ochrony wskazują piktogramy z instrukcji widoczności na magazynie?",
    answers: ["Obuwie ochronne, rękawice i odzież ochronna/robocza", "Gaśnica, hydrant i alarm pożarowy", "Zakaz palenia, zakaz telefonu i zakaz otwartego ognia"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    image: "assets/pdf-graphics/gas-transport-ppe-icons.png",
    imageAlt: "Piktogramy PPE z instrukcji transportu gazów",
    text: "Jakie wyposażenie ochronne wskazują piktogramy przy instrukcji transportu gazów?",
    answers: ["Rękawice, osłona głowy/twarzy, obuwie ochronne i odzież ochronna", "Tylko kamizelka odblaskowa", "Wyłącznie okulary korekcyjne"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    image: "assets/pdf-graphics/gas-transport-warning-icons.png",
    imageAlt: "Piktogramy zagrożeń z instrukcji transportu gazów",
    text: "Która interpretacja najlepiej pasuje do zestawu piktogramów z instrukcji transportu gazów?",
    answers: ["Ryzyko wybuchu, urazu przez butlę oraz zagrożenie pożarowe", "Wyłącznie obowiązek sprzątania stanowiska", "Informacja o drodze ewakuacyjnej"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "graphic",
    image: "assets/pdf-graphics/welding-warning-icons.png",
    imageAlt: "Piktogramy z instrukcji spawania autogennego",
    text: "Co oznaczają piktogramy z instrukcji spawania autogennego?",
    answers: ["Występują zagrożenia związane z gazami, ogniem, wybuchem i promieniowaniem", "To wyłącznie informacja o magazynie narzędzi", "To znaki dróg ewakuacyjnych"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Przed użyciem elektronarzędzia zauważasz uszkodzony przewód, pękniętą obudowę lub brak osłony. Co robisz?",
    answers: ["Nie używasz narzędzia, wycofujesz je z użycia i zgłaszasz usterkę", "Używasz narzędzia, jeśli nadal działa", "Owijasz przewód taśmą i kontynuujesz pracę"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    type: "multiple",
    text: "Jakie zasady są właściwe przy korzystaniu z elektronarzędzi?",
    answers: ["Używać narzędzia zgodnie z instrukcją i przeznaczeniem", "Sprawdzić stan przewodu, obudowy, wtyczki i osłon przed pracą", "Stosować wymagane PPE, np. okulary, rękawice lub ochronniki słuchu", "Zdejmować osłony, jeśli utrudniają dostęp do obrabianego elementu"],
    correct: [0, 1, 2]
  },
  {
    id: crypto.randomUUID(),
    text: "Podczas pracy elektronarzędzie zaczyna nietypowo wibrować, iskrzyć lub wydaje nietypowy dźwięk. Jaka reakcja jest najbezpieczniejsza?",
    answers: ["Przerwać pracę, odłączyć narzędzie od zasilania i zgłosić problem", "Dokończyć zadanie, jeśli do końca zostało niewiele czasu", "Zwiększyć nacisk, żeby szybciej zakończyć cięcie lub szlifowanie"],
    correct: 0
  },
  {
    id: crypto.randomUUID(),
    text: "Kto powinien naprawiać uszkodzone elektronarzędzie?",
    answers: ["Osoba uprawniona lub serwis zgodnie z procedurą, po zgłoszeniu usterki", "Każdy pracownik, jeśli ma podstawowe narzędzia", "Użytkownik narzędzia podczas przerwy w pracy"],
    correct: 0
  }
];

let state = loadState();
let currentQuestions = [];
let currentQuestionIndex = 0;
let animationTimer = null;
let currentBrochurePage = 1;
let brochureComplete = false;
let brochureFrameRequest = 0;
let currentModuleIndex = 0;
let completedModuleCount = 0;
let currentLanguage = UI[localStorage.getItem(LANGUAGE_KEY)] ? localStorage.getItem(LANGUAGE_KEY) : "pl";
let brochureZoom = 125;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const pageTitle = $("#page-title");
const employeeForm = $("#employee-form");
const settingsForm = $("#settings-form");
const questionForm = $("#question-form");
const adminForm = $("#admin-form");
const adminLoginForm = $("#admin-login-form");
const employeeLoginForm = $("#employee-login-form");
const employeeList = $("#employee-list");
const questionList = $("#question-list");
const summaryList = $("#summary-list");
const adminList = $("#admin-list");
const reportDatabase = $("#report-database");
const activeEmployee = $("#active-employee");
const testForm = $("#test-form");
const resultBox = $("#result-box");

function t(key, replacements = {}) {
  const dictionary = UI[currentLanguage] || UI.pl;
  const template = dictionary[key] || UI.pl[key] || key;
  return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), template);
}

const AUTO_TRANSLATION_DICTIONARY = {
  en: [
    ["środki ochrony indywidualnej", "personal protective equipment"],
    ["środek ochrony indywidualnej", "personal protective equipment"],
    ["kamizelka odblaskowa", "high-visibility vest"],
    ["odzież fluorescencyjna", "fluorescent clothing"],
    ["obuwie ochronne", "safety shoes"],
    ["okulary ochronne", "safety glasses"],
    ["rękawice ochronne", "protective gloves"],
    ["ochronniki słuchu", "hearing protection"],
    ["punkt zbiórki", "assembly point"],
    ["punkty zbiórki", "assembly points"],
    ["droga ewakuacyjna", "evacuation route"],
    ["wyjście ewakuacyjne", "emergency exit"],
    ["pierwsza pomoc", "first aid"],
    ["brygadzista", "foreman"],
    ["inspektor BHP", "safety advisor"],
    ["wypadek", "accident"],
    ["pożar", "fire"],
    ["ewakuacja", "evacuation"],
    ["gaśnica", "fire extinguisher"],
    ["sprzęt przeciwpożarowy", "fire-fighting equipment"],
    ["butla gazowa", "gas cylinder"],
    ["butle gazowe", "gas cylinders"],
    ["transport butli", "cylinder transport"],
    ["wózek do butli", "cylinder trolley"],
    ["gazy techniczne", "technical gases"],
    ["acetylen", "acetylene"],
    ["tlen", "oxygen"],
    ["azot", "nitrogen"],
    ["argon", "argon"],
    ["propan", "propane"],
    ["spawanie", "welding"],
    ["spawanie autogenne", "oxy-fuel welding"],
    ["drabina", "ladder"],
    ["drabiny", "ladders"],
    ["elektronarzędzie", "power tool"],
    ["elektronarzędzia", "power tools"],
    ["uszkodzone narzędzie", "damaged tool"],
    ["narzędzia", "tools"],
    ["skrzynka narzędziowa", "toolbox"],
    ["odpady niebezpieczne", "hazardous waste"],
    ["odpady", "waste"],
    ["telefon komórkowy", "mobile phone"],
    ["zakaz", "prohibition"],
    ["nakaz", "mandatory instruction"],
    ["ostrzeżenie", "warning"],
    ["zagrożenie elektryczne", "electrical hazard"],
    ["zagrożenie", "hazard"],
    ["ryzyko", "risk"],
    ["bezpieczeństwo", "safety"],
    ["zgłoś", "report"],
    ["zgłaszać", "report"],
    ["używać", "use"],
    ["nie używaj", "do not use"],
    ["nie wolno", "it is forbidden to"],
    ["należy", "must"],
    ["pracownik", "employee"],
    ["pracownicy", "employees"],
    ["warsztat", "workshop"],
    ["magazyn", "warehouse"],
    ["plac manewrowy", "manoeuvring yard"],
    ["chodnik", "walkway"],
    ["kontakt wzrokowy", "eye contact"],
    ["operator", "operator"],
    ["wózek widłowy", "forklift"],
    ["wózki widłowe", "forklifts"],
    ["ciężarówka", "lorry"],
    ["ciężarówki", "lorries"]
  ],
  nl: [
    ["środki ochrony indywidualnej", "persoonlijke beschermingsmiddelen"],
    ["środek ochrony indywidualnej", "persoonlijk beschermingsmiddel"],
    ["kamizelka odblaskowa", "fluohesje"],
    ["odzież fluorescencyjna", "fluorescerende kleding"],
    ["obuwie ochronne", "veiligheidsschoenen"],
    ["okulary ochronne", "veiligheidsbril"],
    ["rękawice ochronne", "beschermhandschoenen"],
    ["ochronniki słuchu", "gehoorbescherming"],
    ["punkt zbiórki", "verzamelplaats"],
    ["punkty zbiórki", "verzamelplaatsen"],
    ["droga ewakuacyjna", "evacuatieroute"],
    ["wyjście ewakuacyjne", "nooduitgang"],
    ["pierwsza pomoc", "EHBO"],
    ["brygadzista", "ploegbaas"],
    ["inspektor BHP", "veiligheidsadviseur"],
    ["wypadek", "ongeval"],
    ["pożar", "brand"],
    ["ewakuacja", "evacuatie"],
    ["gaśnica", "brandblusser"],
    ["sprzęt przeciwpożarowy", "brandbestrijdingsmateriaal"],
    ["butla gazowa", "gasfles"],
    ["butle gazowe", "gasflessen"],
    ["transport butli", "flessentransport"],
    ["wózek do butli", "flessenkar"],
    ["gazy techniczne", "technische gassen"],
    ["acetylen", "acetyleen"],
    ["tlen", "zuurstof"],
    ["azot", "stikstof"],
    ["argon", "argon"],
    ["propan", "propaan"],
    ["spawanie", "lassen"],
    ["spawanie autogenne", "autogeen lassen"],
    ["drabina", "ladder"],
    ["drabiny", "ladders"],
    ["elektronarzędzie", "elektrisch gereedschap"],
    ["elektronarzędzia", "elektrisch gereedschap"],
    ["uszkodzone narzędzie", "beschadigd gereedschap"],
    ["narzędzia", "gereedschap"],
    ["skrzynka narzędziowa", "gereedschapskist"],
    ["odpady niebezpieczne", "gevaarlijk afval"],
    ["odpady", "afval"],
    ["telefon komórkowy", "mobiele telefoon"],
    ["zakaz", "verbod"],
    ["nakaz", "verplichting"],
    ["ostrzeżenie", "waarschuwing"],
    ["zagrożenie elektryczne", "elektrisch gevaar"],
    ["zagrożenie", "gevaar"],
    ["ryzyko", "risico"],
    ["bezpieczeństwo", "veiligheid"],
    ["zgłoś", "meld"],
    ["zgłaszać", "melden"],
    ["używać", "gebruiken"],
    ["nie używaj", "niet gebruiken"],
    ["nie wolno", "het is verboden om"],
    ["należy", "moet"],
    ["pracownik", "werknemer"],
    ["pracownicy", "werknemers"],
    ["warsztat", "werkplaats"],
    ["magazyn", "magazijn"],
    ["plac manewrowy", "manoeuvreerterrein"],
    ["chodnik", "voetpad"],
    ["kontakt wzrokowy", "oogcontact"],
    ["operator", "operator"],
    ["wózek widłowy", "heftruck"],
    ["wózki widłowe", "heftrucks"],
    ["ciężarówka", "vrachtwagen"],
    ["ciężarówki", "vrachtwagens"]
  ]
};

function autoTranslateText(text, language) {
  const source = String(text || "").trim();
  if (!source) return "";
  if (language === "pl") return source;

  const exact = exactTrainingTranslation(source, language);
  if (exact) return exact;

  let translated = source;
  [...(AUTO_TRANSLATION_DICTIONARY[language] || [])]
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([from, to]) => {
      translated = translated.replace(new RegExp(escapeRegExp(from), "gi"), to);
    });

  const prefix = language === "en" ? "Auto translation" : "Automatische vertaling";
  return translated === source ? `${prefix}: ${source}` : translated;
}

function exactTrainingTranslation(text, language) {
  for (const module of MODULE_TRANSLATIONS[language] || []) {
    if (module.title === text || module.summary === text || module.points?.includes(text)) return text;
  }
  const moduleIndex = starterData.modules.findIndex((module) => module.title === text || module.summary === text || module.points?.includes(text));
  if (moduleIndex >= 0) {
    const module = starterData.modules[moduleIndex];
    const translated = MODULE_TRANSLATIONS[language]?.[moduleIndex];
    if (module.title === text) return translated?.title;
    if (module.summary === text) return translated?.summary;
    const pointIndex = module.points?.indexOf(text);
    if (pointIndex >= 0) return translated?.points?.[pointIndex];
  }

  const questionIndex = starterData.questions.findIndex((question) => question.text === text || question.answers?.includes(text) || question.imageAlt === text);
  if (questionIndex >= 0) {
    const question = starterData.questions[questionIndex];
    const translated = QUESTION_TRANSLATIONS[language]?.[questionIndex];
    if (question.text === text) return translated?.[0];
    const answerIndex = question.answers?.indexOf(text);
    if (answerIndex >= 0) return translated?.[1]?.[answerIndex];
  }
  return "";
}

function createAutoTranslations(values) {
  return {
    en: values.map((value) => autoTranslateText(value, "en")),
    nl: values.map((value) => autoTranslateText(value, "nl"))
  };
}

function translationAt(entity, field, fallback, index = 0) {
  const translated = entity?.translations?.[currentLanguage]?.[field];
  if (Array.isArray(translated)) return translated[index] || fallback;
  return translated || fallback;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function displayTrainingText(value) {
  const text = String(value || "");
  if (text === starterData.settings.topic && currentLanguage !== "pl") return t("brochureTitle");
  return text;
}

function moduleView(module, index) {
  if (currentLanguage !== "pl" && module.translations?.[currentLanguage]) {
    return {
      ...module,
      title: module.translations[currentLanguage].title || module.title,
      summary: module.translations[currentLanguage].summary || module.summary,
      points: module.translations[currentLanguage].points || module.points
    };
  }
  const translated = MODULE_TRANSLATIONS[currentLanguage]?.[index];
  if (!translated) return module;
  return {
    ...module,
    title: translated.title,
    summary: translated.summary,
    points: translated.points
  };
}

function questionView(question, index = question.sourceIndex) {
  if (currentLanguage !== "pl" && question.translations?.[currentLanguage]) {
    return {
      ...question,
      text: question.translations[currentLanguage].text || question.text,
      answers: question.translations[currentLanguage].answers || question.answers,
      imageAlt: question.translations[currentLanguage].imageAlt || question.imageAlt
    };
  }
  const translated = QUESTION_TRANSLATIONS[currentLanguage]?.[index];
  if (!translated) return question;
  return {
    ...question,
    text: translated[0],
    answers: translated[1],
    imageAlt: question.imageAlt ? displayTrainingText(question.imageAlt) : question.imageAlt
  };
}

function brochurePageView(page) {
  if (currentLanguage === "en") return null;
  return BROCHURE_PAGE_TRANSLATIONS[currentLanguage]?.[page - 1] || null;
}

function currentBrochureUrl() {
  return BROCHURE_URLS[currentLanguage] || BROCHURE_URLS.pl;
}

function createLanguageSwitcher() {
  const switcher = document.createElement("label");
  switcher.className = "language-switcher";
  switcher.innerHTML = `
    <span id="language-label">${t("languageLabel")}</span>
    <select id="language-select" aria-labelledby="language-label">
      <option value="pl">Polski</option>
      <option value="en">English</option>
      <option value="nl">Nederlands</option>
    </select>
  `;
  $(".topbar").append(switcher);
  $("#language-select").value = currentLanguage;
  $("#language-select").addEventListener("change", (event) => {
    currentLanguage = event.target.value;
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    applyStaticTranslations();
    render();
  });
  placeLanguageSwitcher();
}

function placeLanguageSwitcher() {
  const switcher = $(".language-switcher");
  if (!switcher) return;
  const target = document.body.classList.contains("access-locked")
    ? $(".access-panel")
    : document.body.classList.contains("employee-mode")
      ? $(".training-header")
      : $(".topbar");
  if (target && switcher.parentElement !== target) target.append(switcher);
}

function setText(selector, key) {
  const element = $(selector);
  if (element) element.textContent = t(key);
}

function setLabelCaption(selector, key) {
  const element = $(selector);
  if (!element) return;
  const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = `${t(key)} `;
  } else {
    element.prepend(document.createTextNode(`${t(key)} `));
  }
}

function setPlaceholder(selector, key) {
  const element = $(selector);
  if (element) element.placeholder = t(key);
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("pageTitle");
  setText("#language-label", "languageLabel");
  setText(".access-panel > div:first-child .eyebrow", "accessEyebrow");
  setText(".access-panel h1", "accessTitle");
  const accessIntro = $(".access-panel > div:first-child p:not(.eyebrow)");
  if (accessIntro) accessIntro.textContent = t("accessIntro");
  setText("#admin-login-form h2", "commandCenter");
  setText("#employee-login-form h2", "employeePortal");
  setLabelCaption("#admin-login-form label:nth-of-type(1)", "authorizedPerson");
  setLabelCaption("#admin-login-form label:nth-of-type(2)", "adminCode");
  setLabelCaption("#employee-login-form label", "employeeCode");
  setText("#admin-login-form button", "enterCenter");
  setText("#employee-login-form button", "startTraining");
  setPlaceholder("#admin-name", "fullName");
  setPlaceholder("#admin-code", "adminCode");
  setPlaceholder("#employee-access-code", "employeeCode");
  setText(".brand strong", "accessTitle");
  setText(".brand span:not(.brand-mark)", "commandCenter");
  const navButtons = $$(".nav-button");
  if (navButtons[0]) navButtons[0].lastChild.textContent = ` ${t("commandCenter")}`;
  if (navButtons[1]) navButtons[1].lastChild.textContent = ` ${t("employeePortal")}`;
  if (navButtons[2]) navButtons[2].lastChild.textContent = ` ${t("knowledgeBase")}`;
  setText(".sidebar-note strong", "passThreshold");
  setText(".sidebar-note span", "passThresholdText");
  setText("#logout-button", "logout");
  setText(".topbar .eyebrow", "commandCenter");
  if (!sessionStorage.getItem(ADMIN_SESSION_KEY)) setText("#storage-status", "savedBrowser");
  const metricLabels = $$(".metric span");
  ["employees", "passed", "questionPool", "trainingModules", "drawnInTest"].forEach((key, index) => {
    if (metricLabels[index]) metricLabels[index].textContent = t(key);
  });
  setText("#dashboard-view .work-grid .panel:nth-child(1) h2", "addEmployee");
  setText("#dashboard-view .work-grid .panel:nth-child(1) .panel-heading p", "addEmployeeInfo");
  setText("#dashboard-view .work-grid .panel:nth-child(2) h2", "settings");
  setText("#dashboard-view .work-grid .panel:nth-child(2) .panel-heading p", "settingsInfo");
  setLabelCaption("#employee-form label:nth-of-type(1)", "fullName");
  setLabelCaption("#employee-form label:nth-of-type(2)", "position");
  setText("#employee-form button", "addEmployee");
  setLabelCaption("#settings-form label:nth-of-type(1)", "summaryTopic");
  setLabelCaption("#settings-form label:nth-of-type(2)", "drawCount");
  setText("#settings-form button", "saveSettings");
  setPlaceholder("#employee-name", "fullName");
  setPlaceholder("#employee-role", "position");
  setPlaceholder("#training-topic", "summaryTopic");
  const sectionHeadings = $$("#dashboard-view .section-heading");
  if (sectionHeadings[0]) {
    sectionHeadings[0].querySelector("h2").textContent = t("knowledgeSummary");
    sectionHeadings[0].querySelector("span").textContent = t("editableParts");
  }
  if (sectionHeadings[1]) {
    sectionHeadings[1].querySelector("h2").textContent = t("authorizedPeople");
    sectionHeadings[1].querySelector("span").textContent = t("centerAccess");
  }
  if (sectionHeadings[2]) {
    sectionHeadings[2].querySelector("h2").textContent = t("employees");
    sectionHeadings[2].querySelector("button").textContent = t("restoreData");
  }
  if (sectionHeadings[3]) {
    sectionHeadings[3].querySelector("h2").textContent = t("trainingRegister");
    sectionHeadings[3].querySelector("span").textContent = t("trainingRegisterInfo");
  }
  setPlaceholder("#new-admin-name", "fullName");
  setPlaceholder("#new-admin-code", "adminCode");
  setText("#admin-form button", "addPermission");
  setText(".training-header .eyebrow", "employeePath");
  setText("#training-title", "safetyTraining");
  setLabelCaption(".select-label", "employee");
  setText("#return-admin", "commandCenter");
  const steps = $$(".step");
  ["stepBrochure", "stepSummary", "stepTest", "stepResult"].forEach((key, index) => {
    if (steps[index]) steps[index].textContent = t(key);
  });
  setText("#brochure-stage .eyebrow", "mandatoryPolicy");
  setText("#brochure-stage h3", "brochureTitle");
  $("#brochure-stage .progress-track")?.setAttribute("aria-label", t("brochureProgress"));
  $(".brochure-viewer")?.setAttribute("aria-label", t("brochurePreview"));
  $("#brochure-frame")?.setAttribute("title", t("brochureTitle"));
  setText("#previous-page", "previousPage");
  setText("#next-page", "nextPage");
  setText("#start-course", "goSummary");
  $(".zoom-controls")?.setAttribute("aria-label", t("brochureZoom"));
  $("#zoom-out")?.setAttribute("title", t("zoomOut"));
  $("#zoom-in")?.setAttribute("title", t("zoomIn"));
  setText("#zoom-reset", "resetZoom");
  $(".safety-animation")?.setAttribute("aria-label", t("trainingAnimation"));
  setText("#animation-topic", "summaryTopicTitle");
  const summaryIntro = $(".animation-copy > p");
  if (summaryIntro) summaryIntro.textContent = t("summaryIntro");
  $("#animation-stage .progress-track")?.setAttribute("aria-label", t("summaryProgress"));
  setText("#previous-module", "previousStage");
  setText("#start-animation", "nextStage");
  setText("#request-test", "requestTest");
  setText("#test-stage h3", "finalTest");
  setText("#previous-question", "previous");
  setText("#next-question", "next");
  setText("#restart-test", "newAttempt");
  setText("#submit-test", "checkResult");
  setText("#new-attempt", "startFromBrochure");
  setText("#questions-title", "questionBank");
  setText("#questions-view .panel:first-child .panel-heading p", "poolInfo");
  setLabelCaption("#question-form label:nth-of-type(1)", "questionText");
  setLabelCaption("#question-form label:nth-of-type(2)", "answerA");
  setLabelCaption("#question-form label:nth-of-type(3)", "answerB");
  setLabelCaption("#question-form label:nth-of-type(4)", "answerC");
  setLabelCaption("#question-form label:nth-of-type(5)", "correctAnswer");
  setText("#question-form button", "addToPool");
  setText("#questions-view .panel:nth-child(2) h2", "questionPool");
  setText("#questions-view .panel:nth-child(2) .panel-heading p", "poolInfo");
  setPlaceholder("#question-text", "questionText");
  setText("#empty-state-template strong", "emptyTitle");
  setText("#empty-state-template span", "emptyDescription");
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return normalizeState(structuredClone(starterData));

  try {
    const parsed = JSON.parse(saved);
    return normalizeState({
      settings: { ...starterData.settings, ...parsed.settings },
      admins: Array.isArray(parsed.admins) ? parsed.admins : starterData.admins,
      modules: Array.isArray(parsed.modules) ? parsed.modules : starterData.modules,
      employees: Array.isArray(parsed.employees) ? parsed.employees.map(normalizeEmployee) : [],
      questions: Array.isArray(parsed.questions) ? parsed.questions : starterData.questions,
      trainingReports: Array.isArray(parsed.trainingReports) ? parsed.trainingReports : []
    });
  } catch {
    return normalizeState(structuredClone(starterData));
  }
}

function normalizeState(nextState) {
  return {
    ...nextState,
    admins: Array.isArray(nextState.admins) && nextState.admins.length ? nextState.admins : starterData.admins,
    employees: Array.isArray(nextState.employees) ? nextState.employees.map(normalizeEmployee) : [],
    trainingReports: normalizeTrainingReports(nextState)
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeEmployee(employee) {
  return {
    ...employee,
    accessCode: employee.accessCode || generateAccessCode(),
    reports: Array.isArray(employee.reports) ? employee.reports : []
  };
}

function normalizeTrainingReports(nextState) {
  const employees = Array.isArray(nextState.employees) ? nextState.employees.map(normalizeEmployee) : [];
  const existingReports = Array.isArray(nextState.trainingReports) ? nextState.trainingReports : [];
  const migratedReports = employees.flatMap((employee) => {
    return (employee.reports || []).map((report) => createTrainingReport(employee, report));
  });
  const merged = [...existingReports, ...migratedReports].filter(Boolean);
  const unique = new Map();
  merged.forEach((report) => {
    unique.set(report.id, normalizeTrainingReport(report));
  });
  return [...unique.values()].sort((a, b) => new Date(b.testDate) - new Date(a.testDate));
}

function normalizeTrainingReport(report) {
  return {
    id: report.id || crypto.randomUUID(),
    reportNumber: report.reportNumber || `BHP-${String(Date.now()).slice(-6)}`,
    employeeId: report.employeeId || "",
    employeeName: report.employeeName || "",
    employeeRole: report.employeeRole || "",
    accessCode: report.accessCode || "",
    trainingDate: report.trainingDate || report.completedAt || new Date().toISOString(),
    testDate: report.testDate || report.completedAt || new Date().toISOString(),
    score: Number(report.score) || 0,
    passed: Boolean(report.passed),
    correctCount: Number(report.correctCount) || 0,
    totalQuestions: Number(report.totalQuestions) || 0,
    threshold: Number(report.threshold) || PASS_THRESHOLD
  };
}

function createTrainingReport(employee, report) {
  if (!employee || !report) return null;
  return normalizeTrainingReport({
    ...report,
    employeeId: employee.id,
    employeeName: employee.name,
    employeeRole: employee.role,
    accessCode: employee.accessCode,
    trainingDate: report.trainingDate || report.completedAt,
    testDate: report.testDate || report.completedAt
  });
}

function generateAccessCode() {
  const part = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `BHP-${part}`;
}

function render() {
  renderMetrics();
  renderSettings();
  renderAdmins();
  renderEmployees();
  renderTrainingReports();
  renderEmployeeSelect();
  renderSummaryList();
  renderQuestions();
  renderTrainingCopy();
  renderBrochure();
  renderCourse();
}

function renderMetrics() {
  $("#employee-count").textContent = state.employees.length;
  $("#passed-count").textContent = state.employees.filter((employee) => employee.status === "passed").length;
  $("#question-count").textContent = state.questions.length;
  $("#module-count").textContent = state.modules.length;
  $("#draw-count-label").textContent = normalizedDrawCount();
}

function renderAdmins() {
  adminList.innerHTML = "";
  state.admins.forEach((admin) => {
    const card = document.createElement("article");
    card.className = "admin-card";
    card.innerHTML = `
      <div>
        <p class="card-title">${escapeHtml(admin.name)}</p>
        <div class="card-meta"><span>${t("code")}: ${escapeHtml(admin.code)}</span></div>
      </div>
      <button class="danger" type="button" data-remove-admin="${admin.id}">${t("remove")}</button>
    `;
    adminList.append(card);
  });
}

function renderSettings() {
  $("#training-topic").value = state.settings.topic;
  $("#draw-count").value = state.settings.drawCount;
}

function renderEmployees() {
  employeeList.innerHTML = "";
  if (!state.employees.length) {
    employeeList.append(emptyState(t("noEmployees"), t("noEmployeesInfo")));
    return;
  }

  state.employees.forEach((employee) => {
    const card = document.createElement("article");
    card.className = "employee-card";
    const status = employeeStatus(employee);
    const startAction = employee.status === "passed"
      ? `<span class="status-pill">${t("statusPassed")}</span>`
      : `<button class="secondary" type="button" data-start="${employee.id}">${t("start")}</button>`;
    card.innerHTML = `
      <div>
        <p class="card-title">${escapeHtml(employee.name)}</p>
        <div class="card-meta">
          <span>${escapeHtml(employee.role)}</span>
          <span class="badge ${status.className}">${status.label}</span>
          <span>${t("accessCode")}: <strong>${escapeHtml(employee.accessCode)}</strong></span>
          ${employee.lastScore === null ? "" : `<span>${t("lastScore")}: ${employee.lastScore}%</span>`}
          <span>${t("reports")}: ${(employee.reports || []).length}</span>
        </div>
        ${renderEmployeeReport(employee)}
      </div>
      ${startAction}
    `;
    employeeList.append(card);
  });
}

function renderEmployeeReport(employee) {
  const latest = (employee.reports || []).at(-1);
  if (!latest) return "";
  const locale = currentLanguage === "pl" ? "pl-PL" : currentLanguage === "nl" ? "nl-BE" : "en-GB";
  return `
    <div class="report-line">
      ${t("latestReport")}: ${latest.score}%,
      ${latest.passed ? t("passedReport") : t("failedReport")},
      ${new Date(latest.completedAt).toLocaleString(locale)}
    </div>
  `;
}

function renderTrainingReports() {
  if (!reportDatabase) return;
  reportDatabase.innerHTML = "";
  const reports = state.trainingReports || [];
  if (!reports.length) {
    reportDatabase.append(emptyState(t("noReports"), t("noReportsInfo")));
    return;
  }

  const table = document.createElement("table");
  table.className = "report-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>${t("reportNumber")}</th>
        <th>${t("trainingDate")}</th>
        <th>${t("testDate")}</th>
        <th>${t("employeeName")}</th>
        <th>${t("employeeRole")}</th>
        <th>${t("accessCode")}</th>
        <th>${t("testScore")}</th>
        <th>${t("testStatus")}</th>
      </tr>
    </thead>
    <tbody>
      ${reports.map((report) => `
        <tr>
          <td>${escapeHtml(report.reportNumber)}</td>
          <td>${formatReportDate(report.trainingDate)}</td>
          <td>${formatReportDate(report.testDate)}</td>
          <td>${escapeHtml(report.employeeName)}</td>
          <td>${escapeHtml(report.employeeRole)}</td>
          <td>${escapeHtml(report.accessCode)}</td>
          <td>${report.score}% (${report.correctCount}/${report.totalQuestions})</td>
          <td><span class="badge ${report.passed ? "pass" : "fail"}">${report.passed ? t("statusPassed") : t("statusFailed")}</span></td>
        </tr>
      `).join("")}
    </tbody>
  `;
  reportDatabase.append(table);
}

function formatReportDate(value) {
  const locale = currentLanguage === "pl" ? "pl-PL" : currentLanguage === "nl" ? "nl-BE" : "en-GB";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(locale);
}

function renderEmployeeSelect() {
  activeEmployee.innerHTML = "";
  if (!state.employees.length) {
    const option = document.createElement("option");
    option.textContent = t("noEmployees");
    option.value = "";
    activeEmployee.append(option);
    activeEmployee.disabled = true;
    return;
  }

  activeEmployee.disabled = false;
  state.employees.forEach((employee) => {
    const option = document.createElement("option");
    option.value = employee.id;
    option.textContent = `${employee.name} - ${employee.role}`;
    activeEmployee.append(option);
  });
}

function renderQuestions() {
  questionList.innerHTML = "";
  if (!state.questions.length) {
    questionList.append(emptyState(t("noQuestions"), t("noQuestionsInfo")));
    return;
  }

  state.questions.forEach((question, index) => {
    const displayQuestion = questionView(question, index);
    const card = document.createElement("article");
    card.className = "question-card";
    const correctAnswers = normalizeCorrectAnswers(question);
    const answers = displayQuestion.answers
      .map((answer, answerIndex) => `<li>${correctAnswers.includes(answerIndex) ? "<strong>" : ""}${escapeHtml(displayTrainingText(answer))}${correctAnswers.includes(answerIndex) ? "</strong>" : ""}</li>`)
      .join("");
    card.innerHTML = `
      <div>
        <p class="card-title">${index + 1}. ${escapeHtml(displayTrainingText(displayQuestion.text))}</p>
        <ul>${answers}</ul>
      </div>
      <div class="card-actions">
        <button class="secondary" type="button" data-edit-question="${question.id}">${t("edit")}</button>
        <button class="danger" type="button" data-remove-question="${question.id}">${t("removeQuestion")}</button>
      </div>
    `;
    questionList.append(card);
  });
}

function renderSummaryList() {
  summaryList.innerHTML = "";
  if (!state.modules.length) {
    summaryList.append(emptyState(t("noSummary"), t("noSummaryInfo")));
    return;
  }

  state.modules.forEach((module, index) => {
    const displayModule = moduleView(module, index);
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `
      <div>
        <p class="card-title">${index + 1}. ${escapeHtml(displayTrainingText(displayModule.title))}</p>
        <p>${escapeHtml(displayTrainingText(displayModule.summary))}</p>
        <div class="card-meta"><span>${(displayModule.points || []).length} ${t("knowledgePoints")}</span></div>
      </div>
      <button class="secondary" type="button" data-edit-module="${index}">${t("edit")}</button>
    `;
    summaryList.append(card);
  });
}

function renderTrainingCopy() {
  const topic = currentLanguage !== "pl" && state.settings.translations?.[currentLanguage]?.topic
    ? state.settings.translations[currentLanguage].topic
    : displayTrainingText(state.settings.topic);
  $("#animation-topic").textContent = t("summaryTopicTitle");
  $("#training-title").textContent = `${t("trainingPrefix")}: ${topic}`;
  $("#test-context").textContent = `${t("drawnQuestions")}: ${normalizedDrawCount()} ${t("fromPool")} ${state.questions.length}. ${t("requiredToPass")} ${PASS_THRESHOLD}%.`;
}

function renderBrochure() {
  const page = Math.max(1, Math.min(currentBrochurePage, BROCHURE_PAGE_COUNT));
  currentBrochurePage = page;
  brochureComplete = page === BROCHURE_PAGE_COUNT;
  const progress = Math.round((page / BROCHURE_PAGE_COUNT) * 100);

  $("#brochure-counter").textContent = `${t("page")} ${page}/${BROCHURE_PAGE_COUNT}`;
  $("#brochure-status").textContent = brochureComplete ? t("brochureComplete") : t("brochureIncomplete");
  $("#brochure-progress").style.width = `${progress}%`;
  $("#previous-page").disabled = page === 1;
  $("#next-page").hidden = brochureComplete;
  $("#next-page").textContent = t("nextPage");
  $("#start-course").disabled = !brochureComplete;
  $("#zoom-value").textContent = `${brochureZoom}%`;
  $("#zoom-out").disabled = brochureZoom <= 100;
  $("#zoom-in").disabled = brochureZoom >= 220;
  renderBrochureTranslation(page);

  const frame = $("#brochure-frame");
  const nextSource = `${currentBrochureUrl()}?pageView=${page}&zoomLevel=${brochureZoom}#page=${page}&zoom=${brochureZoom}&toolbar=0&navpanes=0&scrollbar=1`;
  if (frame.dataset.source !== nextSource) {
    const requestId = ++brochureFrameRequest;
    frame.dataset.source = nextSource;
    frame.src = "about:blank";
    window.setTimeout(() => {
      if (requestId === brochureFrameRequest) {
        frame.src = nextSource;
      }
    }, 30);
  }
}

function renderBrochureTranslation(page) {
  const container = $("#brochure-translation");
  if (!container) return;
  const translated = brochurePageView(page);
  container.classList.toggle("active", Boolean(translated));
  if (!translated) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <p class="eyebrow">${t("translatedBrochure")}</p>
    <h4>${escapeHtml(translated[0])}</h4>
    <ul>
      ${translated[1].map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderCourse() {
  if (!state.modules.length) return;

  const module = moduleView(state.modules[currentModuleIndex] || state.modules[0], currentModuleIndex);
  const moduleTotal = state.modules.length;
  if (currentModuleIndex === moduleTotal - 1) {
    completedModuleCount = moduleTotal;
  }
  const courseComplete = completedModuleCount >= moduleTotal;
  const progress = Math.round((completedModuleCount / moduleTotal) * 100);

  $("#course-counter").textContent = `${t("stage")} ${currentModuleIndex + 1}/${moduleTotal}`;
  $("#course-status").textContent = courseComplete ? t("summaryComplete") : `${t("reviewed")} ${completedModuleCount}/${moduleTotal} ${t("parts")}`;
  $("#animation-progress").style.width = `${progress}%`;
  $("#course-label").textContent = currentModuleIndex < completedModuleCount ? t("summaryPart") : t("importantInfo");
  $("#course-title").textContent = displayTrainingText(module.title);
  $("#course-summary").textContent = displayTrainingText(module.summary);

  const points = $("#course-points");
  points.innerHTML = "";
  (module.points || [module.summary]).forEach((point) => {
    const item = document.createElement("li");
    item.textContent = displayTrainingText(point);
    points.append(item);
  });

  $("#previous-module").disabled = currentModuleIndex === 0;
  $("#start-animation").hidden = courseComplete;
  $("#start-animation").textContent = t("nextStage");
  $("#request-test").disabled = !courseComplete;
}

function emptyState(title, description) {
  const node = $("#empty-state-template").content.firstElementChild.cloneNode(true);
  node.querySelector("strong").textContent = title;
  node.querySelector("span").textContent = description;
  return node;
}

function employeeStatus(employee) {
  if (employee.status === "passed") return { label: t("statusPassed"), className: "pass" };
  if (employee.status === "failed") return { label: t("statusFailed"), className: "fail" };
  if (employee.status === "training") return { label: t("statusTraining"), className: "" };
  return { label: t("statusNew"), className: "" };
}

function normalizedDrawCount() {
  return Math.max(1, Math.min(Number(state.settings.drawCount) || 1, Math.max(state.questions.length, 1)));
}

function switchView(viewName) {
  document.body.classList.remove("employee-mode");
  document.body.classList.remove("employee-portal-mode");
  $$(".view").forEach((view) => view.classList.remove("active"));
  $(`#${viewName}-view`).classList.add("active");

  $$(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  const titles = {
    dashboard: t("adminPanel"),
    employee: t("employeeTraining"),
    questions: t("questionBank")
  };
  pageTitle.textContent = titles[viewName];
  placeLanguageSwitcher();
}

function setStage(stageName) {
  $$(".training-stage").forEach((stage) => stage.classList.remove("active"));
  $(`#${stageName}-stage`).classList.add("active");
  $$(".step").forEach((step) => step.classList.toggle("active", step.dataset.stepLabel === stageName));
}

function startEmployeeTraining(employeeId, options = {}) {
  if (!employeeId) return;
  activeEmployee.value = employeeId;
  const employee = state.employees.find((item) => item.id === employeeId);
  if (employee?.status !== "passed") {
    updateEmployee(employeeId, { status: "training" });
  }
  resetTraining();
  setStage("brochure");
  switchView("employee");
  document.body.classList.add("employee-mode");
  document.body.classList.toggle("employee-portal-mode", Boolean(options.portalOnly));
  placeLanguageSwitcher();
}

function returnToAdminCenter() {
  if (document.body.classList.contains("employee-portal-mode")) {
    showGateway(t("loginRequired"));
    return;
  }
  const adminId = sessionStorage.getItem(ADMIN_SESSION_KEY);
  const admin = state.admins.find((item) => item.id === adminId);
  if (!admin) {
    showGateway(t("loginRequired"));
    return;
  }
  document.body.classList.remove("employee-mode", "employee-portal-mode");
  switchView("dashboard");
  placeLanguageSwitcher();
}

function showGateway(message = "") {
  document.body.classList.add("access-locked");
  document.body.classList.remove("employee-mode", "employee-portal-mode");
  $("#access-gateway").hidden = false;
  $("#access-message").textContent = message;
  placeLanguageSwitcher();
}

function unlockAdmin(admin) {
  sessionStorage.setItem(ADMIN_SESSION_KEY, admin.id);
  sessionStorage.removeItem(EMPLOYEE_SESSION_KEY);
  document.body.classList.remove("access-locked", "employee-mode", "employee-portal-mode");
  $("#access-gateway").hidden = true;
  switchView("dashboard");
  $("#storage-status").textContent = `${t("loggedIn")}: ${admin.name}`;
}

function loginAdmin(name, code) {
  const normalizedName = name.trim().toLowerCase();
  const admin = state.admins.find((item) => item.name.trim().toLowerCase() === normalizedName && item.code === code.trim());
  if (!admin) {
    showGateway(t("noPermission"));
    return;
  }
  unlockAdmin(admin);
}

function loginEmployee(accessCode) {
  const code = accessCode.trim().toUpperCase();
  const employee = state.employees.find((item) => item.accessCode.toUpperCase() === code);
  if (!employee) {
    showGateway(t("noEmployeeCode"));
    return;
  }
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  sessionStorage.setItem(EMPLOYEE_SESSION_KEY, employee.id);
  $("#access-gateway").hidden = true;
  document.body.classList.remove("access-locked");
  startEmployeeTraining(employee.id, { portalOnly: true });
}

function logout() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  sessionStorage.removeItem(EMPLOYEE_SESSION_KEY);
  showGateway(t("loggedOut"));
}

function restoreAccessSession() {
  const adminId = sessionStorage.getItem(ADMIN_SESSION_KEY);
  const admin = state.admins.find((item) => item.id === adminId);
  if (admin) {
    unlockAdmin(admin);
  } else {
    showGateway();
  }
}

function resetTraining() {
  resetBrochure();
  resetAnimation();
}

function resetBrochure() {
  currentBrochurePage = 1;
  brochureComplete = false;
  renderBrochure();
}

function nextBrochurePage() {
  if (!activeEmployee.value) return;
  if (currentBrochurePage < BROCHURE_PAGE_COUNT) {
    currentBrochurePage += 1;
  }
  renderBrochure();
}

function previousBrochurePage() {
  currentBrochurePage = Math.max(1, currentBrochurePage - 1);
  renderBrochure();
}

function changeBrochureZoom(delta) {
  brochureZoom = Math.max(100, Math.min(220, brochureZoom + delta));
  renderBrochure();
}

function resetBrochureZoom() {
  brochureZoom = 125;
  renderBrochure();
}

function startCourse() {
  if (!brochureComplete) return;
  setStage("animation");
}

function resetAnimation() {
  clearInterval(animationTimer);
  animationTimer = null;
  currentModuleIndex = 0;
  completedModuleCount = 0;
  $("#start-animation").disabled = false;
  $("#start-animation").hidden = false;
  renderCourse();
}

function runAnimation() {
  if (!activeEmployee.value) return;
  const moduleTotal = state.modules.length;
  completedModuleCount = Math.max(completedModuleCount, currentModuleIndex + 1);
  if (currentModuleIndex < moduleTotal - 1) {
    currentModuleIndex += 1;
  }
  renderCourse();
}

function previousModule() {
  currentModuleIndex = Math.max(0, currentModuleIndex - 1);
  renderCourse();
}

function requestTest() {
  if (!brochureComplete || completedModuleCount < state.modules.length) return;
  prepareTest();
  setStage("test");
}

function startNewAttempt() {
  resetTraining();
  setStage("brochure");
}

function prepareTest() {
  currentQuestionIndex = 0;
  currentQuestions = selectQuestionsForTest()
    .map((question) => {
      const displayQuestion = questionView(question);
      const displayAnswers = shuffle(
        displayQuestion.answers.map((answer, index) => ({
          text: answer,
          originalIndex: index
        }))
      );
      return {
        ...question,
        text: displayQuestion.text,
        answers: displayQuestion.answers,
        imageAlt: displayQuestion.imageAlt,
        correctAnswers: normalizeCorrectAnswers(question),
        inputType: question.type === "multiple" ? "checkbox" : "radio",
        displayAnswers,
        userAnswers: []
      };
    });
  renderTest();
}

function selectQuestionsForTest() {
  const total = normalizedDrawCount();
  const indexedQuestions = state.questions.map((question, sourceIndex) => ({ ...question, sourceIndex }));
  const graphicQuestions = shuffle(indexedQuestions.filter((question) => question.type === "graphic"));
  const multipleQuestions = shuffle(indexedQuestions.filter((question) => question.type === "multiple"));
  const regularQuestions = shuffle(indexedQuestions.filter((question) => question.type !== "graphic" && question.type !== "multiple"));
  const selected = [];

  selected.push(...graphicQuestions.slice(0, Math.min(2, graphicQuestions.length, total)));
  if (selected.length < total) {
    selected.push(...multipleQuestions.slice(0, Math.min(2, multipleQuestions.length, total - selected.length)));
  }

  const selectedIds = new Set(selected.map((question) => question.id));
  const remaining = shuffle([...regularQuestions, ...multipleQuestions, ...graphicQuestions].filter((question) => !selectedIds.has(question.id)));
  selected.push(...remaining.slice(0, total - selected.length));
  return shuffle(selected);
}

function renderTest() {
  testForm.innerHTML = "";

  if (!currentQuestions.length) {
    testForm.append(emptyState(t("noQuestions"), t("noQuestionsInfo")));
    $("#submit-test").disabled = true;
    $("#previous-question").disabled = true;
    $("#next-question").disabled = true;
    return;
  }

  const question = currentQuestions[currentQuestionIndex];
  $("#question-progress").textContent = `${t("question")} ${currentQuestionIndex + 1}/${currentQuestions.length}`;

  const fieldset = document.createElement("fieldset");
  fieldset.className = "test-question";
  const helper = question.inputType === "checkbox" ? t("selectAll") : t("selectOne");
  fieldset.innerHTML = `
    <legend class="card-title">${currentQuestionIndex + 1}. ${escapeHtml(displayTrainingText(question.text))}</legend>
    ${question.image ? renderQuestionImage(question.image, question.imageAlt) : ""}
    ${question.graphic ? renderGraphicSign(question.graphic) : ""}
    <p class="question-helper">${helper}</p>
    <div class="answers">
      ${question.displayAnswers
        .map((answer) => {
          const checked = question.userAnswers.includes(answer.originalIndex) ? "checked" : "";
          return `
            <label class="answer-option">
              <input type="${question.inputType}" name="question-${question.id}" value="${answer.originalIndex}" ${checked} />
              <span>${escapeHtml(displayTrainingText(answer.text))}</span>
            </label>
          `;
        })
        .join("")}
    </div>
  `;
  testForm.append(fieldset);
  updateTestNavigation();
}

function submitTest() {
  if (!currentQuestions.length) return;

  persistCurrentAnswer();
  const answered = currentQuestions.every((question) => question.userAnswers.length > 0);
  if (!answered) {
    $("#storage-status").textContent = t("answerAll");
    const firstUnanswered = currentQuestions.findIndex((question) => !question.userAnswers.length);
    currentQuestionIndex = Math.max(0, firstUnanswered);
    renderTest();
    return;
  }

  const correctCount = currentQuestions.reduce((count, question) => {
    return count + (sameAnswers(question.userAnswers, question.correctAnswers) ? 1 : 0);
  }, 0);
  const score = Math.round((correctCount / currentQuestions.length) * 100);
  const passed = score >= PASS_THRESHOLD;
  const completedAt = new Date().toISOString();
  const employee = state.employees.find((item) => item.id === activeEmployee.value);
  const report = createTrainingReport(employee, {
    id: crypto.randomUUID(),
    reportNumber: `BHP-${new Date(completedAt).getFullYear()}-${String((state.trainingReports || []).length + 1).padStart(4, "0")}`,
    score,
    passed,
    correctCount,
    totalQuestions: currentQuestions.length,
    threshold: PASS_THRESHOLD,
    accessCode: employee?.accessCode,
    trainingDate: completedAt,
    testDate: completedAt,
    completedAt
  });
  updateEmployee(activeEmployee.value, {
    status: passed ? "passed" : "failed",
    lastScore: score,
    completedAt,
    reports: [
      ...((state.employees.find((employee) => employee.id === activeEmployee.value)?.reports) || []),
      report
    ]
  });
  state.trainingReports = [report, ...(state.trainingReports || [])];

  resultBox.className = `result-box ${passed ? "celebration" : ""}`;
  resultBox.innerHTML = passed
    ? `
      <div class="fireworks" aria-hidden="true">
        <span class="firework firework-one"></span>
        <span class="firework firework-two"></span>
        <span class="firework firework-three"></span>
        <span class="spark spark-one"></span>
        <span class="spark spark-two"></span>
        <span class="spark spark-three"></span>
      </div>
      <p class="eyebrow">${t("passedTraining")}</p>
      <h3 class="congrats-word">${t("congratulations")}</h3>
      <div class="result-score">${score}%</div>
      <p>${t("correctAnswers")}: ${correctCount}/${currentQuestions.length}. ${t("passThreshold")}: ${PASS_THRESHOLD}%.</p>
    `
    : `
      <p class="eyebrow">${t("failedTraining")}</p>
      <h3>${t("retakeRequired")}</h3>
      <div class="result-score" style="color: var(--danger)">${score}%</div>
      <p>${t("correctAnswers")}: ${correctCount}/${currentQuestions.length}. ${t("passThreshold")}: ${PASS_THRESHOLD}%.</p>
    `;
  saveState();
  render();
  setStage("result");
}

function persistCurrentAnswer() {
  if (!currentQuestions.length) return;
  const question = currentQuestions[currentQuestionIndex];
  const checked = [...testForm.querySelectorAll(`input[name="question-${question.id}"]:checked`)].map((input) => Number(input.value));
  question.userAnswers = checked.sort((a, b) => a - b);
  updateTestNavigation();
}

function previousQuestion() {
  persistCurrentAnswer();
  currentQuestionIndex = Math.max(0, currentQuestionIndex - 1);
  renderTest();
}

function nextQuestion() {
  persistCurrentAnswer();
  currentQuestionIndex = Math.min(currentQuestions.length - 1, currentQuestionIndex + 1);
  renderTest();
}

function updateTestNavigation() {
  const answeredCount = currentQuestions.filter((question) => question.userAnswers.length > 0).length;
  $("#previous-question").disabled = currentQuestionIndex === 0;
  $("#next-question").disabled = currentQuestionIndex >= currentQuestions.length - 1;
  $("#submit-test").disabled = answeredCount < currentQuestions.length;
  $("#storage-status").textContent = `${t("answersSaved")}: ${answeredCount}/${currentQuestions.length}`;
}

function normalizeCorrectAnswers(question) {
  return (Array.isArray(question.correct) ? question.correct : [question.correct]).map(Number).sort((a, b) => a - b);
}

function sameAnswers(selected, correct) {
  if (selected.length !== correct.length) return false;
  return selected.every((answer, index) => answer === correct[index]);
}

function renderGraphicSign(type) {
  return `
    <div class="graphic-question" aria-label="${t("signGraphic")}">
      <div class="safety-sign ${type}">
        <span></span>
      </div>
    </div>
  `;
}

function renderQuestionImage(src, alt = t("graphicAlt")) {
  return `
    <div class="pdf-question-image">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(displayTrainingText(alt))}" />
    </div>
  `;
}

function updateEmployee(employeeId, patch) {
  state.employees = state.employees.map((employee) => (employee.id === employeeId ? { ...employee, ...patch } : employee));
  saveState();
  render();
}

function editQuestion(questionId) {
  const question = state.questions.find((item) => item.id === questionId);
  if (!question) return;

  const text = window.prompt(t("questionPrompt"), question.text);
  if (text === null || !text.trim()) return;

  const answers = question.answers.map((answer, index) => {
    const value = window.prompt(`${t("answerPrompt")} ${String.fromCharCode(65 + index)}:`, answer);
    return value === null ? answer : value.trim();
  });

  const currentCorrect = normalizeCorrectAnswers(question).map((index) => index + 1).join(",");
  const correctInput = window.prompt(t("correctPrompt"), currentCorrect);
  if (correctInput === null) return;

  const correct = correctInput
    .split(",")
    .map((part) => Number(part.trim()) - 1)
    .filter((index) => Number.isInteger(index) && index >= 0 && index < answers.length);

  if (!correct.length) {
    window.alert(t("alertCorrect"));
    return;
  }

  question.text = text.trim();
  question.answers = answers;
  question.correct = correct.length === 1 && question.type !== "multiple" ? correct[0] : correct;
  if (correct.length > 1) question.type = "multiple";
  const questionTranslations = createAutoTranslations([question.text, ...question.answers, question.imageAlt || ""]);
  question.translations = {
    en: {
      text: questionTranslations.en[0],
      answers: questionTranslations.en.slice(1, 1 + question.answers.length),
      imageAlt: question.imageAlt ? questionTranslations.en.at(-1) : ""
    },
    nl: {
      text: questionTranslations.nl[0],
      answers: questionTranslations.nl.slice(1, 1 + question.answers.length),
      imageAlt: question.imageAlt ? questionTranslations.nl.at(-1) : ""
    }
  };
  saveState();
  render();
}

function editModule(moduleIndex) {
  const module = state.modules[moduleIndex];
  if (!module) return;

  const title = window.prompt(t("titlePrompt"), module.title);
  if (title === null || !title.trim()) return;

  const summary = window.prompt(t("summaryPrompt"), module.summary);
  if (summary === null || !summary.trim()) return;

  const points = window.prompt(t("pointsPrompt"), (module.points || []).join("; "));
  if (points === null) return;

  module.title = title.trim();
  module.summary = summary.trim();
  module.points = points
    .split(";")
    .map((point) => point.trim())
    .filter(Boolean);
  const moduleTranslations = createAutoTranslations([module.title, module.summary, ...module.points]);
  module.translations = {
    en: {
      title: moduleTranslations.en[0],
      summary: moduleTranslations.en[1],
      points: moduleTranslations.en.slice(2)
    },
    nl: {
      title: moduleTranslations.nl[0],
      summary: moduleTranslations.nl[1],
      points: moduleTranslations.nl.slice(2)
    }
  };
  saveState();
  render();
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

$$(".nav-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

employeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const employee = {
    id: crypto.randomUUID(),
    name: $("#employee-name").value.trim(),
    role: $("#employee-role").value.trim(),
    accessCode: generateAccessCode(),
    status: "new",
    lastScore: null,
    completedAt: null,
    reports: []
  };
  state.employees.unshift(employee);
  saveState();
  employeeForm.reset();
  render();
  $("#storage-status").textContent = `${t("addedEmployee")}: ${employee.accessCode}`;
});

settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.settings.topic = $("#training-topic").value.trim();
  const topicTranslations = createAutoTranslations([state.settings.topic]);
  state.settings.translations = {
    en: { topic: topicTranslations.en[0] },
    nl: { topic: topicTranslations.nl[0] }
  };
  state.settings.drawCount = Number($("#draw-count").value);
  saveState();
  render();
  $("#storage-status").textContent = t("settingsSaved");
});

adminForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#new-admin-name").value.trim();
  const code = $("#new-admin-code").value.trim();
  if (!name || !code) return;
  state.admins.push({ id: crypto.randomUUID(), name, code });
  saveState();
  adminForm.reset();
  render();
  $("#storage-status").textContent = `${t("permissionAdded")}: ${name}`;
});

adminList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-admin]");
  if (!removeButton) return;
  if (state.admins.length <= 1) {
    $("#storage-status").textContent = t("cannotRemoveLastAdmin");
    return;
  }
  state.admins = state.admins.filter((admin) => admin.id !== removeButton.dataset.removeAdmin);
  saveState();
  render();
});

adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginAdmin($("#admin-name").value, $("#admin-code").value);
});

employeeLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginEmployee($("#employee-access-code").value);
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answers = [$("#answer-0").value.trim(), $("#answer-1").value.trim(), $("#answer-2").value.trim()];
  const text = $("#question-text").value.trim();
  const questionTranslations = createAutoTranslations([text, ...answers]);
  state.questions.push({
    id: crypto.randomUUID(),
    text,
    answers,
    correct: Number($("#correct-answer").value),
    translations: {
      en: {
        text: questionTranslations.en[0],
        answers: questionTranslations.en.slice(1)
      },
      nl: {
        text: questionTranslations.nl[0],
        answers: questionTranslations.nl.slice(1)
      }
    }
  });
  saveState();
  questionForm.reset();
  render();
});

employeeList.addEventListener("click", (event) => {
  const startButton = event.target.closest("[data-start]");
  if (!startButton) return;
  const employee = state.employees.find((item) => item.id === startButton.dataset.start);
  if (employee?.status === "passed") return;
  startEmployeeTraining(startButton.dataset.start);
});

questionList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-question]");
  if (editButton) {
    editQuestion(editButton.dataset.editQuestion);
    return;
  }

  const removeButton = event.target.closest("[data-remove-question]");
  if (!removeButton) return;
  state.questions = state.questions.filter((question) => question.id !== removeButton.dataset.removeQuestion);
  saveState();
  render();
});

summaryList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-module]");
  if (!editButton) return;
  editModule(Number(editButton.dataset.editModule));
});

activeEmployee.addEventListener("change", () => {
  resetTraining();
  setStage("brochure");
});

$("#previous-page").addEventListener("click", previousBrochurePage);
$("#next-page").addEventListener("click", nextBrochurePage);
$("#zoom-out").addEventListener("click", () => changeBrochureZoom(-25));
$("#zoom-in").addEventListener("click", () => changeBrochureZoom(25));
$("#zoom-reset").addEventListener("click", resetBrochureZoom);
$("#start-course").addEventListener("click", startCourse);
$("#return-admin").addEventListener("click", returnToAdminCenter);
$("#logout-button").addEventListener("click", logout);
$("#start-animation").addEventListener("click", runAnimation);
$("#previous-module").addEventListener("click", previousModule);
$("#request-test").addEventListener("click", requestTest);
$("#previous-question").addEventListener("click", previousQuestion);
$("#next-question").addEventListener("click", nextQuestion);
testForm.addEventListener("change", persistCurrentAnswer);
$("#restart-test").addEventListener("click", startNewAttempt);
$("#submit-test").addEventListener("click", submitTest);
$("#new-attempt").addEventListener("click", startNewAttempt);

$("#reset-demo").addEventListener("click", () => {
  state = structuredClone(starterData);
  saveState();
  resetTraining();
  setStage("brochure");
  render();
});

createLanguageSwitcher();
applyStaticTranslations();
render();
restoreAccessSession();
