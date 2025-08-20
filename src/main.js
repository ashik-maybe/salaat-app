// Full data from the PDF — every detail included
const prayerData = [
  {
    title: "Facing the Qiblah",
    content: `
      <p>When you stand up to pray, face the direction of the Ka'bah, whether in obligatory or supererogatory prayers. This is one of the pillars of prayer — without it, prayer is invalid.</p>
      <p>Exceptions: during warfare (salat al-khawf), severe illness, or travel (ship, airplane) when time is limited. For nafl prayers while riding, it is recommended to face the qiblah at the beginning.</p>
      <p>If you cannot see the Ka'bah, face its direction. If you made your best effort and were mistaken, your prayer is valid.</p>
      <p>If someone corrects you during prayer, turn immediately — your prayer remains valid.</p>
    `
  },
  {
    title: "Standing (Qiyam)",
    content: `
      <p>Pray standing if able. This is a pillar of prayer. Exceptions: fear prayer, illness, or riding.</p>
      <p>If unable to stand, pray sitting. If unable to sit, lie on your side. Make sujud lower than ruku’.</p>
      <p>For nafl prayers, you may pray sitting or riding, indicating ruku’ and sujud with your head.</p>
      <p>It is not permissible to prostrate on something raised — sujud must be lower than ruku’.</p>
    `
  },
  {
    title: "Intention (Niyyah)",
    content: `
      <p>The intention must be in the heart — specify the prayer (e.g., Fajr, Sunnah).</p>
      <p>Verbal intention is an innovation (bid’ah) and was not practiced by the Prophet (peace and blessings be upon him) or his Companions.</p>
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
      <p>Begin with a supplication such as: <span class="arabic">سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ...</span><br>
      <span class="translation">"Glory and praise be to You, O Allah..."</span></p>
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
      <p>Night prayers (qiyam) are longer than obligatory ones.</p>
      <p>First rak’ah longer than the second.</p>
    `
  },
  {
    title: "Ruku' (Bowing)",
    content: `
      <p>After recitation, pause briefly, raise hands, say “Allahu Akbar,” then bow deeply.</p>
      <p>Hands on knees, fingers spread. Back level, head aligned with spine.</p>
      <p>Say: <span class="arabic">سُبْحَانَ رَبِّيَ الْعَظِيمِ</span> (3+ times).</p>
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
      <p>Say: <span class="arabic">سُبْحَانَ رَبِّيَ الْأَعْلَى</span> (3+ times).</p>
      <p>Duration ~ equal to ruku’.</p>
    `
  },
  {
    title: "Sitting Between Prostrations",
    content: `
      <p>Rise saying “Allahu Akbar,” then sit at ease.</p>
      <p>Left leg flat, right foot upright, toes to qiblah.</p>
      <p>Say: “Rabbi ighfir li” or “Allahumma ighfir li…”</p>
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
      <p>Rise supporting yourself on your hands.</p>
      <p>Recite Al-Fatihah + another surah.</p>
      <p>No du’a al-istiftah. Make it shorter than the first rak’ah.</p>
    `
  },
  {
    title: "First Tashahhud",
    content: `
      <p>Sit in iftirash: left leg under, right foot up, toes to qiblah.</p>
      <p>Right hand: index finger pointing qiblah, moving with du’a.</p>
      <p>Recite silently: <span class="arabic">التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ...</span></p>
      <p>Then send salawat: <span class="arabic">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ...</span></p>
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
      <p>Sit mutawarikan: left foot under right leg.</p>
      <p>Send salawat on the Prophet (peace and blessings be upon him).</p>
      <p>Seek refuge: <span class="arabic">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ...</span></p>
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
      <p>Pray facing a sutrah — a barrier like a wall, pillar, or stick.</p>
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
      <p>Humility is the essence of prayer. The Prophet (peace and blessings be upon him) said: “Pray as you have seen me pray.”</p>
      <p>Prayer prevents sin. — Quran 29:45</p>
      <div class="warning">
        <strong>Note:</strong> Presence of heart and humility are the true purpose of prayer.
      </div>
    `
  }
];

// DOM Elements
const content = document.getElementById('content');
const progressBar = document.getElementById('progress-bar');
const backToTop = document.getElementById('back-to-top');

// Build Cards
prayerData.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${item.title}</h2>
    ${item.content}
  `;
  content.appendChild(card);
});

// Show cards on scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// Progress Bar
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${Math.min(progress, 100)}%`;

  backToTop.classList.toggle('hidden', scrollTop < 400);
});

// Back to Top
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional: Dark Mode (Auto from OS)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.setAttribute('data-theme', 'dark');
} else {
  document.body.setAttribute('data-theme', 'light');
}

// Listen for OS theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
});
