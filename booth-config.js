/* =====================================================================
   Booth settings for the Investigation Workflow Studio demo
   ---------------------------------------------------------------------
   Edit this file in any text editor (Notepad, TextEdit, VS Code), save it,
   then reload the demo page. Keep it in the same folder as
   investigation-workflow-studio.html.

   If this file is missing, or a value here is invalid, the demo quietly
   uses its built-in defaults for that value.
   Text values go in 'single quotes'; keep the commas at the end of lines.
   ===================================================================== */
window.BOOTH_CONFIG = {

  // Risk bands, used by every case.
  //   score below `medium`          -> low risk: closed automatically
  //   score from `medium` to `high` -> medium risk: an analyst reviews it
  //   score from `high` upwards     -> high risk: full AI investigation, then the fraud lead decides
  riskBands: { medium: 40, high: 70 },

  // How the "Card payment" case is set up when a visitor opens it.
  // Pick a preset, then (optionally) override single values by removing the // in front.
  cardPayment: {
    preset: 'Typical fraud',      // 'Typical fraud' | 'Borderline' | 'Looks normal' | 'On holiday in Lisbon' | 'Abroad, no travel notice'
    // amount: 17000,             // SAR, 500 to 50000
    // phoneGps: 'riyadh',        // riyadh | jeddah | dubai | lisbon | london | bucharest
    // connectionFrom: 'bucharest', // same choices as phoneGps
    // vpn: true,                 // true | false
    // newDevice: true,           // true | false
    // hour: 2,                   // 0 to 23
    // merchant: 'new',           // regular | new | crypto
    // travelNotice: false,       // true | false (only matters when the phone is abroad)
  },

  // How the "Phishing campaign" case is set up when a visitor opens it.
  phishing: {
    preset: 'Break-in',           // 'Break-in' | 'Passwords phished' | 'Blocked on arrival'
    // emailsSent: 1240,          // 100 to 10000
    // caught: 'after 2 hours',   // 'before delivery' | 'after 10 minutes' | 'after 30 minutes' | 'after 1 hour' | 'after 2 hours' | 'after 6 hours'
    // clicked: 37,               // 0 to 100
    // passwordEntered: true,     // true | false
    // mfa: false,                // true | false
    // newDeviceLogin: true,      // true | false
    // newPayees: true,           // true | false
  },
};
