/**
 * ==========================================================================
 * OLAITAN OLASUNKANMI AMEENAT — WORLD-CLASS EDITORIAL MONOGRAPH ENGINE
 * Featuring Nigerian Love Song Soundscape Engine & Real-Time Waveform Visualizer
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. STATE & CONSTANTS
  // --------------------------------------------------------------------------
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Photo gallery registry
  const PHOTO_GALLERY = [
    { src: "pics/1.JPG", caption: "Queen Olaitan Olasunkanmi Ameenat • The Birthday Star" },
    { src: "pics/2.JPG", caption: "The Incomparable Smile • Moment 01" },
    { src: "pics/3.JPG", caption: "Passion & Elegance • Moment 02" },
    { src: "pics/4.JPG", caption: "Grace That Never Wavered • Moment 03" },
    { src: "pics/5.JPG", caption: "The Unfolding Horizon • Moment 04" },
    { src: "pics/6.JPG", caption: "Radiant Warmth • Moment 05" },
    { src: "pics/7.JPG", caption: "In a League of Her Own • Moment 06" },
    { src: "pics/8.JPG", caption: "Pure Sunshine & Energy • Moment 07" },
    { src: "pics/9.JPG", caption: "Flawless Demeanor • Moment 08" },
    { src: "pics/10.JPG", caption: "A Heart of Pure Gold • Moment 09" },
    { src: "pics/11.JPG", caption: "Educator of Luminous Minds • Moment 10" },
    { src: "pics/12.JPG", caption: "Gentle Peace & Joy • Moment 11" },
    { src: "pics/13.JPG", caption: "Every Season Beautiful • Moment 12" },
    { src: "pics/14.JPG", caption: "Treasured Moments • Moment 13" },
    { src: "pics/15.JPG", caption: "Blessed & Highly Favored • Moment 14" },
    { src: "pics/16.JPG", caption: "Serenity in Motion • Moment 15" },
    { src: "pics/17.JPG", caption: "A Lifetime of Love & Celebration" }
  ];

  let currentPhotoIndex = 0;
  let lastActiveFocusedElement = null;

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
  // 2. NIGERIAN LOVE SONG SYNTHESIZER & JUKEBOX ENGINE
  // --------------------------------------------------------------------------
  let audioContext = null;
  let isSerenadePlaying = false;
  let serenadeTimer = null;
  let currentTrackKey = "african_queen";
  const bgmAudio = document.getElementById('bgmAudio');

  // Track Profiles
  const LOVE_TRACKS = {
    african_queen: {
      title: "African Queen",
      artist: "2Baba (2Face Idibia)",
      tempo: 460
    },
    roju: {
      title: "Roju",
      artist: "Chike",
      tempo: 420
    },
    count_on_you: {
      title: "Count On You",
      artist: "Johnny Drille",
      tempo: 490
    },
    custom: {
      title: "Custom Serenade",
      artist: "Her Favorite Song",
      tempo: 500
    }
  };

  // 1. "AFRICAN QUEEN" — 2BABA (Acoustic Guitar & Lead Vocal Melody)
  // "You are my African Queen, the girl of my dreams... You take me where I've never been..."
  const AFRICAN_QUEEN_SCORE = [
    // Chorus Lead Melody
    { f: 329.63, d: 0.35, chord: 164.81 }, // E4 (Em chord root)
    { f: 392.00, d: 0.35 },                // G4
    { f: 440.00, d: 0.4 },                 // A4
    { f: 493.88, d: 0.55 },                // B4
    { f: 440.00, d: 0.35 },                // A4
    { f: 392.00, d: 0.35 },                // G4
    { f: 329.63, d: 0.75, chord: 130.81 }, // E4 ("African Queen" • C chord)

    { f: 329.63, d: 0.35 },                // E4
    { f: 392.00, d: 0.35 },                // G4
    { f: 440.00, d: 0.4 },                 // A4
    { f: 392.00, d: 0.4 },                 // G4
    { f: 329.63, d: 0.4 },                 // E4
    { f: 293.66, d: 0.8, chord: 146.83 },  // D4 ("The girl of my dreams" • D chord)

    { f: 293.66, d: 0.35 },                // D4
    { f: 329.63, d: 0.35 },                // E4
    { f: 392.00, d: 0.35 },                // G4
    { f: 440.00, d: 0.4 },                 // A4
    { f: 493.88, d: 0.55 },                // B4
    { f: 440.00, d: 0.35 },                // A4
    { f: 392.00, d: 0.35 },                // G4
    { f: 329.63, d: 0.75, chord: 196.00 }, // E4 ("Take me where I've never been" • G chord)

    { f: 329.63, d: 0.3 },                 // E4
    { f: 392.00, d: 0.3 },                 // G4
    { f: 493.88, d: 0.4 },                 // B4
    { f: 587.33, d: 0.5 },                 // D5
    { f: 523.25, d: 0.4 },                 // C5
    { f: 493.88, d: 0.4 },                 // B4
    { f: 440.00, d: 0.4 },                 // A4
    { f: 392.00, d: 0.4 },                 // G4
    { f: 440.00, d: 0.9, chord: 146.83 },  // A4 ("Make my heart go ding-a-ling" • D chord)

    { f: 392.00, d: 0.4 },                 // G4
    { f: 440.00, d: 0.4 },                 // A4
    { f: 493.88, d: 0.6 },                 // B4
    { f: 440.00, d: 0.4 },                 // A4
    { f: 392.00, d: 0.4 },                 // G4
    { f: 329.63, d: 1.1, chord: 164.81 }   // E4 ("Oh you are my African Queen")
  ];

  // 2. "ROJU" — CHIKE
  // "Baby mi roju o, baby mi roju... I will love you forever and ever..."
  const ROJU_SCORE = [
    { f: 392.00, d: 0.35, chord: 130.81 }, // G4 (C root)
    { f: 440.00, d: 0.35 },                // A4
    { f: 493.88, d: 0.45 },                // B4
    { f: 587.33, d: 0.5 },                 // D5
    { f: 523.25, d: 0.4 },                 // C5
    { f: 493.88, d: 0.75, chord: 174.61 }, // B4 ("Baby mi roju o" • F root)

    { f: 392.00, d: 0.35 },                // G4
    { f: 440.00, d: 0.35 },                // A4
    { f: 493.88, d: 0.45 },                // B4
    { f: 523.25, d: 0.4 },                 // C5
    { f: 493.88, d: 0.75, chord: 196.00 }, // B4 ("Baby mi roju" • G root)

    { f: 493.88, d: 0.35 },                // B4
    { f: 523.25, d: 0.35 },                // C5
    { f: 587.33, d: 0.45 },                // D5
    { f: 523.25, d: 0.4 },                 // C5
    { f: 493.88, d: 0.4 },                 // B4
    { f: 392.00, d: 0.4 },                 // G4
    { f: 493.88, d: 0.4 },                 // B4
    { f: 523.25, d: 0.4 },                 // C5
    { f: 493.88, d: 0.9, chord: 130.81 }   // B4 ("Love you forever and ever")
  ];

  // 3. "COUNT ON YOU" — JOHNNY DRILLE
  const COUNT_ON_YOU_SCORE = [
    { f: 261.63, d: 0.4, chord: 130.81 },
    { f: 329.63, d: 0.4 },
    { f: 392.00, d: 0.45 },
    { f: 440.00, d: 0.5 },
    { f: 392.00, d: 0.7, chord: 174.61 },

    { f: 349.23, d: 0.4 },
    { f: 329.63, d: 0.4 },
    { f: 293.66, d: 0.45 },
    { f: 261.63, d: 0.8, chord: 196.00 },

    { f: 329.63, d: 0.4 },
    { f: 392.00, d: 0.45 },
    { f: 523.25, d: 0.6 },
    { f: 493.88, d: 0.8, chord: 130.81 }
  ];

  function getAudioCtx() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    return audioContext;
  }

  // Synthesize acoustic tone (warm nylon guitar + acoustic chime harmonics)
  function playAcousticNote(freq, startTime, duration = 0.6, isChordBass = false) {
    const ctx = getAudioCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft triangle for warm guitar-like body, sine for pure clarity
      osc.type = isChordBass ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      const peakGain = isChordBass ? 0.18 : 0.22;
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(peakGain, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) {}
  }

  function playRoyalChime() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const chords = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
    chords.forEach((freq, idx) => {
      playAcousticNote(freq, now + idx * 0.09, 1.2);
    });
  }

  function playSealSnapSound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    playAcousticNote(440, now, 0.4);
    playAcousticNote(880, now + 0.05, 0.5);
  }

  // Start Playing Nigerian Love Serenade
  function startSerenade(trackKey = currentTrackKey) {
    currentTrackKey = trackKey;
    const track = LOVE_TRACKS[trackKey] || LOVE_TRACKS.african_queen;

    // Check if user has a custom MP3 audio loaded
    if (bgmAudio && bgmAudio.src && !bgmAudio.src.endsWith('undefined') && trackKey === 'custom') {
      bgmAudio.play().then(() => {
        setPlaybackUI(true, track);
      }).catch(() => {
        // Fallback to synth
        runSynthLoop(trackKey);
      });
      return;
    }

    runSynthLoop(trackKey);
  }

  function runSynthLoop(trackKey) {
    const ctx = getAudioCtx();
    stopSerenade();

    isSerenadePlaying = true;
    const track = LOVE_TRACKS[trackKey] || LOVE_TRACKS.african_queen;
    setPlaybackUI(true, track);

    let score = AFRICAN_QUEEN_SCORE;
    if (trackKey === 'roju') score = ROJU_SCORE;
    else if (trackKey === 'count_on_you') score = COUNT_ON_YOU_SCORE;

    let step = 0;
    function tick() {
      if (!isSerenadePlaying) return;
      const note = score[step];

      // Play lead melody note
      playAcousticNote(note.f, ctx.currentTime, note.d * 1.3);

      // Play bass acoustic chord backing if defined
      if (note.chord) {
        playAcousticNote(note.chord, ctx.currentTime, note.d * 2.2, true);
        playAcousticNote(note.chord * 1.5, ctx.currentTime + 0.03, note.d * 1.8);
      }

      step = (step + 1) % score.length;
    }

    tick();
    serenadeTimer = setInterval(tick, track.tempo);
  }

  function stopSerenade() {
    isSerenadePlaying = false;
    if (serenadeTimer) clearInterval(serenadeTimer);
    if (bgmAudio) bgmAudio.pause();
    setPlaybackUI(false, LOVE_TRACKS[currentTrackKey]);
  }

  function toggleSerenade() {
    if (isSerenadePlaying) {
      stopSerenade();
    } else {
      startSerenade(currentTrackKey);
    }
  }

  // Synchronize UI Elements
  function setPlaybackUI(isPlaying, track) {
    const navBtn = document.getElementById('soundscapeBtn');
    const songCaption = document.getElementById('songTitleCaption');
    const vinylDisc = document.getElementById('vinylDisc');
    const jukeboxPlayerCard = document.querySelector('.jukebox-player-card');
    const jukeboxTitle = document.getElementById('jukeboxTrackTitle');
    const jukeboxArtist = document.getElementById('jukeboxArtist');
    const jukeboxPlayText = document.getElementById('jukeboxPlayBtnText');

    if (songCaption && track) songCaption.textContent = track.title;
    if (jukeboxTitle && track) jukeboxTitle.textContent = track.title;
    if (jukeboxArtist && track) jukeboxArtist.textContent = track.artist;

    if (navBtn) {
      navBtn.classList.toggle('active-audio', isPlaying);
      navBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
    }
    if (vinylDisc) vinylDisc.classList.toggle('is-spinning', isPlaying);
    if (jukeboxPlayerCard) jukeboxPlayerCard.classList.toggle('is-playing', isPlaying);

    if (jukeboxPlayText) {
      jukeboxPlayText.textContent = isPlaying ? "Pause Serenade ⏸" : "Play Serenade 🎶";
    }
  }

  // --------------------------------------------------------------------------
  // 3. JUKEBOX MODAL DRAWER CONTROLS
  // --------------------------------------------------------------------------
  const jukeboxModal = document.getElementById('jukeboxModal');
  const jukeboxCloseBtn = document.getElementById('jukeboxCloseBtn');
  const jukeboxBackdrop = document.getElementById('jukeboxBackdrop');
  const jukeboxMainPlayBtn = document.getElementById('jukeboxMainPlayBtn');
  const customAudioInput = document.getElementById('customAudioInput');
  const uploadCustomTrackBtn = document.getElementById('uploadCustomTrackBtn');

  function openJukebox() {
    if (!jukeboxModal) return;
    jukeboxModal.classList.add('is-active');
    jukeboxModal.setAttribute('aria-hidden', 'false');
    playAcousticNote(659.25, getAudioCtx()?.currentTime || 0, 0.2);
  }

  function closeJukebox() {
    if (!jukeboxModal) return;
    jukeboxModal.classList.remove('is-active');
    jukeboxModal.setAttribute('aria-hidden', 'true');
  }

  if (jukeboxCloseBtn) jukeboxCloseBtn.addEventListener('click', closeJukebox);
  if (jukeboxBackdrop) jukeboxBackdrop.addEventListener('click', closeJukebox);

  if (jukeboxMainPlayBtn) {
    jukeboxMainPlayBtn.addEventListener('click', () => {
      toggleSerenade();
    });
  }

  // Playlist track item selection
  document.querySelectorAll('.playlist-track[data-track]').forEach(trackBtn => {
    trackBtn.addEventListener('click', () => {
      const key = trackBtn.getAttribute('data-track');
      document.querySelectorAll('.playlist-track').forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-checked', 'false');
      });
      trackBtn.classList.add('is-active');
      trackBtn.setAttribute('aria-checked', 'true');

      startSerenade(key);
    });
  });

  // Custom MP3 Upload Support
  if (uploadCustomTrackBtn && customAudioInput) {
    uploadCustomTrackBtn.addEventListener('click', () => {
      customAudioInput.click();
    });

    customAudioInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && bgmAudio) {
        const fileURL = URL.createObjectURL(file);
        bgmAudio.src = fileURL;

        const cleanName = file.name.replace(/\.[^/.]+$/, "");
        LOVE_TRACKS.custom.title = cleanName;

        document.querySelectorAll('.playlist-track').forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-checked', 'false');
        });
        uploadCustomTrackBtn.classList.add('is-active');
        uploadCustomTrackBtn.setAttribute('aria-checked', 'true');

        startSerenade('custom');
      }
    });
  }

  // Nav Sound Wave Button Toggle
  const soundscapeBtn = document.getElementById('soundscapeBtn');
  if (soundscapeBtn) {
    soundscapeBtn.addEventListener('click', () => {
      if (!isSerenadePlaying) {
        startSerenade(currentTrackKey);
      } else {
        openJukebox();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. SUPERNOVA PARTICLE PHYSICS ENGINE
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let particleList = [];
  let isSupernovaActive = false;

  const GOLD_ROSE_PALETTE = [
    '#f5c563', '#fcedc7', '#ffd666', '#ff4d79',
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
  // 5. TOUCH-RESPONSIVE SPARKLE PARTICLES
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
    if (!e.target.closest('input, textarea, button, .lightbox-modal, .jukebox-modal, a, [role="button"]')) {
      spawnKineticSparkle(e.clientX, e.clientY);
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 6. ACCESSIBLE FULLSCREEN PHOTO LIGHTBOX MODAL
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

    lastActiveFocusedElement = document.activeElement;

    const idx = PHOTO_GALLERY.findIndex(p => p.src === src);
    currentPhotoIndex = idx >= 0 ? idx : 0;

    updateLightboxView();
    lightboxModal.classList.add('is-active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (lightboxCloseBtn) lightboxCloseBtn.focus();
    }, 50);

    playAcousticNote(659.25, getAudioCtx()?.currentTime || 0, 0.2);
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastActiveFocusedElement && typeof lastActiveFocusedElement.focus === 'function') {
      lastActiveFocusedElement.focus();
    }
  }

  function updateLightboxView() {
    const item = PHOTO_GALLERY[currentPhotoIndex];
    if (item && lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.caption;
      if (lightboxCaption) lightboxCaption.textContent = item.caption;
    }
  }

  function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % PHOTO_GALLERY.length;
    updateLightboxView();
    playAcousticNote(783.99, getAudioCtx()?.currentTime || 0, 0.15);
  }

  function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + PHOTO_GALLERY.length) % PHOTO_GALLERY.length;
    updateLightboxView();
    playAcousticNote(587.33, getAudioCtx()?.currentTime || 0, 0.15);
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevPhoto);

  window.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('is-active')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextPhoto();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPhoto();
      } else if (e.key === 'Tab') {
        const focusable = [lightboxCloseBtn, lightboxPrevBtn, lightboxNextBtn].filter(Boolean);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  document.addEventListener('click', (e) => {
    const targetImg = e.target.closest('[data-full]');
    if (targetImg) {
      e.stopPropagation();
      const src = targetImg.getAttribute('data-full');
      const caption = targetImg.getAttribute('data-caption') || targetImg.getAttribute('alt') || 'Olaitan Olasunkanmi Ameenat';
      openLightbox(src, caption);
    }
  });

  document.querySelectorAll('.lookbook-item, .hero-portrait-frame, .monograph-photo-accent, .letter-polaroid-keepsake, .epilogue-portrait-wrap').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const img = el.querySelector('[data-full]') || el;
        const src = img.getAttribute('data-full');
        const caption = img.getAttribute('data-caption') || img.getAttribute('alt') || 'Olaitan Olasunkanmi Ameenat';
        if (src) openLightbox(src, caption);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. SANCTUARY OF THE CANDLE RITUAL
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
      candleArtifact.setAttribute('aria-pressed', 'true');
      if (blowCandleBtn) blowCandleBtn.setAttribute('aria-pressed', 'true');
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
      candleArtifact.setAttribute('aria-pressed', 'false');
      if (blowCandleBtn) blowCandleBtn.setAttribute('aria-pressed', 'false');
      isCandleExtinguished = false;

      playAcousticNote(783.99, getAudioCtx()?.currentTime || 0, 0.3);
      if (ritualFortune) {
        ritualFortune.innerHTML = `<span>🔥 Flame re-ignited! Make another silent prayer and blow.</span>`;
      }
      if (candleBtnLabel) {
        candleBtnLabel.textContent = "Blow The Flame & Cast A Wish";
      }
    }
  }

  if (blowCandleBtn) blowCandleBtn.addEventListener('click', performCandleRitual);
  if (candleArtifact) {
    candleArtifact.addEventListener('click', performCandleRitual);
    candleArtifact.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        performCandleRitual();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. THE CEREMONIAL WAX SEAL EPISTLE
  // --------------------------------------------------------------------------
  const epistleEnvelope = document.getElementById('epistleEnvelope');
  const waxSealBtn = document.getElementById('waxSealBtn');
  const sealStatusHint = document.getElementById('sealStatusHint');

  function unsealEpistle() {
    if (!epistleEnvelope || epistleEnvelope.classList.contains('is-unsealed')) return;

    epistleEnvelope.classList.add('is-unsealed');
    if (waxSealBtn) waxSealBtn.setAttribute('aria-expanded', 'true');
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
  // 9. TACTILE 3D GALLERY CARD FLIP
  // --------------------------------------------------------------------------
  const editorialFrames = document.querySelectorAll('.editorial-frame');
  editorialFrames.forEach(frame => {
    function toggleFrameFlip(e) {
      if (e.target.hasAttribute('data-full')) return;
      const willBeFlipped = !frame.classList.contains('is-flipped');
      frame.classList.toggle('is-flipped', willBeFlipped);
      frame.setAttribute('aria-expanded', willBeFlipped ? 'true' : 'false');

      playAcousticNote(587.33, getAudioCtx()?.currentTime || 0, 0.2);
      if (navigator.vibrate) navigator.vibrate(12);
    }

    frame.addEventListener('click', toggleFrameFlip);
    frame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFrameFlip(e);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 10. THE ORACLE OF REFLECTION DISPENSER
  // --------------------------------------------------------------------------
  const oracleNextBtn = document.getElementById('oracleNextBtn');
  const oracleQuote = document.getElementById('oracleQuote');
  let oracleIdx = 0;

  if (oracleNextBtn && oracleQuote) {
    oracleNextBtn.addEventListener('click', () => {
      oracleQuote.style.opacity = '0';
      oracleQuote.style.transform = 'scale(0.96)';

      playAcousticNote(659.25, getAudioCtx()?.currentTime || 0, 0.25);
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
  // 11. CONSTELLATION GUESTBOOK & ACCESSIBLE TOAST
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
            <div class="author-avatar" aria-hidden="true">${initialChar}</div>
            <div>
              <div class="author-name">${sanitizeHTML(item.name)}</div>
              <div class="author-timestamp">${item.time || 'A sacred moment'}</div>
            </div>
          </div>
        </div>
        <p class="blessing-text">“${sanitizeHTML(item.text)}”</p>
        <div class="blessing-footer">
          <button class="hearth-reaction-btn" data-id="${item.id}" aria-label="Send love to ${sanitizeHTML(item.name)}'s blessing" aria-pressed="false">
            <span aria-hidden="true">💖</span>
            <span class="heart-counter">${item.likes || 0}</span>
          </button>
        </div>
      `;

      const heartBtn = card.querySelector('.hearth-reaction-btn');
      heartBtn.addEventListener('click', () => {
        item.likes = (item.likes || 0) + 1;
        heartBtn.querySelector('.heart-counter').textContent = item.likes;
        heartBtn.classList.add('has-loved');
        heartBtn.setAttribute('aria-pressed', 'true');
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
        showToast("⚠ Please provide both your name and your birthday blessing.", "error");
        if (!name) nameEl.focus();
        else msgEl.focus();
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

      showToast("✓ Success: Your blessing is forever etched on her wall!", "success");
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
    }, 5000);
  }

  // Direct WhatsApp Share
  if (directShareWhatsappBtn) {
    directShareWhatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('authorName')?.value.trim() || 'A loved one';
      const text = document.getElementById('authorMessage')?.value.trim() || 
                   'Happy Birthday Olaitan Olasunkanmi Ameenat! May you continue to shine with overflowing joy, peace, and glory! 🌸🥂';

      const payload = `🕊️ *Birthday Blessing for Olaitan Olasunkanmi Ameenat* 🌸\n\n"${text}"\n\n— *From:* ${name}\n\n*Celebrated with timeless affection.* ✨`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(payload)}`;
      window.open(url, '_blank');
    });
  }

  // --------------------------------------------------------------------------
  // 12. SCROLL TRACKER & RETURN TO TOP
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
      const mainContent = document.getElementById('main-content');
      if (mainContent) mainContent.focus();
    });
  }

  // --------------------------------------------------------------------------
  // 13. ACCESSIBLE THEME SWITCHER
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

      playAcousticNote(523.25, getAudioCtx()?.currentTime || 0, 0.18);
    });
  }
  initTheme();

  // --------------------------------------------------------------------------
  // 14. DYNAMIC DOCK INTERACTIVITY
  // --------------------------------------------------------------------------
  const dockCandleBtn = document.getElementById('dockCandleBtn');
  const dockGalleryBtn = document.getElementById('dockGalleryBtn');
  const dockLoveBurstBtn = document.getElementById('dockLoveBurstBtn');
  const dockJukeboxBtn = document.getElementById('dockJukeboxBtn');
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

  if (dockJukeboxBtn) {
    dockJukeboxBtn.addEventListener('click', () => {
      openJukebox();
    });
  }

  if (dockBlessingBtn) {
    dockBlessingBtn.addEventListener('click', () => {
      document.getElementById('act-wishes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Welcome Shimmer
  window.addEventListener('load', () => {
    setTimeout(() => {
      triggerSupernova(window.innerWidth / 2, window.innerHeight * 0.28, 65);
    }, 700);
  });

})();
