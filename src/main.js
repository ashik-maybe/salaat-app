// --- Imports & Configuration ---
// (No changes to imports or configuration)

// --- DOM Elements & Theme Logic ---
// (No changes to DOM elements or theme logic)

// --- Content Data (Enhanced with Missing Details & Beautified Arabic) ---
// Full data from islamqa.info — every detail included
// Enhanced with specific du'as, hand positions, and beautified Arabic with \n
const prayerData = [
  {
    title: "Facing the Qiblah",
    content: `
      <p>When you stand up to pray, face the direction of the Ka'bah wherever you are, in both fard (obligatory) and nafl (supererogatory) prayers. This is one of the pillars of prayer — without it, prayer is invalid.</p>
      <p>Exceptions: during warfare (salat al-khawf), heavy fighting, illness, or travel on a ship, car, or plane when time may elapse (before reaching a place where the correct direction can be found). For nafl prayers while riding, it is mustahabb to face the qiblah at the beginning.</p>
      <p>If you cannot see the Ka'bah, face its direction. If you made your best effort and were mistaken, your prayer is valid.</p>
      <p>If someone corrects you during prayer, turn immediately — your prayer remains valid.</p>
    `
  },
  {
    title: "Standing (Qiyam)",
    content: `
      <p>Pray standing if able. This is a pillar of prayer. Exceptions: fear prayer, intense fighting, illness, or riding.</p>
      <p>If unable to stand, pray sitting. If unable to sit, lie on your side. Make sujud lower than ruku’.</p>
      <p>For nafl prayers, you may pray sitting or riding, indicating ruku’ and sujud with your head.</p>
      <p>It is not permissible to prostrate on something raised — sujud must be lower than ruku’.</p>
      <p><em>Permissible to pray on ships/planes, leaning on pillars if weak.</em></p>
    `
  },
  {
    title: "Intention (Niyyah)",
    content: `
      <p>The intention must be in the heart — specify the prayer (e.g., Fajr, Sunnah).</p>
      <p>Verbal intention is an innovation (bid’ah) and was not practiced by the Prophet (ﷺ) or his Companions.</p>
    `
  },
  {
    title: "Takbir (Allahu Akbar)",
    content: `
      <p>Begin the prayer by saying “Allahu Akbar” — this enters you into prayer.</p>
      <p>The imam may raise his voice; followers wait until he finishes.</p>
      <p>Raising hands is sunnah — to shoulders or ears — fingers stretched, not touching ears.</p>
    `
  },
  {
    title: "Hand Placement",
    content: `
      <p>After takbir, place the right hand over the left on the chest. This is for both men and women.</p>
      <p>Do not let arms hang. Do not place hands on the waist.</p>
    `
  },
  {
    title: "Du'a al-Istiftah",
    content: `
      <p>Begin with a supplication such as:</p>
      <div class="arabic-text-block">
        <span class="arabic">سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ</span>
        <span class="translation">"Glory and praise be to You, O Allah, and blessed is Your name, and exalted is Your majesty, and there is none worthy of worship except You."</span>
      </div>
    `
  },
  {
    title: "Seeking Refuge & Bismillah",
    content: `
      <p>Say: “A’udhu billahi min ash-shaytan ir-rajim” — it is obligatory.</p>
      <p>Then say silently: “Bismillah ar-Rahman ar-Rahim” — whether praying aloud or silently.</p>
    `
  },
  {
    title: "Reciting Al-Fatihah",
    content: `
      <p>Recite Surah Al-Fatihah in full — it is obligatory in every rak’ah. Prayer is invalid without it.</p>
      <p>Recite one verse at a time, pausing between each. Do not rush.</p>
      <p>Non-Arabs must memorize it. If unable, say: “Subhan Allah, Alhamdulillah, La ilaha illa Allah, Allahu Akbar.”</p>
    `
  },
  {
    title: "Recitation After Al-Fatihah",
    content: `
      <p>In the first two rak’ahs, recite another surah or verses.</p>
      <p>Fajr has the longest recitation, then Zuhr, Asr, Isha, Maghrib.</p>
      <p>Night prayers (qiyam al-layl) are longer than obligatory ones.</p>
      <p>First rak’ah longer than the second.</p>
    `
  },
  {
    title: "Ruku' (Bowing)",
    content: `
      <p>After recitation, pause briefly, raise hands, say “Allahu Akbar,” then bow deeply.</p>
      <p>Hands on knees, fingers spread. Back level, head aligned with spine.</p>
      <div class="arabic-text-block">
        <span class="arabic">سُبْحَانَ رَبِّيَ الْعَظِيمَ وَبِحَمْدِهِ</span>
        <span class="translation">"Glory be to my Lord, the Almighty, and praise be to Him."</span>
      </div>
      <p>Duration should be approximately equal to standing after ruku’.</p>
    `
  },
  {
    title: "Standing After Ruku' (I'tidal)",
    content: `
      <p>Rise saying: “Sami’Allahu liman hamidah.”</p>
      <p>Stand straight until every vertebra returns to place.</p>
      <p>Say: “Rabbana wa laka al-hamd.”</p>
      <p>Duration equal to ruku’.</p>
    `
  },
  {
    title: "Sujud (Prostration)",
    content: `
      <p>Say “Allahu Akbar,” hands down before knees.</p>
      <p>Forehead and nose, palms, knees, and toes firmly on the ground.</p>
      <p>Fingers together, pointing qiblah. Toes upright.</p>
      <p>Forearms off the ground — do not spread like a dog.</p>
      <div class="arabic-text-block">
        <span class="arabic">سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ</span>
        <span class="translation">"Glory be to my Lord Most High, and praise be to Him."</span>
      </div>
      <p>Duration ~ equal to ruku’.</p>
      <p><em>Du'a is mustahabb (recommended) during sujud.</em></p>
    `
  },
  {
    title: "Sitting Between Prostrations",
    content: `
      <p>Rise saying “Allahu Akbar,” then sit at ease (Iftirash).</p>
      <p>Left leg flat, right foot upright, toes to qiblah.</p>
      <p>Recommended Du'a:</p>
      <div class="arabic-text-block">
        <span class="arabic">اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَاعْفُ عَنِّي وَارْزُقْنِي</span>
        <span class="translation">"O Allah, forgive me, have mercy on me, strengthen me, raise me in status, pardon me and grant me provision."</span>
      </div>
      <p>Or:</p>
      <div class="arabic-text-block">
        <span class="arabic">رَبِّ اغْفِرْ لِي رَبِّ اغْفِرْ لِي</span>
        <span class="translation">"My Lord, forgive me, my Lord, forgive me."</span>
      </div>
      <p>Duration ~ equal to sujud.</p>
    `
  },
  {
    title: "Second Sujud",
    content: `
      <p>Repeat the first sujud exactly — same posture, dhikr, and duration.</p>
    `
  },
  {
    title: "Second Rak’ah",
    content: `
      <p>Rise supporting yourself on your hands (fists clenched).</p>
      <p>Recite Al-Fatihah + another surah.</p>
      <p>No du’a al-istiftah. Make it shorter than the first rak’ah.</p>
    `
  },
  {
    title: "First Tashahhud",
    content: `
      <p>Sit in Iftirash: left leg under, right foot up, toes to qiblah.</p>
      <p><strong>Hand Placement:</strong> Right hand on right thigh/knee (fingers clenched, index finger pointing/moving). Left palm spread on left thigh/knee. Do not rest on arms.</p>
      <p><strong>Finger Details:</strong> Clench other fingers, put thumb on middle finger sometimes, make a circle sometimes, point index finger qiblah, look at it, move it with du’a.</p>
      <div class="arabic-text-block">
        <span class="arabic">التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ\nالسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ\nالسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ\nأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ</span>
        <span class="translation">"All compliments, prayers and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy and blessings of Allah. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is none worthy of worship except Allah, and I bear witness that Muhammad is His slave and Messenger."</span>
      </div>
      <p>Then send salawat:</p>
      <div class="arabic-text-block">
        <span class="arabic">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ\nاللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ</span>
        <span class="translation">"O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Abraham and the family of Abraham. Indeed, You are Praiseworthy and Glorious. O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Abraham and the family of Abraham. Indeed, You are Praiseworthy and Glorious."</span>
      </div>
    `
  },
  {
    title: "Third & Fourth Rak’ahs",
    content: `
      <p>Stand up supporting hands. Recite Al-Fatihah only (optionally add an ayah).</p>
      <p>Make them shorter than the first two.</p>
    `
  },
  {
    title: "Final Tashahhud",
    content: `
      <p>Sit <em>mutawarikan</em> (left foot under right leg, right foot upright or laid along ground).</p>
      <p>Right hand position as before. Left palm on left thigh/knee, leaning heavily.</p>
      <p>Send salawat on the Prophet (ﷺ) (as in First Tashahhud).</p>
      <p><strong>Seek Refuge (Obligatory):</strong></p>
      <div class="arabic-text-block">
        <span class="arabic">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ النَّارِ وَمِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ</span>
        <span class="translation">"O Allah, I seek refuge in You from the punishment of Hellfire, from the punishment of the grave, from the trial of fire, from the trial of the Masih ad-Dajjal, and from the trials of life and death."</span>
      </div>
      <p>Then make personal du’a before salam.</p>
    `
  },
  {
    title: "Taslim (Ending Salam)",
    content: `
      <p>Say to the right: “As-salamu alaykum wa rahmatullah” — turn fully so your cheek is visible.</p>
      <p>Then to the left: “As-salamu alaykum.”</p>
      <p>The imam raises his voice; in janazah prayer, it is quiet.</p>
    `
  },
  {
    title: "Sutrah & Passing in Front",
    content: `
      <p>Pray facing a sutrah — a barrier like a wall, pillar, or stick (approx. handspan high).</p>
      <p>Be close — about a sheep’s width from it.</p>
      <p>Do not let anyone pass in front. If they insist, gently stop them — “fight them, for they have a devil with them.”</p>
      <p>Do not pray towards graves.</p>
      <p>Without a sutrah, prayer breaks if an adult woman, donkey, or black dog passes.</p>
    `
  },
  {
    title: "Praying on Shoes",
    content: `
      <p>Permissible to pray barefoot or with shoes.</p>
      <p>If wearing shoes, place them to the left, or between your feet — never in front.</p>
    `
  },
  {
    title: "Humility & Focus",
    content: `
      <p>Look at your place of prostration. Do not look up, left, or right.</p>
      <p>Avoid distractions: food, need to relieve yourself.</p>
      <p>Humility is the essence of prayer. The Prophet (ﷺ) said: “Pray as you have seen me pray.”</p>
      <p>Prayer prevents sin. — Quran 29:45</p>
      <div class="warning">
        <strong>Note:</strong> Presence of heart and humility are the true purpose of prayer.
      </div>
    `
  }
];

// --- DOM Elements ---
const content = document.getElementById('content');
const progressBar = document.getElementById('progress-bar');
const backToTop = document.getElementById('back-to-top');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// --- Theme Toggle Logic ---
const setTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

// Check for saved theme preference or respect OS setting as default
const savedTheme = localStorage.getItem('theme');
const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Default to light mode if nothing is saved, otherwise use saved/os pref
const initialTheme = savedTheme ? savedTheme : (osPrefersDark ? 'dark' : 'light');
setTheme(initialTheme);

// Add click event listener to the toggle button
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// --- Content Building ---
prayerData.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${item.title}</h2>
    ${item.content}
  `;
  content.appendChild(card);
});

// --- Scroll Animations ---
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// --- Progress Bar & Back to Top ---
const updateProgressBar = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (docHeight > 0) ? (scrollTop / docHeight) * 100 : 0; // Avoid division by zero
    progressBar.style.width = `${Math.min(progress, 100)}%`;
};

const toggleBackToTop = () => {
    const scrollTop = window.scrollY;
    backToTop.classList.toggle('visible', scrollTop > 400);
};

window.addEventListener('scroll', () => {
    updateProgressBar();
    toggleBackToTop();
});

// Back to Top
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Initial Load Polish ---
// Ensure smooth initial load and correct state
document.addEventListener('DOMContentLoaded', () => {
    // Re-check theme in case of race conditions
    const finalTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(finalTheme);

    // Initial check for back-to-top visibility
    toggleBackToTop();
});
