// One-time script to update pieces with new walkthrough order and categories
(function() {
    const STORAGE_KEY = 'rtfp_exhibition_data';
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

    // Only run once — check if Portal to God already exists
    if (data.pieces && data.pieces.find(p => p.id === 'portal-to-god')) {
        return; // Already updated
    }

    // New pieces from the refined walkthrough (YES to show)
    const yesPieces = [
        {
            id: 'portal-to-god',
            title: 'PORTAL TO GOD',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 1,
            description: 'Suspended overhead, a constellation of vulvas—rendered in black and white on translucent silk—forms a canopy the viewer must look up into. The orientation is deliberate. Reverence, long stripped from the female body, is reintroduced through posture alone.',
            dimensions: 'Overhead canopy installation',
            medium: 'Translucent silk prints, overhead lighting, points of light, audio composition',
            cost: 0,
            deadline: '',
            notes: 'Render still needs a LOT of work!\n\nTone: Reverent. Disorienting. Primordial.\n\nWhat it communicates: Before terms, before obedience, before conditioning — there was origin. The female body as sacred threshold, not commodity.\n\nWhat happens in the body: Neck tilts upward. Pace slows. Breath deepens slightly. The viewer feels small under something ancient.\n\nEmotional residue: A quiet reminder: something sacred has been reframed as shame. This sets the baseline. It destabilizes cultural hierarchy before critique begins.',
            statement: 'Suspended overhead, a constellation of vulvas—rendered in black and white on translucent silk—forms a canopy the viewer must look up into. The orientation is deliberate. Reverence, long stripped from the female body, is reintroduced through posture alone.\n\nAcross cultures and cosmologies, the vulva has functioned as both threshold and taboo: the portal through which life enters the world, and the site most aggressively shamed, regulated, and erased. In Portal to God, this contradiction is neither softened nor sensationalized. Instead, the work restores the vulva to its original position as origin—of bodies, of breath, of lineage itself.\n\nSubtle points of light hover above the silk, evoking the cosmic unknown. Below, an audio composition carries the voices of women speaking about their relationship to this part of their bodies—stories of disconnection, shame, neutrality, longing, and reclamation. The testimonies are not uniform. They are unresolved. Together, they trace the cultural rupture between creation and contempt.\n\nBy situating the viewer between cosmos and body, Portal to God collapses the false divide between the sacred and the physical. What has been rendered obscene is revealed as elemental. What has been hidden is restored to view.\n\nThis work does not ask for transgression.\nIt asks for remembrance.\nOf where life begins.\nAnd what has been lost when reverence was removed.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source or create high-resolution vulva imagery in black and white. Print images onto translucent silk panels. Design overhead hanging system/canopy framework. Determine ceiling rigging requirements. Install rigging and hang silk panels at various heights. Install subtle points of light above the silk (LED star field or fiber optics). Record audio testimonies from women about their relationship to their bodies. Edit audio into a layered composition. Install audio playback system with speakers below the canopy. Design ambient lighting — dim, upward-looking, cosmic feel.',
            checklist: [
                { text: 'Create high-resolution vulva imagery in black and white', done: false },
                { text: 'Source translucent silk material for printing', done: false },
                { text: 'Print images onto silk panels', done: false },
                { text: 'Design overhead canopy framework and rigging', done: false },
                { text: 'Install ceiling rigging system', done: false },
                { text: 'Hang silk panels at various heights', done: false },
                { text: 'Install points of light above silk (LED/fiber optics)', done: false },
                { text: 'Record audio testimonies from women', done: false },
                { text: 'Edit audio into layered composition', done: false },
                { text: 'Install audio playback system', done: false },
                { text: 'Design and install ambient lighting', done: false },
                { text: 'Rework AI render — needs significant improvement', done: false }
            ],
            materials: [
                { name: 'Translucent silk panels', qty: 'Multiple (TBD based on canopy size)', cost: 0, status: 'needed' },
                { name: 'Silk printing service', qty: '1 run', cost: 0, status: 'needed' },
                { name: 'Ceiling rigging hardware', qty: '1 set', cost: 0, status: 'needed' },
                { name: 'LED star field or fiber optic lights', qty: '1 system', cost: 0, status: 'needed' },
                { name: 'Audio recording equipment', qty: '1 (rental)', cost: 0, status: 'needed' },
                { name: 'Speakers', qty: '2-4', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Photographer / Image Creator', notes: 'High-res B&W vulva imagery — artistic, reverent', status: 'needed' },
                { role: 'Silk printer / Textile specialist', notes: 'Print onto translucent silk', status: 'needed' },
                { role: 'Rigger', notes: 'Overhead canopy installation', status: 'needed' },
                { role: 'Audio producer', notes: 'Record and edit women\'s testimonies', status: 'needed' }
            ]
        },
        {
            id: 'unsaid',
            title: 'UNSAID',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 2,
            description: 'This installation gathers statements that were never meant to be spoken publicly. Each tissue holds a fragment of lived experience—anger withheld, truth softened, desire suppressed, exhaustion unadmitted. The words are partially visible but never fully exposed. The gradient moves from deep plum at the top to white at the base.',
            dimensions: 'Wall-scale installation',
            medium: 'Tissues with handwritten text, gradient color (plum to white), participatory element',
            cost: 0,
            deadline: '',
            notes: 'Tone: Dense. Intimate. Accumulative.\n\nWhat it communicates: The fine print lives inside the body as withheld truth. Silence is not emptiness — it is pressure.\n\nWhat happens in the body: Eyes scan. Reading fragments. Frustration from not seeing full confessions. The chest tightens slightly. Recognition emerges.\n\nEmotional residue: "I\'ve felt this. I\'ve said none of this." The participant begins to feel collective interiority.\n\nVisitors are invited to contribute their own unsaid at the base of the work. The gradient will continue to shift.',
            statement: 'This installation gathers statements that were never meant to be spoken publicly. They were whispered, swallowed, deferred, or carried alone.\n\nEach tissue holds a fragment of lived experience—anger withheld, truth softened, desire suppressed, exhaustion unadmitted. The words are partially visible but never fully exposed. What is unsaid rarely disappears; it accumulates beneath the surface.\n\nThe gradient moves from deep plum at the top to white at the base. Color here is not decorative. It marks saturation. At the top, the density of feeling is concentrated—shame, grief, resentment, rage. As the eye moves downward, the color fades. Silence bleaches intensity. What begins as vivid becomes diluted through repetition, accommodation, and restraint.\n\nThe more often something is held back, the more neutral it appears. Over time, suppression becomes indistinguishable from composure.\n\nThe tissues billow outward despite containment. Even when language is withheld, its energy persists. The body carries what the mouth does not release.\n\nVisitors are invited to contribute their own unsaid at the base of the work. The gradient will continue to shift.\n\nWhat would change if what is held inside were allowed to remain visible?\nAnd what has been lost in the long rehearsal of keeping it together?',
            statementStatus: 'draft',
            images: [],
            howTo: 'Collect unsaid statements from women — private submissions, interviews, workshops. Write fragments onto tissues by hand or develop a printing method. Design the gradient color system (deep plum to white). Create mounting surface/wall structure. Arrange tissues from dense plum at top to white at base. Design system for tissues to billow slightly (subtle air movement). Create participatory station at base for visitors to add their own. Design lighting to reveal partial text without full exposure. Source pens/tissues for visitor participation.',
            checklist: [
                { text: 'Collect unsaid statements from women (submissions, interviews)', done: false },
                { text: 'Develop method for writing/printing on tissues', done: false },
                { text: 'Design gradient color system (plum to white)', done: false },
                { text: 'Create mounting surface/wall structure', done: false },
                { text: 'Arrange tissues in gradient formation', done: false },
                { text: 'Design subtle air movement for billowing effect', done: false },
                { text: 'Create participatory station at base', done: false },
                { text: 'Design lighting for partial text visibility', done: false },
                { text: 'Source materials for visitor participation', done: false }
            ],
            materials: [
                { name: 'Tissues (bulk — various colors plum to white)', qty: 'Hundreds', cost: 0, status: 'needed' },
                { name: 'Fine-tip pens / printing supplies', qty: '1 set', cost: 0, status: 'needed' },
                { name: 'Mounting wall/surface', qty: '1', cost: 0, status: 'needed' },
                { name: 'Small fan or air system for billowing', qty: '1', cost: 0, status: 'needed' },
                { name: 'Participation station supplies (pens, blank tissues)', qty: '1 set', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        },
        {
            id: 'good-woman',
            title: 'GOOD WOMAN',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 3,
            description: 'When a visitor steps into an illuminated circle, a chorus of familiar accusations emerges—casual, conversational, almost intimate. Projected onto the body: lazy, selfish, ungrateful, arrogant, indulgent, difficult. Beneath them, momentarily visible: rest, security, wanting, talent, pleasure, boundaries.',
            dimensions: 'Interactive floor installation with projection',
            medium: 'Spotlight/illuminated circle, projection, spatial audio, motion detection',
            cost: 0,
            deadline: '',
            notes: 'Tone: Clinical. Exposing. Uncomfortable.\n\nWhat it communicates: In order to avoid judgment, women trade away capacities. The sins are not acts — they are absences.\n\nWhat happens in the body: If they step into the spotlight: heart rate shifts. Self-consciousness spikes. They feel evaluation. If they watch someone else: they recognize the anticipation of accusation.\n\nThe words land: Lazy. Selfish. Ungrateful. Difficult.\nThen the flicker beneath: Rest. Security. Wanting. Boundaries.\n\nEmotional residue: "I perform to avoid this." This is the first real rupture.',
            statement: 'This installation stages the conditions under which goodness is performed.\n\nWhen a visitor steps into the illuminated circle, the space responds. A chorus of familiar accusations emerges—casual, conversational, almost intimate. The language is not overtly violent. It is corrective. Evaluative. Ordinary. Words that many women have heard, anticipated, or internalized long before speaking.\n\nProjected onto the body, these accusations appear plainly: lazy, selfish, ungrateful, arrogant, indulgent, difficult. Beneath them, momentarily visible and easily eclipsed, are the capacities they suppress: rest, security, wanting, talent, pleasure, boundaries.\n\nThe work does not depict rebellion. It reveals anticipation. The performance of agreeableness is not instinctual; it is strategic. The smile, the softening, the restraint are rehearsed responses to the threat of judgment.\n\nGOOD WOMAN makes the cost of that rehearsal tangible. It asks what parts of the self are forfeited in exchange for safety—and how deeply those calculations become embedded in the body.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Design the illuminated circle (spotlight or floor-projected ring). Set up motion detection system to trigger when someone steps in. Record accusation audio — casual, conversational female and male voices. Design projection system to project words onto the person\'s body. Program the word sequence: accusations first, then brief flickers of suppressed capacities beneath. Set up spatial audio system so sound surrounds the person in the circle. Design the projection mapping to track the body. Test with multiple body types and heights. Create ambient lighting for the rest of the space (dark, clinical).',
            checklist: [
                { text: 'Design illuminated circle (spotlight or projected ring)', done: false },
                { text: 'Set up motion detection / trigger system', done: false },
                { text: 'Record accusation audio (casual, conversational voices)', done: false },
                { text: 'Design body projection system', done: false },
                { text: 'Program word sequence (accusations + suppressed capacities)', done: false },
                { text: 'Set up spatial audio system', done: false },
                { text: 'Design projection mapping for body tracking', done: false },
                { text: 'Test with multiple body types', done: false },
                { text: 'Design ambient lighting (dark, clinical)', done: false }
            ],
            materials: [
                { name: 'Projector (high-lumen, short throw)', qty: '1-2', cost: 0, status: 'needed' },
                { name: 'Motion sensor / camera for detection', qty: '1', cost: 0, status: 'needed' },
                { name: 'Spatial audio speakers', qty: '4-6', cost: 0, status: 'needed' },
                { name: 'Spotlight for circle', qty: '1', cost: 0, status: 'needed' },
                { name: 'Computer for projection mapping + audio', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Interactive AV / Projection Mapping Specialist', notes: 'Body tracking, triggered projection, spatial audio integration', status: 'needed' },
                { role: 'Sound designer', notes: 'Record and spatialize accusation voices', status: 'needed' },
                { role: 'Programmer', notes: 'Motion detection trigger + projection sync', status: 'needed' }
            ]
        },
        {
            id: 'the-resource',
            title: 'THE RESOURCE',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 4,
            description: 'In many systems, women function as renewable inputs—sources of labor, care, time, sexuality, and emotional regulation expected to replenish without depletion. This installation reframes that expectation as infrastructure.',
            dimensions: 'Room-sized immersive installation',
            medium: 'Cast hands (plaster/resin), immersive enclosure, structural/economic framing',
            cost: 0,
            deadline: '',
            notes: 'Tone: Structural. Economic. Unsettling.\n\nWhat it communicates: Women are treated as renewable inputs — labor, care, sexuality, time, emotional regulation. Not attacked — extracted.\n\nWhat happens in the body: A subtle heaviness. A realization of being used without consent language.\n\nThe participant feels: "Oh. That\'s not personal. That\'s systemic."\n\nEmotional residue: Awareness replaces confusion.',
            statement: 'In many systems, women function as renewable inputs—sources of labor, care, time, sexuality, and emotional regulation expected to replenish without depletion.\n\nThis installation reframes that expectation as infrastructure. The objects presented here are not symbolic portraits of harm, but structural markers of utility. What appears personal is often systemic. What feels individual is frequently designed.\n\nExtraction does not always announce itself. It is normalized through repetition. The body adapts. The demand continues.\n\nThe question is not whether women are strong enough to endure this positioning. The question is why endurance is required.\n\nWhen a system treats its people as resource, what is sustained—and what is consumed?',
            statementStatus: 'draft',
            images: [],
            howTo: 'Research hand-casting techniques and materials (plaster, resin, silicone molds). Find volunteers for hand impressions — adults and children of various ages. Create silicone molds of hands in reaching/grasping positions. Cast hands in bulk — will need hundreds. Design the enclosure/room structure. Determine mounting system for hands on walls/ceiling. Build enclosure framework. Install hands pressing inward from all surfaces. Design and install lighting. Add any soundscape elements.',
            checklist: [
                { text: 'Research hand-casting techniques and materials', done: false },
                { text: 'Find volunteers for hand impressions — adults and children', done: false },
                { text: 'Create silicone molds of hands in reaching/grasping positions', done: false },
                { text: 'Cast hands in bulk — will need hundreds', done: false },
                { text: 'Design the enclosure/room structure and dimensions', done: false },
                { text: 'Determine mounting system for hands on walls/ceiling', done: false },
                { text: 'Build enclosure framework', done: false },
                { text: 'Install hands pressing inward from all surfaces', done: false },
                { text: 'Design and install lighting', done: false },
                { text: 'Consider soundscape elements', done: false }
            ],
            materials: [
                { name: 'Silicone molding compound', qty: 'Large qty', cost: 0, status: 'needed' },
                { name: 'Casting resin or plaster', qty: 'Bulk', cost: 0, status: 'needed' },
                { name: 'Enclosure framing materials', qty: 'TBD', cost: 0, status: 'needed' },
                { name: 'Mounting hardware', qty: 'Bulk', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Mold maker / Casting specialist', notes: 'Experienced with body casting, silicone molds, resin work', status: 'needed' },
                { role: 'Carpenter / Set builder', notes: 'For enclosure construction', status: 'needed' }
            ]
        },
        {
            id: 'the-object',
            title: 'THE OBJECT',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 5,
            description: 'Surrounded by faces that look without expression, the viewer moves through a field of attention. The gaze is not overtly violent. It is ambient, evaluative, constant. The opposing wall presents women in ordinary motion—walking, speaking, existing without performance.',
            dimensions: 'Room-sized floor installation + wall screen',
            medium: 'Mannequin faces, video projection/screen, soundscape',
            cost: 0,
            deadline: '',
            notes: 'Tone: Surveillance. Exposure. Hyper-awareness.\n\nWhat it communicates: To be seen is not the same as to be valued. Objectification trains internal self-monitoring.\n\nWhat happens in the body: Posture shifts. Visitors become aware of how they stand. They adjust themselves unconsciously. They feel watched.\n\nEmotional residue: "I am aware of my body right now." The self-surveillance becomes conscious.\n\nEvolution of SEA OF ATTENTION — now focused on objectification and self-monitoring rather than just the male gaze.',
            statement: 'This installation stages the condition of being observed.\n\nSurrounded by faces that look without expression, the viewer moves through a field of attention. The gaze here is not overtly violent. It is ambient, evaluative, constant.\n\nObjectification does not always require aggression. It requires reduction. When the body is treated as surface, it becomes subject to assessment—appearance, tone, posture, demeanor. Under sustained attention, self-monitoring begins.\n\nThe opposing wall presents women in ordinary motion—walking, speaking, existing without performance. The contrast is quiet but destabilizing. What is unremarkable becomes scrutinized.\n\nThe Object asks what it means to live under view. How posture shifts. How awareness narrows. How identity adapts.\n\nThe gaze does not have to touch to leave an imprint.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source hundreds of mannequin heads/faces (wholesale suppliers, mannequin liquidators). Design the floor layout and pathway through the faces. Build or source floor platform/base for arranging faces. Arrange faces in pool formation with walking pathway. Mount screen or projection surface on opposing wall. Film content of women in ordinary motion — walking, speaking, existing. Edit video loop. Install video playback system. Design and install soundscape. Install lighting — carefully controlled.',
            checklist: [
                { text: 'Source hundreds of mannequin heads/faces', done: false },
                { text: 'Design the floor layout and pathway', done: false },
                { text: 'Build floor platform/base for arranging faces', done: false },
                { text: 'Film content of women in ordinary motion', done: false },
                { text: 'Edit video loop for projection/screen', done: false },
                { text: 'Install video playback system and screen', done: false },
                { text: 'Design and produce soundscape', done: false },
                { text: 'Install lighting', done: false },
                { text: 'Test visitor walkthrough and sightlines', done: false }
            ],
            materials: [
                { name: 'Mannequin heads/faces', qty: '200-300', cost: 0, status: 'needed' },
                { name: 'Large screen or projection setup', qty: '1', cost: 0, status: 'needed' },
                { name: 'Audio system for soundscape', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Videographer / Director', notes: 'Film women in ordinary everyday moments', status: 'needed' },
                { role: 'Sound designer', notes: 'Create ambient soundscape', status: 'needed' },
                { role: 'AV / Projection technician', notes: 'Video playback and screen installation', status: 'needed' }
            ]
        },
        {
            id: 'for-your-comfort',
            title: 'FOR YOUR COMFORT',
            type: 'film',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 6,
            description: 'A woman stands before the camera, smiling. Steady, composed, controlled. Beneath the smile, other states surface briefly—anger, grief, boredom, disbelief, irritation, defiance—before being pressed back down. The shifts are subtle. The containment is practiced.',
            dimensions: 'Screen or projection — intimate scale',
            medium: 'Film/video, close-up portraiture',
            cost: 0,
            deadline: '',
            notes: 'Tone: Intimate. Surgical. Painfully familiar.\n\nWhat it communicates: The smile is strategy. Emotional suppression is relational maintenance.\n\nWhat happens in the body: Women recognize the held face. Men recognize the expectation. The tension in the jaw is felt. The internal flashes behind the smile land hard.\n\nEmotional residue: "The cost of your comfort is my expression." This is deeply personal.',
            statement: 'A woman stands before the camera, smiling. The expression is steady, composed, and controlled. It appears effortless. It appears pleasant.\n\nBeneath the smile, other states surface briefly—anger, grief, boredom, disbelief, irritation, defiance—before being pressed back down. The shifts are subtle. The containment is practiced.\n\nThis work examines the performance of palatability. For many women, the smile is not simply warmth; it is strategy. It anticipates correction—too intense, too emotional, too direct, too much—and softens in advance. Expression is edited before it is fully formed. Tone is managed. Discomfort is absorbed rather than transmitted.\n\nThe face becomes a site of negotiation. What is felt internally is filtered for external safety. Disagreement becomes neutrality. Frustration becomes composure. Disgust becomes silence. The goal is not dishonesty, but stability.\n\nFor Your Comfort reveals the quiet labor of making others feel at ease, even when ease is not shared. The question is not whether the smile is sincere. It is what has been deferred in order to sustain it.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Cast the lead performer — needs extraordinary subtlety in facial expression. Direct the performance: sustained smile with micro-expressions breaking through (anger, grief, boredom, defiance). Film in extreme close-up, high resolution, controlled studio lighting. Shoot multiple takes to capture the perfect balance of containment vs. leakage. Edit into a seamless loop that builds tension. Color grade for intimacy — skin tones, clinical warmth. Determine display format (screen vs. projection, size, orientation). Install in intimate viewing space.',
            checklist: [
                { text: 'Cast lead performer with exceptional facial subtlety', done: false },
                { text: 'Develop direction notes for the performance', done: false },
                { text: 'Set up studio with close-up lighting', done: false },
                { text: 'Film multiple takes of sustained smile with micro-breaks', done: false },
                { text: 'Edit into seamless loop', done: false },
                { text: 'Color grade for intimacy', done: false },
                { text: 'Determine display format and size', done: false },
                { text: 'Install in intimate viewing space', done: false }
            ],
            materials: [
                { name: 'Camera (4K+ cinema camera)', qty: '1 (rental)', cost: 0, status: 'needed' },
                { name: 'Studio lighting (portrait/beauty setup)', qty: '1 set', cost: 0, status: 'needed' },
                { name: 'Display screen or projector', qty: '1', cost: 0, status: 'needed' },
                { name: 'Media player', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Performer / Actor', notes: 'Exceptional facial control — subtle micro-expressions', status: 'needed' },
                { role: 'Cinematographer', notes: 'Extreme close-up portrait work', status: 'needed' },
                { role: 'Director', notes: 'Guide the performance of containment', status: 'needed' }
            ]
        },
        {
            id: 'desire',
            title: 'DESIRE',
            type: 'sculpture',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 7,
            description: 'Composed from the artist\'s own discarded syringes, DESIRE confronts the economy of wanting that structures women\'s relationship to the body across midlife and beyond. Once instruments of intervention, the syringes are rendered in gold, transformed from utilitarian objects into reliquary material.',
            dimensions: '',
            medium: 'Discarded syringes, gold paint/gilding',
            cost: 0,
            deadline: '',
            notes: 'Tone: Self-implication. Honest. Raw.\n\nWhat it communicates: Even resistance can become negotiation. The desire to remain vital, relevant, alive — at what cost? The syringes are not accusation. They are confession.\n\nWhat happens in the body: Recognition shifts inward. This is not just what was done to me. This is what I agreed to.\n\nEmotional residue: A sober awareness of personal bargains.',
            statement: 'Composed from the artist\'s own discarded syringes, DESIRE confronts the economy of wanting that structures women\'s relationship to the body across midlife and beyond. Once instruments of intervention, the syringes are rendered in gold, transformed from utilitarian objects into reliquary material. What was private becomes public; what was clinical becomes symbolic.\n\nRather than staging a critique of cosmetic culture, the work resists moral clarity. It refuses the binary of vanity versus empowerment and instead locates desire itself as the operative force: the longing for vitality, visibility, sensation, continuity. Desire here is not superficial but structural, powerful enough to cross the boundary of the skin.\n\nBy spelling the word itself in the tools that once pierced the body, the artist implicates both self and viewer in the same inquiry. What does it cost to remain energized, perceptible, alive? What bargains are entered—quietly, incrementally—in order not to disappear?\n\nDESIRE does not accuse. It does not absolve. It holds the question open, insisting that desire is never neutral, and never external to the one who names it.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Collect and sanitize all discarded syringes. Design the layout/typography for spelling "DESIRE" with the syringes. Select mounting surface/base. Gold-leaf or gold-paint each syringe individually. Create mounting framework or backing. Arrange and permanently affix syringes in letter formations. Install lighting to catch the gold and create shadow play. Frame or mount final piece.',
            checklist: [
                { text: 'Collect and sanitize all discarded syringes', done: false },
                { text: 'Design the layout/typography for spelling "DESIRE"', done: false },
                { text: 'Select mounting surface/base material', done: false },
                { text: 'Gold-leaf or gold-paint each syringe individually', done: false },
                { text: 'Create mounting framework or backing', done: false },
                { text: 'Arrange and permanently affix syringes in letter formations', done: false },
                { text: 'Install lighting to catch the gold and create shadow play', done: false },
                { text: 'Frame or mount final piece', done: false }
            ],
            materials: [
                { name: 'Discarded syringes', qty: 'Collection needed', cost: 0, status: 'needed' },
                { name: 'Gold leaf or gold paint', qty: 'TBD based on syringe count', cost: 0, status: 'needed' },
                { name: 'Mounting surface/backing', qty: '1', cost: 0, status: 'needed' },
                { name: 'Adhesive for mounting', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        },
        {
            id: 'drowning',
            title: 'DROWNING',
            type: 'film',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 8,
            description: 'Projected at monumental scale, DROWNING immerses the viewer in a slow-motion cycle of submersion. Women appear suspended underwater, their bodies drifting, tumbling, and reaching. Objects move alongside them—domestic items, tools of labor, markers of responsibility.',
            dimensions: 'Monumental scale projection',
            medium: 'Film projection, immersive sound',
            cost: 0,
            deadline: '',
            notes: 'Tone: Exhaustion. Accumulation. Slow collapse.\n\nWhat it communicates: When terms are not renegotiated, the body pays. The cost is not dramatic — it is sustained.\n\nWhat happens in the body: Breathing slows. Shoulders drop. A sense of weight. The viewer feels fatigue, not tragedy.\n\nEmotional residue: "This is what it feels like when nothing changes."',
            statement: 'Projected at monumental scale, DROWNING immerses the viewer in a slow-motion cycle of submersion. Women appear suspended underwater, their bodies drifting, tumbling, and reaching. Objects move alongside them—domestic items, tools of labor, markers of responsibility—never fully released, never fully grasped.\n\nThe imagery resists narrative resolution. There is no singular crisis, no dramatic moment of collapse. Instead, the work renders the cumulative experience of being held under by ordinary demands. The water does not rush. It persists.\n\nSound fills the space with muffled voices, breaths, and fragments of speech—phrases that never fully surface. The room darkens. Time stretches. What might otherwise be named as stress, overwhelm, or exhaustion is given bodily form.\n\nDROWNING does not depict failure. It depicts endurance under conditions that allow no pause, no release, no clear point of exit. The figures are not overtaken by catastrophe, but by accumulation.\n\nThis is not the spectacle of collapse.\nIt is the sustained effort of staying afloat when relief never arrives.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Find underwater filming location (pool or tank large enough for talent and props). Hire underwater cinematographer with slow-motion capability. Cast women performers comfortable with underwater work. Source all symbolic props (household items, professional items, beauty items, money). Film multiple takes of women submerged with props floating/churning around them. Shoot in slow motion for dreamlike quality. Edit footage into seamless looping film. Design and produce soundscape — muffled voices, whispered phrases, underwater ambience. Source or rent monumental-scale projection system. Design dark room environment for screening. Install audio system for immersive surround sound.',
            checklist: [
                { text: 'Find underwater filming location (pool or tank)', done: false },
                { text: 'Hire underwater cinematographer', done: false },
                { text: 'Cast women performers for underwater filming', done: false },
                { text: 'Source all symbolic props for underwater scenes', done: false },
                { text: 'Film slow-motion underwater sequences', done: false },
                { text: 'Edit footage into seamless looping film', done: false },
                { text: 'Design and produce immersive soundscape', done: false },
                { text: 'Source monumental-scale projection system', done: false },
                { text: 'Design and build dark room environment', done: false },
                { text: 'Install audio system for surround sound', done: false },
                { text: 'Test projection and sound at full scale', done: false }
            ],
            materials: [
                { name: 'Underwater camera / slow-mo rig', qty: '1 (rental)', cost: 0, status: 'needed' },
                { name: 'Symbolic props (household, professional, beauty)', qty: 'Multiple sets', cost: 0, status: 'needed' },
                { name: 'Projection system (high-lumen)', qty: '1', cost: 0, status: 'needed' },
                { name: 'Surround sound system', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Underwater cinematographer', notes: 'Experienced with underwater slow-motion filming', status: 'needed' },
                { role: 'Film editor', notes: 'Edit and loop underwater footage', status: 'needed' },
                { role: 'Sound designer', notes: 'Create immersive muffled/underwater soundscape', status: 'needed' },
                { role: 'Women performers (3-5)', notes: 'Comfortable with extended underwater work', status: 'needed' }
            ]
        },
        {
            id: 'the-center',
            title: 'THE CENTER',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 9,
            description: 'Light and sound respond as different forces come into focus—profit, power, consumption, life. The atmosphere shifts accordingly. When hierarchy dominates, the room tightens. When extraction is prioritized, depletion accumulates. The body registers these changes before the intellect does.',
            dimensions: 'Room-scale responsive installation',
            medium: 'Responsive lighting, spatial audio, environmental controls',
            cost: 0,
            deadline: '',
            notes: 'Render still needs a lot of work!\n\nTone: Structural clarity. Design awareness.\n\nWhat it communicates: These patterns are not random. Systems are built around what they center. Profit. Power. Consumption. Life. The room physically changes under each.\n\nWhat happens in the body:\n- They feel stress under profit\n- Tightness under power\n- Drain under consumption\n- Relief under life\nThe nervous system understands before the mind concludes.\n\nEmotional residue: "It\'s not just me. It\'s architecture."',
            statement: 'Every system organizes itself around something. What is placed at the center determines what is protected, what is prioritized, and who absorbs the cost.\n\nIn this installation, light and sound respond as different forces come into focus—profit, power, consumption, life. The atmosphere shifts accordingly. When hierarchy dominates, the room tightens. When extraction is prioritized, depletion accumulates. The body registers these changes before the intellect does.\n\nHistorically, systems built on vertical power concentrate authority upward and distribute labor downward. In such structures, women\'s time, emotional labor, bodies, and capacities are often treated as renewable resources—expected to sustain families, communities, and institutions without being centered within them.\n\nThis work introduces a contrast. Some structures demand compliance and extraction. Others strengthen what they depend on. When power is shared rather than hoarded, when leadership emerges through contribution rather than control, and when long-term survival is prioritized over short-term dominance, the atmosphere changes. What is centered determines what lasts.\n\nFor women, the stakes are not abstract. The architecture of power shapes whether their capacities are consumed, managed, or sustained.\n\nWhat are we building around?\nAnd who is protected—or depleted—by that choice?',
            statementStatus: 'draft',
            images: [],
            howTo: 'Design the four atmospheric states (profit, power, consumption, life) as distinct lighting and sound environments. Create or source responsive lighting system that can shift between states. Design soundscapes for each state (stress, tightness, drain, relief). Determine transition mechanism — timed cycle, interactive trigger, or guided sequence. Build the room environment. Install lighting rig with programmable color, intensity, and direction. Install spatial audio system. Program transitions between states. Test bodily/emotional impact of each state. Rework AI render significantly.',
            checklist: [
                { text: 'Design four atmospheric states (profit, power, consumption, life)', done: false },
                { text: 'Create lighting design for each state', done: false },
                { text: 'Design soundscapes for each state', done: false },
                { text: 'Determine transition mechanism (timed, interactive, guided)', done: false },
                { text: 'Source programmable lighting system', done: false },
                { text: 'Install spatial audio system', done: false },
                { text: 'Program transitions between states', done: false },
                { text: 'Build the room environment', done: false },
                { text: 'Test bodily/emotional impact of each state', done: false },
                { text: 'Rework AI render — needs significant improvement', done: false }
            ],
            materials: [
                { name: 'Programmable LED lighting system', qty: '1 full rig', cost: 0, status: 'needed' },
                { name: 'Spatial audio speakers', qty: '4-8', cost: 0, status: 'needed' },
                { name: 'Lighting controller / DMX', qty: '1', cost: 0, status: 'needed' },
                { name: 'Computer for control/programming', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Lighting designer / Programmer', notes: 'Responsive, programmable environmental lighting', status: 'needed' },
                { role: 'Sound designer', notes: 'Four distinct atmospheric soundscapes', status: 'needed' },
                { role: 'Interactive tech specialist', notes: 'Programming transitions and environmental control', status: 'needed' }
            ]
        },
        {
            id: 'the-rebellion',
            title: 'THE REBELLION',
            type: 'sculpture',
            stage: 'concept',
            showstopper: true,
            category: 'yes',
            order: 10,
            description: 'Constructed from fragments of texts written by women who have challenged inherited narratives of power and identity, this work transforms language into structure. Individual voices—once isolated, contested, or dismissed—are cut, bound, and assembled into a collective form.',
            dimensions: 'Flag-scale sculptural work',
            medium: 'Book cover/text fragments, mixed media, abstract wave form',
            cost: 0,
            deadline: '',
            notes: 'Tone: Momentum. Collective force. Quiet ignition.\n\nWhat it communicates: Awareness accumulates. Voices accumulate. Resistance is not spectacle — it is built. The flag is not protest. It is territory claimed.\n\nWhat happens in the body: Energy rises slightly. Not triumphant. Grounded. The viewer feels: "I am part of something."\n\nEmotional residue (final state): Not rage. Not despair. Not resolution. Clarity. A subtle internal shift: I see it now. And once seen, it cannot be unseen.\n\nFinal Emotional Landing — Visitors leave feeling:\n• Aware of their own posture\n• Aware of self-monitoring\n• Aware of internalized contracts\n• Slightly unsettled\n• Slightly more conscious\n• Not told what to do\n• But unable to unknow what they felt',
            statement: 'Constructed from fragments of texts written by women who have challenged inherited narratives of power and identity, this work transforms language into structure. Individual voices—once isolated, contested, or dismissed—are cut, bound, and assembled into a collective form.\n\nThe gesture is architectural rather than expressive. Each fragment alone is partial. Together, they create surface, movement, and mass. What was written privately becomes public terrain.\n\nThe wave shape resists spectacle. It does not shout. It accumulates. The rebellion here is not sudden rupture, but sustained articulation. Not anger alone, but persistence.\n\nIf the preceding works expose the terms under which women have lived, The Rebellion reveals what happens when those terms are named repeatedly, across generations. Ideas gain density. Voices gain structure. Silence loses its hold.\n\nThis is not a call to arms.\nIt is evidence that the conversation has already begun.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source hundreds of books/texts by women authors (thrift stores, donations, library sales). Remove and collect covers and text pages. Cut into uniform tile-sized fragments. Harden/seal fragments with resin or medium. Design the wave/flag form as an armature or substrate. Arrange and attach tiles to the form to create the flag surface. Build mounting system for the finished flag sculpture. Install dramatic lighting.',
            checklist: [
                { text: 'Source hundreds of books/texts by women authors', done: false },
                { text: 'Compile list of key authors to include', done: false },
                { text: 'Remove and collect covers and text pages', done: false },
                { text: 'Cut into uniform tile-sized fragments', done: false },
                { text: 'Harden/seal fragments with resin', done: false },
                { text: 'Design and build wave/flag armature', done: false },
                { text: 'Arrange and attach tiles to form', done: false },
                { text: 'Build mounting system', done: false },
                { text: 'Install dramatic lighting', done: false }
            ],
            materials: [
                { name: 'Books/texts by women authors', qty: '200-500', cost: 0, status: 'needed' },
                { name: 'Resin/sealant for hardening', qty: 'Bulk', cost: 0, status: 'needed' },
                { name: 'Armature/substrate material', qty: 'TBD', cost: 0, status: 'needed' },
                { name: 'Adhesive', qty: 'Bulk', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        }
    ];

    // Previous pieces that move to "maybe" or "save for later"
    const maybePieces = [
        'eve-ascending',      // Complex hologram — maybe
        'mirrors',            // Distortion mirror corridor — maybe
        'saint-and-outlaw',   // Dual portrait corridor — maybe
    ];

    const laterPieces = [
        'restriction-bound',
        'mother-of-swords',
        'object-of-my-tears',
        'outlaws-in-the-garden',
        'relevance',
        'manufacturing-desire',
        'glass-ceiling',
        'cause-of-death',
        'sea-of-attention',   // Evolved into THE OBJECT
    ];

    // Keep existing pieces that are in maybe/later, update their category
    const existingPieces = data.pieces || [];
    const updatedPieces = [];

    // Add all YES pieces first
    yesPieces.forEach(p => updatedPieces.push(p));

    // Update existing pieces that go to maybe
    existingPieces.forEach(p => {
        if (maybePieces.includes(p.id)) {
            p.category = 'maybe';
            p.order = 90;
            updatedPieces.push(p);
        } else if (laterPieces.includes(p.id)) {
            p.category = 'later';
            p.order = 100;
            updatedPieces.push(p);
        }
        // Skip pieces that are replaced by YES pieces (same id)
    });

    // Update the exhibition statement with the new READ THE FINE PRINT version
    data.statements = data.statements || {};
    data.statements.exhibition = {
        text: `READ THE FINE PRINT — Exhibition Statement

To be a woman in today's world is to live inside a contradiction. She is glorified and diminished, desired and disciplined, visible and erased. Her body is sacred and scrutinized. Her labor is essential and expected. Her presence is praised, so long as it remains palatable.

READ THE FINE PRINT emerges from a refusal to leave these contradictions unnamed.

This exhibition is not an argument. It is an experience — an attempt to render visible what so many women feel but struggle to articulate: the quiet negotiations, the anticipatory self-editing, the subtle narrowing of expression that accumulates over a lifetime. It asks what has been internalized as "just who I am," and what has been inherited without conscious consent.

Across immersive installations, projection, sound, and sculptural work, the exhibition brings to the surface the invisible architecture shaping female identity. It explores the crossroads where women stand daily — between self-expression and safety, between honesty and acceptability, between vitality and approval. It reveals how attention becomes atmosphere, how goodness becomes performance, and how expectation becomes embodied.

At its core, READ THE FINE PRINT is an invitation to recognition. Not recognition of ideology, but of sensation. Of tightening. Of monitoring. Of exhaustion. Of the subtle trade between belonging and aliveness. The works do not dictate what to believe. They create space for participants to feel where they themselves participate in, benefit from, resist, or reinforce these systems.

This exhibition does not resolve the tension it exposes. It illuminates it. It offers language where there has been only intuition, structure where there has been only atmosphere. And in doing so, it asks a larger question:

If these are the terms we have been living by, what would it mean to finally read them?`,
        status: 'draft'
    };

    data.pieces = updatedPieces;

    // Update activity
    data.activity = data.activity || [];
    data.activity.unshift(
        { text: 'Updated to full experiential walkthrough — 10 YES pieces in show order', time: new Date().toISOString() },
        { text: 'Added new pieces: Portal to God, Unsaid, Good Woman, The Object, For Your Comfort, The Center', time: new Date().toISOString() },
        { text: 'Moved previous pieces to Maybe and Save for Later categories', time: new Date().toISOString() },
        { text: 'Updated exhibition statement to READ THE FINE PRINT version', time: new Date().toISOString() }
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
})();
