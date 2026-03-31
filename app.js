// ============================
// READ THE FINE PRINT — Exhibition Dashboard
// ============================

(function() {
    'use strict';

    // ===== DATA STORE =====
    const STORAGE_KEY = 'rtfp_exhibition_data';
    const EXHIBITION_DATE = new Date('2026-09-10T00:00:00');

    const defaultData = {
        pieces: [],
        milestones: [],
        expenses: [],
        inspiration: [],
        teamNeeds: [],
        statements: {
            artist: { text: '', status: 'draft' },
            exhibition: { text: '', status: 'draft' }
        },
        layout: {
            placements: [],
            notes: ''
        },
        budget: 40000,
        activity: []
    };

    let data = loadData();
    let currentPieceId = null;
    let calendarDate = new Date();

    function loadData() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                return { ...defaultData, ...parsed };
            }
        } catch(e) { console.error('Failed to load data', e); }
        return { ...defaultData };
    }

    function saveData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    function addActivity(text) {
        data.activity.unshift({ text, time: new Date().toISOString() });
        if (data.activity.length > 50) data.activity = data.activity.slice(0, 50);
        saveData();
    }

    // ===== NAVIGATION =====
    const navLinks = document.querySelectorAll('.nav-links a');
    const views = document.querySelectorAll('.view');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = link.dataset.view;
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            views.forEach(v => v.classList.remove('active'));
            document.getElementById('view-' + viewId).classList.add('active');
            // Close mobile nav
            document.getElementById('sidebar').classList.remove('open');
            // Refresh the view
            refreshView(viewId);
        });
    });

    // Mobile toggle
    document.getElementById('mobileToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    function refreshView(viewId) {
        switch(viewId) {
            case 'dashboard': renderDashboard(); break;
            case 'pieces': renderPieces(); break;
            case 'calendar': renderCalendar(); break;
            case 'budget': renderBudget(); break;
            case 'inspiration': renderInspiration(); break;
            case 'statements': renderStatements(); break;
            case 'layout': renderLayout(); break;
            case 'team': renderTeam(); break;
        }
    }

    // ===== NEXT STEP HELPER =====
    function getNextStep(piece) {
        // Find first unchecked todo item
        if (piece.checklist && piece.checklist.length > 0) {
            const next = piece.checklist.find(t => !t.done);
            if (next) return next.text;
        }
        // Fallback based on stage
        const stageFallbacks = {
            'concept': 'Write out the how-to build process',
            'sketch': 'Finalize render/sketch and source materials',
            'materials': 'Begin fabrication or assembly',
            'in-progress': 'Continue building — check your checklist',
            'complete': 'Plan installation logistics',
            'installed': 'Final review and lighting check'
        };
        return stageFallbacks[piece.stage] || 'Add build steps to generate a checklist';
    }

    // ===== DAILY FEMINIST ART INSPIRATION =====
    const feministArtworks = [
        { title: 'The Dinner Party', artist: 'Judy Chicago, 1979', desc: 'A monumental installation featuring a triangular table with 39 place settings, each honoring a significant woman from history. The vulva-shaped plates were considered scandalous — Chicago insisted on centering the female body as sacred geometry, not obscenity.', relevance: 'Your Portal to God shares this radical act of restoring reverence to what has been shamed. Chicago proved that scale and audacity force the conversation.' },
        { title: 'Untitled (Your Body is a Battleground)', artist: 'Barbara Kruger, 1989', desc: 'A photographic silkscreen using bold text over a woman\'s face split into positive and negative. Originally made for the 1989 Women\'s March on Washington, it became one of the most iconic feminist artworks ever — proving that direct, confrontational text-based work can shake the culture.', relevance: 'Your wall texts and the directness of pieces like GOOD WOMAN carry this same power. Kruger proved that naming the system IS the art.' },
        { title: 'Interior Scroll', artist: 'Carolee Schneemann, 1975', desc: 'Schneemann stood naked before an audience and slowly extracted a scroll from her body, reading from it. The text challenged how women\'s creative work is dismissed. She reclaimed the female body as a source of knowledge, not just spectacle.', relevance: 'Schneemann\'s fearlessness with the body as material mirrors your own use of personal syringes in DESIRE. The confessional is the power.' },
        { title: 'Rhythm 0', artist: 'Marina Abramović, 1974', desc: 'Abramović placed 72 objects on a table — including a rose, perfume, a knife, and a loaded gun — and invited the audience to use them on her for 6 hours. By the end, her clothes were cut off and the gun was pointed at her head. It exposed how quickly people dehumanize a passive body.', relevance: 'THE OBJECT and SEA OF ATTENTION create a similar visceral awareness of how the gaze and passive permission escalate. Abramović proved the audience IS the piece.' },
        { title: 'Womanhouse', artist: 'Judy Chicago & Miriam Schapiro, 1972', desc: 'An entire abandoned house was transformed into a feminist art installation by CalArts students. Rooms included a "Menstruation Bathroom," a bride trapped in a staircase, and a kitchen with fried-egg breasts on the walls. It was the first large-scale feminist art installation.', relevance: 'Womanhouse proved that immersive, room-scale installation is the most powerful way to make invisible domestic experience FELT. Your exhibition follows this lineage directly.' },
        { title: 'Post-Partum Document', artist: 'Mary Kelly, 1973-79', desc: 'A six-year documentation of the artist\'s relationship with her son, including soiled diapers, feeding charts, and first words. Kelly refused to show her own body, instead making visible the invisible labor of motherhood through its evidence.', relevance: 'MOTHER OF SWORDS and THE RESOURCE share Kelly\'s insistence that maternal labor is not sentimental — it is structural, measurable, and costs something.' },
        { title: 'Infinity Mirror Rooms', artist: 'Yayoi Kusama, 1965-present', desc: 'Immersive mirrored rooms filled with lights that create the illusion of infinite space. Kusama uses them to explore obliteration of the self and cosmic interconnection. Visitors become part of the work the moment they step inside.', relevance: 'Your MIRRORS piece directly engages this tradition of using reflection to destabilize self-perception. Kusama proved that immersion changes the viewer\'s body, not just their mind.' },
        { title: 'Mapping the Body', artist: 'Kiki Smith, 1990s', desc: 'Smith\'s sculptures of women\'s bodies leak, bleed, and trail bodily fluids. Her wax and bronze figures refuse to be contained or idealized. They present the female body as a site of both vulnerability and fierce biological power.', relevance: 'THE UNBECOMING and SHEDDING share Smith\'s refusal to sanitize the body. She proved that showing what leaks through the cracks is more powerful than showing what holds together.' },
        { title: 'SOS Starification Object Series', artist: 'Hannah Wilke, 1974-82', desc: 'Wilke posed nude, her body covered in small vulva-shaped chewing gum sculptures. Later, diagnosed with cancer, she documented her body\'s transformation unflinchingly. She confronted beauty, desire, and decay in the same frame.', relevance: 'DESIRE and FOR YOUR COMFORT share Wilke\'s territory — the intersection of beauty and pain, performance and authenticity. She refused the false choice between vanity and gravity.' },
        { title: 'The Two Fridas', artist: 'Frida Kahlo, 1939', desc: 'Two self-portraits sit side by side — one in traditional Mexican dress, one in European clothing. They share an exposed circulatory system, connected by a single vein. One heart is whole, one is cut open. It depicts the duality within one woman.', relevance: 'THE SAINT AND THE OUTLAW is a direct descendant of this duality. Kahlo proved you can hold contradictions without resolving them — that IS the portrait.' },
        { title: 'Semiotics of the Kitchen', artist: 'Martha Rosler, 1975', desc: 'Rosler stands in a kitchen demonstrating utensils alphabetically, but her gestures become increasingly violent — stabbing, slashing, chopping the air. She transforms a cooking show into a performance of trapped rage, without ever saying a word.', relevance: 'FOR YOUR COMFORT shares this revelation of what simmers beneath the performance of domesticated femininity. Rosler proved that the most ordinary setting is the most devastating stage.' },
        { title: 'My Bed', artist: 'Tracey Emin, 1998', desc: 'Emin displayed her actual unmade bed surrounded by personal detritus — vodka bottles, cigarette butts, stained sheets, pregnancy tests. By refusing to clean up, she turned private female messiness into confrontational public art.', relevance: 'Your exhibition shares Emin\'s radical honesty. THE OBSCENE and UNSAID operate in the same territory — making visible what women are expected to hide.' },
        { title: 'Nan One Month After Being Battered', artist: 'Nan Goldin, 1984', desc: 'A raw self-portrait taken one month after Goldin was beaten by her boyfriend. Her bruised face stares directly at the camera with both vulnerability and defiance. It became one of the most important photographs documenting violence against women.', relevance: 'LIVE DATA: VIOLENCE AGAINST WOMEN and the UNSAID submissions carry this same refusal to look away. Goldin proved that documenting is itself an act of resistance.' },
        { title: 'Do Women Have To Be Naked To Get Into the Met. Museum?', artist: 'Guerrilla Girls, 1989', desc: 'An anonymous collective of women artists revealed that less than 5% of artists in the Met\'s Modern Art section were women, but 85% of the nudes were female. Their provocative posters and billboards used data and humor to expose systemic sexism in the art world.', relevance: 'Your entire exhibition is a Guerrilla Girls act — using art to make visible what the system prefers to keep invisible. THE REBELLION is built on this lineage of collective voice.' },
        { title: 'Pillars of Society', artist: 'Adrian Piper, 1981', desc: 'Piper created "Funk Lessons" and confrontational performances where she directly engaged audiences about their racial biases. Her work forced viewers to recognize their own complicity in systems of power.', relevance: 'GOOD WOMAN operates with the same mechanism — making the viewer the subject of the work. Piper proved that discomfort is not a side effect; it IS the medium.' },
        { title: 'The Lovers', artist: 'Marina Abramović & Ulay, 1988', desc: 'Abramović and Ulay each walked from opposite ends of the Great Wall of China, meeting in the middle to say goodbye after 12 years together. The walk took 90 days. An act of love, endurance, and closure rendered as epic performance.', relevance: 'The endurance across your pieces — DROWNING, THE RESOURCE, THE ENDURING HEART — shares this understanding that duration itself communicates what language cannot.' },
    ];

    function renderDailyInspiration() {
        const container = document.getElementById('dailyInspiration');
        // Use day of year to rotate, but allow refresh
        const savedIdx = sessionStorage.getItem('rtfp_insp_idx');
        let idx;
        if (savedIdx !== null) {
            idx = parseInt(savedIdx);
        } else {
            const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
            idx = dayOfYear % feministArtworks.length;
            sessionStorage.setItem('rtfp_insp_idx', idx);
        }
        const work = feministArtworks[idx];

        const searchQuery = encodeURIComponent(`${work.title} ${work.artist.split(',')[0]} artwork`);
        const imgSearchUrl = `https://www.google.com/search?q=${searchQuery}&tbm=isch`;

        container.innerHTML = `
            <a href="${imgSearchUrl}" target="_blank" class="di-image-link" title="View this artwork">
                <div class="di-image-placeholder">
                    <span class="di-view-label">View<br>Artwork</span>
                </div>
            </a>
            <div class="di-text">
                <div class="di-label">Feminist Art Inspiration</div>
                <div class="di-title">${work.title}</div>
                <div class="di-artist">${work.artist}</div>
                <div class="di-desc">${work.desc}</div>
                <div class="di-relevance">Connection to your work: ${work.relevance}</div>
            </div>
            <button class="di-refresh" id="diRefresh" title="Show another">&#8635;</button>
        `;

        document.getElementById('diRefresh').addEventListener('click', () => {
            const newIdx = (idx + 1) % feministArtworks.length;
            sessionStorage.setItem('rtfp_insp_idx', newIdx);
            renderDailyInspiration();
        });
    }

    // ===== CURRENTLY WORKING ON =====
    function renderWorkingOn() {
        const select = document.getElementById('workingOnSelect');
        const card = document.getElementById('workingOnCard');
        const currentId = data.currentlyWorkingOn || '';

        // Populate select with YES pieces
        const yesList = data.pieces.filter(p => (p.category || 'yes') === 'yes').sort((a, b) => (a.order || 99) - (b.order || 99));
        select.innerHTML = '<option value="">Select a piece to focus on...</option>';
        yesList.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `#${p.order || '?'} ${p.title || 'Untitled'}`;
            if (p.id === currentId) opt.selected = true;
            select.appendChild(opt);
        });

        if (currentId) {
            const piece = data.pieces.find(p => p.id === currentId);
            if (piece) {
                const todoTotal = (piece.checklist || []).length;
                const todoDone = (piece.checklist || []).filter(t => t.done).length;
                const progress = todoTotal > 0 ? Math.round(todoDone / todoTotal * 100) : 0;
                const nextStep = getNextStep(piece);

                card.style.display = 'flex';
                card.innerHTML = `
                    <div class="wo-number">#${piece.order || '?'}</div>
                    <div class="working-on-main">
                        <div class="wo-title">${piece.title || 'Untitled'}</div>
                        <div class="wo-type">${(piece.type || '').replace('-', ' ')}</div>
                        <div class="wo-desc">${piece.description || ''}</div>
                        <div class="wo-progress-row">
                            <div class="wo-progress">
                                <div class="wo-progress-bar"><div class="wo-progress-fill" style="width:${progress}%"></div></div>
                                <span class="wo-progress-label">${todoDone}/${todoTotal} tasks</span>
                            </div>
                            <span class="piece-stage-badge stage-${piece.stage} wo-stage">${(piece.stage || 'concept').replace('-', ' ')}</span>
                        </div>
                        <div class="wo-next-step">
                            <div class="wo-next-label">Easiest Next Step</div>
                            ${nextStep}
                        </div>
                        <div class="wo-click-hint">Click to open full project page</div>
                    </div>
                `;
                card.onclick = () => {
                    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                    document.querySelector('[data-view="pieces"]').classList.add('active');
                    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                    document.getElementById('view-pieces').classList.add('active');
                    openPieceModal(piece.id);
                };
            } else {
                card.style.display = 'none';
            }
        } else {
            card.style.display = 'none';
        }
    }

    document.getElementById('workingOnSelect').addEventListener('change', (e) => {
        data.currentlyWorkingOn = e.target.value;
        saveData();
        renderWorkingOn();
    });

    // ===== COUNTDOWN =====
    function updateCountdown() {
        const now = new Date();
        const diff = EXHIBITION_DATE - now;
        if (diff <= 0) {
            document.getElementById('countdownBanner').textContent = 'Exhibition Day!';
            return;
        }
        const days = Math.floor(diff / (1000*60*60*24));
        const months = Math.floor(days / 30);
        const remainDays = days % 30;
        document.getElementById('countdownBanner').textContent =
            `${days} days to Sept 10, 2026  (${months}mo ${remainDays}d)`;
    }

    // ===== DASHBOARD =====
    function renderDashboard() {
        updateCountdown();
        renderDailyInspiration();
        renderWorkingOn();
        const pieces = data.pieces;
        const totalTodos = pieces.reduce((sum, p) => sum + (p.checklist || []).filter(t => !t.done).length, 0);
        const totalSpent = data.expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);

        document.getElementById('statTotal').textContent = pieces.length;
        document.getElementById('statInProgress').textContent = pieces.filter(p => p.stage === 'in-progress').length;
        document.getElementById('statComplete').textContent = pieces.filter(p => p.stage === 'complete' || p.stage === 'installed').length;
        document.getElementById('statBudgetUsed').textContent = '$' + totalSpent.toLocaleString();
        document.getElementById('statBudgetRemaining').textContent = '$' + (data.budget - totalSpent).toLocaleString();
        document.getElementById('statTodos').textContent = totalTodos;

        // Next steps for dashboard
        const dashYesPieces = pieces.filter(p => (p.category || 'yes') === 'yes');
        const nextStepsList = document.getElementById('nextStepsList');
        if (dashYesPieces.length > 0) {
            const stepsHtml = dashYesPieces
                .filter(p => p.stage !== 'installed')
                .sort((a, b) => (a.order || 99) - (b.order || 99))
                .map(p => {
                    const step = getNextStep(p);
                    const nextIdx = (p.checklist || []).findIndex(t => !t.done);
                    const lowEffort = ['collect', 'source', 'compile', 'write', 'design', 'research', 'list', 'find'];
                    const isEasy = lowEffort.some(w => step.toLowerCase().includes(w));
                    const effort = isEasy ? 'Can do from your phone or laptop' : 'May need dedicated time';
                    const doneCount = (p.checklist || []).filter(t => t.done).length;
                    const totalCount = (p.checklist || []).length;
                    return `<div class="next-step-card" data-id="${p.id}" data-todo-idx="${nextIdx}">
                        <div class="ns-piece">#${p.order || '?'} ${p.title} ${totalCount > 0 ? `<span class="ns-progress">${doneCount}/${totalCount}</span>` : ''}</div>
                        <div class="ns-step-row">
                            <button class="ns-check" data-id="${p.id}" data-idx="${nextIdx}" title="Mark done">&#10003;</button>
                            <div class="ns-step">${step}</div>
                        </div>
                        <div class="ns-effort">${effort}</div>
                    </div>`;
                }).join('');
            nextStepsList.innerHTML = stepsHtml;

            // Click the check button to mark the step done
            nextStepsList.querySelectorAll('.ns-check').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const pieceId = btn.dataset.id;
                    const idx = parseInt(btn.dataset.idx);
                    const piece = data.pieces.find(p => p.id === pieceId);
                    if (piece && piece.checklist && piece.checklist[idx]) {
                        piece.checklist[idx].done = true;
                        saveData();
                        addActivity(`Completed: "${piece.checklist[idx].text}" on ${piece.title}`);
                        renderDashboard();
                    }
                });
            });

            // Click the card to open piece
            nextStepsList.querySelectorAll('.next-step-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (e.target.closest('.ns-check')) return;
                    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                    document.querySelector('[data-view="pieces"]').classList.add('active');
                    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                    document.getElementById('view-pieces').classList.add('active');
                    openPieceModal(card.dataset.id);
                });
            });
        }

        // Stage breakdown
        const stages = ['concept','sketch','materials','in-progress','complete','installed'];
        const stageLabels = { concept:'Concept', sketch:'Sketch', materials:'Materials', 'in-progress':'In Progress', complete:'Complete', installed:'Installed' };
        const stageColors = { concept:'#9b59b6', sketch:'#3498db', materials:'#f39c12', 'in-progress':'#1abc9c', complete:'#2ecc71', installed:'#c9a84c' };
        const maxCount = Math.max(1, ...stages.map(s => pieces.filter(p => p.stage === s).length));

        document.getElementById('stageBreakdown').innerHTML = stages.map(s => {
            const count = pieces.filter(p => p.stage === s).length;
            const pct = (count / maxCount * 100);
            return `<div class="stage-bar-row">
                <span class="stage-bar-label">${stageLabels[s]}</span>
                <div class="stage-bar-track"><div class="stage-bar-fill" style="width:${pct}%;background:${stageColors[s]}"></div></div>
                <span class="stage-bar-count">${count}</span>
            </div>`;
        }).join('');

        // Upcoming deadlines
        const deadlines = pieces
            .filter(p => p.deadline)
            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            .slice(0, 5);
        document.getElementById('upcomingDeadlines').innerHTML = deadlines.length
            ? deadlines.map(p => `<div class="deadline-item"><span>${p.title}</span><span class="deadline-date">${formatDate(p.deadline)}</span></div>`).join('')
            : '<div class="empty-state"><p>No deadlines set yet</p></div>';

        // Recent activity
        document.getElementById('recentActivity').innerHTML = data.activity.length
            ? data.activity.slice(0, 8).map(a => `<div class="activity-item">${a.text} <span class="activity-time">${timeAgo(a.time)}</span></div>`).join('')
            : '<div class="empty-state"><p>Activity will show up here</p></div>';
    }

    // ===== PIECES =====
    let currentCategory = 'yes';

    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.cat;
            renderPieces();
        });
    });

    function renderPieces() {
        const filter = document.getElementById('pieceFilter').value;
        const typeFilter = document.getElementById('pieceTypeFilter').value;
        let pieces = data.pieces;
        if (currentCategory !== 'all') pieces = pieces.filter(p => (p.category || 'yes') === currentCategory);
        if (filter !== 'all') pieces = pieces.filter(p => p.stage === filter);
        if (typeFilter !== 'all') pieces = pieces.filter(p => p.type === typeFilter);
        // Sort by order within category
        pieces.sort((a, b) => (a.order || 99) - (b.order || 99));

        const grid = document.getElementById('piecesGrid');
        if (pieces.length === 0) {
            grid.innerHTML = '<div class="empty-state"><p>No pieces yet. Click "+ New Piece" to start building your exhibition.</p></div>';
            return;
        }

        grid.innerHTML = pieces.map(p => {
            const thumb = p.images && p.images.length > 0
                ? `<img src="${p.images[0]}" alt="${p.title}">`
                : `<span class="no-image">${p.type || 'No image'}</span>`;
            const todoTotal = (p.checklist || []).length;
            const todoDone = (p.checklist || []).filter(t => t.done).length;
            const progress = todoTotal > 0 ? (todoDone / todoTotal * 100) : 0;

            const cat = p.category || 'yes';
            const catLabel = cat === 'yes' ? 'YES' : cat === 'maybe' ? 'MAYBE' : 'LATER';
            const orderLabel = cat === 'yes' && p.order ? `#${p.order}` : '';

            return `<div class="piece-card ${p.showstopper ? 'showstopper' : ''}" data-id="${p.id}">
                ${currentCategory === 'all' ? `<span class="category-label cat-${cat}">${catLabel}</span>` : ''}
                <div class="piece-card-thumb">${thumb}</div>
                <h4>${p.title || 'Untitled'}</h4>
                <div class="piece-card-type">${(p.type || '').replace('-', ' ')}</div>
                <div class="piece-card-desc">${p.description || ''}</div>
                <div class="piece-card-footer">
                    <span class="piece-stage-badge stage-${p.stage}">${(p.stage || 'concept').replace('-', ' ')}</span>
                    ${todoTotal > 0 ? `<div class="piece-progress-bar"><div class="piece-progress-fill" style="width:${progress}%"></div></div>` : ''}
                </div>
                ${orderLabel ? `<span class="piece-card-order">${orderLabel}</span>` : ''}
                <div class="next-step-badge">Next: ${getNextStep(p)}</div>
            </div>`;
        }).join('');

        grid.querySelectorAll('.piece-card').forEach(card => {
            card.addEventListener('click', () => openPieceModal(card.dataset.id));
            // Drag and drop
            card.setAttribute('draggable', 'true');
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', card.dataset.id);
                card.classList.add('dragging');
                document.getElementById('dropZones').style.display = 'flex';
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
                document.getElementById('dropZones').style.display = 'none';
                document.querySelectorAll('.drop-zone').forEach(dz => dz.classList.remove('dragover'));
            });
        });

        // Drop zones
        document.querySelectorAll('.drop-zone').forEach(dz => {
            dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('dragover'); });
            dz.addEventListener('dragleave', () => dz.classList.remove('dragover'));
            dz.addEventListener('drop', (e) => {
                e.preventDefault();
                dz.classList.remove('dragover');
                const pieceId = e.dataTransfer.getData('text/plain');
                const piece = data.pieces.find(p => p.id === pieceId);
                if (piece) {
                    piece.category = dz.dataset.cat;
                    saveData();
                    addActivity(`Moved "${piece.title}" to ${dz.dataset.cat === 'yes' ? 'YES' : dz.dataset.cat === 'maybe' ? 'Maybe' : 'Save for Later'}`);
                    renderPieces();
                }
                document.getElementById('dropZones').style.display = 'none';
            });
        });
    }

    document.getElementById('pieceFilter').addEventListener('change', renderPieces);
    document.getElementById('pieceTypeFilter').addEventListener('change', renderPieces);

    document.getElementById('addPieceBtn').addEventListener('click', () => {
        const piece = {
            id: generateId(),
            title: '',
            type: 'mixed-media',
            stage: 'concept',
            showstopper: false,
            category: currentCategory === 'all' ? 'yes' : currentCategory,
            order: 99,
            description: '',
            dimensions: '',
            medium: '',
            cost: 0,
            deadline: '',
            notes: '',
            statement: '',
            statementStatus: 'draft',
            images: [],
            howTo: '',
            checklist: [],
            materials: [],
            teamNeeds: []
        };
        data.pieces.push(piece);
        saveData();
        addActivity('Created new piece');
        openPieceModal(piece.id);
        renderPieces();
    });

    // ===== PIECE MODAL =====
    function openPieceModal(id) {
        currentPieceId = id;
        const piece = data.pieces.find(p => p.id === id);
        if (!piece) return;

        document.getElementById('pdTitle').value = piece.title || '';
        document.getElementById('pdType').value = piece.type || 'mixed-media';
        document.getElementById('pdStage').value = piece.stage || 'concept';
        document.getElementById('pdCategory').value = piece.category || 'yes';
        document.getElementById('pdShowstopper').checked = piece.showstopper || false;
        document.getElementById('pdDescription').value = piece.description || '';
        document.getElementById('pdDimensions').value = piece.dimensions || '';
        document.getElementById('pdMedium').value = piece.medium || '';
        document.getElementById('pdCost').value = piece.cost || '';
        document.getElementById('pdDeadline').value = piece.deadline || '';
        document.getElementById('pdNotes').value = piece.notes || '';

        // Show submissions section if this piece has them (UNSAID)
        const subsSection = document.getElementById('pdSubmissions');
        if (piece.submissions && piece.submissions.length > 0) {
            subsSection.style.display = 'block';
            subsSection.querySelector('.submissions-count').textContent = piece.submissions.length;
            subsSection.querySelector('.submissions-list').innerHTML = piece.submissions.map((s, i) =>
                `<div class="submission-item"><span class="sub-text">"${escapeHtml(s)}"</span><button class="sub-remove" data-index="${i}">&times;</button></div>`
            ).join('');
            subsSection.querySelectorAll('.sub-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    piece.submissions.splice(parseInt(btn.dataset.index), 1);
                    saveData();
                    openPieceModal(piece.id); // refresh
                });
            });
        } else {
            subsSection.style.display = 'none';
        }
        document.getElementById('pdStatement').value = piece.statement || '';
        document.getElementById('pdStatementStatus').value = piece.statementStatus || 'draft';
        document.getElementById('pdHowTo').value = piece.howTo || '';

        renderChecklist(piece);
        renderMaterials(piece);
        renderTeamNeeds(piece);
        renderVisuals(piece);
        loadSavedTips(piece);

        // Reset to first tab
        document.querySelectorAll('.piece-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.piece-tab-content').forEach(t => t.classList.remove('active'));
        document.querySelector('.piece-tab[data-tab="details"]').classList.add('active');
        document.querySelector('.piece-tab-content[data-tab="details"]').classList.add('active');

        document.getElementById('pieceModal').classList.add('open');
    }

    function closePieceModal() {
        document.getElementById('pieceModal').classList.remove('open');
        currentPieceId = null;
    }

    document.getElementById('closePieceModal').addEventListener('click', closePieceModal);
    document.getElementById('pieceModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('pieceModal')) closePieceModal();
    });

    // Piece tabs
    document.querySelectorAll('.piece-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.piece-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.piece-tab-content').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`.piece-tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active');
        });
    });

    // Submissions add
    document.getElementById('addSubmissionBtn').addEventListener('click', () => {
        document.getElementById('addSubmissionRow').style.display = 'flex';
        document.getElementById('newSubmission').focus();
    });
    document.getElementById('saveSubmissionBtn').addEventListener('click', () => {
        const text = document.getElementById('newSubmission').value.trim();
        if (!text) return;
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;
        if (!piece.submissions) piece.submissions = [];
        piece.submissions.push(text);
        document.getElementById('newSubmission').value = '';
        document.getElementById('addSubmissionRow').style.display = 'none';
        saveData();
        openPieceModal(piece.id);
    });

    // Save piece
    document.getElementById('savePieceBtn').addEventListener('click', () => {
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;

        const oldTitle = piece.title;
        piece.title = document.getElementById('pdTitle').value;
        piece.type = document.getElementById('pdType').value;
        piece.stage = document.getElementById('pdStage').value;
        piece.category = document.getElementById('pdCategory').value;
        piece.showstopper = document.getElementById('pdShowstopper').checked;
        piece.description = document.getElementById('pdDescription').value;
        piece.dimensions = document.getElementById('pdDimensions').value;
        piece.medium = document.getElementById('pdMedium').value;
        piece.cost = parseFloat(document.getElementById('pdCost').value) || 0;
        piece.deadline = document.getElementById('pdDeadline').value;
        piece.notes = document.getElementById('pdNotes').value;
        piece.statement = document.getElementById('pdStatement').value;
        piece.statementStatus = document.getElementById('pdStatementStatus').value;
        piece.howTo = document.getElementById('pdHowTo').value;

        saveData();
        addActivity(`Updated "${piece.title || 'Untitled'}"`);
        renderPieces();
        renderDashboard();
        closePieceModal();
    });

    // Delete piece
    document.getElementById('deletePieceBtn').addEventListener('click', () => {
        if (!confirm('Delete this piece? This cannot be undone.')) return;
        const piece = data.pieces.find(p => p.id === currentPieceId);
        data.pieces = data.pieces.filter(p => p.id !== currentPieceId);
        saveData();
        addActivity(`Deleted "${piece?.title || 'Untitled'}"`);
        renderPieces();
        closePieceModal();
    });

    // ===== CHECKLIST =====
    function renderChecklist(piece) {
        const container = document.getElementById('pdChecklist');
        const pending = (piece.checklist || []).map((item, i) => ({ ...item, idx: i })).filter(t => !t.done);
        const done = (piece.checklist || []).map((item, i) => ({ ...item, idx: i })).filter(t => t.done);

        let html = pending.map(item =>
            `<div class="checklist-item">
                <input type="checkbox" data-index="${item.idx}">
                <span>${item.text}</span>
                <button class="remove-todo" data-index="${item.idx}">&times;</button>
            </div>`
        ).join('');

        if (done.length > 0) {
            html += `<details class="done-section"><summary class="done-summary">Completed (${done.length})</summary>`;
            html += done.map(item =>
                `<div class="checklist-item done">
                    <input type="checkbox" checked data-index="${item.idx}">
                    <span>${item.text}</span>
                    <button class="remove-todo" data-index="${item.idx}">&times;</button>
                </div>`
            ).join('');
            html += '</details>';
        }

        container.innerHTML = html;

        container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', () => {
                piece.checklist[parseInt(cb.dataset.index)].done = cb.checked;
                saveData();
                renderChecklist(piece);
            });
        });
        container.querySelectorAll('.remove-todo').forEach(btn => {
            btn.addEventListener('click', () => {
                piece.checklist.splice(parseInt(btn.dataset.index), 1);
                saveData();
                renderChecklist(piece);
            });
        });
    }

    document.getElementById('generateChecklist').addEventListener('click', () => {
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;
        const howTo = document.getElementById('pdHowTo').value;
        if (!howTo.trim()) return;

        // Parse the how-to text into steps
        const lines = howTo.split(/[\.\n]/).map(l => l.trim()).filter(l => l.length > 5);
        const newItems = lines.map(line => {
            // Clean up common prefixes
            let text = line.replace(/^(then|next|after that|first|second|third|finally|also|and then|and)\s+/i, '').trim();
            // Capitalize first letter
            text = text.charAt(0).toUpperCase() + text.slice(1);
            return { text, done: false };
        });

        // Merge with existing (don't duplicate)
        const existingTexts = new Set((piece.checklist || []).map(c => c.text.toLowerCase()));
        const toAdd = newItems.filter(item => !existingTexts.has(item.text.toLowerCase()));
        piece.checklist = [...(piece.checklist || []), ...toAdd];
        saveData();
        renderChecklist(piece);
    });

    document.getElementById('addTodoBtn').addEventListener('click', () => {
        const input = document.getElementById('newTodoInput');
        if (!input.value.trim()) return;
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;
        if (!piece.checklist) piece.checklist = [];
        piece.checklist.push({ text: input.value.trim(), done: false });
        input.value = '';
        saveData();
        renderChecklist(piece);
    });
    document.getElementById('newTodoInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.getElementById('addTodoBtn').click();
    });

    // ===== MATERIALS =====
    function renderMaterials(piece) {
        const container = document.getElementById('pdMaterials');
        container.innerHTML = (piece.materials || []).map((m, i) =>
            `<div class="material-item">
                <span class="mat-name">${m.name}</span>
                <span class="mat-qty">${m.qty || ''}</span>
                <span class="mat-cost">${m.cost ? '$' + parseFloat(m.cost).toLocaleString() : ''}</span>
                <span class="material-status mat-${m.status}">${m.status}</span>
                <button class="remove-material" data-index="${i}">&times;</button>
            </div>`
        ).join('') || '<p style="color:var(--text-dim);font-size:0.85rem">No materials tracked yet</p>';

        container.querySelectorAll('.remove-material').forEach(btn => {
            btn.addEventListener('click', () => {
                piece.materials.splice(parseInt(btn.dataset.index), 1);
                saveData();
                renderMaterials(piece);
            });
        });
    }

    document.getElementById('addMaterialBtn').addEventListener('click', () => {
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;
        const name = document.getElementById('newMaterialName').value.trim();
        if (!name) return;
        if (!piece.materials) piece.materials = [];
        piece.materials.push({
            name,
            qty: document.getElementById('newMaterialQty').value.trim(),
            cost: document.getElementById('newMaterialCost').value,
            status: document.getElementById('newMaterialStatus').value
        });
        document.getElementById('newMaterialName').value = '';
        document.getElementById('newMaterialQty').value = '';
        document.getElementById('newMaterialCost').value = '';
        saveData();
        renderMaterials(piece);
    });

    // ===== TEAM NEEDS (per piece) =====
    function renderTeamNeeds(piece) {
        const container = document.getElementById('pdTeamNeeds');
        container.innerHTML = (piece.teamNeeds || []).map((t, i) =>
            `<div class="material-item">
                <span class="mat-name">${t.role}</span>
                <span class="mat-qty">${t.notes || ''}</span>
                <span class="material-status mat-${t.status === 'needed' ? 'needed' : t.status === 'searching' ? 'ordered' : 'acquired'}">${t.status}</span>
                <button class="remove-material" data-index="${i}">&times;</button>
            </div>`
        ).join('') || '<p style="color:var(--text-dim);font-size:0.85rem">No team needs tracked yet</p>';

        container.querySelectorAll('.remove-material').forEach(btn => {
            btn.addEventListener('click', () => {
                piece.teamNeeds.splice(parseInt(btn.dataset.index), 1);
                saveData();
                renderTeamNeeds(piece);
            });
        });
    }

    document.getElementById('addTeamBtn').addEventListener('click', () => {
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;
        const role = document.getElementById('newTeamRole').value.trim();
        if (!role) return;
        if (!piece.teamNeeds) piece.teamNeeds = [];
        piece.teamNeeds.push({
            role,
            notes: document.getElementById('newTeamNotes').value.trim(),
            status: document.getElementById('newTeamStatus').value
        });
        document.getElementById('newTeamRole').value = '';
        document.getElementById('newTeamNotes').value = '';
        saveData();
        renderTeamNeeds(piece);
    });

    // ===== VISUALS / IMAGE UPLOAD =====
    function renderVisuals(piece) {
        const container = document.getElementById('pdVisuals');
        container.innerHTML = (piece.images || []).map((img, i) =>
            `<div class="visual-item">
                <img src="${img}" alt="Visual ${i+1}">
                <button class="remove-visual" data-index="${i}">&times;</button>
            </div>`
        ).join('');

        container.querySelectorAll('.remove-visual').forEach(btn => {
            btn.addEventListener('click', () => {
                piece.images.splice(parseInt(btn.dataset.index), 1);
                saveData();
                renderVisuals(piece);
            });
        });
    }

    const uploadZone = document.getElementById('uploadZone');
    const imageUpload = document.getElementById('imageUpload');

    uploadZone.addEventListener('click', () => imageUpload.click());
    uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.classList.add('dragover'); });
    uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        handleImageFiles(e.dataTransfer.files);
    });
    imageUpload.addEventListener('change', () => handleImageFiles(imageUpload.files));

    function handleImageFiles(files) {
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;
        if (!piece.images) piece.images = [];

        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                // Resize to save localStorage space
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const maxW = 800;
                    const scale = Math.min(1, maxW / img.width);
                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    piece.images.push(dataUrl);
                    saveData();
                    renderVisuals(piece);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    // ===== CALENDAR =====
    function renderCalendar() {
        const year = calendarDate.getFullYear();
        const month = calendarDate.getMonth();
        document.getElementById('calMonthYear').textContent =
            new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        // Timeline overview (March 2026 → Sept 2026)
        const timelineStart = new Date(2026, 2); // March 2026
        const timelineEnd = new Date(2026, 9); // Oct 2026
        const timelineHTML = [];
        for (let d = new Date(timelineStart); d <= timelineEnd; d.setMonth(d.getMonth() + 1)) {
            const m = d.getMonth();
            const y = d.getFullYear();
            const isCurrent = m === month && y === year;
            const milestoneCount = data.milestones.filter(ms => {
                const msDate = new Date(ms.date);
                return msDate.getMonth() === m && msDate.getFullYear() === y;
            }).length;
            const deadlineCount = data.pieces.filter(p => {
                if (!p.deadline) return false;
                const dd = new Date(p.deadline);
                return dd.getMonth() === m && dd.getFullYear() === y;
            }).length;
            const count = milestoneCount + deadlineCount;
            timelineHTML.push(`<div class="timeline-month ${isCurrent ? 'current' : ''}" data-month="${m}" data-year="${y}">
                <div class="tm-label">${d.toLocaleDateString('en-US', { month: 'short' })}</div>
                <div class="tm-count">${count || '—'}</div>
            </div>`);
        }
        document.getElementById('timelineOverview').innerHTML = timelineHTML.join('');

        document.querySelectorAll('.timeline-month').forEach(tm => {
            tm.addEventListener('click', () => {
                calendarDate = new Date(parseInt(tm.dataset.year), parseInt(tm.dataset.month));
                renderCalendar();
            });
        });

        // Calendar grid
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();

        let html = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d =>
            `<div class="cal-header">${d}</div>`
        ).join('');

        // Previous month days
        const prevDays = new Date(year, month, 0).getDate();
        for (let i = firstDay - 1; i >= 0; i--) {
            html += `<div class="cal-day other-month"><div class="day-num">${prevDays - i}</div></div>`;
        }

        // Current month days
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

            // Find events for this day
            const events = [];
            data.milestones.filter(ms => ms.date === dateStr).forEach(ms => {
                events.push(`<div class="cal-event" style="background:${ms.color || '#3498db'}22;color:${ms.color || '#3498db'}">${ms.title}</div>`);
            });
            data.pieces.filter(p => p.deadline === dateStr).forEach(p => {
                events.push(`<div class="cal-event" style="background:rgba(201,168,76,0.15);color:#c9a84c">Due: ${p.title}</div>`);
            });

            // Exhibition date marker
            if (dateStr === '2026-09-10') {
                events.unshift(`<div class="cal-event" style="background:rgba(231,76,60,0.2);color:#e74c3c">EXHIBITION DAY</div>`);
            }

            html += `<div class="cal-day ${isToday ? 'today' : ''}">
                <div class="day-num">${d}</div>
                ${events.join('')}
            </div>`;
        }

        // Fill remaining
        const totalCells = firstDay + daysInMonth;
        const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
        for (let i = 1; i <= remaining; i++) {
            html += `<div class="cal-day other-month"><div class="day-num">${i}</div></div>`;
        }

        document.getElementById('calendarGrid').innerHTML = html;
    }

    document.getElementById('calPrev').addEventListener('click', () => {
        calendarDate.setMonth(calendarDate.getMonth() - 1);
        renderCalendar();
    });
    document.getElementById('calNext').addEventListener('click', () => {
        calendarDate.setMonth(calendarDate.getMonth() + 1);
        renderCalendar();
    });

    // Milestones
    document.getElementById('addMilestoneBtn').addEventListener('click', () => {
        populatePieceSelects();
        document.getElementById('milestoneModal').style.display = 'flex';
    });
    document.getElementById('closeMilestoneModal').addEventListener('click', () => {
        document.getElementById('milestoneModal').style.display = 'none';
    });
    document.getElementById('saveMilestoneBtn').addEventListener('click', () => {
        const title = document.getElementById('msTitle').value.trim();
        const date = document.getElementById('msDate').value;
        if (!title || !date) return;
        data.milestones.push({
            id: generateId(),
            title,
            date,
            pieceId: document.getElementById('msPiece').value,
            color: document.getElementById('msColor').value
        });
        saveData();
        addActivity(`Added milestone: ${title}`);
        document.getElementById('milestoneModal').style.display = 'none';
        document.getElementById('msTitle').value = '';
        document.getElementById('msDate').value = '';
        renderCalendar();
    });

    // ===== BUDGET =====
    function renderBudget() {
        const total = data.budget;
        const spent = data.expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
        const pct = Math.min(100, (spent / total) * 100);

        document.getElementById('budgetBar').style.width = pct + '%';
        document.getElementById('budgetSpent').textContent = '$' + spent.toLocaleString();
        document.getElementById('budgetRemaining').textContent = '$' + (total - spent).toLocaleString();

        // Category breakdown
        const categories = {};
        data.expenses.forEach(e => {
            categories[e.category] = (categories[e.category] || 0) + (parseFloat(e.amount) || 0);
        });
        document.getElementById('budgetBreakdown').innerHTML = Object.entries(categories)
            .sort((a, b) => b[1] - a[1])
            .map(([cat, amt]) =>
                `<div class="budget-category-card">
                    <div class="budget-cat-label">${cat}</div>
                    <div class="budget-cat-amount">$${amt.toLocaleString()}</div>
                </div>`
            ).join('') || '';

        // Expense table
        const sorted = [...data.expenses].sort((a, b) => new Date(b.date) - new Date(a.date));
        document.getElementById('expenseTableBody').innerHTML = sorted.map(e => {
            const pieceName = e.pieceId ? (data.pieces.find(p => p.id === e.pieceId)?.title || 'Unknown') : 'General';
            return `<tr>
                <td>${formatDate(e.date)}</td>
                <td>${pieceName}</td>
                <td>${e.description}</td>
                <td>${e.category}</td>
                <td style="font-family:var(--font-mono)">$${parseFloat(e.amount).toLocaleString()}</td>
                <td><button class="expense-delete" data-id="${e.id}">&times;</button></td>
            </tr>`;
        }).join('') || '<tr><td colspan="6" style="text-align:center;color:var(--text-dim)">No expenses recorded yet</td></tr>';

        document.querySelectorAll('.expense-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                data.expenses = data.expenses.filter(e => e.id !== btn.dataset.id);
                saveData();
                renderBudget();
            });
        });
    }

    document.getElementById('addExpenseBtn').addEventListener('click', () => {
        populatePieceSelects();
        document.getElementById('expDate').value = new Date().toISOString().split('T')[0];
        document.getElementById('expenseModal').style.display = 'flex';
    });
    document.getElementById('closeExpenseModal').addEventListener('click', () => {
        document.getElementById('expenseModal').style.display = 'none';
    });
    document.getElementById('saveExpenseBtn').addEventListener('click', () => {
        const desc = document.getElementById('expDesc').value.trim();
        const amount = document.getElementById('expAmount').value;
        if (!desc || !amount) return;
        data.expenses.push({
            id: generateId(),
            date: document.getElementById('expDate').value,
            pieceId: document.getElementById('expPiece').value,
            description: desc,
            category: document.getElementById('expCategory').value,
            amount: parseFloat(amount)
        });
        saveData();
        addActivity(`Expense: $${parseFloat(amount).toLocaleString()} — ${desc}`);
        document.getElementById('expenseModal').style.display = 'none';
        document.getElementById('expDesc').value = '';
        document.getElementById('expAmount').value = '';
        renderBudget();
    });

    // ===== INSPIRATION =====
    function renderInspiration() {
        const grid = document.getElementById('inspirationGrid');
        if (data.inspiration.length === 0) {
            grid.innerHTML = '<div class="empty-state"><p>Add photos, notes, and references that inspire your work.</p></div>';
            return;
        }
        grid.innerHTML = data.inspiration.map(item =>
            `<div class="insp-card" data-id="${item.id}">
                ${item.image ? `<div class="insp-card-image"><img src="${item.image}" alt="${item.title}"></div>` : ''}
                <div class="insp-card-body">
                    <button class="insp-delete" data-id="${item.id}">&times;</button>
                    <div class="insp-card-title">${item.title}</div>
                    <div class="insp-card-notes">${item.notes || ''}</div>
                    ${item.tags && item.tags.length ? `<div class="insp-card-tags">${item.tags.map(t => `<span class="insp-tag">${t}</span>`).join('')}</div>` : ''}
                </div>
            </div>`
        ).join('');

        grid.querySelectorAll('.insp-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                data.inspiration = data.inspiration.filter(i => i.id !== btn.dataset.id);
                saveData();
                renderInspiration();
            });
        });
    }

    document.getElementById('addInspirationBtn').addEventListener('click', () => {
        populatePieceSelects();
        document.getElementById('inspImagePreview').style.display = 'none';
        document.getElementById('inspirationModal').style.display = 'flex';
    });
    document.getElementById('closeInspirationModal').addEventListener('click', () => {
        document.getElementById('inspirationModal').style.display = 'none';
    });

    // Inspiration image upload
    const inspUploadZone = document.getElementById('inspUploadZone');
    const inspImageUpload = document.getElementById('inspImageUpload');
    let inspTempImage = null;

    inspUploadZone.addEventListener('click', () => inspImageUpload.click());
    inspImageUpload.addEventListener('change', () => {
        const file = inspImageUpload.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const maxW = 600;
                const scale = Math.min(1, maxW / img.width);
                canvas.width = img.width * scale;
                canvas.height = img.height * scale;
                canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                inspTempImage = canvas.toDataURL('image/jpeg', 0.7);
                document.getElementById('inspImagePreview').src = inspTempImage;
                document.getElementById('inspImagePreview').style.display = 'block';
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    document.getElementById('saveInspirationBtn').addEventListener('click', () => {
        const title = document.getElementById('inspTitle').value.trim();
        if (!title) return;
        const tags = document.getElementById('inspTags').value.split(',').map(t => t.trim()).filter(Boolean);
        data.inspiration.push({
            id: generateId(),
            title,
            notes: document.getElementById('inspNotes').value,
            pieceId: document.getElementById('inspPiece').value,
            image: inspTempImage || null,
            tags,
            date: new Date().toISOString()
        });
        inspTempImage = null;
        saveData();
        addActivity(`Added inspiration: ${title}`);
        document.getElementById('inspirationModal').style.display = 'none';
        document.getElementById('inspTitle').value = '';
        document.getElementById('inspNotes').value = '';
        document.getElementById('inspTags').value = '';
        renderInspiration();
    });

    // ===== STATEMENTS =====
    function renderStatements() {
        document.getElementById('artistStatement').value = data.statements.artist.text;
        document.getElementById('artistStatementStatus').value = data.statements.artist.status;
        document.getElementById('exhibitStatement').value = data.statements.exhibition.text;
        document.getElementById('exhibitStatementStatus').value = data.statements.exhibition.status;
    }

    document.getElementById('saveStatementsBtn').addEventListener('click', () => {
        data.statements.artist.text = document.getElementById('artistStatement').value;
        data.statements.artist.status = document.getElementById('artistStatementStatus').value;
        data.statements.exhibition.text = document.getElementById('exhibitStatement').value;
        data.statements.exhibition.status = document.getElementById('exhibitStatementStatus').value;
        saveData();
        addActivity('Updated artist/exhibition statements');
    });

    // ===== LAYOUT =====
    function renderLayout() {
        // Sidebar pieces list
        const placed = new Set((data.layout.placements || []).map(p => p.pieceId));
        document.getElementById('layoutPiecesList').innerHTML = data.pieces.map(p =>
            `<div class="layout-piece-item ${placed.has(p.id) ? 'placed' : ''}" draggable="true" data-id="${p.id}">
                ${p.showstopper ? '★ ' : ''}${p.title || 'Untitled'}
            </div>`
        ).join('') || '<p style="color:var(--text-dim);font-size:0.8rem;padding:0.5rem">Add pieces first</p>';

        // Canvas placements
        const canvas = document.getElementById('layoutCanvas');
        canvas.querySelectorAll('.layout-placed-piece').forEach(el => el.remove());
        (data.layout.placements || []).forEach(pl => {
            const piece = data.pieces.find(p => p.id === pl.pieceId);
            if (!piece) return;
            const el = document.createElement('div');
            el.className = 'layout-placed-piece';
            el.style.left = pl.x + 'px';
            el.style.top = pl.y + 'px';
            el.textContent = piece.title || 'Untitled';
            el.dataset.pieceId = pl.pieceId;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'lp-remove';
            removeBtn.textContent = '×';
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                data.layout.placements = data.layout.placements.filter(p => p.pieceId !== pl.pieceId);
                saveData();
                renderLayout();
            });
            el.appendChild(removeBtn);

            // Make draggable within canvas
            let isDragging = false, startX, startY, origX, origY;
            el.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                origX = parseInt(el.style.left);
                origY = parseInt(el.style.top);
                el.style.zIndex = 10;
            });
            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                el.style.left = (origX + e.clientX - startX) + 'px';
                el.style.top = (origY + e.clientY - startY) + 'px';
            });
            document.addEventListener('mouseup', () => {
                if (!isDragging) return;
                isDragging = false;
                el.style.zIndex = '';
                const placement = data.layout.placements.find(p => p.pieceId === pl.pieceId);
                if (placement) {
                    placement.x = parseInt(el.style.left);
                    placement.y = parseInt(el.style.top);
                    saveData();
                }
            });

            canvas.appendChild(el);
        });

        // Drag from sidebar to canvas
        document.querySelectorAll('.layout-piece-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', item.dataset.id);
            });
        });

        canvas.addEventListener('dragover', (e) => e.preventDefault());
        canvas.addEventListener('drop', (e) => {
            e.preventDefault();
            const pieceId = e.dataTransfer.getData('text/plain');
            if (!pieceId) return;
            if (!data.layout.placements) data.layout.placements = [];
            // Don't duplicate
            if (data.layout.placements.find(p => p.pieceId === pieceId)) return;
            const rect = canvas.getBoundingClientRect();
            data.layout.placements.push({
                pieceId,
                x: e.clientX - rect.left - 40,
                y: e.clientY - rect.top - 15
            });
            saveData();
            renderLayout();
        });

        document.getElementById('layoutNotes').value = data.layout.notes || '';
    }

    document.getElementById('saveLayoutBtn').addEventListener('click', () => {
        data.layout.notes = document.getElementById('layoutNotes').value;
        saveData();
        addActivity('Updated layout plan');
    });

    // ===== TEAM =====
    function renderTeam() {
        const grid = document.getElementById('teamGrid');
        if (data.teamNeeds.length === 0) {
            grid.innerHTML = '<div class="empty-state"><p>Track the people you need to hire — fabricators, electricians, editors, installers, and more.</p></div>';
            return;
        }
        grid.innerHTML = data.teamNeeds.map(t =>
            `<div class="team-card">
                <div class="team-card-header">
                    <h4>${t.role}</h4>
                    <span class="team-status-badge ts-${t.status}">${t.status}</span>
                </div>
                <div class="team-card-detail"><strong>For:</strong> ${t.pieces || 'General'}</div>
                <div class="team-card-detail">${t.skills || ''}</div>
                ${t.budget ? `<div class="team-card-detail"><strong>Budget:</strong> $${parseFloat(t.budget).toLocaleString()}</div>` : ''}
                ${t.contact ? `<div class="team-card-detail"><strong>Contact:</strong> ${t.contact}</div>` : ''}
                <div class="team-card-actions">
                    <button class="team-delete" data-id="${t.id}">&times; Remove</button>
                </div>
            </div>`
        ).join('');

        grid.querySelectorAll('.team-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                data.teamNeeds = data.teamNeeds.filter(t => t.id !== btn.dataset.id);
                saveData();
                renderTeam();
            });
        });
    }

    document.getElementById('addTeamNeedBtn').addEventListener('click', () => {
        document.getElementById('teamModal').style.display = 'flex';
    });
    document.getElementById('closeTeamModal').addEventListener('click', () => {
        document.getElementById('teamModal').style.display = 'none';
    });
    document.getElementById('saveTeamBtn').addEventListener('click', () => {
        const role = document.getElementById('teamRole').value.trim();
        if (!role) return;
        data.teamNeeds.push({
            id: generateId(),
            role,
            pieces: document.getElementById('teamPieces').value.trim(),
            skills: document.getElementById('teamSkills').value.trim(),
            budget: document.getElementById('teamBudget').value,
            status: document.getElementById('teamStatus').value,
            contact: document.getElementById('teamContact').value.trim()
        });
        saveData();
        addActivity(`Added team need: ${role}`);
        document.getElementById('teamModal').style.display = 'none';
        document.getElementById('teamRole').value = '';
        document.getElementById('teamPieces').value = '';
        document.getElementById('teamSkills').value = '';
        document.getElementById('teamBudget').value = '';
        document.getElementById('teamContact').value = '';
        renderTeam();
    });

    // ===== HELPER: Populate piece selects =====
    function populatePieceSelects() {
        const selects = ['msPiece', 'expPiece', 'inspPiece'];
        selects.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const firstOption = el.options[0];
            el.innerHTML = '';
            el.appendChild(firstOption);
            data.pieces.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = p.title || 'Untitled';
                el.appendChild(opt);
            });
        });
    }

    // ===== EXPORT / IMPORT =====
    document.getElementById('exportBtn').addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `rtfp-exhibition-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    });

    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const imported = JSON.parse(ev.target.result);
                if (confirm('This will replace all current data. Continue?')) {
                    data = { ...defaultData, ...imported };
                    saveData();
                    renderDashboard();
                    alert('Data imported successfully!');
                }
            } catch(err) {
                alert('Failed to import: invalid JSON file');
            }
        };
        reader.readAsText(file);
    });

    // ===== UTILITY =====
    function formatDate(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr + 'T00:00:00');
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    function timeAgo(isoStr) {
        const diff = Date.now() - new Date(isoStr).getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'just now';
        if (mins < 60) return mins + 'm ago';
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return hrs + 'h ago';
        const days = Math.floor(hrs / 24);
        return days + 'd ago';
    }

    // ===== AI ADVISOR =====
    const AI_KEY_STORAGE = 'rtfp_ai_key';

    function initAI() {
        const savedKey = localStorage.getItem(AI_KEY_STORAGE);
        if (savedKey) {
            document.getElementById('aiApiSetup').classList.add('hidden');
        }
        // Populate "currently fabricating" dropdown
        const workingOn = document.getElementById('aiWorkingOn');
        if (workingOn) {
            data.pieces.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = p.title;
                workingOn.appendChild(opt);
            });
        }
        initVoice();
    }

    document.getElementById('aiSaveKey')?.addEventListener('click', () => {
        const key = document.getElementById('aiApiKey').value.trim();
        if (!key) return;
        localStorage.setItem(AI_KEY_STORAGE, key);
        document.getElementById('aiApiSetup').classList.add('hidden');
    });

    document.querySelectorAll('.ai-suggestion').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('aiInput').value = btn.dataset.q;
            sendAIMessage();
        });
    });

    // ===== PHOTO UPLOAD FOR AI ADVISOR =====
    let pendingPhotos = []; // { base64, mediaType, previewUrl }

    document.getElementById('aiPhotoBtn')?.addEventListener('click', () => {
        document.getElementById('aiPhotoInput').click();
    });

    document.getElementById('aiPhotoInput')?.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if (!file.type.startsWith('image/')) return;
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                const mediaType = file.type;
                const previewUrl = URL.createObjectURL(file);
                pendingPhotos.push({ base64, mediaType, previewUrl });
                renderPhotoPreview();
            };
            reader.readAsDataURL(file);
        });
        e.target.value = '';
    });

    function renderPhotoPreview() {
        const container = document.getElementById('aiPhotoPreview');
        const photoBtn = document.getElementById('aiPhotoBtn');
        if (pendingPhotos.length === 0) {
            container.style.display = 'none';
            container.innerHTML = '';
            photoBtn.classList.remove('has-photos');
            return;
        }
        photoBtn.classList.add('has-photos');
        container.style.display = 'flex';
        container.innerHTML = pendingPhotos.map((p, i) =>
            `<div class="ai-photo-thumb">
                <img src="${p.previewUrl}" alt="Photo ${i + 1}">
                <button class="remove-photo" data-idx="${i}">&times;</button>
            </div>`
        ).join('');
        container.querySelectorAll('.remove-photo').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.idx);
                URL.revokeObjectURL(pendingPhotos[idx].previewUrl);
                pendingPhotos.splice(idx, 1);
                renderPhotoPreview();
            });
        });
    }

    document.getElementById('aiSendBtn')?.addEventListener('click', sendAIMessage);
    document.getElementById('aiInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAIMessage(); }
    });

    async function sendAIMessage() {
        const input = document.getElementById('aiInput');
        const message = input.value.trim();
        if (!message && pendingPhotos.length === 0) return;

        const apiKey = localStorage.getItem(AI_KEY_STORAGE);
        if (!apiKey) {
            document.getElementById('aiApiSetup').classList.remove('hidden');
            return;
        }

        const chat = document.getElementById('aiChat');

        // Clear welcome message on first use
        const welcome = chat.querySelector('.ai-welcome');
        if (welcome) welcome.remove();

        // Capture photos before clearing
        const photos = [...pendingPhotos];
        pendingPhotos = [];
        renderPhotoPreview();

        // Add user message with any photos
        const photoHtml = photos.map(p => `<img src="${p.previewUrl}" class="chat-photo" alt="Uploaded photo">`).join('');
        chat.innerHTML += `<div class="ai-message user"><div class="ai-sender">You</div><div class="ai-bubble">${photoHtml}${message ? escapeHtml(message) : '<em>(see photo)</em>'}</div></div>`;
        input.value = '';

        // Add typing indicator
        chat.innerHTML += `<div class="ai-message assistant ai-typing-msg"><div class="ai-sender">Art Advisor</div><div class="ai-bubble ai-typing">Thinking...</div></div>`;
        chat.scrollTop = chat.scrollHeight;

        // Build context about the exhibition
        const pieceSummary = data.pieces.map(p =>
            `- ${p.title} (${p.type}, stage: ${p.stage})${p.showstopper ? ' [SHOW STOPPER]' : ''}: ${(p.description || '').substring(0, 150)}`
        ).join('\n');

        const workingOnId = document.getElementById('aiWorkingOn')?.value;
        const workingOnPiece = workingOnId ? data.pieces.find(p => p.id === workingOnId) : null;
        const workingOnContext = workingOnPiece
            ? `\n\nAlexi is currently fabricating: "${workingOnPiece.title}" (${workingOnPiece.type}, stage: ${workingOnPiece.stage}). ${workingOnPiece.description || ''}\nPrioritize advice relevant to this piece unless asked about something else.`
            : '';

        const systemPrompt = `You are an expert art exhibition advisor helping a first-time artist named Alexi prepare for her exhibition "Read the Fine Print" (target date: September 10, 2026). You have deep knowledge of:
- Art fabrication, materials, and techniques
- Gallery logistics, installation, and exhibition design
- Hiring fabricators, installers, AV technicians, and other specialists
- Art history, contemporary art references, and conceptual framing
- Budgeting for exhibitions (total budget: $40,000)
- Writing artist statements and wall text
- Immersive installation design, projection, hologram technology, sound design
- Body casting, sculpting, mixed media, film production

Current exhibition pieces:
${pieceSummary}

Be warm, practical, and specific. Give actionable advice. When discussing costs, give realistic ranges. When discussing hiring, suggest where to find people. When discussing techniques, explain step-by-step. You're like a knowledgeable friend who's helped mount dozens of shows. Keep responses concise but thorough — use bullet points and structure for clarity.${workingOnContext}`;

        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01',
                    'anthropic-dangerous-direct-browser-access': 'true'
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1500,
                    system: systemPrompt,
                    messages: [{ role: 'user', content: photos.length > 0
                        ? [
                            ...photos.map(p => ({
                                type: 'image',
                                source: { type: 'base64', media_type: p.mediaType, data: p.base64 }
                            })),
                            { type: 'text', text: message || 'What do you see in this image? How does it relate to my exhibition?' }
                          ]
                        : message
                    }]
                })
            });

            const result = await response.json();

            // Remove typing indicator
            chat.querySelector('.ai-typing-msg')?.remove();

            if (result.content && result.content[0]) {
                const text = result.content[0].text;
                const formatted = formatAIResponse(text);
                chat.innerHTML += `<div class="ai-message assistant"><div class="ai-sender">Art Advisor</div><div class="ai-bubble">${formatted}</div></div>`;
            } else if (result.error) {
                chat.innerHTML += `<div class="ai-message assistant"><div class="ai-sender">Art Advisor</div><div class="ai-bubble" style="color:var(--red)">Error: ${escapeHtml(result.error.message || 'API error. Check your key.')}</div></div>`;
            }
        } catch (err) {
            chat.querySelector('.ai-typing-msg')?.remove();
            chat.innerHTML += `<div class="ai-message assistant"><div class="ai-sender">Art Advisor</div><div class="ai-bubble" style="color:var(--red)">Connection error. Check your internet and API key.</div></div>`;
        }

        chat.scrollTop = chat.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function formatAIResponse(text) {
        // Basic markdown-like formatting
        let html = escapeHtml(text);
        // Bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Bullet lists
        html = html.replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
        // Numbered lists
        html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
        // Paragraphs
        html = html.replace(/\n\n/g, '</p><p>');
        html = '<p>' + html + '</p>';
        // Clean up empty paragraphs
        html = html.replace(/<p>\s*<\/p>/g, '');
        return html;
    }

    // ===== VOICE COMMANDS & STUDIO MODE =====
    function initVoice() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            // Hide voice controls if browser doesn't support speech
            const voiceBtn = document.getElementById('aiVoiceBtn');
            const studioBtn = document.getElementById('studioModeToggle');
            if (voiceBtn) voiceBtn.style.display = 'none';
            if (studioBtn) studioBtn.style.display = 'none';
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        let isListening = false;
        let studioMode = false;
        let studioShouldRestart = false;

        const voiceBtn = document.getElementById('aiVoiceBtn');
        const voiceStatus = document.getElementById('aiVoiceStatus');
        const voiceStatusText = document.getElementById('aiVoiceStatusText');
        const studioToggle = document.getElementById('studioModeToggle');
        const studioBanner = document.getElementById('studioModeBanner');
        const studioStop = document.getElementById('studioModeStop');
        const studioStatusText = document.getElementById('studioStatusText');
        const aiInput = document.getElementById('aiInput');

        function startListening() {
            if (isListening) return;
            try {
                recognition.start();
                isListening = true;
                voiceBtn.classList.add('listening');
                voiceStatus.style.display = 'block';
                voiceStatusText.textContent = 'Listening...';
            } catch (e) {
                // Already started
            }
        }

        function stopListening() {
            isListening = false;
            studioShouldRestart = false;
            recognition.stop();
            voiceBtn.classList.remove('listening');
            voiceStatus.style.display = 'none';
        }

        function enableStudioMode() {
            studioMode = true;
            studioShouldRestart = true;
            studioToggle.classList.add('active');
            studioBanner.style.display = 'block';
            studioStatusText.textContent = 'Studio Mode Active — Listening...';
            startListening();
        }

        function disableStudioMode() {
            studioMode = false;
            studioShouldRestart = false;
            studioToggle.classList.remove('active');
            studioBanner.style.display = 'none';
            stopListening();
        }

        // Mic button: tap to start/stop
        voiceBtn.addEventListener('click', () => {
            if (studioMode) {
                disableStudioMode();
                return;
            }
            if (isListening) {
                stopListening();
            } else {
                startListening();
            }
        });

        // Studio mode toggle
        studioToggle.addEventListener('click', () => {
            if (studioMode) {
                disableStudioMode();
            } else {
                enableStudioMode();
            }
        });

        // Studio mode stop button
        studioStop.addEventListener('click', () => {
            disableStudioMode();
        });

        // Speech recognition events
        recognition.onresult = (event) => {
            let interim = '';
            let final = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    final += transcript;
                } else {
                    interim += transcript;
                }
            }

            // Show interim results in input
            if (interim) {
                aiInput.value = interim;
                voiceStatusText.textContent = 'Hearing you...';
                if (studioMode) studioStatusText.textContent = 'Studio Mode Active — Hearing you...';
            }

            // Process final result
            if (final) {
                const text = final.trim();
                if (text) {
                    // Check for voice commands
                    const lower = text.toLowerCase();

                    if (lower === 'stop listening' || lower === 'stop studio mode' || lower === 'exit studio mode') {
                        disableStudioMode();
                        return;
                    }

                    // Put text in input and send
                    aiInput.value = text;
                    voiceStatusText.textContent = 'Sending...';
                    if (studioMode) studioStatusText.textContent = 'Studio Mode Active — Sending...';
                    sendAIMessage();
                }
            }
        };

        recognition.onend = () => {
            isListening = false;
            voiceBtn.classList.remove('listening');

            if (studioMode && studioShouldRestart) {
                // In studio mode, wait for AI response then restart
                voiceStatusText.textContent = 'Waiting for response...';
                studioStatusText.textContent = 'Studio Mode Active — Waiting for response...';
                waitForResponseThenListen();
            } else {
                voiceStatus.style.display = 'none';
            }
        };

        recognition.onerror = (event) => {
            isListening = false;
            voiceBtn.classList.remove('listening');

            if (event.error === 'no-speech') {
                voiceStatusText.textContent = 'No speech detected. Try again.';
                if (studioMode && studioShouldRestart) {
                    // Retry in studio mode
                    setTimeout(() => { if (studioMode) startListening(); }, 1000);
                } else {
                    setTimeout(() => { voiceStatus.style.display = 'none'; }, 1500);
                }
            } else if (event.error === 'aborted') {
                // Intentional stop, do nothing
                voiceStatus.style.display = 'none';
            } else {
                voiceStatusText.textContent = 'Mic error: ' + event.error;
                setTimeout(() => {
                    voiceStatus.style.display = 'none';
                    if (studioMode) disableStudioMode();
                }, 2000);
            }
        };

        // In studio mode, wait for the AI typing indicator to disappear then restart listening
        function waitForResponseThenListen() {
            const chat = document.getElementById('aiChat');
            const check = () => {
                const typing = chat.querySelector('.ai-typing-msg');
                if (!typing) {
                    // Response is done, restart listening after a brief pause
                    if (studioMode && studioShouldRestart) {
                        studioStatusText.textContent = 'Studio Mode Active — Listening...';
                        setTimeout(() => {
                            if (studioMode && studioShouldRestart) startListening();
                        }, 800);
                    }
                } else {
                    setTimeout(check, 500);
                }
            };
            setTimeout(check, 500);
        }
    }

    // ===== INLINE ADVISOR (per piece section) =====
    document.addEventListener('click', async (e) => {
        const btn = e.target.closest('.ai-advisor-btn');
        if (!btn) return;

        const apiKey = localStorage.getItem(AI_KEY_STORAGE);
        if (!apiKey) {
            // Switch to AI view to show key setup
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            document.querySelector('[data-view="ai"]').classList.add('active');
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById('view-ai').classList.add('active');
            document.getElementById('aiApiSetup').classList.remove('hidden');
            return;
        }

        const section = btn.dataset.section;
        const piece = data.pieces.find(p => p.id === currentPieceId);
        if (!piece) return;

        btn.classList.add('loading');
        btn.textContent = 'Thinking...';

        const tipsContainer = btn.closest('.ai-advisor-inline').querySelector('.ai-advisor-tips');

        // Build section-specific prompt
        const sectionPrompts = {
            details: `Review this art piece and give 3-4 specific, actionable suggestions. Consider:
- Creative alternatives or enhancements to the concept
- Practical considerations for the medium and dimensions
- Cost-saving ideas or budget estimates
- Similar works by other artists as reference points
- Any potential challenges to flag early`,

            statement: `Review this wall statement for an art exhibition piece. Give 3-4 specific suggestions:
- Tone and clarity feedback (is it accessible but not dumbed down?)
- Pacing and rhythm of the language
- Whether it tells too much or leaves enough space for the viewer
- Specific line edits or alternatives for weak spots
- How it works as gallery wall text (length, readability while standing)

Wall statement text:
${piece.statement || '(No statement written yet — suggest how to start)'}`,

            howto: `Review the build plan for this art piece and give 3-4 specific suggestions:
- Easier or cheaper alternatives to any steps (especially AI tools, 3D printing, or modern shortcuts)
- Things that might go wrong and how to prevent them
- Which steps can be done simultaneously vs. sequentially
- Suggestions for prototyping or testing before committing to full-scale
- Any steps that are missing from the plan

Build plan:
${piece.howTo || '(No build plan yet)'}

Current checklist:
${(piece.checklist || []).map(t => `${t.done ? '[x]' : '[ ]'} ${t.text}`).join('\n') || '(Empty)'}`,

            materials: `Review the materials list for this art piece and give 3-4 specific suggestions:
- Better or more durable alternatives for any materials listed
- Where to source unusual materials (specific suppliers, websites, or local options)
- Cost estimates and budget-friendly alternatives
- Materials that might be missing from the list
- Any material compatibility issues or durability concerns for gallery exhibition

Materials list:
${(piece.materials || []).map(m => `- ${m.name} (qty: ${m.qty || 'TBD'}, status: ${m.status})`).join('\n') || '(No materials listed yet)'}`,

            team: `Review the team/hiring needs for this art piece and give 3-4 specific suggestions:
- Whether the right roles are identified or if any are missing
- Where to find these specialists (specific platforms, communities, schools)
- Which roles could be combined or handled by one person
- What to ask during interviews / what to look for in portfolios
- Approximate rate ranges for these roles
- Any roles that could be replaced by DIY or AI tools

Team needs:
${(piece.teamNeeds || []).map(t => `- ${t.role} (${t.status}): ${t.notes || ''}`).join('\n') || '(No team needs listed yet)'}`
        };

        const systemPrompt = `You are an expert art exhibition advisor embedded inside a project dashboard. You're helping a first-time artist named Alexi prepare for her exhibition "Read the Fine Print" — an immersive, multi-sensory exhibition about the invisible architecture shaping female identity. Target date: September 10, 2026. Budget: $40,000 total across ~10 pieces.

You are reviewing one specific section of one piece. Be direct, warm, and practical — like a brilliant friend who's curated dozens of shows. Give specific, actionable advice. When you know of AI tools, modern shortcuts, or creative workarounds that could save time or money, always mention them. When you suggest alternatives, explain WHY they might be better.

Format your response as 3-4 separate tips. Each tip should start with a bold label like **Material swap:** or **Pro tip:** or **Consider this:** or **Watch out:** or **AI shortcut:** or **Budget hack:** followed by the advice. Keep each tip to 2-3 sentences max.`;

        const userPrompt = `Piece: "${piece.title}" (${piece.type})
Description: ${piece.description || '(none)'}
Medium: ${piece.medium || '(none)'}
Stage: ${piece.stage}

${sectionPrompts[section]}`;

        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01',
                    'anthropic-dangerous-direct-browser-access': 'true'
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 800,
                    system: systemPrompt,
                    messages: [{ role: 'user', content: userPrompt }]
                })
            });

            const result = await response.json();

            if (result.content && result.content[0]) {
                const text = result.content[0].text;
                // Parse into individual tips (split on bold labels)
                const tips = text.split(/\n\n/).filter(t => t.trim());
                tipsContainer.innerHTML = tips.map(tip => {
                    let formatted = escapeHtml(tip);
                    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    formatted = formatted.replace(/\n/g, '<br>');
                    return `<div class="ai-tip">
                        <div class="tip-label"><span>&#9672;</span> Art Advisor <button class="tip-dismiss">&times;</button></div>
                        <p>${formatted}</p>
                    </div>`;
                }).join('');

                // Save tips to piece data
                if (!piece.advisorTips) piece.advisorTips = {};
                piece.advisorTips[section] = tips;
                saveData();
            } else if (result.error) {
                tipsContainer.innerHTML = `<div class="ai-tip"><div class="tip-label">Error</div><p>${escapeHtml(result.error.message || 'API error. Check your key.')}</p></div>`;
            }
        } catch (err) {
            tipsContainer.innerHTML = `<div class="ai-tip"><div class="tip-label">Error</div><p>Connection error. Check your internet and API key.</p></div>`;
        }

        btn.classList.remove('loading');
        btn.innerHTML = '<span class="ai-advisor-icon">&#9672;</span> Refresh Advisor Tips';

        // Dismiss buttons
        tipsContainer.querySelectorAll('.tip-dismiss').forEach(d => {
            d.addEventListener('click', () => d.closest('.ai-tip').remove());
        });
    });

    // Load saved tips when opening a piece
    function loadSavedTips(piece) {
        document.querySelectorAll('.ai-advisor-tips').forEach(container => container.innerHTML = '');
        if (!piece.advisorTips) return;
        Object.entries(piece.advisorTips).forEach(([section, tips]) => {
            const container = document.querySelector(`.ai-advisor-inline[data-section="${section}"] .ai-advisor-tips`);
            if (!container || !tips.length) return;
            container.innerHTML = tips.map(tip => {
                let formatted = escapeHtml(tip);
                formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                formatted = formatted.replace(/\n/g, '<br>');
                return `<div class="ai-tip">
                    <div class="tip-label"><span>&#9672;</span> Art Advisor <button class="tip-dismiss">&times;</button></div>
                    <p>${formatted}</p>
                </div>`;
            }).join('');
            container.querySelectorAll('.tip-dismiss').forEach(d => {
                d.addEventListener('click', () => d.closest('.ai-tip').remove());
            });
        });
    }

    // ===== RENDER STUDIO =====
    const RENDER_KEY_STORAGE = 'rtfp_render_key';

    function initRender() {
        const savedKey = localStorage.getItem(RENDER_KEY_STORAGE);
        if (savedKey) {
            document.getElementById('renderApiSetup').classList.add('hidden');
        }
        populateRenderPieceSelect();
        renderHistory();
    }

    function populateRenderPieceSelect() {
        const select = document.getElementById('renderPiece');
        if (!select) return;
        const firstOpt = select.options[0];
        select.innerHTML = '';
        select.appendChild(firstOpt);
        data.pieces.filter(p => (p.category || 'yes') === 'yes').sort((a,b) => (a.order||99) - (b.order||99)).forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `#${p.order || '?'} ${p.title || 'Untitled'}`;
            select.appendChild(opt);
        });
    }

    document.getElementById('renderSaveKey')?.addEventListener('click', () => {
        const key = document.getElementById('renderApiKey').value.trim();
        if (!key) return;
        localStorage.setItem(RENDER_KEY_STORAGE, key);
        document.getElementById('renderApiSetup').classList.add('hidden');
    });

    // Reference image upload for Render Studio
    let renderRefImages = [];

    const renderUploadZone = document.getElementById('renderUploadZone');
    const renderImageUpload = document.getElementById('renderImageUpload');

    renderUploadZone?.addEventListener('click', () => renderImageUpload.click());
    renderUploadZone?.addEventListener('dragover', (e) => { e.preventDefault(); renderUploadZone.classList.add('dragover'); });
    renderUploadZone?.addEventListener('dragleave', () => renderUploadZone.classList.remove('dragover'));
    renderUploadZone?.addEventListener('drop', (e) => {
        e.preventDefault();
        renderUploadZone.classList.remove('dragover');
        handleRenderRefFiles(e.dataTransfer.files);
    });
    renderImageUpload?.addEventListener('change', () => handleRenderRefFiles(renderImageUpload.files));

    function handleRenderRefFiles(files) {
        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const maxW = 512;
                    const scale = Math.min(1, maxW / img.width);
                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;
                    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL('image/png', 0.8);
                    renderRefImages.push(dataUrl);
                    renderRefDisplay();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    function renderRefDisplay() {
        const container = document.getElementById('renderRefImages');
        if (!container) return;
        container.innerHTML = renderRefImages.map((img, i) =>
            `<div class="render-ref-thumb">
                <img src="${img}" alt="Ref ${i+1}">
                <button class="ref-remove" data-index="${i}">&times;</button>
            </div>`
        ).join('');
        container.querySelectorAll('.ref-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                renderRefImages.splice(parseInt(btn.dataset.index), 1);
                renderRefDisplay();
            });
        });
    }

    document.getElementById('generateRenderBtn')?.addEventListener('click', async () => {
        const apiKey = localStorage.getItem(RENDER_KEY_STORAGE);
        if (!apiKey) {
            document.getElementById('renderApiSetup').classList.remove('hidden');
            return;
        }

        const promptText = document.getElementById('renderPrompt').value.trim();
        if (!promptText) return;

        const style = document.getElementById('renderStyle').value;
        const size = document.getElementById('renderSize').value;
        const pieceId = document.getElementById('renderPiece').value;
        const piece = pieceId ? data.pieces.find(p => p.id === pieceId) : null;

        const styleMap = {
            'photorealistic': 'Photorealistic, high detail, professional photography lighting',
            'gallery-mock': 'Gallery installation mockup, white cube gallery space, professional art exhibition, museum quality lighting',
            'artistic': 'Artistic, painterly quality, fine art aesthetic',
            'sculptural': 'Sculptural render, 3D visualization, studio lighting on neutral background',
            'cinematic': 'Cinematic still, dramatic lighting, film quality, shallow depth of field',
            'architectural': 'Architectural visualization, clean rendering, accurate scale and proportions',
            'sketch': 'Pencil sketch, line drawing, conceptual art sketch, on white paper'
        };

        const fullPrompt = `${promptText}. ${styleMap[style] || ''}. Contemporary art exhibition context. No text or watermarks.`;

        document.getElementById('renderLoading').style.display = 'block';
        document.getElementById('renderResult').innerHTML = '';
        document.getElementById('generateRenderBtn').disabled = true;

        try {
            let response;

            if (renderRefImages.length > 0) {
                // Use edit endpoint with reference images
                const formData = new FormData();
                formData.append('model', 'gpt-image-1');
                formData.append('prompt', fullPrompt);
                formData.append('n', '1');
                formData.append('size', size);
                formData.append('quality', 'high');

                // Convert each ref image to a blob and attach
                for (let i = 0; i < renderRefImages.length; i++) {
                    const refData = renderRefImages[i];
                    const byteString = atob(refData.split(',')[1]);
                    const mimeType = refData.split(',')[0].split(':')[1].split(';')[0];
                    const ab = new ArrayBuffer(byteString.length);
                    const ia = new Uint8Array(ab);
                    for (let j = 0; j < byteString.length; j++) ia[j] = byteString.charCodeAt(j);
                    const blob = new Blob([ab], { type: mimeType });
                    formData.append('image[]', blob, `ref-${i}.png`);
                }

                response = await fetch('https://api.openai.com/v1/images/edits', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${apiKey}` },
                    body: formData
                });
            } else {
                // Standard generation without reference images
                response = await fetch('https://api.openai.com/v1/images/generations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-image-1',
                        prompt: fullPrompt,
                        n: 1,
                        size: size,
                        quality: 'high'
                    })
                });
            }

            const result = await response.json();
            document.getElementById('renderLoading').style.display = 'none';

            if (result.data && result.data[0]) {
                const imageData = result.data[0].b64_json
                    ? `data:image/png;base64,${result.data[0].b64_json}`
                    : result.data[0].url;

                // If we got a URL, we need to display it
                const imgSrc = imageData;

                document.getElementById('renderResult').innerHTML = `
                    <div class="render-result-card">
                        <img src="${imgSrc}" alt="AI Render">
                        <div class="render-result-actions">
                            <button class="btn-primary render-save-to-piece" data-piece="${pieceId}">Save to Piece</button>
                            <button class="btn-ghost render-download">Download</button>
                            <button class="btn-ghost render-save-history">Save to History</button>
                        </div>
                        <div class="render-result-prompt">${escapeHtml(promptText)}</div>
                    </div>
                `;

                // Save to piece
                document.querySelector('.render-save-to-piece')?.addEventListener('click', () => {
                    const targetId = document.querySelector('.render-save-to-piece').dataset.piece;
                    const target = targetId ? data.pieces.find(p => p.id === targetId) : null;
                    if (target) {
                        if (!target.images) target.images = [];
                        target.images.push(imgSrc);
                        saveData();
                        addActivity(`Saved render to "${target.title}"`);
                        document.querySelector('.render-save-to-piece').textContent = 'Saved!';
                        document.querySelector('.render-save-to-piece').disabled = true;
                    } else {
                        alert('Select a piece from the dropdown first');
                    }
                });

                // Download
                document.querySelector('.render-download')?.addEventListener('click', () => {
                    const a = document.createElement('a');
                    a.href = imgSrc;
                    a.download = `rtfp-render-${Date.now()}.png`;
                    a.click();
                });

                // Save to history
                document.querySelector('.render-save-history')?.addEventListener('click', () => {
                    if (!data.renderHistory) data.renderHistory = [];
                    data.renderHistory.unshift({
                        image: imgSrc,
                        prompt: promptText,
                        style,
                        pieceId,
                        date: new Date().toISOString()
                    });
                    if (data.renderHistory.length > 20) data.renderHistory = data.renderHistory.slice(0, 20);
                    saveData();
                    renderHistory();
                    document.querySelector('.render-save-history').textContent = 'Saved!';
                    document.querySelector('.render-save-history').disabled = true;
                });

            } else if (result.error) {
                document.getElementById('renderResult').innerHTML = `<div class="ai-tip"><div class="tip-label">Error</div><p>${escapeHtml(result.error.message || 'API error')}</p></div>`;
            }
        } catch(err) {
            document.getElementById('renderLoading').style.display = 'none';
            document.getElementById('renderResult').innerHTML = `<div class="ai-tip"><div class="tip-label">Error</div><p>Connection error. Check your internet and API key.</p></div>`;
        }

        document.getElementById('generateRenderBtn').disabled = false;
    });

    function renderHistory() {
        const grid = document.getElementById('renderHistoryGrid');
        if (!grid) return;
        const history = data.renderHistory || [];
        if (history.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-dim);font-size:0.8rem">Your generated renders will appear here</p>';
            return;
        }
        grid.innerHTML = history.map((item, i) =>
            `<div class="render-history-item" data-index="${i}" title="${escapeHtml(item.prompt)}">
                <img src="${item.image}" alt="Render">
            </div>`
        ).join('');

        grid.querySelectorAll('.render-history-item').forEach(item => {
            item.addEventListener('click', () => {
                const h = history[parseInt(item.dataset.index)];
                document.getElementById('renderResult').innerHTML = `
                    <div class="render-result-card">
                        <img src="${h.image}" alt="AI Render">
                        <div class="render-result-prompt">${escapeHtml(h.prompt)}</div>
                    </div>
                `;
            });
        });
    }

    initRender();

    initAI();

    // ===== INIT =====
    renderDashboard();

})();
