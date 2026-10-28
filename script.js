/**
 * ==========================================================================
 * OLAITAN AMEENAT — WORLD-CLASS EDITORIAL MONOGRAPH ENGINE
 * Pure Vanilla JavaScript • Multi-Harmonic Web Audio • Kinetic Particle Physics
 * Featuring Fullscreen Photo Lightbox & Lookbook Experience
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. STATE & APHORISMS
  // --------------------------------------------------------------------------
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Curated list of all 17 photos for Lightbox
  const PHOTO_GALLERY = [
    { src: "pics/1.JPG", caption: "Queen Olaitan Ameenat • The Birthday Star" },
    { src: "pics/2.JPG", caption: "The Incomparable Smile • Chapter I" },
    { src: "pics/3.JPG", caption: "Passion & Elegance • Chapter II" },
    { src: "pics/4.JPG", caption: "Grace That Never Wavered • Chapter III" },
    { src: "pics/5.JPG", caption: "The Unfolding Horizon • Chapter IV" },
    { src: "pics/6.JPG", caption: "Radiant Warmth • Chapter V" },
    { src: "pics/7.JPG", caption: "In a League of Her Own • Chapter VI" },
    { src: "pics/8.JPG", caption: "Pure Sunshine & Energy • Chapter VII" },
    { src: "pics/9.JPG", caption: "Flawless Demeanor • Chapter VIII" },
    { src: "pics/10.JPG", caption: "A Heart of Pure Gold • Chapter IX" },
    { src: "pics/11.JPG", caption: "Educator of Luminous Minds • Chapter X" },
    { src: "pics/12.JPG", caption: "Gentle Peace & Joy • Chapter XI" },
    { src: "pics/13.JPG", caption: "Every Season Beautiful • Chapter XII" },
    { src: "pics/14.JPG", caption: "Treasured Moments • Chapter XIII" },
    { src: "pics/15.JPG", caption: "Blessed & Highly Favored • Chapter XIV" },
    { src: "pics/16.JPG", caption: "Serenity in Motion • Chapter XV" },
    { src: "pics/17.JPG", caption: "A Lifetime of Love & Celebration • Epilogue" }
  ];

  let currentPhotoIndex = 0;

  // The Oracle's Reflections for Olaitan
  const ORACLE_REFLECTIONS = [
    "“Your heart gives without keeping count, and the heavens never forget a single seed you sow.”",
    "“In a noisy world, your quiet poise is a masterclass in regal dignity.”",
    "“The minds you have guided in the classroom carry your light into corners of the earth you may never see.”",
    "“Your smile is a sanctuary — it disarms anxiety and replaces it with profound peace.”",
    "“A woman of steadfast values, radiant intellect, and unconditional loyalty.”",
    "“May the blessings you so freely bestow upon others return to you multiplied a thousand-fold.”",
    "“You do not merely enter rooms; you elevate them with your presence.”",
    "“Here is to a lifetime of answered prayers, honored efforts, and enduring joy.”"
  ];

  // Celestial Fortunes upon Extinguishing Candle
  const RITUAL_BLESSINGS = [
    "✨ Your wish has risen to the heavens. May this year unfold in unprecedented glory!",
    "🌸 The flame is offered, your prayer is sealed. Abundant peace and favor await you!",
    "🥂 To a year of effortless victories, deep health, and profound happiness, Queen Ameenat!",
    "⭐ The universe honors the beauty of your soul. Keep shining your irreplaceable light!"
  ];

  // Initial Curated Constellation of Wishes
  const INITIAL_CONSTELLATIONS = [
    {
      id: "b1",
      name: "Family Matriarch",
      text: "Olaitan, you remain the crown and the pride of our hearts. Watching your grace and intellect bloom year after year is our greatest delight. Happy birthday, my jewel!",
      time: "Dawn",
      likes: 38
    },
    {
      id: "b2",
      name: "Teaching Colleague",
      text: "To the most dedicated educator I know: you shape tomorrow with every patient word you speak. May your own children and dreams be blessed beyond measure!",
      time: "2 hours ago",
      likes: 27
    },
    {
      id: "b3",
      name: "Lifelong Confidante",
      text: "Thank you for being the truest friend, the warmest laughter, and the most dependable heart. Cheers to another year of your incomparable light!",
      time: "Just now",
      likes: 31
    }
  ];

  // --------------------------------------------------------------------------
  // 2. MULTI-HARMONIC WEB AUDIO SYNTHESIZER (CELESTA & ACOUSTIC BELLS)
  // --------------------------------------------------------------------------
  let audioContext = null;
  let isSoundscapePlaying = false;
  let soundscapeTimer = null;

  function initAudio() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    return audioContext;
  }

  function playAcousticBell(fundamentalFreq, startTime, duration = 0.8) {
    const ctx = initAudio();
    if (!ctx) return;

    try {
      const harmonics = [
        { mult: 1.0, gain: 0.25 },
        { mult: 2.0, gain: 0.12 },
        { mult: 3.01, gain: 0.05 },
        { mult: 4.16, gain: 0.02 }
      ];

      harmonics.forEach(h => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamentalFreq * h.mult, startTime);

        gainNode.gain.setValueAtTime(0.0001, startTime);
        gainNode.gain.exponentialRampToValueAtTime(h.gain, startTime + 0.015);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    } catch (err) {}
  }

  function playRoyalChime() {
    const ctx = initAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    const chords = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
    chords.forEach((freq, idx) => {
      playAcousticBell(freq, now + idx * 0.09, 1.2);
    });
  }

  function playSealSnapSound() {
    const ctx = initAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    playAcousticBell(440, now, 0.4);
    playAcousticBell(880, now + 0.05, 0.5);
  }

  const SOUNDSCAPE_NOTES = [
    { f: 392.00, d: 0.4 },
    { f: 392.00, d: 0.25 },
    { f: 440.00, d: 0.5 },
    { f: 392.00, d: 0.5 },
    { f: 523.25, d: 0.55 },
    { f: 493.88, d: 0.8 },

    { f: 392.00, d: 0.4 },
    { f: 392.00, d: 0.25 },
    { f: 440.00, d: 0.5 },
    { f: 392.00, d: 0.5 },
    { f: 587.33, d: 0.55 },
    { f: 523.25, d: 0.8 },

    { f: 392.00, d: 0.4 },
    { f: 392.00, d: 0.25 },
    { f: 783.99, d: 0.55 },
    { f: 659.25, d: 0.55 },
    { f: 523.25, d: 0.55 },
    { f: 493.88, d: 0.55 },
    { f: 440.00, d: 0.8 }
  ];

  function toggleSoundscape() {
    const btn = document.getElementById('soundscapeBtn');
    const ctx = initAudio();

    if (isSoundscapePlaying) {
      isSoundscapePlaying = false;
      if (soundscapeTimer) clearInterval(soundscapeTimer);
      if (btn) btn.classList.remove('active-audio');
    } else {
      isSoundscapePlaying = true;
      if (btn) btn.classList.add('active-audio');

      let step = 0;
      function playStep() {
        if (!isSoundscapePlaying) return;
        const item = SOUNDSCAPE_NOTES[step];
        playAcousticBell(item.f, ctx.currentTime, item.d * 1.5);
        step = (step + 1) % SOUNDSCAPE_NOTES.length;
      }

      playStep();
      soundscapeTimer = setInterval(playStep, 520);
    }
  }

  // --------------------------------------------------------------------------
  // 3. SUPERNOVA PARTICLE PHYSICS ENGINE
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let particleList = [];
  let isSupernovaActive = false;

  const GOLD_ROSE_PALETTE = [
    '#f5c563', '#fcedc7', '#ffd666', '#e63966',
    '#ff7ea5', '#7b88ff', '#ffffff', '#ffd043'
  ];

  function handleResize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', handleResize, { passive: true });
  handleResize();

  class SupernovaParticle {
    constructor(startX, startY) {
      this.x = startX !== undefined ? startX : Math.random() * canvas.width;
      this.y = startY !== undefined ? startY : -20;
      this.size = Math.random() * 7 + 4;
      this.color = GOLD_ROSE_PALETTE[Math.floor(Math.random() * GOLD_ROSE_PALETTE.length)];

      const theta = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4;
      this.vx = Math.cos(theta) * speed;
      this.vy = startY !== undefined ? Math.sin(theta) * speed - 5 : Math.random() * 3 + 2;

      this.gravity = 0.16;
      this.friction = 0.985;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 10;
      this.alpha = 1;
      this.shape = Math.random() > 0.35 ? 'petal' : 'star';
    }

    update() {
      this.vx *= this.friction;
      this.vy = this.vy * this.friction + this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotSpeed;

      if (this.y > canvas.height - 120) {
        this.alpha -= 0.02;
      }
    }

    render(targetCtx) {
      targetCtx.save();
      targetCtx.translate(this.x, this.y);
      targetCtx.rotate((this.rotation * Math.PI) / 180);
      targetCtx.globalAlpha = Math.max(0, this.alpha);
      targetCtx.fillStyle = this.color;

      if (this.shape === 'petal') {
        targetCtx.beginPath();
        targetCtx.ellipse(0, 0, this.size, this.size / 1.7, 0, 0, Math.PI * 2);
        targetCtx.fill();
      } else {
        targetCtx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      }

      targetCtx.restore();
    }
  }

  function triggerSupernova(x, y, count = 100) {
    if (REDUCED_MOTION || !ctx) return;
    for (let i = 0; i < count; i++) {
      particleList.push(new SupernovaParticle(x, y));
    }
    if (!isSupernovaActive) {
      isSupernovaActive = true;
      requestAnimationFrame(renderSupernova);
    }
  }

  function renderSupernova() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particleList = particleList.filter(p => p.y < canvas.height + 30 && p.alpha > 0);

    for (let i = 0; i < particleList.length; i++) {
      particleList[i].update();
      particleList[i].render(ctx);
    }

    if (particleList.length > 0) {
      requestAnimationFrame(renderSupernova);
    } else {
      isSupernovaActive = false;
    }
  }

  // --------------------------------------------------------------------------
  // 4. TOUCH-RESPONSIVE SPARKLE PARTICLES
  // --------------------------------------------------------------------------
  const touchLayer = document.getElementById('touchRippleLayer');
  const TOUCH_GLYPHS = ['✨', '🌸', '👑', '💖', '🕊️', '⭐'];

  function spawnKineticSparkle(x, y) {
    if (!touchLayer) return;

    const sparkle = document.createElement('span');
    sparkle.className = 'kinetic-sparkle';
    sparkle.textContent = TOUCH_GLYPHS[Math.floor(Math.random() * TOUCH_GLYPHS.length)];

    const dx = (Math.random() - 0.5) * 80 + 'px';
    const rot = (Math.random() - 0.5) * 50 + 'deg';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.setProperty('--dx', dx);
    sparkle.style.setProperty('--rot', rot);

    touchLayer.appendChild(sparkle);

    if (navigator.vibrate) {
      try { navigator.vibrate(10); } catch (e) {}
    }

    setTimeout(() => sparkle.remove(), 1100);
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('input, textarea, button, .lightbox-modal')) {
      spawnKineticSparkle(e.clientX, e.clientY);
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 5. FULLSCREEN PHOTO LIGHTBOX MODAL LOGIC
  // --------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  function openLightbox(src, caption) {
    if (!lightboxModal || !lightboxImg) return;

    const idx = PHOTO_GALLERY.findIndex(p => p.src === src);
    currentPhotoIndex = idx >= 0 ? idx : 0;

    updateLightboxView();
    lightboxModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    playAcousticBell(659.25, initAudio()?.currentTime || 0, 0.2);
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function updateLightboxView() {
    const item = PHOTO_GALLERY[currentPhotoIndex];
    if (item && lightboxImg) {
      lightboxImg.src = item.src;
      if (lightboxCaption) lightboxCaption.textContent = item.caption;
    }
  }

  function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % PHOTO_GALLERY.length;
    updateLightboxView();
    playAcousticBell(783.99, initAudio()?.currentTime || 0, 0.15);
  }

  function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + PHOTO_GALLERY.length) % PHOTO_GALLERY.length;
    updateLightboxView();
    playAcousticBell(587.33, initAudio()?.currentTime || 0, 0.15);
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevPhoto);

  window.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('is-active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  });

  // Attach Lightbox triggers to all photos with data-full
  document.addEventListener('click', (e) => {
    const targetImg = e.target.closest('[data-full]');
    if (targetImg) {
      // If inside a polaroid frame, let user tap image directly for lightbox
      e.stopPropagation();
      const src = targetImg.getAttribute('data-full');
      const caption = targetImg.getAttribute('data-caption') || 'Olaitan Ameenat';
      openLightbox(src, caption);
    }
  });

  // --------------------------------------------------------------------------
  // 6. SANCTUARY OF THE CANDLE RITUAL
  // --------------------------------------------------------------------------
  const candleArtifact = document.getElementById('candleArtifact');
  const blowCandleBtn = document.getElementById('blowCandleBtn');
  const candleBtnLabel = document.getElementById('candleBtnLabel');
  const ritualFortune = document.getElementById('ritualFortune');

  let isCandleExtinguished = false;

  function performCandleRitual() {
    if (!candleArtifact) return;

    if (!isCandleExtinguished) {
      candleArtifact.classList.add('is-blown');
      isCandleExtinguished = true;

      playRoyalChime();
      const rect = candleArtifact.getBoundingClientRect();
      triggerSupernova(rect.left + rect.width / 2, rect.top + 30, 140);

      const randomBlessing = RITUAL_BLESSINGS[Math.floor(Math.random() * RITUAL_BLESSINGS.length)];
      if (ritualFortune) {
        ritualFortune.innerHTML = `<span>${randomBlessing}</span>`;
      }

      if (candleBtnLabel) {
        candleBtnLabel.textContent = "Flame Offered • Tap to Re-kindle 🔥";
      }

      if (navigator.vibrate) {
        navigator.vibrate([20, 50, 80]);
      }
    } else {
      candleArtifact.classList.remove('is-blown');
      isCandleExtinguished = false;

      playAcousticBell(783.99, initAudio()?.currentTime || 0, 0.3);
      if (ritualFortune) {
        ritualFortune.innerHTML = `<span>🔥 Flame re-ignited! Make another silent prayer and blow.</span>`;
      }
      if (candleBtnLabel) {
        candleBtnLabel.textContent = "Blow The Flame & Cast A Wish";
      }
    }
  }

  if (blowCandleBtn) blowCandleBtn.addEventListener('click', performCandleRitual);
  if (candleArtifact) candleArtifact.addEventListener('click', performCandleRitual);

  // --------------------------------------------------------------------------
  // 7. THE CEREMONIAL WAX SEAL EPISTLE
  // --------------------------------------------------------------------------
  const epistleEnvelope = document.getElementById('epistleEnvelope');
  const waxSealBtn = document.getElementById('waxSealBtn');
  const sealStatusHint = document.getElementById('sealStatusHint');

  function unsealEpistle() {
    if (!epistleEnvelope || epistleEnvelope.classList.contains('is-unsealed')) return;

    epistleEnvelope.classList.add('is-unsealed');
    playSealSnapSound();

    if (sealStatusHint) {
      sealStatusHint.innerHTML = "💌 <span>Epistle Unsealed • Dedicated To Ameenat</span>";
    }

    const rect = epistleEnvelope.getBoundingClientRect();
    triggerSupernova(rect.left + rect.width / 2, rect.top + 70, 75);

    setTimeout(() => {
      epistleEnvelope.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 450);
  }

  if (waxSealBtn) waxSealBtn.addEventListener('click', unsealEpistle);
  if (epistleEnvelope) {
    epistleEnvelope.addEventListener('click', (e) => {
      if (!epistleEnvelope.classList.contains('is-unsealed') && !e.target.closest('[data-full]')) {
        unsealEpistle();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. TACTILE 3D GALLERY CARD FLIP
  // --------------------------------------------------------------------------
  const editorialFrames = document.querySelectorAll('.editorial-frame');
  editorialFrames.forEach(frame => {
    frame.addEventListener('click', (e) => {
      // If clicking image directly, lightbox handles it
      if (e.target.hasAttribute('data-full')) return;
      frame.classList.toggle('is-flipped');
      playAcousticBell(587.33, initAudio()?.currentTime || 0, 0.2);
      if (navigator.vibrate) navigator.vibrate(12);
    });

    frame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        frame.classList.toggle('is-flipped');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 9. THE ORACLE OF REFLECTION DISPENSER
  // --------------------------------------------------------------------------
  const oracleNextBtn = document.getElementById('oracleNextBtn');
  const oracleQuote = document.getElementById('oracleQuote');
  let oracleIdx = 0;

  if (oracleNextBtn && oracleQuote) {
    oracleNextBtn.addEventListener('click', () => {
      oracleQuote.style.opacity = '0';
      oracleQuote.style.transform = 'scale(0.96)';

      playAcousticBell(659.25, initAudio()?.currentTime || 0, 0.25);
      if (navigator.vibrate) navigator.vibrate(15);

      setTimeout(() => {
        oracleIdx = (oracleIdx + 1) % ORACLE_REFLECTIONS.length;
        oracleQuote.textContent = ORACLE_REFLECTIONS[oracleIdx];
        oracleQuote.style.opacity = '1';
        oracleQuote.style.transform = 'scale(1)';

        const rect = oracleQuote.getBoundingClientRect();
        spawnKineticSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }, 200);
    });
  }

  // --------------------------------------------------------------------------
  // 10. CONSTELLATION GUESTBOOK & WHATSAPP EXPORT
  // --------------------------------------------------------------------------
  const wishesStream = document.getElementById('wishesStream');
  const blessingForm = document.getElementById('blessingForm');
  const formToastMsg = document.getElementById('formToastMsg');
  const directShareWhatsappBtn = document.getElementById('directShareWhatsappBtn');

  function fetchStoredConstellations() {
    try {
      const stored = localStorage.getItem('olaitan_monograph_wishes');
      return stored ? JSON.parse(stored) : INITIAL_CONSTELLATIONS;
    } catch (e) {
      return INITIAL_CONSTELLATIONS;
    }
  }

  function commitConstellations(list) {
    try {
      localStorage.setItem('olaitan_monograph_wishes', JSON.stringify(list));
    } catch (e) {}
  }

  let constellationList = fetchStoredConstellations();

  function renderConstellations() {
    if (!wishesStream) return;
    wishesStream.innerHTML = '';

    constellationList.forEach(item => {
      const card = document.createElement('article');
      card.className = 'constellation-card';

      const initialChar = item.name.trim().charAt(0).toUpperCase() || '🌸';

      card.innerHTML = `
        <div class="constellation-meta">
          <div class="author-chip">
            <div class="author-avatar">${initialChar}</div>
            <div>
              <div class="author-name">${sanitizeHTML(item.name)}</div>
              <div class="author-timestamp">${item.time || 'A sacred moment'}</div>
            </div>
          </div>
        </div>
        <p class="blessing-text">“${sanitizeHTML(item.text)}”</p>
        <div class="blessing-footer">
          <button class="hearth-reaction-btn" data-id="${item.id}" aria-label="Send love to this message">
            <span>💖</span>
            <span class="heart-counter">${item.likes || 0}</span>
          </button>
        </div>
      `;

      const heartBtn = card.querySelector('.hearth-reaction-btn');
      heartBtn.addEventListener('click', () => {
        item.likes = (item.likes || 0) + 1;
        heartBtn.querySelector('.heart-counter').textContent = item.likes;
        heartBtn.classList.add('has-loved');
        playRoyalChime();
        commitConstellations(constellationList);

        const rect = heartBtn.getBoundingClientRect();
        spawnKineticSparkle(rect.left + rect.width / 2, rect.top);
      });

      wishesStream.appendChild(card);
    });
  }

  function sanitizeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  renderConstellations();

  if (blessingForm) {
    blessingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = document.getElementById('authorName');
      const msgEl = document.getElementById('authorMessage');

      const name = nameEl.value.trim();
      const text = msgEl.value.trim();

      if (!name || !text) {
        showToast("Please provide both your name and blessing.", "error");
        return;
      }

      const newEntry = {
        id: "c_" + Date.now(),
        name: name,
        text: text,
        time: "Moments ago",
        likes: 1
      };

      constellationList.unshift(newEntry);
      commitConstellations(constellationList);
      renderConstellations();

      nameEl.value = '';
      msgEl.value = '';

      showToast("✨ Your blessing is forever etched on her wall!", "success");
      playRoyalChime();
      triggerSupernova(window.innerWidth / 2, window.innerHeight * 0.45, 90);

      wishesStream.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  function showToast(msg, type) {
    if (!formToastMsg) return;
    formToastMsg.textContent = msg;
    formToastMsg.className = `form-toast-msg ${type}`;
    setTimeout(() => {
      formToastMsg.textContent = '';
      formToastMsg.className = 'form-toast-msg';
    }, 4500);
  }

  // Direct WhatsApp Share
  if (directShareWhatsappBtn) {
    directShareWhatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('authorName')?.value.trim() || 'A loved one';
      const text = document.getElementById('authorMessage')?.value.trim() || 
                   'Happy Birthday Olaitan Ameenat! May this milestone year bring you overflowing joy, peace, and glory! 🌸🥂';

      const payload = `🕊️ *Birthday Blessing for Olaitan Ameenat* 🌸\n\n"${text}"\n\n— *From:* ${name}\n\n*Celebrated with timeless affection.* ✨`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(payload)}`;
      window.open(url, '_blank');
    });
  }

  // --------------------------------------------------------------------------
  // 11. SCROLL TRACKER & RETURN TO TOP
  // --------------------------------------------------------------------------
  const progressBar = document.getElementById('progressBar');
  function trackProgress() {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll > 0) {
      const pct = (window.scrollY / maxScroll) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    }
  }
  window.addEventListener('scroll', trackProgress, { passive: true });

  const returnToTopBtn = document.getElementById('returnToTopBtn');
  if (returnToTopBtn) {
    returnToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 12. THEME SWITCHER (DARK VELVET & LIGHT SILK)
  // --------------------------------------------------------------------------
  const themeSwitchBtn = document.getElementById('themeSwitchBtn');
  function initTheme() {
    const saved = localStorage.getItem('olaitan_theme_pref');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'dark');

    document.documentElement.setAttribute('data-theme', theme);
  }

  if (themeSwitchBtn) {
    themeSwitchBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const target = current === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('olaitan_theme_pref', target);

      playAcousticBell(523.25, initAudio()?.currentTime || 0, 0.18);
    });
  }
  initTheme();

  // --------------------------------------------------------------------------
  // 13. SOUNDSCAPE TOGGLE
  // --------------------------------------------------------------------------
  const soundscapeBtn = document.getElementById('soundscapeBtn');
  if (soundscapeBtn) {
    soundscapeBtn.addEventListener('click', toggleSoundscape);
  }

  // --------------------------------------------------------------------------
  // 14. WORLD-CLASS DYNAMIC DOCK INTERACTIVITY
  // --------------------------------------------------------------------------
  const dockCandleBtn = document.getElementById('dockCandleBtn');
  const dockGalleryBtn = document.getElementById('dockGalleryBtn');
  const dockLoveBurstBtn = document.getElementById('dockLoveBurstBtn');
  const dockLetterBtn = document.getElementById('dockLetterBtn');
  const dockBlessingBtn = document.getElementById('dockBlessingBtn');

  if (dockCandleBtn) {
    dockCandleBtn.addEventListener('click', () => {
      document.getElementById('candleSanctuary')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(performCandleRitual, 500);
    });
  }

  if (dockGalleryBtn) {
    dockGalleryBtn.addEventListener('click', () => {
      document.getElementById('act-gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (dockLoveBurstBtn) {
    dockLoveBurstBtn.addEventListener('click', () => {
      playRoyalChime();
      triggerSupernova(window.innerWidth / 2, window.innerHeight * 0.45, 120);
      if (navigator.vibrate) navigator.vibrate([20, 30, 40]);
    });
  }

  if (dockLetterBtn) {
    dockLetterBtn.addEventListener('click', () => {
      document.getElementById('act-letter')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(unsealEpistle, 600);
    });
  }

  if (dockBlessingBtn) {
    dockBlessingBtn.addEventListener('click', () => {
      document.getElementById('act-wishes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Opening welcome shimmer
  window.addEventListener('load', () => {
    setTimeout(() => {
      triggerSupernova(window.innerWidth / 2, window.innerHeight * 0.28, 65);
    }, 700);
  });

})();
