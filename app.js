const canvas = document.getElementById("sailingCanvas");
const ctx = canvas.getContext("2d");

const translations = {
  ko: {
    skip: "시뮬레이터로 이동",
    brand: "딩기 권리정",
    navBasics: "기본",
    navSimulator: "시뮬레이터",
    navRules: "룰 10-18",
    navGuide: "규칙 가이드",
    language: "언어",
    heroTitle: "바람과 보트 위치를 바꾸면 권리정이 바로 보입니다.",
    heroLead: "딩기요트를 처음 배우는 사람도 포트/스타보드, 풍상/풍하, 클리어 어헤드 상황을 색상과 그림으로 이해할 수 있게 만든 정적 학습 도구입니다.",
    heroCta: "직접 배치해보기",
    colorPromise: "색상 약속",
    greenMeaning: "초록 = 권리정",
    redMeaning: "빨강 = 피항정",
    heroScope: "룰 10-18의 기본 상황과 제한을 단순화해 표시합니다.",
    basicsTitle: "그림으로 먼저 잡는 딩기요트 기본",
    basicsLead: "권리정은 “누가 무조건 이긴다”가 아니라, 충돌을 피하기 위해 누가 먼저 행동해야 하는지를 정하는 규칙입니다.",
    boatDirectionTitle: "보트의 방향",
    boatDirectionText: "뱃머리가 향하는 방향과 바람이 불어오는 방향의 관계로 택이 결정됩니다.",
    starboardTitle: "스타보드 택",
    starboardText: "바람이 오른쪽, 즉 스타보드 쪽에서 오면 스타보드 택입니다.",
    portTitle: "포트 택",
    portText: "바람이 왼쪽, 즉 포트 쪽에서 오면 포트 택입니다.",
    windwardLeewardTitle: "풍상과 풍하",
    windwardLeewardText: "같은 택에서 겹쳐 있으면 풍하 보트가 권리정입니다.",
    windLabel: "바람",
    windwardLabel: "풍상",
    leewardLabel: "풍하",
    simTitle: "권리정 시뮬레이터",
    simLead: "보트를 드래그하고 A/B 카드에서 방향이나 3초 뒤 태킹을 선택하면 권리정 변화가 바로 표시됩니다.",
    dragHelp: "드래그: 보트/마크 이동",
    greenHelp: "초록: 권리정",
    markHelp: "노란 원: 마크 표시존",
    currentDecision: "현재 판정",
    whyTitle: "왜 그렇게 판정하나요?",
    windControlTitle: "바람",
    windFrom: "바람이 불어오는 방향",
    dialHint: "다이얼을 잡고 돌리세요",
    boatA: "보트 A",
    boatB: "보트 B",
    boatATacking: "A 태킹 중",
    boatBTacking: "B 태킹 중",
    manualTacking: "직접 태킹 상태",
    tackLeftAfter3: "3초 뒤 좌태킹",
    tackRightAfter3: "3초 뒤 우태킹",
    heading: "방향",
    tacking: "태킹 중",
    markControlTitle: "마크",
    showMark: "마크 표시",
    fixedMarkZone: "공식 마크 존 기준은 3보트길이입니다. 화면 연습용으로만 더 크게 표시할 수 있습니다.",
    markZoneSizeLabel: "표시용 마크룸 크기",
    markZoneValue: (lengths) => `${Number(lengths).toFixed(1)}보트길이`,
    resetMarkZone: "3보트길이로",
    resetMark: "마크 가운데로",
    simTackTitle: "태킹 진행",
    simBoatLabel: "태킹할 보트",
    simDirectionLabel: "회전 방향",
    simSelectA: "보트 A",
    simSelectB: "보트 B",
    simTurnLeft: "왼쪽으로 태킹",
    simTurnRight: "오른쪽으로 태킹",
    scheduleTack: "3초 뒤 태킹",
    cancelTackSim: "중지",
    simStatusIdle: "A 또는 B 카드에서 3초 뒤 태킹을 누르세요.",
    simStatusCountdown: (boat, seconds) => `${boat} 태킹 시작까지 ${seconds}초`,
    simStatusTacking: (boat, seconds) => `${boat}가 3초 동안 천천히 태킹 중입니다. 완료까지 ${seconds}초 남았고, 이 구간은 RRS 제13조가 먼저 적용됩니다.`,
    simStatusDone: (boat) => `${boat} 태킹 완료. 새 택 기준으로 다시 판정합니다.`,
    simStatusCancelled: "태킹 시뮬레이션이 중지되었습니다.",
    simBadgeIdle: "대기",
    simBadgeCountdown: (boat, seconds) => `${seconds}s 뒤 ${boat} 태킹`,
    simBadgeTacking: (boat, seconds) => `${boat} 태킹 ${seconds}s`,
    simBadgeDone: (boat) => `${boat} 완료`,
    simBadgeCancelled: "중지",
    simTimelineLabel: "판정 변화",
    simTimelineEmpty: "실행하면 권리정 변화가 여기에 기록됩니다.",
    simTimelineStart: "시작",
    simTimelineTackBegins: "3초 태킹 회전 시작",
    simTimelineChange: "판정 변경",
    simTimelineFinish: "완료",
    simTimelineWinner: (winner, rule, relation) => winner ? `${winner} 권리정 · ${rule} · ${relation}` : `판정 보류 · ${rule} · ${relation}`,
    presetOpposite: "포트 vs 스타보드",
    presetLeeward: "풍상/풍하",
    presetClear: "클리어 어헤드",
    presetTacking: "태킹 중",
    presetMark: "마크 접근",
    stateALabel: "A 상태",
    stateBLabel: "B 상태",
    relationLabel: "관계",
    limitsTitle: "함께 적용되는 기본 제한",
    rulesTitle: "이 도구가 판정하는 기본 규칙",
    rulesLead: "World Sailing Racing Rules of Sailing 2025-2028의 룰 10-18을 모바일 학습용으로 단순화했습니다.",
    rule10Title: "반대 택",
    rule10Text: "포트 택 보트는 스타보드 택 보트를 피해야 합니다.",
    rule11Title: "같은 택, 겹침",
    rule11Text: "풍상 보트는 풍하 보트를 피해야 합니다.",
    rule12Title: "같은 택, 비겹침",
    rule12Text: "클리어 어스턴 보트는 클리어 어헤드 보트를 피해야 합니다.",
    rule13Title: "태킹 중",
    rule13Text: "태킹 중인 보트는 태킹하지 않는 보트를 피해야 합니다.",
    rule14Title: "접촉 피하기",
    rule14Text: "권리정과 피항정 모두 가능한 범위에서 접촉을 피해야 합니다.",
    rule15Title: "새 권리정",
    rule15Text: "새로 권리정을 얻은 보트는 처음에 상대가 피할 공간을 줘야 합니다.",
    rule16Title: "코스 변경",
    rule16Text: "권리정이 방향을 바꿀 때에도 상대가 피할 공간을 줘야 합니다.",
    rule17Title: "프로퍼 코스",
    rule17Text: "특정 방식으로 풍하 겹침을 만든 보트에는 프로퍼 코스 제한이 생길 수 있습니다.",
    rule18Title: "마크 룸",
    rule18Text: "마크 주변에서는 권리정과 별도로 마크룸이 추가로 검토될 수 있습니다. 이 도구는 마크 존을 표시하고 주의 문구를 제공합니다.",
    scopeNote: "범위 밖: 마크룸의 완전한 판정, 룰 17의 겹침 형성 이력, 장애물, 룸 투 택, 출발 전후 특수 상황, 팀레이싱, 실제 충돌 회피 판단. 실제 경기에서는 최신 RRS 원문과 코치·심판 설명을 우선하세요.",
    guideEyebrow: "무료 규칙 가이드",
    guideTitle: "상황별 설명은 Yacht Rules 가이드에서 이어집니다.",
    guideText: "룰 10부터 18까지 초보자가 자주 헷갈리는 장면을 한국어로 차근차근 정리했습니다.",
    guideCta: "무료 가이드 보기",
    footer: "© {year} 딩기 권리정. 교육용 단순화 도구입니다.",
    footerGuide: "규칙 가이드",
    footerAbout: "소개",
    footerPrivacy: "개인정보",
    footerDisclaimer: "면책",
    winner: (boat) => `${boat}가 권리정`,
    undecided: "판정 보류",
    rightOfWay: "권리정",
    keepClear: "피항정",
    mark: "마크",
    markZone: (lengths) => `${Number(lengths).toFixed(1)}보트길이 표시존`,
    wind: "바람",
    windFromCanvas: (deg) => `${deg}에서 불어옴`,
    starboard: "스타보드 택",
    port: "포트 택",
    tackingState: "태킹",
    noGo: "노고존",
    deadRun: "데드런 근처",
    bothTackingRelation: "둘 다 태킹 중",
    relationOpposite: "반대 택",
    relationOverlap: "같은 택 겹침",
    relationClear: "같은 택 비겹침",
    relationTackingA: "A 태킹 중",
    relationTackingB: "B 태킹 중",
    relationMark: "마크 접근",
    rule10Reason: (winner, loser, winnerTack, loserTack) => `RRS 제10조(반대 택): ${loser}는 ${loserTack}, ${winner}는 ${winnerTack}입니다. 반대 택에서는 포트 택 보트가 스타보드 택 보트를 피해야 하므로 ${winner}가 권리정입니다.`,
    rule11Reason: (winner, loser, tack) => `RRS 제11조(같은 택, 겹침): 두 보트가 ${tack}이고 서로 겹쳐 있습니다. ${winner}가 풍하 보트, ${loser}가 풍상 보트이므로 풍상 보트인 ${loser}가 피해야 합니다.`,
    rule12Reason: (winner, loser, tack) => `RRS 제12조(같은 택, 비겹침): 두 보트가 ${tack}이고 겹쳐 있지 않습니다. ${winner}가 클리어 어헤드, ${loser}가 클리어 어스턴이므로 클리어 어스턴 보트가 피해야 합니다.`,
    rule13Reason: (winner, loser) => `RRS 제13조(태킹 중): ${loser}가 태킹 중입니다. 태킹 중인 보트는 새 클로즈홀드 코스가 될 때까지 태킹하지 않는 보트를 피해야 하므로 ${winner}가 권리정입니다.`,
    bothTackingReason: "RRS 제13조: 두 보트가 모두 태킹 중입니다. 이 단순 도구는 권리정을 확정하지 않고 판정을 보류합니다.",
    rule14Notice: "RRS 제14조: 권리정과 피항정 모두 가능한 범위에서 접촉을 피해야 합니다.",
    rule15Notice: (boat) => `RRS 제15조: ${boat}가 새로 권리정을 얻었습니다. 상대 보트의 행동 때문에 얻은 경우가 아니라면 처음에는 상대가 피할 공간을 줘야 합니다.`,
    rule16Notice: (boat) => `RRS 제16.1조: 권리정 ${boat}가 코스를 바꾸는 동안 상대 보트가 피할 공간을 줘야 합니다.`,
    rule17Notice: (boat) => `RRS 제17조 확인: 풍하정 ${boat}가 클리어 어스턴에서 2보트길이 안으로 겹침을 만든 경우 프로퍼 코스보다 높게 항해할 수 없습니다.`,
    markNone: "",
    markNoBoat: "RRS 제18조(마크룸) 참고: 마크가 표시되어 있지만 두 보트 모두 현재 표시존 밖입니다.",
    markOneBoat: (boat) => `RRS 제18조(마크룸) 참고: ${boat}가 현재 표시존 안에 있습니다. 마크 주변에서는 권리정 판정과 별도로 마크룸 의무가 추가될 수 있습니다.`,
    markBothBoats: "RRS 제18조(마크룸) 참고: 두 보트가 모두 현재 표시존 안에 있습니다. 실제 마크룸은 존 진입 시점, 겹침 여부, 마크를 남기는 쪽, 룰 18의 예외를 함께 봐야 하므로 이 도구는 주의 표시만 제공합니다.",
    markDisplayCaution: (zone) => `현재 표시존은 ${zone}입니다. 실제 RRS 기준 존은 3.0보트길이입니다.`,
    factorTacks: (a, b) => `택: A=${a}, B=${b}`,
    factorAngles: (wind, a, b) => `각도: 바람 ${wind}, A ${a}, B ${b}`,
    factorOverlap: (text) => `겹침 판단: ${text}`,
    factorMark: (a, b, zone) => `마크 거리: A ${a}, B ${b} · 표시존 ${zone}`,
    overlapYes: "겹침",
    overlapNo: "비겹침",
  },
  en: {
    skip: "Skip to simulator",
    brand: "Dinghy ROW",
    navBasics: "Basics",
    navSimulator: "Simulator",
    navRules: "Rules 10-18",
    navGuide: "Rule guide",
    language: "Language",
    heroTitle: "Move the wind and boats. The right-of-way boat lights up.",
    heroLead: "A static visual tool for learning port/starboard, windward/leeward, clear ahead, and basic dinghy right-of-way situations.",
    heroCta: "Try the simulator",
    colorPromise: "Color key",
    greenMeaning: "Green = right-of-way",
    redMeaning: "Red = keep-clear",
    heroScope: "This simplified tool covers the basic situations and limitations in Rules 10-18.",
    basicsTitle: "Dinghy basics in pictures",
    basicsLead: "Right of way is not a license to collide. It helps sailors know who must act first to keep clear.",
    boatDirectionTitle: "Boat heading",
    boatDirectionText: "A boat's tack is determined by the relationship between her heading and where the wind is coming from.",
    starboardTitle: "Starboard tack",
    starboardText: "If the wind comes over the starboard side, the boat is on starboard tack.",
    portTitle: "Port tack",
    portText: "If the wind comes over the port side, the boat is on port tack.",
    windwardLeewardTitle: "Windward and leeward",
    windwardLeewardText: "When boats on the same tack overlap, the leeward boat has right of way.",
    windLabel: "Wind",
    windwardLabel: "Windward",
    leewardLabel: "Leeward",
    simTitle: "Right-of-way simulator",
    simLead: "Drag the boats, then use each A/B card to change heading or schedule a tack in three seconds.",
    dragHelp: "Drag: move boats/mark",
    greenHelp: "Green: right-of-way",
    markHelp: "Yellow circle: display mark zone",
    currentDecision: "Current decision",
    whyTitle: "Why this decision?",
    windControlTitle: "Wind",
    windFrom: "Wind coming from",
    dialHint: "Grab and rotate the dial",
    boatA: "Boat A",
    boatB: "Boat B",
    boatATacking: "A tacking",
    boatBTacking: "B tacking",
    manualTacking: "Manual tacking state",
    tackLeftAfter3: "Tack left in 3s",
    tackRightAfter3: "Tack right in 3s",
    heading: "Heading",
    tacking: "Tacking",
    markControlTitle: "Mark",
    showMark: "Show mark",
    fixedMarkZone: "The official mark-zone standard is three boat lengths. You can enlarge the display only for practice visibility.",
    markZoneSizeLabel: "Display mark-room size",
    markZoneValue: (lengths) => `${Number(lengths).toFixed(1)} boat lengths`,
    resetMarkZone: "Back to 3 lengths",
    resetMark: "Center mark",
    simTackTitle: "Tack progress",
    simBoatLabel: "Boat to tack",
    simDirectionLabel: "Turn direction",
    simSelectA: "Boat A",
    simSelectB: "Boat B",
    simTurnLeft: "Tack left",
    simTurnRight: "Tack right",
    scheduleTack: "Tack in 3 sec",
    cancelTackSim: "Stop",
    simStatusIdle: "Use a three-second tack button in the A or B card.",
    simStatusCountdown: (boat, seconds) => `${boat} starts tacking in ${seconds}s`,
    simStatusTacking: (boat, seconds) => `${boat} is slowly tacking over 3 seconds. ${seconds}s left; RRS Rule 13 applies first in this phase.`,
    simStatusDone: (boat) => `${boat} finished tacking. The new tack is evaluated again.`,
    simStatusCancelled: "Tacking simulation stopped.",
    simBadgeIdle: "Ready",
    simBadgeCountdown: (boat, seconds) => `${boat} tacks in ${seconds}s`,
    simBadgeTacking: (boat, seconds) => `${boat} tacking ${seconds}s`,
    simBadgeDone: (boat) => `${boat} done`,
    simBadgeCancelled: "Stopped",
    simTimelineLabel: "Decision changes",
    simTimelineEmpty: "Run a tack to log right-of-way changes here.",
    simTimelineStart: "Start",
    simTimelineTackBegins: "3-second tack turn begins",
    simTimelineChange: "Decision changed",
    simTimelineFinish: "Finish",
    simTimelineWinner: (winner, rule, relation) => winner ? `${winner} right of way · ${rule} · ${relation}` : `Decision held · ${rule} · ${relation}`,
    presetOpposite: "Port vs starboard",
    presetLeeward: "Windward/leeward",
    presetClear: "Clear ahead",
    presetTacking: "Tacking",
    presetMark: "Approaching mark",
    stateALabel: "A state",
    stateBLabel: "B state",
    relationLabel: "Relation",
    limitsTitle: "Basic limitations also active",
    rulesTitle: "Basic rules this tool evaluates",
    rulesLead: "This mobile learning tool simplifies Rules 10-18 from the World Sailing Racing Rules of Sailing 2025-2028.",
    rule10Title: "Opposite tacks",
    rule10Text: "A port-tack boat shall keep clear of a starboard-tack boat.",
    rule11Title: "Same tack, overlapped",
    rule11Text: "A windward boat shall keep clear of a leeward boat.",
    rule12Title: "Same tack, not overlapped",
    rule12Text: "A boat clear astern shall keep clear of a boat clear ahead.",
    rule13Title: "While tacking",
    rule13Text: "A boat that is tacking shall keep clear of boats that are not tacking.",
    rule14Title: "Avoid contact",
    rule14Text: "Both right-of-way and keep-clear boats must avoid contact when reasonably possible.",
    rule15Title: "Acquiring right of way",
    rule15Text: "A boat acquiring right of way must initially give the other boat room to keep clear.",
    rule16Title: "Changing course",
    rule16Text: "A right-of-way boat changing course must give the other boat room to keep clear.",
    rule17Title: "Proper course",
    rule17Text: "A leeward boat may be limited to her proper course after creating some overlaps.",
    rule18Title: "Mark-room",
    rule18Text: "Near a mark, mark-room may apply in addition to right-of-way. This tool shows the mark zone and adds a caution note.",
    scopeNote: "Out of scope: full mark-room decisions, the history needed for a complete Rule 17 decision, obstructions, room to tack, starting situations, team racing, and real collision-avoidance judgement. Use the current RRS text and qualified instruction in actual racing.",
    guideEyebrow: "Free rule guide",
    guideTitle: "Continue with the Yacht Rules situation guides.",
    guideText: "Read plain-language guides to Rules 10 through 18 and the situations beginners most often confuse.",
    guideCta: "Open the free guide",
    footer: "© {year} Dinghy ROW. A simplified learning tool.",
    footerGuide: "Rule guide",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerDisclaimer: "Disclaimer",
    winner: (boat) => `${boat} has right of way`,
    undecided: "Decision held",
    rightOfWay: "Right of way",
    keepClear: "Keep clear",
    mark: "Mark",
    markZone: (lengths) => `${Number(lengths).toFixed(1)}-length display zone`,
    wind: "Wind",
    windFromCanvas: (deg) => `from ${deg}`,
    starboard: "starboard tack",
    port: "port tack",
    tackingState: "tacking",
    noGo: "no-go zone",
    deadRun: "near dead run",
    bothTackingRelation: "both boats tacking",
    relationOpposite: "opposite tacks",
    relationOverlap: "same tack, overlapped",
    relationClear: "same tack, not overlapped",
    relationTackingA: "A is tacking",
    relationTackingB: "B is tacking",
    relationMark: "approaching mark",
    rule10Reason: (winner, loser, winnerTack, loserTack) => `RRS Rule 10 (Opposite Tacks): ${loser} is on ${loserTack}, while ${winner} is on ${winnerTack}. A port-tack boat must keep clear of a starboard-tack boat, so ${winner} has right of way.`,
    rule11Reason: (winner, loser, tack) => `RRS Rule 11 (Same Tack, Overlapped): both boats are on ${tack} and are overlapped. ${winner} is leeward and ${loser} is windward, so the windward boat must keep clear.`,
    rule12Reason: (winner, loser, tack) => `RRS Rule 12 (Same Tack, Not Overlapped): both boats are on ${tack} and are not overlapped. ${winner} is clear ahead and ${loser} is clear astern, so the boat clear astern must keep clear.`,
    rule13Reason: (winner, loser) => `RRS Rule 13 (While Tacking): ${loser} is tacking. Until she is on a close-hauled course, a boat tacking must keep clear of boats that are not tacking, so ${winner} has right of way.`,
    bothTackingReason: "RRS Rule 13: both boats are tacking. This simplified tool does not choose a right-of-way boat in this situation.",
    rule14Notice: "RRS Rule 14: both the right-of-way and keep-clear boats must avoid contact when reasonably possible.",
    rule15Notice: (boat) => `RRS Rule 15: ${boat} has newly acquired right of way. Unless this resulted from the other boat's actions, she must initially give the other boat room to keep clear.`,
    rule16Notice: (boat) => `RRS Rule 16.1: while right-of-way boat ${boat} changes course, she must give the other boat room to keep clear.`,
    rule17Notice: (boat) => `RRS Rule 17 check: if leeward boat ${boat} established the overlap from clear astern within two hull lengths, she may not sail above her proper course.`,
    markNone: "",
    markNoBoat: "RRS Rule 18 (Mark-Room) note: the mark is shown, but both boats are currently outside the display zone.",
    markOneBoat: (boat) => `RRS Rule 18 (Mark-Room) note: ${boat} is inside the current display zone. Near a mark, mark-room obligations may apply in addition to right-of-way.`,
    markBothBoats: "RRS Rule 18 (Mark-Room) note: both boats are inside the current display zone. Actual mark-room depends on zone-entry timing, overlap, the required side to leave the mark, and Rule 18 exceptions; this tool shows a caution rather than a full Rule 18 decision.",
    markDisplayCaution: (zone) => `Current display zone: ${zone}. The actual RRS zone standard is 3.0 boat lengths.`,
    factorTacks: (a, b) => `Tacks: A=${a}, B=${b}`,
    factorAngles: (wind, a, b) => `Angles: wind ${wind}, A ${a}, B ${b}`,
    factorOverlap: (text) => `Overlap test: ${text}`,
    factorMark: (a, b, zone) => `Mark distance: A ${a}, B ${b} · display zone ${zone}`,
    overlapYes: "overlapped",
    overlapNo: "not overlapped",
  },
};

const state = {
  lang: localStorage.getItem("dinghy-lang") || "ko",
  windFrom: 0,
  boats: {
    A: { x: 360, y: 340, heading: 315, tacking: false },
    B: { x: 585, y: 270, heading: 45, tacking: false },
  },
  mark: { enabled: false, x: 720, y: 210, zoneLengths: 3 },
  dragging: null,
  dialDrag: null,
  ruleContext: {
    initialized: false,
    lastWinner: null,
    acquiredBy: null,
    acquiredAt: 0,
    changingCourseBoat: null,
    changingCourseUntil: 0,
  },
  simulation: {
    running: false,
    phase: "idle",
    boat: "A",
    direction: -1,
    frameId: null,
    startedAt: 0,
    delayMs: 3000,
    durationMs: 3000,
    startHeading: 0,
    targetHeading: 0,
    wasTacking: false,
    tackStartedLogged: false,
    lastSignature: "",
    canvasLabel: "",
  },
};

const BOAT_LENGTH_PX = 100;
const DEFAULT_MARK_ZONE_LENGTHS = 3;

const $ = (id) => document.getElementById(id);
const text = (key, ...args) => {
  const value = translations[state.lang][key] ?? translations.ko[key] ?? key;
  return typeof value === "function" ? value(...args) : value;
};

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function normDeg(deg) {
  return ((Math.round(deg) % 360) + 360) % 360;
}

function angleDiff(a, b) {
  const d = Math.abs(normDeg(a - b));
  return d > 180 ? 360 - d : d;
}

function angleLabel(deg) {
  const raw = Math.round(deg);
  const normal = normDeg(raw);
  return raw === normal ? `${normal}°` : `${raw}° (${normal}°)`;
}

function distanceLabel(px) {
  return `${Math.round(px)}px`;
}

function markZoneLengths() {
  return Number(state.mark.zoneLengths) || DEFAULT_MARK_ZONE_LENGTHS;
}

function markZoneRadius() {
  return BOAT_LENGTH_PX * markZoneLengths();
}

function markZoneText() {
  return text("markZone", markZoneLengths());
}

function vecFromCompass(deg) {
  const r = degToRad(deg);
  return { x: Math.sin(r), y: -Math.cos(r) };
}

function dot(a, b) {
  return a.x * b.x + a.y * b.y;
}

function tackOf(boat) {
  const forward = vecFromCompass(boat.heading);
  const windSource = vecFromCompass(state.windFrom);
  const cross = forward.x * windSource.y - forward.y * windSource.x;
  return cross > 0 ? "starboard" : "port";
}

function tackText(tack) {
  return tack === "starboard" ? text("starboard") : text("port");
}

function sailingWarning(boat) {
  const diff = angleDiff(boat.heading, state.windFrom);
  if (diff < 35) return text("noGo");
  if (diff > 168) return text("deadRun");
  return "";
}

function markAnalysis() {
  if (!state.mark.enabled) {
    return { note: "", factors: [], distances: null };
  }
  const distA = Math.hypot(state.boats.A.x - state.mark.x, state.boats.A.y - state.mark.y);
  const distB = Math.hypot(state.boats.B.x - state.mark.x, state.boats.B.y - state.mark.y);
  const zone = markZoneText();
  const displayCaution = markZoneLengths() > DEFAULT_MARK_ZONE_LENGTHS ? ` ${text("markDisplayCaution", zone)}` : "";
  const inA = distA <= markZoneRadius();
  const inB = distB <= markZoneRadius();

  if (inA && inB) {
    return {
      note: `${text("markBothBoats")}${displayCaution}`,
      factors: [text("factorMark", distanceLabel(distA), distanceLabel(distB), zone)],
      distances: { A: distA, B: distB, inA, inB },
    };
  }
  if (inA || inB) {
    const boat = inA ? "A" : "B";
    return {
      note: `${text("markOneBoat", boat)}${displayCaution}`,
      factors: [text("factorMark", distanceLabel(distA), distanceLabel(distB), zone)],
      distances: { A: distA, B: distB, inA, inB },
    };
  }
  return {
    note: `${text("markNoBoat")}${displayCaution}`,
    factors: [text("factorMark", distanceLabel(distA), distanceLabel(distB), zone)],
    distances: { A: distA, B: distB, inA, inB },
  };
}

function classifyRelation() {
  const a = state.boats.A;
  const b = state.boats.B;
  const tackA = tackOf(a);
  const tackB = tackOf(b);
  const baseFactors = [
    text("factorTacks", tackText(tackA), tackText(tackB)),
    text("factorAngles", angleLabel(state.windFrom), angleLabel(a.heading), angleLabel(b.heading)),
  ];

  let decision;

  if (a.tacking && b.tacking) {
    decision = {
      winner: null,
      loser: null,
      rule: "RRS 13",
      relation: text("bothTackingRelation"),
      reason: text("bothTackingReason"),
      factors: baseFactors,
    };
  } else if (a.tacking) {
    decision = {
      winner: "B",
      loser: "A",
      rule: "RRS 13",
      relation: text("relationTackingA"),
      reason: text("rule13Reason", "B", "A"),
      factors: baseFactors,
    };
  } else if (b.tacking) {
    decision = {
      winner: "A",
      loser: "B",
      rule: "RRS 13",
      relation: text("relationTackingB"),
      reason: text("rule13Reason", "A", "B"),
      factors: baseFactors,
    };
  } else if (tackA !== tackB) {
    const winner = tackA === "starboard" ? "A" : "B";
    const loser = winner === "A" ? "B" : "A";
    decision = {
      winner,
      loser,
      rule: "RRS 10",
      relation: text("relationOpposite"),
      reason: text("rule10Reason", winner, loser, tackText(winner === "A" ? tackA : tackB), tackText(loser === "A" ? tackA : tackB)),
      factors: baseFactors,
    };
  } else {
    const forwardA = vecFromCompass(a.heading);
    const forwardB = vecFromCompass(b.heading);
    let avgForward = { x: forwardA.x + forwardB.x, y: forwardA.y + forwardB.y };
    const len = Math.hypot(avgForward.x, avgForward.y) || 1;
    avgForward = { x: avgForward.x / len, y: avgForward.y / len };
    const relAB = { x: b.x - a.x, y: b.y - a.y };
    const along = dot(relAB, avgForward);
    const overlap = Math.abs(along) < 78;

    if (overlap) {
      const windSource = vecFromCompass(state.windFrom);
      const downwind = { x: -windSource.x, y: -windSource.y };
      const leewardScoreA = dot({ x: a.x, y: a.y }, downwind);
      const leewardScoreB = dot({ x: b.x, y: b.y }, downwind);
      const winner = leewardScoreA > leewardScoreB ? "A" : "B";
      const loser = winner === "A" ? "B" : "A";
      decision = {
        winner,
        loser,
        rule: "RRS 11",
        relation: `${text("relationOverlap")} · ${tackText(tackA)}`,
        reason: text("rule11Reason", winner, loser, tackText(tackA)),
        factors: [...baseFactors, text("factorOverlap", text("overlapYes"))],
      };
    } else {
      const winner = along > 0 ? "B" : "A";
      const loser = winner === "A" ? "B" : "A";
      decision = {
        winner,
        loser,
        rule: "RRS 12",
        relation: `${text("relationClear")} · ${tackText(tackA)}`,
        reason: text("rule12Reason", winner, loser, tackText(tackA)),
        factors: [...baseFactors, text("factorOverlap", text("overlapNo"))],
      };
    }
  }

  const mark = markAnalysis();
  decision.markNote = mark.note;
  decision.factors = [...decision.factors, ...mark.factors];
  return decision;
}

function resetRuleContext() {
  state.ruleContext.initialized = false;
  state.ruleContext.lastWinner = null;
  state.ruleContext.acquiredBy = null;
  state.ruleContext.acquiredAt = 0;
  state.ruleContext.changingCourseBoat = null;
  state.ruleContext.changingCourseUntil = 0;
}

function markCourseChange(target) {
  if (target !== "A" && target !== "B") return;
  state.ruleContext.changingCourseBoat = target;
  state.ruleContext.changingCourseUntil = Date.now() + 1400;
}

function addRuleObligations(decision) {
  const context = state.ruleContext;
  const now = Date.now();

  if (!context.initialized) {
    context.initialized = true;
  } else if (decision.winner && decision.winner !== context.lastWinner) {
    context.acquiredBy = decision.winner;
    context.acquiredAt = now;
  }
  context.lastWinner = decision.winner;

  const obligations = [text("rule14Notice")];
  if (decision.winner && context.acquiredBy === decision.winner && now - context.acquiredAt < 5000) {
    obligations.push(text("rule15Notice", decision.winner));
  }
  if (
    decision.winner &&
    context.changingCourseBoat === decision.winner &&
    now < context.changingCourseUntil
  ) {
    obligations.push(text("rule16Notice", decision.winner));
  }
  if (decision.rule === "RRS 11" && decision.winner) {
    obligations.push(text("rule17Notice", decision.winner));
  }

  decision.obligations = obligations;
  return decision;
}

function drawWater() {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#dff7fb");
  gradient.addColorStop(1, "#b7e7ee");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(255,255,255,.5)";
  ctx.lineWidth = 2;
  for (let y = 70; y < canvas.height; y += 70) {
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += 18) {
      const yy = y + Math.sin((x + y) / 42) * 5;
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }
}

function drawWind() {
  const from = vecFromCompass(state.windFrom);
  const start = { x: 82 + from.x * 48, y: 82 + from.y * 48 };
  const end = { x: 82 - from.x * 48, y: 82 - from.y * 48 };
  ctx.strokeStyle = "#2879d0";
  ctx.fillStyle = "#2879d0";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();

  const angle = Math.atan2(end.y - start.y, end.x - start.x);
  ctx.beginPath();
  ctx.moveTo(end.x, end.y);
  ctx.lineTo(end.x - Math.cos(angle - 0.55) * 18, end.y - Math.sin(angle - 0.55) * 18);
  ctx.lineTo(end.x - Math.cos(angle + 0.55) * 18, end.y - Math.sin(angle + 0.55) * 18);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#0b4751";
  ctx.font = "900 16px sans-serif";
  ctx.fillText(text("wind"), 50, 30);
  ctx.font = "800 13px sans-serif";
  ctx.fillText(text("windFromCanvas", angleLabel(state.windFrom)), 50, 50);
}

function drawMark() {
  if (!state.mark.enabled) return;
  const radius = markZoneRadius();
  ctx.save();
  ctx.fillStyle = "rgba(240, 184, 78, .14)";
  ctx.strokeStyle = "rgba(240, 184, 78, .75)";
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 7]);
  ctx.beginPath();
  ctx.arc(state.mark.x, state.mark.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#f0b84e";
  ctx.strokeStyle = "#6b4a00";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(state.mark.x, state.mark.y, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#6b4a00";
  ctx.font = "950 13px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(text("mark"), state.mark.x, state.mark.y + 4);
  ctx.fillStyle = "rgba(11,71,81,.8)";
  ctx.font = "850 12px sans-serif";
  ctx.fillText(markZoneText(), state.mark.x, Math.min(canvas.height - 14, state.mark.y + radius + 18));
  ctx.restore();
}

function drawBoat(name, boat, decision) {
  const isWinner = decision.winner === name;
  const isUndecided = decision.winner === null;
  const color = isUndecided ? "#f0b84e" : isWinner ? "#1f9d69" : "#d74f45";

  ctx.save();
  ctx.translate(boat.x, boat.y);
  ctx.rotate(degToRad(boat.heading));

  ctx.shadowColor = "rgba(0,0,0,.18)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 6;
  ctx.fillStyle = color;
  ctx.strokeStyle = "#173238";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, -52);
  ctx.lineTo(30, 32);
  ctx.quadraticCurveTo(0, 48, -30, 32);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.shadowColor = "transparent";

  ctx.fillStyle = "rgba(255,255,255,.85)";
  ctx.beginPath();
  ctx.moveTo(0, -40);
  ctx.lineTo(14, 22);
  ctx.lineTo(0, 30);
  ctx.lineTo(-14, 22);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#173238";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, -30);
  ctx.lineTo(0, 28);
  ctx.stroke();

  const sailSide = tackOf(boat) === "starboard" ? -1 : 1;
  ctx.fillStyle = "rgba(255,255,255,.92)";
  ctx.strokeStyle = "#173238";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, -24);
  ctx.quadraticCurveTo(30 * sailSide, 0, 42 * sailSide, 28);
  ctx.lineTo(0, 28);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#173238";
  ctx.font = "950 24px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(name, 0, 10);

  if (boat.tacking) {
    ctx.fillStyle = "#fff8e2";
    ctx.strokeStyle = "#f0b84e";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(-42, 54, 84, 26, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#704f00";
    ctx.font = "900 13px sans-serif";
    ctx.fillText(text("tackingState"), 0, 72);
  }
  ctx.restore();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(boat.x, boat.y + 72, 8, 0, Math.PI * 2);
  ctx.fill();
}

function drawOverlay(decision) {
  const a = state.boats.A;
  const b = state.boats.B;
  ctx.strokeStyle = "rgba(11,71,81,.35)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "rgba(255,255,255,.9)";
  ctx.strokeStyle = "rgba(11,71,81,.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(canvas.width - 274, 22, 250, 92, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#0b4751";
  ctx.font = "950 16px sans-serif";
  ctx.fillText(decision.rule, canvas.width - 254, 50);
  ctx.font = "850 13px sans-serif";
  ctx.fillText(decision.relation, canvas.width - 254, 74);
  ctx.fillText(decision.winner ? `${decision.winner} ${text("rightOfWay")}` : text("undecided"), canvas.width - 254, 98);
}

function drawSimulationBadge() {
  if (!state.simulation.canvasLabel) return;

  ctx.save();
  ctx.font = "950 15px sans-serif";
  const label = state.simulation.canvasLabel;
  const width = Math.min(canvas.width - 48, Math.max(172, ctx.measureText(label).width + 34));
  const x = 24;
  const y = canvas.height - 68;

  ctx.fillStyle = "rgba(255, 248, 226, .96)";
  ctx.strokeStyle = "rgba(240, 184, 78, .85)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(x, y, width, 42, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#704f00";
  ctx.fillText(label, x + 16, y + 27);
  ctx.restore();
}

function render() {
  const decision = addRuleObligations(classifyRelation());
  drawWater();
  drawMark();
  drawWind();
  drawOverlay(decision);
  drawBoat("A", state.boats.A, decision);
  drawBoat("B", state.boats.B, decision);
  drawSimulationBadge();
  updatePanel(decision);
  return decision;
}

function updatePanel(decision) {
  const warnA = sailingWarning(state.boats.A);
  const warnB = sailingWarning(state.boats.B);
  $("winnerText").textContent = decision.winner ? text("winner", decision.winner) : text("undecided");
  $("reasonText").textContent = decision.reason;
  $("longReasonText").textContent = decision.reason;
  $("windValue").textContent = angleLabel(state.windFrom);
  $("headingAValue").textContent = angleLabel(state.boats.A.heading);
  $("headingBValue").textContent = angleLabel(state.boats.B.heading);
  $("stateA").textContent = `${tackText(tackOf(state.boats.A))}${state.boats.A.tacking ? ` · ${text("tackingState")}` : ""}${warnA ? ` · ${warnA}` : ""}`;
  $("stateB").textContent = `${tackText(tackOf(state.boats.B))}${state.boats.B.tacking ? ` · ${text("tackingState")}` : ""}${warnB ? ` · ${warnB}` : ""}`;
  $("relationText").textContent = `${decision.rule} · ${decision.relation}`;

  $("reasonList").innerHTML = decision.factors.map((item) => `<li>${item}</li>`).join("");
  $("obligationList").innerHTML = decision.obligations.map((item) => `<li>${item}</li>`).join("");
  $("markReason").textContent = decision.markNote || "";
  $("markReason").hidden = !decision.markNote;
  updateDials();
}

function syncControls() {
  $("languageSelect").value = state.lang;
  $("windDir").value = Math.round(state.windFrom);
  $("headingA").value = Math.round(state.boats.A.heading);
  $("headingB").value = Math.round(state.boats.B.heading);
  $("tackingA").checked = state.boats.A.tacking;
  $("tackingB").checked = state.boats.B.tacking;
  $("markEnabled").checked = state.mark.enabled;
  $("markZoneSize").value = String(markZoneLengths());
  $("markZoneValue").textContent = text("markZoneValue", markZoneLengths());
  updateDials();
}

function dialValue(target) {
  if (target === "wind") return state.windFrom;
  return state.boats[target].heading;
}

function updateDials() {
  document.querySelectorAll("[data-dial]").forEach((dial) => {
    const target = dial.dataset.dial;
    const value = dialValue(target);
    const normalized = normDeg(value);
    dial.style.setProperty("--angle", `${normalized}deg`);
    dial.setAttribute("aria-valuenow", String(Math.round(value)));
    dial.setAttribute("aria-valuetext", angleLabel(value));
  });
}

function canvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function nearestDraggable(point) {
  if (state.mark.enabled && Math.hypot(point.x - state.mark.x, point.y - state.mark.y) < 42) return "mark";
  let best = null;
  let bestDist = Infinity;
  Object.entries(state.boats).forEach(([name, boat]) => {
    const dist = Math.hypot(point.x - boat.x, point.y - boat.y);
    if (dist < bestDist && dist < 78) {
      best = name;
      bestDist = dist;
    }
  });
  return best;
}

function setHeading(target, value) {
  if (target === "wind") state.windFrom = value;
  else {
    state.boats[target].heading = value;
    markCourseChange(target);
  }
  syncControls();
  render();
}

function adjustHeading(target, delta) {
  const current = target === "wind" ? state.windFrom : state.boats[target].heading;
  setHeading(target, current + delta);
}

function angleFromDialPointer(dial, event) {
  const rect = dial.getBoundingClientRect();
  const x = event.clientX - (rect.left + rect.width / 2);
  const y = event.clientY - (rect.top + rect.height / 2);
  return normDeg((Math.atan2(x, -y) * 180) / Math.PI);
}

function signedAngleDelta(next, previous) {
  let delta = next - previous;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return delta;
}

function startDialDrag(dial, event) {
  if (event.pointerType === "touch" && !event.isPrimary) return;
  if (state.dialDrag) return;

  const target = dial.dataset.dial;
  const pointerAngle = angleFromDialPointer(dial, event);
  state.dialDrag = {
    dial,
    target,
    pointerId: event.pointerId,
    pointerAngle,
    value: dialValue(target),
  };
  if (!dial.hasPointerCapture(event.pointerId)) {
    dial.setPointerCapture(event.pointerId);
  }
  dial.classList.add("dragging");
  event.preventDefault();
}

function moveDialDrag(event) {
  if (!state.dialDrag || event.pointerId !== state.dialDrag.pointerId) return;
  const nextPointerAngle = angleFromDialPointer(state.dialDrag.dial, event);
  const delta = signedAngleDelta(nextPointerAngle, state.dialDrag.pointerAngle);
  state.dialDrag.pointerAngle = nextPointerAngle;
  state.dialDrag.value += delta;
  setHeading(state.dialDrag.target, Math.round(state.dialDrag.value));
}

function endDialDrag(event) {
  if (!state.dialDrag) return;
  if (event && event.pointerId !== state.dialDrag.pointerId) return;
  state.dialDrag.dial.classList.remove("dragging");
  state.dialDrag = null;
}

function easeInOut(progress) {
  return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
}

function decisionSignature(decision) {
  return `${decision.winner ?? "none"}|${decision.rule}|${decision.relation}`;
}

function setSimulationStatus(message, badge) {
  $("simStatus").textContent = message;
  $("simCountdown").textContent = badge;
  state.simulation.canvasLabel = badge;
}

function updateSimulationControls() {
  document.querySelectorAll("[data-schedule-tack]").forEach((button) => {
    button.disabled = state.simulation.running;
  });
  $("cancelTackSim").disabled = !state.simulation.running;
}

function clearSimulationTimeline() {
  const timeline = $("simTimeline");
  timeline.innerHTML = "";

  const item = document.createElement("li");
  item.className = "empty";
  item.textContent = text("simTimelineEmpty");
  timeline.appendChild(item);
}

function appendSimulationEvent(label, decision, elapsedMs) {
  const timeline = $("simTimeline");
  const empty = timeline.querySelector(".empty");
  if (empty) empty.remove();

  const item = document.createElement("li");
  const time = document.createElement("time");
  const phase = document.createElement("span");
  const summary = document.createElement("strong");

  time.textContent = `${(elapsedMs / 1000).toFixed(1)}s`;
  phase.textContent = label;
  summary.textContent = text("simTimelineWinner", decision.winner, decision.rule, decision.relation);

  item.append(time, phase, summary);
  timeline.appendChild(item);
  timeline.scrollTop = timeline.scrollHeight;
  state.simulation.lastSignature = decisionSignature(decision);
}

function trackSimulationDecision(label, decision, elapsedMs) {
  const signature = decisionSignature(decision);
  if (signature === state.simulation.lastSignature) return;
  appendSimulationEvent(label, decision, elapsedMs);
}

function resetSimulationUi() {
  state.simulation.lastSignature = "";
  state.simulation.tackStartedLogged = false;
  setSimulationStatus(text("simStatusIdle"), text("simBadgeIdle"));
  clearSimulationTimeline();
  updateSimulationControls();
}

function cancelTackSimulation(showMessage = true) {
  const sim = state.simulation;
  const wasRunning = sim.running;

  if (sim.frameId) {
    cancelAnimationFrame(sim.frameId);
    sim.frameId = null;
  }
  if (wasRunning && sim.phase === "tacking") {
    state.boats[sim.boat].tacking = sim.wasTacking;
  }

  sim.running = false;
  sim.phase = "idle";
  sim.tackStartedLogged = false;
  sim.lastSignature = "";

  if (showMessage) {
    setSimulationStatus(text("simStatusCancelled"), text("simBadgeCancelled"));
  } else {
    state.simulation.canvasLabel = "";
  }

  syncControls();
  updateSimulationControls();
  render();
}

function startScheduledTack(selectedBoat, selectedDirection) {
  cancelTackSimulation(false);

  const sim = state.simulation;
  sim.boat = selectedBoat;
  sim.direction = selectedDirection;
  sim.running = true;
  sim.phase = "countdown";
  sim.startedAt = performance.now();
  sim.tackStartedLogged = false;
  sim.lastSignature = "";

  const seconds = (sim.delayMs / 1000).toFixed(1);
  clearSimulationTimeline();
  setSimulationStatus(text("simStatusCountdown", sim.boat, seconds), text("simBadgeCountdown", sim.boat, seconds));
  updateSimulationControls();

  const decision = render();
  appendSimulationEvent(text("simTimelineStart"), decision, 0);
  sim.frameId = requestAnimationFrame(tickTackSimulation);
}

function tickTackSimulation(now) {
  const sim = state.simulation;
  if (!sim.running) return;

  const elapsed = now - sim.startedAt;

  if (elapsed < sim.delayMs) {
    const seconds = ((sim.delayMs - elapsed) / 1000).toFixed(1);
    setSimulationStatus(text("simStatusCountdown", sim.boat, seconds), text("simBadgeCountdown", sim.boat, seconds));
    trackSimulationDecision(text("simTimelineChange"), render(), elapsed);
    sim.frameId = requestAnimationFrame(tickTackSimulation);
    return;
  }

  if (sim.phase === "countdown") {
    sim.phase = "tacking";
    sim.startHeading = state.boats[sim.boat].heading;
    sim.targetHeading = sim.startHeading + sim.direction * 90;
    sim.wasTacking = state.boats[sim.boat].tacking;
    state.boats[sim.boat].tacking = true;
  }

  const tackElapsed = elapsed - sim.delayMs;
  const progress = Math.min(1, tackElapsed / sim.durationMs);
  const eased = easeInOut(progress);
  state.boats[sim.boat].heading = sim.startHeading + (sim.targetHeading - sim.startHeading) * eased;
  const remainingTackSeconds = Math.max(0, (sim.durationMs - tackElapsed) / 1000).toFixed(1);
  setSimulationStatus(
    text("simStatusTacking", sim.boat, remainingTackSeconds),
    text("simBadgeTacking", sim.boat, remainingTackSeconds)
  );
  syncControls();

  const decision = render();
  if (!sim.tackStartedLogged) {
    appendSimulationEvent(text("simTimelineTackBegins"), decision, elapsed);
    sim.tackStartedLogged = true;
  } else {
    trackSimulationDecision(text("simTimelineChange"), decision, elapsed);
  }

  if (progress >= 1) {
    state.boats[sim.boat].heading = sim.targetHeading;
    state.boats[sim.boat].tacking = false;
    sim.running = false;
    sim.phase = "done";
    sim.frameId = null;
    setSimulationStatus(text("simStatusDone", sim.boat), text("simBadgeDone", sim.boat));
    syncControls();
    appendSimulationEvent(text("simTimelineFinish"), render(), elapsed);
    updateSimulationControls();
    return;
  }

  sim.frameId = requestAnimationFrame(tickTackSimulation);
}

function applyI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key === "footer") {
      element.innerHTML = text("footer", new Date().getFullYear()).replace("{year}", `<span id="year">${new Date().getFullYear()}</span>`);
    } else {
      element.textContent = text(key);
    }
  });
  document.querySelectorAll("[data-i18n-svg]").forEach((element) => {
    element.textContent = text(element.dataset.i18nSvg);
  });
}

canvas.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch" && !event.isPrimary) return;
  if (state.dragging || state.dialDrag) return;

  const item = nearestDraggable(canvasPoint(event));
  if (!item) return;
  state.dragging = {
    item,
    pointerId: event.pointerId,
    windFrom: state.windFrom,
  };
  if (!canvas.hasPointerCapture(event.pointerId)) {
    canvas.setPointerCapture(event.pointerId);
  }
  event.preventDefault();
});

canvas.addEventListener("pointermove", (event) => {
  if (!state.dragging || event.pointerId !== state.dragging.pointerId) return;
  state.windFrom = state.dragging.windFrom;
  const point = canvasPoint(event);
  if (state.dragging.item === "mark") {
    state.mark.x = Math.max(28, Math.min(canvas.width - 28, point.x));
    state.mark.y = Math.max(28, Math.min(canvas.height - 28, point.y));
  } else {
    const boat = state.boats[state.dragging.item];
    boat.x = Math.max(54, Math.min(canvas.width - 54, point.x));
    boat.y = Math.max(64, Math.min(canvas.height - 78, point.y));
  }
  render();
});

function endCanvasDrag(event) {
  if (!state.dragging) return;
  if (event && event.pointerId !== state.dragging.pointerId) return;
  state.dragging = null;
}

canvas.addEventListener("pointerup", endCanvasDrag);
canvas.addEventListener("pointercancel", endCanvasDrag);
canvas.addEventListener("lostpointercapture", endCanvasDrag);

$("languageSelect").addEventListener("change", (event) => {
  state.lang = event.target.value;
  localStorage.setItem("dinghy-lang", state.lang);
  applyI18n();
  syncControls();
  if (!state.simulation.running) {
    if (state.simulation.phase === "done") {
      setSimulationStatus(text("simStatusDone", state.simulation.boat), text("simBadgeDone", state.simulation.boat));
      updateSimulationControls();
    } else {
      resetSimulationUi();
    }
  }
  render();
});

document.querySelectorAll("[data-dial]").forEach((dial) => {
  dial.addEventListener("pointerdown", (event) => startDialDrag(dial, event));
  dial.addEventListener("pointermove", moveDialDrag);
  dial.addEventListener("pointerup", endDialDrag);
  dial.addEventListener("pointercancel", endDialDrag);
  dial.addEventListener("lostpointercapture", endDialDrag);
  dial.addEventListener("keydown", (event) => {
    const target = dial.dataset.dial;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      adjustHeading(target, event.shiftKey ? -15 : -1);
      event.preventDefault();
    }
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      adjustHeading(target, event.shiftKey ? 15 : 1);
      event.preventDefault();
    }
  });
});

$("windDir").addEventListener("input", (event) => setHeading("wind", Number(event.target.value) || 0));
$("headingA").addEventListener("input", (event) => setHeading("A", Number(event.target.value) || 0));
$("headingB").addEventListener("input", (event) => setHeading("B", Number(event.target.value) || 0));

document.querySelectorAll("[data-schedule-tack]").forEach((button) => {
  button.addEventListener("click", () => {
    startScheduledTack(button.dataset.scheduleTack, Number(button.dataset.direction));
  });
});
$("cancelTackSim").addEventListener("click", () => cancelTackSimulation(true));

document.querySelectorAll("[data-adjust]").forEach((button) => {
  button.addEventListener("click", () => adjustHeading(button.dataset.adjust, Number(button.dataset.delta)));
});

$("tackingA").addEventListener("change", (event) => {
  state.boats.A.tacking = event.target.checked;
  render();
});
$("tackingB").addEventListener("change", (event) => {
  state.boats.B.tacking = event.target.checked;
  render();
});
$("markEnabled").addEventListener("change", (event) => {
  state.mark.enabled = event.target.checked;
  render();
});
$("markZoneSize").addEventListener("input", (event) => {
  state.mark.zoneLengths = Number(event.target.value) || DEFAULT_MARK_ZONE_LENGTHS;
  state.mark.enabled = true;
  syncControls();
  render();
});
$("resetMarkZone").addEventListener("click", () => {
  state.mark.zoneLengths = DEFAULT_MARK_ZONE_LENGTHS;
  syncControls();
  render();
});
$("resetMark").addEventListener("click", () => {
  state.mark.x = 720;
  state.mark.y = 210;
  syncControls();
  render();
});

const presets = {
  opposite: () => {
    state.windFrom = 0;
    state.boats.A = { x: 355, y: 350, heading: 315, tacking: false };
    state.boats.B = { x: 590, y: 270, heading: 45, tacking: false };
    state.mark.enabled = false;
  },
  leeward: () => {
    state.windFrom = 270;
    state.boats.A = { x: 390, y: 350, heading: 45, tacking: false };
    state.boats.B = { x: 470, y: 325, heading: 48, tacking: false };
    state.mark.enabled = false;
  },
  clear: () => {
    state.windFrom = 270;
    state.boats.A = { x: 430, y: 410, heading: 45, tacking: false };
    state.boats.B = { x: 540, y: 265, heading: 45, tacking: false };
    state.mark.enabled = false;
  },
  tacking: () => {
    state.windFrom = 285;
    state.boats.A = { x: 420, y: 325, heading: 365, tacking: true };
    state.boats.B = { x: 590, y: 325, heading: 330, tacking: false };
    state.mark.enabled = false;
  },
  mark: () => {
    state.windFrom = 270;
    state.boats.A = { x: 585, y: 320, heading: 45, tacking: false };
    state.boats.B = { x: 705, y: 250, heading: 45, tacking: false };
    state.mark.enabled = true;
    state.mark.x = 720;
    state.mark.y = 210;
  },
};

document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    cancelTackSimulation(false);
    presets[button.dataset.preset]();
    resetRuleContext();
    syncControls();
    resetSimulationUi();
    render();
  });
});

applyI18n();
syncControls();
resetSimulationUi();
render();
