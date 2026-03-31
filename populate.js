// Run this once to populate the dashboard with exhibition data
// Will be loaded via a script tag, then removed

(function() {
    const STORAGE_KEY = 'rtfp_exhibition_data';

    // Check if already populated
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (existing.pieces && existing.pieces.length > 0) {
        if (!confirm('Dashboard already has data. Replace with exhibition data from Google Doc?')) return;
    }

    const pieces = [
        {
            id: 'desire',
            title: 'DESIRE',
            type: 'sculpture',
            stage: 'concept',
            showstopper: true,
            description: 'Composed from the artist\'s own discarded syringes, DESIRE confronts the economy of wanting that structures women\'s relationship to the body across midlife and beyond. Once instruments of intervention, the syringes are rendered in gold, transformed from utilitarian objects into reliquary material. What was private becomes public; what was clinical becomes symbolic.',
            dimensions: '',
            medium: 'Discarded syringes, gold paint/gilding',
            cost: 0,
            deadline: '',
            notes: 'Rather than staging a critique of cosmetic culture, the work resists moral clarity. It refuses the binary of vanity versus empowerment and instead locates desire itself as the operative force: the longing for vitality, visibility, sensation, continuity.',
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
            id: 'the-resource',
            title: 'THE RESOURCE',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            description: 'Cast from the impressions of adult and child hands, this immersive installation renders visible the accumulation of demands that quietly shape the interior lives of women. The hands press inward from all sides—reaching, signaling, requesting—forming a field of expectation that precedes relationship, presence, and rest.',
            dimensions: 'Room-sized immersive installation',
            medium: 'Cast hands (plaster/resin), immersive enclosure',
            cost: 0,
            deadline: '',
            notes: 'Inspired by research documenting the frequency with which a single child calls for their mother in a day. Expands beyond caregiving to encompass the implicit and explicit asks of partnership, labor, friendship, and family. Each hand marks a claim on attention, energy, and availability—rarely spoken, rarely refused.\n\nThe work does not ask how this burden is managed.\nIt asks what stands between a woman and her own aliveness.\nAnd what becomes possible when that space is finally reclaimed.',
            statement: 'Cast from the impressions of adult and child hands, this immersive installation renders visible the accumulation of demands that quietly shape the interior lives of women. The hands press inward from all sides—reaching, signaling, requesting—forming a field of expectation that precedes relationship, presence, and rest.\n\nInspired by research documenting the frequency with which a single child calls for their mother in a day, the work expands beyond caregiving to encompass the implicit and explicit asks of partnership, labor, friendship, and family. Each hand marks a claim on attention, energy, and availability—rarely spoken, rarely refused.\n\nBy enclosing the viewer within this compressed space, the work transforms abstraction into bodily experience. Capacity is not theorized here; it is felt. The room tightens. The body responds. What is often dismissed as "mental load" is revealed as a lived, cumulative pressure—one that interrupts not only connection with others, but connection with the self.\n\nThe work does not ask how this burden is managed.\nIt asks what stands between a woman and her own aliveness.\nAnd what becomes possible when that space is finally reclaimed.',
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
            id: 'sea-of-attention',
            title: 'SEA OF ATTENTION',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            description: 'Hundreds of male mannequin faces blanket the floor, eyes fixed upward in a unified gaze. Above them, a screen flickers with images of women and girls simply existing—walking, laughing, dancing, living. The scene is ordinary, yet through the weight of so many unblinking stares, it becomes charged, suffocating, relentless.',
            dimensions: 'Room-sized floor installation + wall screen',
            medium: 'Mannequin faces, video projection/screen, mirrors, soundscape',
            cost: 0,
            deadline: '',
            notes: 'Staging ideas:\n- Immersive Pathway: Arrange mannequin faces in a wide pool across the floor with a narrow path through the middle. Visitors walk "through the gaze."\n- Low Height Placement: Keep faces floor-level so viewer looks down into a field of eyes.\n- Reflective Surface: Mirrored floor beneath faces so visitors see their own reflection intermingled.\n- Soundscape: Layered audio of whispers, laughter, or camera shutters to amplify hyper-visibility.',
            statement: 'This immersive installation positions the viewer inside a field of looking. As they move through the space, they are met on all sides by faces—mannequins reproduced at scale, their eyes fixed, unblinking. The attention is not loud. It does not announce itself. It simply accumulates.\n\nThe work stages a reversal. On one wall, the viewer is surrounded by watchful figures, their presence amplified through repetition and proximity. On the opposing wall, moving images of women and girls unfold—walking, eating, talking, existing without performance. The ordinariness of these scenes stands in tension with the intensity of the gaze they face.\n\nSea of Attention is not an indictment of desire, nor a claim that looking is inherently violent. Instead, it renders visible the conditions under which women learn to monitor themselves—to adjust posture, tone, behavior, and expression in response to being seen. Attention here functions as a form of pressure: diffuse, ambient, and inescapable.\n\nBy immersing the viewer in this asymmetry, the work makes felt what is often dismissed as intangible. The eyes do not touch, yet the body responds. Movement shifts. Awareness narrows. Presence becomes negotiated.\n\nIt is not the spectacle of being watched, but the tightening produced by learning to monitor oneself under constant view.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source hundreds of male mannequin heads/faces (wholesale suppliers, mannequin liquidators). Design the floor layout and pathway through the faces. Build or source floor platform/base for arranging faces. Consider mirrored floor panels beneath. Arrange faces in pool formation with walking pathway. Mount screen or projection surface on wall above. Film content of women and girls in everyday moments — walking, laughing, eating, existing. Edit video loop. Install video playback system. Design and install soundscape (whispers, camera shutters, laughter). Install lighting — must be carefully controlled.',
            checklist: [
                { text: 'Source hundreds of male mannequin heads/faces', done: false },
                { text: 'Design the floor layout and pathway', done: false },
                { text: 'Build floor platform/base for arranging faces', done: false },
                { text: 'Source mirrored floor panels', done: false },
                { text: 'Film content of women and girls in everyday moments', done: false },
                { text: 'Edit video loop for projection/screen', done: false },
                { text: 'Install video playback system and screen', done: false },
                { text: 'Design and produce soundscape', done: false },
                { text: 'Install lighting', done: false },
                { text: 'Test visitor walkthrough and sightlines', done: false }
            ],
            materials: [
                { name: 'Male mannequin heads/faces', qty: '200-300', cost: 0, status: 'needed' },
                { name: 'Mirrored floor panels', qty: 'TBD sq ft', cost: 0, status: 'needed' },
                { name: 'Large screen or projection setup', qty: '1', cost: 0, status: 'needed' },
                { name: 'Audio system for soundscape', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Videographer / Director', notes: 'Film women/girls in everyday life moments', status: 'needed' },
                { role: 'Sound designer', notes: 'Create layered soundscape of whispers, camera shutters', status: 'needed' },
                { role: 'AV / Projection technician', notes: 'Video playback and screen installation', status: 'needed' }
            ]
        },
        {
            id: 'drowning',
            title: 'DROWNING',
            type: 'film',
            stage: 'concept',
            showstopper: true,
            description: 'A film installation of women submerged in slow motion, suspended and tossed as though caught in the endless cycle of a washing machine. Their bodies thrash and tumble, reaching for air that never comes. Surrounding them are fragments of their responsibilities—objects that refuse to let them surface.',
            dimensions: 'Monumental scale projection',
            medium: 'Film projection, immersive sound',
            cost: 0,
            deadline: '',
            notes: 'Objects in the water (both literal and symbolic):\n\nHousehold/Family: laundry baskets, school backpacks, baby bottles, grocery bags, calendars, buzzing cell phone.\nProfessional: laptop, briefcase, stacks of papers, ringing alarm clock.\nRoles & Expectations: wedding ring, lipstick tubes, stiletto heels, cleaning supplies.\nCultural "Shoulds": a scale, cookbook, yoga mat, Bible.\nMoney: dollar bills, coins, calculator, credit cards.\n\nSoundscape: muffled voices, breaths, fragments of speech—phrases that never fully surface. Whispered: "I can\'t hold this all. I can\'t stop. Make it stop."',
            statement: 'Projected at monumental scale, DROWNING immerses the viewer in a slow-motion cycle of submersion. Women appear suspended underwater, their bodies drifting, tumbling, and reaching. Objects move alongside them—domestic items, tools of labor, markers of responsibility—never fully released, never fully grasped.\n\nThe imagery resists narrative resolution. There is no singular crisis, no dramatic moment of collapse. Instead, the work renders the cumulative experience of being held under by ordinary demands. The water does not rush. It persists.\n\nSound fills the space with muffled voices, breaths, and fragments of speech—phrases that never fully surface. The room darkens. Time stretches. What might otherwise be named as stress, overwhelm, or exhaustion is given bodily form.\n\nDROWNING does not depict failure. It depicts endurance under conditions that allow no pause, no release, no clear point of exit. The figures are not overtaken by catastrophe, but by accumulation.\n\nThis is not the spectacle of collapse.\nIt is the sustained effort of staying afloat when relief never arrives.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Find underwater filming location (pool or tank large enough for talent and props). Hire underwater cinematographer with slow-motion capability. Cast women performers comfortable with underwater work. Source all symbolic props (household items, professional items, beauty items, money). Film multiple takes of women submerged with props floating/churning around them. Shoot in slow motion for dreamlike quality. Edit footage into seamless looping film. Design and produce soundscape — muffled voices, whispered phrases, underwater ambience. Source or rent monumental-scale projection system. Design dark room environment for screening. Test projection at scale. Install audio system for immersive surround sound.',
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
            id: 'the-rebellion',
            title: 'THE REBELLION',
            type: 'sculpture',
            stage: 'concept',
            showstopper: true,
            description: 'Constructed from fragments of book covers written by women who have shaped, challenged, and redefined the cultural conversation around womanhood. The surface is composed of hundreds of uniform tiles, cut, hardened, and bound together. Individual voices dissolve into structure. Lineage becomes material. Takes the form of a flag—not as a symbol of nationhood, but as a marker of collective claim.',
            dimensions: 'Flag-scale sculptural work',
            medium: 'Book cover fragments, mixed media, abstract wave form',
            cost: 0,
            deadline: '',
            notes: 'The abstract wave shape resists literal imagery while retaining momentum. Suggests movement without depicting bodies, uprising without spectacle.\n\nBooks by: bell hooks, Audre Lorde, Adrienne Rich, Naomi Wolf, Clarissa Pinkola Estés, Rebecca Solnit, Roxane Gay, and many others.\n\nStaging ideas:\n- Shadow Army: Large-scale wall mural or projections of running silhouettes\n- Books as Weapons: Real or sculpted books clutched in silhouette hands\n- Mixed Media Layer: Fragments of text/quotes layered into the work\n- Harsh spotlights behind silhouettes casting shadows forward',
            statement: 'This work takes the form of a flag—not as a symbol of nationhood, but as a marker of collective claim. Constructed from fragments of book covers written by women who have shaped, challenged, and redefined the cultural conversation around womanhood, the surface is composed of hundreds of uniform tiles, cut, hardened, and bound together. Individual voices dissolve into structure. Lineage becomes material.\n\nThe gesture is deliberate. A flag announces presence. It signals territory already occupied. Here, the rebellion is not staged as rupture, but as accumulation—the result of decades of women speaking, writing, naming, and refusing silence. Each fragment carries language once considered disruptive, excessive, or dangerous. Together, they form a force that can no longer be held at the margins.\n\nThe abstract wave shape resists literal imagery while retaining momentum. It suggests movement without depicting bodies, uprising without spectacle. What rises here is not a singular figure, but a shared pressure—ideas gaining mass, voices gathering weight, truths becoming impossible to ignore.\n\nThe Rebellion does not romanticize resistance. It acknowledges the cost of speaking and the persistence required to continue. At the same time, it affirms that no voice stands alone. What was once written in isolation becomes collective ground.\n\nThis is not a call to action.\nIt is evidence that the action has already begun.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source hundreds of books by women authors (thrift stores, donations, library sales). Remove and collect book covers. Cut covers into uniform tile-sized fragments. Harden/seal fragments with resin or medium. Design the wave/flag form as an armature or substrate. Arrange and attach tiles to the form to create the flag surface. Build mounting system for the finished flag sculpture. Consider adding text fragments or quotes visible up close. Install dramatic lighting — harsh spotlights to cast shadows.',
            checklist: [
                { text: 'Source hundreds of books by women authors', done: false },
                { text: 'Compile list of key authors to include', done: false },
                { text: 'Remove and collect book covers', done: false },
                { text: 'Cut covers into uniform tile-sized fragments', done: false },
                { text: 'Harden/seal fragments with resin', done: false },
                { text: 'Design and build wave/flag armature', done: false },
                { text: 'Arrange and attach tiles to form', done: false },
                { text: 'Build mounting system', done: false },
                { text: 'Install dramatic lighting', done: false }
            ],
            materials: [
                { name: 'Books by women authors', qty: '200-500', cost: 0, status: 'needed' },
                { name: 'Resin/sealant for hardening', qty: 'Bulk', cost: 0, status: 'needed' },
                { name: 'Armature/substrate material', qty: 'TBD', cost: 0, status: 'needed' },
                { name: 'Adhesive', qty: 'Bulk', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        },
        {
            id: 'restriction-bound',
            title: 'RESTRICTION / BOUND',
            type: 'sculpture',
            stage: 'concept',
            showstopper: false,
            description: 'A soft mannequin twisted into an unnatural pose, contorted to fit into the narrow box of what is considered "acceptable" and "good" womanhood. Her entire body is cinched with belts that climb from feet to neck, binding her until no part of her is free. Her expression—if visible at all—is muted, suffocated, silenced beneath the weight of restraint.',
            dimensions: 'Life-sized figure',
            medium: 'Soft mannequin, leather belts, mixed media',
            cost: 0,
            deadline: '',
            notes: 'Categories of binding represented:\n\nAppearance/Body: Thin. Pretty. Youthful. Desirable.\nBehavior/Expression: Quiet. Polite. Modest. Selfless. Appropriate.\nRoles/Expectations: Wife. Mother. Caretaker. Provider. Martyr.\nMorality/Religion: Pure. Good. Obedient. Sinful. Temptress.\nInternalized Pressures: Not enough. Too much. Stay small. Be grateful. Don\'t shine.',
            statement: 'A soft mannequin twisted into an unnatural pose, contorted to fit into the narrow box of what is considered "acceptable" and "good" womanhood. Her entire body is cinched with belts that climb from feet to neck, binding her until no part of her is free. Her expression—if visible at all—is muted, suffocated, silenced beneath the weight of restraint.\n\nThis piece embodies how society binds women, rewarding compliance and punishing authenticity. The contorted body is not just physical—it is spiritual, emotional, and psychological suppression, demanded in exchange for belonging.\n\nRestriction is a monument to the price of goodness: a body, a voice, a self wrapped so tightly in expectation that nothing true can breathe.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source or create a soft mannequin form that can be contorted/posed. Design the twisted, unnatural pose. Source dozens of leather belts in various sizes. Secure mannequin in contorted position. Wrap and cinch belts from feet to neck systematically. Consider adding text/words on the belts representing expectations. Design base/platform for display. Install lighting.',
            checklist: [
                { text: 'Source or create soft mannequin form', done: false },
                { text: 'Design the twisted, contorted pose', done: false },
                { text: 'Source dozens of leather belts in various sizes', done: false },
                { text: 'Secure mannequin in contorted position', done: false },
                { text: 'Wrap and cinch belts from feet to neck', done: false },
                { text: 'Consider adding text/words on belts', done: false },
                { text: 'Design base/platform for display', done: false },
                { text: 'Install lighting', done: false }
            ],
            materials: [
                { name: 'Soft mannequin / poseable figure', qty: '1', cost: 0, status: 'needed' },
                { name: 'Leather belts (various sizes)', qty: '30-50', cost: 0, status: 'needed' },
                { name: 'Display base/platform', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        },
        {
            id: 'mother-of-swords',
            title: 'MOTHER OF SWORDS',
            type: 'sculpture',
            stage: 'concept',
            showstopper: false,
            description: 'A faceless mannequin stands, arms heavy with two children. Its body is pierced through with dozens of swords, lit from within so that every wound glows. This figure embodies the way culture glorifies the self-erasure of mothers—the praise we heap on women who martyr themselves, who lose their identities in service of others.',
            dimensions: 'Life-sized figure with children',
            medium: 'Mannequin, sculpted swords, internal LED lighting',
            cost: 0,
            deadline: '',
            notes: 'Mother of Swords is both shrine and indictment: a haunting reminder of how the mother is exalted for her sacrifice while her own identity disappears. Each sword represents a wound of self-erasure celebrated as virtue.',
            statement: 'A faceless mannequin stands, arms heavy with two children. Its body is pierced through with dozens of swords, lit from within so that every wound glows. This figure embodies the way culture glorifies the self-erasure of mothers—the praise we heap on women who martyr themselves, who lose their identities in service of others.\n\nMother of Swords is both shrine and indictment: a haunting reminder of how the mother is exalted for her sacrifice while her own identity disappears.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source or build faceless mannequin figure. Create two child-sized figures for arms. Sculpt or fabricate dozens of sword forms. Design internal lighting system (LEDs that glow through wound points). Cut/drill sword entry points into mannequin body. Install internal LED strips or point lights. Insert swords through the body. Wire and test all lighting. Build display base. Connect power supply discretely.',
            checklist: [
                { text: 'Source or build faceless mannequin figure', done: false },
                { text: 'Create two child-sized figures', done: false },
                { text: 'Sculpt or fabricate dozens of sword forms', done: false },
                { text: 'Design internal lighting system (LEDs)', done: false },
                { text: 'Cut sword entry points into mannequin', done: false },
                { text: 'Install internal LED lighting', done: false },
                { text: 'Insert swords and secure', done: false },
                { text: 'Wire and test all lighting', done: false },
                { text: 'Build display base', done: false }
            ],
            materials: [
                { name: 'Faceless mannequin', qty: '1', cost: 0, status: 'needed' },
                { name: 'Child-sized mannequins or forms', qty: '2', cost: 0, status: 'needed' },
                { name: 'Fabricated swords', qty: '20-30', cost: 0, status: 'needed' },
                { name: 'LED strips / point lights', qty: 'Multiple', cost: 0, status: 'needed' },
                { name: 'Power supply / wiring', qty: '1 set', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Sculptor / Fabricator', notes: 'Build sword forms and modify mannequin', status: 'needed' },
                { role: 'Electrician / LED specialist', notes: 'Internal lighting through wounds', status: 'needed' }
            ]
        },
        {
            id: 'object-of-my-tears',
            title: 'THE OBJECT OF MY TEARS',
            type: 'sculpture',
            stage: 'concept',
            showstopper: false,
            description: 'A tissue box sculpted in the shape of a vulva, tissues spilling forth in endless succession. This piece makes explicit what culture has long implied: the reduction of the vulva—and therefore the woman—to an object of consumption.',
            dimensions: '',
            medium: 'Sculpted tissue box, mixed media',
            cost: 0,
            deadline: '',
            notes: 'The tissues themselves become testimony — the tears, the rage, the shame, the suppressed expression of countless women who have been dominated, diminished, and defined by objectification. Forces confrontation with the absurdity and violence of turning the sacred portal of life into a commodity.',
            statement: 'A tissue box sculpted in the shape of a vulva, tissues spilling forth in endless succession. This piece makes explicit what culture has long implied: the reduction of the vulva—and therefore the woman—to an object of consumption. Yet here, the tissues themselves become testimony. They are the tears, the rage, the shame, the suppressed expression of countless women who have been dominated, diminished, and defined by this objectification.\n\nThe Object of My Tears forces us to confront the absurdity and the violence of turning the sacred portal of life into a commodity—and the grief that accumulates in its wake.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Design the vulva-shaped tissue box form. Sculpt the form (clay, then mold for casting). Cast in appropriate material (resin, ceramic). Design mechanism for tissues to appear to spill endlessly. Finish and paint/texture the sculpture. Source and prepare tissue elements.',
            checklist: [
                { text: 'Design the vulva-shaped tissue box form', done: false },
                { text: 'Sculpt the form in clay', done: false },
                { text: 'Create mold for casting', done: false },
                { text: 'Cast in final material (resin or ceramic)', done: false },
                { text: 'Design tissue mechanism', done: false },
                { text: 'Finish, paint, and texture', done: false }
            ],
            materials: [
                { name: 'Sculpting clay', qty: 'TBD', cost: 0, status: 'needed' },
                { name: 'Molding compound', qty: 'TBD', cost: 0, status: 'needed' },
                { name: 'Casting resin or ceramic', qty: 'TBD', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Sculptor', notes: 'Experienced with anatomical/figurative sculpting', status: 'needed' }
            ]
        },
        {
            id: 'outlaws-in-the-garden',
            title: 'THE OUTLAWS IN THE GARDEN',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            description: 'Eve—the original outlaw—was cast as the one to blame for the fall of humanity. This piece exposes how the doctrine of the seven deadly sins has been sewn into the fabric of womanhood, and reclaims Eve not as the origin of shame, but as the mother of rebellion.',
            dimensions: 'Installation scale',
            medium: 'Mixed media installation, garden elements',
            cost: 0,
            deadline: '',
            notes: 'The seven deadly sins as denial of aliveness:\n\nSloth → We deny ourselves rest.\nEnvy → We deny our wanting.\nGluttony → We deny our hunger.\nGreed → We deny our security and abundance.\nLust → We deny our pleasure.\nAnger → We deny our needs and our boundaries.\n\nTo step into her outlawry is to reject the cage of "goodness" and to remember that liberation does not come from resisting sin but from reclaiming our right to live fully, fiercely, and unapologetically.',
            statement: 'Eve—the original outlaw—was cast as the one to blame for the fall of humanity. With that single story, women became synonymous with danger, temptation, and sin. For centuries since, we have lived in the shadow of her exile, forced to prove our worthiness by resisting the very instincts that make us human.\n\nThis piece exposes how the doctrine of the seven deadly sins has been sewn into the fabric of womanhood:\n\nSloth → We deny ourselves rest.\nEnvy → We deny our wanting.\nGluttony → We deny our hunger.\nGreed → We deny our security and abundance.\nLust → We deny our pleasure.\nAnger → We deny our needs and our boundaries.\n\nThe Outlaws in the Garden reclaims Eve not as the origin of shame, but as the mother of rebellion. To step into her outlawry is to reject the cage of "goodness" and to remember that liberation does not come from resisting sin but from reclaiming our right to live fully, fiercely, and unapologetically.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Develop the visual concept for each sin/denial pairing. Design the garden setting/environment. Source garden elements (plants, branches, organic material). Create representations for each of the six sin/denial pairings. Design Eve figure or representation as centerpiece. Build the garden installation structure. Install all elements. Design lighting to create sacred/forbidden atmosphere.',
            checklist: [
                { text: 'Develop visual concept for each sin/denial pairing', done: false },
                { text: 'Design the garden setting/environment', done: false },
                { text: 'Source garden elements (plants, branches, organic material)', done: false },
                { text: 'Create representations for each sin/denial pairing', done: false },
                { text: 'Design Eve figure or representation as centerpiece', done: false },
                { text: 'Build the garden installation structure', done: false },
                { text: 'Install all elements', done: false },
                { text: 'Design lighting for sacred/forbidden atmosphere', done: false }
            ],
            materials: [
                { name: 'Garden elements (plants, branches, moss)', qty: 'Bulk', cost: 0, status: 'needed' },
                { name: 'Installation structure materials', qty: 'TBD', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Set designer / Scenic artist', notes: 'Garden environment creation', status: 'needed' }
            ]
        },
        {
            id: 'relevance',
            title: 'RELEVANCE',
            type: 'sculpture',
            stage: 'concept',
            showstopper: false,
            description: 'A soft mannequin face, pierced by syringes like a ritual of devotion. Each syringe is painted and inscribed with a word—desirable, worthy, powerful, chosen, loved—the unconscious promises we inject into ourselves when chasing youth.',
            dimensions: 'Life-sized face/head',
            medium: 'Soft mannequin face, painted/inscribed syringes',
            cost: 0,
            deadline: '',
            notes: 'Syringe inscriptions by category:\n\nLove/Belonging: Loved, Desired, Chosen, Wanted, Enough\nPower/Worth: Worthy, Valuable, Important, Powerful, Respected\nVisibility/Voice: Seen, Relevant, Heard, Admired, Remembered\nSafety/Security: Safe, Protected, Supported, Secure, Cared for\nVitality/Radiance: Alive, Beautiful, Youthful, Radiant, Fertile\n\nPhrases on syringe barrels: "Never left behind," "Forever wanted," "Always enough," "Stay young, stay worthy"',
            statement: 'A soft mannequin face, pierced with painted syringes, each inscribed with a word: loved, chosen, worthy, seen, safe, powerful, beautiful. Some carry phrases like "never left behind" or "stay young, stay wanted." Together, they form the silent prayers women inject into their skin in pursuit of youth.\n\nThis piece exposes the quiet violence of a culture that equates a woman\'s value with her appearance. The syringes are both altar and weapon—ritual tools of hope and harm. Beneath the promise of smooth skin lies a deeper hunger: to belong, to matter, to be enough.\n\nRelevance asks: what are we really chasing when we chase youth? And what do we lose when we place our worth in a face that time will inevitably change?',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source or create soft mannequin face/head. Collect syringes (various sizes). Paint each syringe individually. Hand-inscribe words onto each syringe. Insert syringes into the face at various angles. Some should carry longer phrases along the barrel. Design display mount/base. Install lighting to highlight inscriptions.',
            checklist: [
                { text: 'Source or create soft mannequin face/head', done: false },
                { text: 'Collect syringes in various sizes', done: false },
                { text: 'Paint each syringe', done: false },
                { text: 'Hand-inscribe words onto each syringe', done: false },
                { text: 'Design word list across all categories', done: false },
                { text: 'Insert syringes into face at various angles', done: false },
                { text: 'Add longer phrases along syringe barrels', done: false },
                { text: 'Design display mount', done: false },
                { text: 'Install lighting', done: false }
            ],
            materials: [
                { name: 'Soft mannequin face/head', qty: '1', cost: 0, status: 'needed' },
                { name: 'Syringes (various sizes)', qty: '50-100', cost: 0, status: 'needed' },
                { name: 'Paint for syringes', qty: 'Multiple colors', cost: 0, status: 'needed' },
                { name: 'Fine-tip markers/engraving tools', qty: '1 set', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        },
        {
            id: 'manufacturing-desire',
            title: 'MANUFACTURING DESIRE',
            type: 'mixed-media',
            stage: 'concept',
            showstopper: false,
            description: 'The base painted with makeup, then layered with fragments of the beauty industry: false lashes, acrylic nails, hair extensions, padded cutlets, butt-shaping underwear. Each item artfully glued into place, forming a grotesque-yet-beautiful collage of the tools women are told they must use to be desirable.',
            dimensions: 'Large canvas/panel',
            medium: 'Makeup, false lashes, acrylic nails, hair extensions, shapewear, mixed beauty products',
            cost: 0,
            deadline: '',
            notes: 'The materials are both intimate and industrial, both seductive and suffocating. Asks: when the tools of beauty become armor, who is left underneath? And what happens when we begin to see ourselves not as objects to be perfected, but as people to be revered?',
            statement: 'The base of this work is painted with makeup, then layered with fragments of the beauty industry itself: false lashes, acrylic nails, hair extensions, padded cutlets, butt-shaping underwear. Each item is artfully glued into place, forming a grotesque-yet-beautiful collage of the tools women are told they must use to be desirable.\n\nThis piece confronts the machinery of self-objectification. It reveals how women are taught to manufacture themselves—to sculpt, cover, and alter their bodies in pursuit of attention, approval, and belonging. The materials are both intimate and industrial, both seductive and suffocating.\n\nManufacturing Desire asks: when the tools of beauty become armor, who is left underneath? And what happens when we begin to see ourselves not as objects to be perfected, but as people to be revered?',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source large canvas or panel as base. Collect beauty industry materials: false lashes, acrylic nails, hair extensions, padded cutlets, shapewear, makeup products. Paint the base layer using actual makeup products (foundation, lipstick, eyeshadow). Begin layering and gluing beauty items onto the surface. Arrange for both aesthetic beauty and uncomfortable density. Seal finished piece. Frame or mount.',
            checklist: [
                { text: 'Source large canvas or panel', done: false },
                { text: 'Collect beauty materials: false lashes, acrylic nails, extensions', done: false },
                { text: 'Collect shapewear, cutlets, padded underwear', done: false },
                { text: 'Collect makeup products for base painting', done: false },
                { text: 'Paint base layer with actual makeup', done: false },
                { text: 'Layer and glue beauty items onto surface', done: false },
                { text: 'Seal finished piece', done: false },
                { text: 'Frame or mount', done: false }
            ],
            materials: [
                { name: 'Large canvas/panel', qty: '1', cost: 0, status: 'needed' },
                { name: 'False lashes (bulk)', qty: '50-100 pairs', cost: 0, status: 'needed' },
                { name: 'Acrylic nails', qty: 'Bulk', cost: 0, status: 'needed' },
                { name: 'Hair extensions', qty: 'Multiple', cost: 0, status: 'needed' },
                { name: 'Shapewear/cutlets/padded underwear', qty: 'Multiple', cost: 0, status: 'needed' },
                { name: 'Makeup products (foundation, lipstick, eyeshadow)', qty: 'Multiple', cost: 0, status: 'needed' },
                { name: 'Industrial adhesive', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        },
        {
            id: 'mirrors',
            title: 'MIRRORS / SEEING YOURSELF CLEARLY',
            type: 'installation',
            stage: 'concept',
            showstopper: false,
            description: 'A small chamber or corridor lined with mirrors of different distortions. On one wall, a life-sized photograph of a woman gazing into a mirror anchors the piece — but as viewers step inside, they are immediately confronted by their own distorted reflections alongside hers.',
            dimensions: 'Walk-in chamber/corridor',
            medium: 'Distortion mirrors, photography, soundscape, lighting',
            cost: 0,
            deadline: '',
            notes: 'Some mirrors stretch, others shrink, others fragment. No reflection feels true.\n\nVisual + Spatial:\n- Anchor Image: Full-size photo of woman with distorted reflection\n- Surrounding Mirrors: Funhouse-style (tall, thin, wide, cracked, blurred)\n- Fragmented Reflections: Broken into shards/panels\n- Lighting: Dim, cold, slight flicker — can\'t hold a stable image\n\nSoundscape: Layered whispers: "Not enough… too much… should be thinner… prettier… younger…" Occasionally interrupted by loud: "Perfect." "Smile." "Fix yourself."\n\nAlternate titles: Through a Distorted Lens, Not Enough, The Mirror Lied, Self in Fragments, The Warped Gaze, What She Sees, Unrecognizable',
            statement: 'Instead of a single mirror and photograph, the installation becomes a small chamber or corridor lined with mirrors of different distortions. On one wall, a life-sized photograph of a woman gazing into a mirror anchors the piece — but as viewers step inside, they are immediately confronted by their own distorted reflections alongside hers.\n\nSome mirrors stretch, others shrink, others fragment. No reflection feels true. The viewer becomes participant, trapped in the same cycle of warped self-perception the photographed woman embodies.\n\nThis piece reveals how self-concept is colonized by comparison and perfectionism. The mirror becomes a site of violence, where a woman is never enough. By forcing visitors to see themselves through the same distortions, the work implicates everyone in the system — no one leaves untouched.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source various distortion mirrors (funhouse-style: convex, concave, wavy, elongating). Source broken/fragmented mirror panels. Design the chamber or corridor layout. Photograph the anchor image — woman gazing into mirror with distorted reflection. Print anchor photo at life-size. Build the chamber/corridor structure. Install mirrors on walls. Install fragmented mirror panels. Design cold, dim, flickering lighting. Record and produce whisper soundscape. Install audio system. Test visitor experience walkthrough.',
            checklist: [
                { text: 'Source distortion mirrors (convex, concave, wavy)', done: false },
                { text: 'Source broken/fragmented mirror panels', done: false },
                { text: 'Design chamber/corridor layout', done: false },
                { text: 'Photograph anchor image — woman with distorted reflection', done: false },
                { text: 'Print anchor photo at life-size', done: false },
                { text: 'Build chamber/corridor structure', done: false },
                { text: 'Install all mirrors', done: false },
                { text: 'Design cold, dim, flickering lighting', done: false },
                { text: 'Record and produce whisper soundscape', done: false },
                { text: 'Install audio system', done: false },
                { text: 'Test visitor walkthrough experience', done: false }
            ],
            materials: [
                { name: 'Distortion mirrors (various types)', qty: '6-10', cost: 0, status: 'needed' },
                { name: 'Fragmented/broken mirror panels', qty: 'Multiple', cost: 0, status: 'needed' },
                { name: 'Chamber framing/walls', qty: 'TBD', cost: 0, status: 'needed' },
                { name: 'Life-size photo print', qty: '1', cost: 0, status: 'needed' },
                { name: 'Flickering light system', qty: '1', cost: 0, status: 'needed' },
                { name: 'Audio speakers', qty: '2-4', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Photographer', notes: 'Shoot anchor image of woman with distorted reflection', status: 'needed' },
                { role: 'Set builder / Carpenter', notes: 'Build walk-in chamber structure', status: 'needed' },
                { role: 'Sound designer', notes: 'Create whisper soundscape', status: 'needed' }
            ]
        },
        {
            id: 'glass-ceiling',
            title: 'GLASS CEILING',
            type: 'sculpture',
            stage: 'concept',
            showstopper: false,
            description: 'A sculptural installation of a woman\'s hands bursting through a sheet of shattered glass. The shards splinter outward, catching light, some stained red with blood. Her hands are torn and raw, but still reaching—clutching fragile slips of paper stamped with promises: freedom, equality, respect, belonging.',
            dimensions: '',
            medium: 'Sculpted hands, shattered glass/plexiglass, paper slips, LED lighting',
            cost: 0,
            deadline: '',
            notes: 'Staging ideas:\n- Layers of Ceilings: Several stacked sheets of broken plexiglass, suggesting endless ceilings. Each with blood traces showing generational toll.\n- Interactive: Visitors walk under the glass ceiling installation, feeling its looming weight overhead while light filters through fractures.\n\nThe Glass Ceiling is both victory and indictment: a testament to the hoops women have leapt through, the resilience they\'ve carried, and the price they\'ve paid simply to be seen as equal.',
            statement: 'A sculptural installation of a woman\'s hands bursting through a sheet of shattered glass. The shards splinter outward, catching light, some glittering, some stained red with blood. Her hands are torn and raw, but still reaching—clutching fragile slips of paper that read like tickets, stamped with promises: freedom, equality, respect, belonging.\n\nThis piece exposes both the triumph and the toll of breaking through. Every ceiling shattered leaves scars; every advance forward is bought with blood. Though her hands pierce through, her body remains below—reminding us that even now, women\'s access to full equality is partial, conditional, unfinished.\n\nThe Glass Ceiling is both victory and indictment: a testament to the hoops women have leapt through, the resilience they\'ve carried, and the price they\'ve paid simply to be seen as equal. It forces the viewer to ask: how many more ceilings must be broken, and at what cost, before freedom is no longer promised but lived?',
            statementStatus: 'draft',
            images: [],
            howTo: 'Sculpt realistic women\'s hands in reaching/grasping poses. Source or create shattered glass/plexiglass sheets (safety glass preferred). Design the mounting to show hands bursting upward through glass. Create paper slips with stamped promises. Apply blood-red staining to select glass shards and hands. Consider layered plexiglass option for stacked ceilings effect. Design overhead mounting system if interactive walkthrough. Install lighting to catch glass reflections.',
            checklist: [
                { text: 'Sculpt realistic women\'s hands', done: false },
                { text: 'Source shattered glass or safety plexiglass', done: false },
                { text: 'Design mounting for hands bursting through glass', done: false },
                { text: 'Create paper slips with stamped promises', done: false },
                { text: 'Apply blood-red staining to glass and hands', done: false },
                { text: 'Consider layered plexiglass option', done: false },
                { text: 'Design mounting/suspension system', done: false },
                { text: 'Install lighting for glass reflections', done: false }
            ],
            materials: [
                { name: 'Sculpting materials for hands', qty: 'TBD', cost: 0, status: 'needed' },
                { name: 'Shattered safety glass/plexiglass', qty: '2-4 sheets', cost: 0, status: 'needed' },
                { name: 'Red pigment/paint for blood effect', qty: '1', cost: 0, status: 'needed' },
                { name: 'Paper for promise slips', qty: '1 set', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Sculptor', notes: 'Realistic hand sculpting', status: 'needed' },
                { role: 'Glass worker', notes: 'Safe shattering and arrangement of glass', status: 'needed' }
            ]
        },
        {
            id: 'cause-of-death',
            title: 'CAUSE OF DEATH',
            type: 'mixed-media',
            stage: 'concept',
            showstopper: false,
            description: 'A large mixed-media canvas: the top half a polished, smiling woman\'s head — coiffed hair, perfect makeup, sparkling eyes. Radiant. But the body beneath is rendered as a corpse: pale, lifeless, tagged at the toe. On the tag: "Cause of Death: Suppressed Aliveness."',
            dimensions: 'Large canvas',
            medium: 'Mixed media on canvas — paint, collage, photography',
            cost: 0,
            deadline: '',
            notes: 'Collaged across the body are ghostlike fragments: words and images representing what has been buried — trauma, stuffed emotions, rage, pleasure, longing, desire, grief. The body becomes a graveyard of what culture teaches women to deny.\n\nAlternate titles: Head Alive, Body Dead / The Numbed Woman',
            statement: 'A large mixed-media canvas: the top half a polished, smiling woman\'s head — coiffed hair, perfect makeup, sparkling eyes. She looks vibrant, even radiant. But the body beneath is rendered as a corpse: pale, lifeless, tagged at the toe. On the tag, the words: Cause of Death: Suppressed Aliveness.\n\nCollaged across the body are ghostlike fragments: words and images representing what has been buried there — trauma, stuffed emotions, rage, pleasure, longing, desire, grief. The body becomes a graveyard of what culture teaches women to deny.\n\nThis piece lays bare the cost of living "from the neck up": how women are praised for their polished smiles and outward performance while being severed from their embodied selves. It is both an elegy and a confrontation — forcing us to ask what aliveness has been sacrificed in the pursuit of being "the perfect woman."',
            statementStatus: 'draft',
            images: [],
            howTo: 'Source large canvas. Create or source polished portrait image for upper half. Paint/render corpse-like body for lower half. Create toe tag with "Cause of Death: Suppressed Aliveness." Collect collage elements: words, images representing buried emotions. Layer ghostlike fragments across the body. Seal and finish mixed media layers. Frame.',
            checklist: [
                { text: 'Source large canvas', done: false },
                { text: 'Create polished portrait for upper half', done: false },
                { text: 'Paint/render corpse-like body for lower half', done: false },
                { text: 'Create toe tag detail', done: false },
                { text: 'Collect collage elements for buried emotions', done: false },
                { text: 'Layer ghostlike fragments across body', done: false },
                { text: 'Seal and finish mixed media', done: false },
                { text: 'Frame', done: false }
            ],
            materials: [
                { name: 'Large canvas', qty: '1', cost: 0, status: 'needed' },
                { name: 'Mixed media supplies (paint, collage materials)', qty: 'Various', cost: 0, status: 'needed' },
                { name: 'Photography prints for collage', qty: 'Multiple', cost: 0, status: 'needed' }
            ],
            teamNeeds: []
        },
        {
            id: 'saint-and-outlaw',
            title: 'THE SAINT AND THE OUTLAW',
            type: 'installation',
            stage: 'concept',
            showstopper: false,
            description: 'On one side, portraits of the saint: luminous, celebrated, radiant — mother, nurturer, professional, muse. On the opposite wall, shadowed portraits of the outlaw: intense, lustful, grieving, hungry, wild, silly, raging. Between saint and outlaw, the viewer stands in the tension every woman knows.',
            dimensions: 'Two-wall portrait installation + corridor',
            medium: 'Large portraits/photography, lighting, optional AI projection, soundscape',
            cost: 0,
            deadline: '',
            notes: 'Format: Rows of large headshots or waist-up portraits, gallery-style.\n\nLight vs. Shadow: One side bright, warm light. Other side dimly lit with directional spotlighting.\n\nAI Blending: Subtle morphing between portraits through projection so archetypes bleed into one another.\n\nSoundscape: Light side — chorus of praise (good girl, beautiful, mother, strong). Shadow side — whispered outlaw words (selfish, slut, crazy, too much). Center — both layers clash.',
            statement: 'On one side of the room, portraits of the saint: luminous, celebrated, radiant. She is the mother, the nurturer, the professional, the muse — the roles that culture uplifts as acceptable, admirable, "good." On the opposite wall, shadowed portraits of the outlaw: intense, lustful, grieving, hungry, wild, silly, raging. These are the archetypes society condemns, shames, and suppresses, yet they are no less alive within her.\n\nBetween saint and outlaw, the viewer stands in the tension every woman knows — pulled between who she is praised for being and who she is forbidden from embodying.\n\nThe Saint and the Outlaw asks the question: can we embrace all parts of ourselves? Not only the saintly faces that win approval, but also the unruly, outlawed expressions of aliveness that make us whole. Liberation is not found in choosing one side, but in honoring the spectrum — in becoming the woman who is both light and shadow, sacred and untamed.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Cast models/subjects for saint and outlaw portraits. Photograph saint portraits: warm light, luminous, polished. Photograph outlaw portraits: dramatic shadow, intensity, raw emotion. Print all portraits at large scale (gallery-sized). Design corridor/room layout with opposing walls. Install bright warm lighting on saint wall. Install dim directional spotlighting on outlaw wall. Consider AI morphing projections between portraits. Record praise words soundscape for saint side. Record whispered outlaw words for shadow side. Install dual-channel audio system. Test immersive corridor experience.',
            checklist: [
                { text: 'Cast models/subjects for portraits', done: false },
                { text: 'Photograph saint portraits (warm, luminous)', done: false },
                { text: 'Photograph outlaw portraits (shadow, raw)', done: false },
                { text: 'Print all portraits at large gallery scale', done: false },
                { text: 'Design corridor/room layout', done: false },
                { text: 'Install warm lighting on saint wall', done: false },
                { text: 'Install directional spotlighting on outlaw wall', done: false },
                { text: 'Consider AI morphing projections', done: false },
                { text: 'Record praise words soundscape (saint side)', done: false },
                { text: 'Record whispered outlaw words (shadow side)', done: false },
                { text: 'Install dual-channel audio system', done: false }
            ],
            materials: [
                { name: 'Large format portrait prints', qty: '12-20', cost: 0, status: 'needed' },
                { name: 'Warm lighting (saint wall)', qty: '1 set', cost: 0, status: 'needed' },
                { name: 'Directional spotlights (outlaw wall)', qty: '1 set', cost: 0, status: 'needed' },
                { name: 'Audio system (dual-channel)', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Portrait photographer', notes: 'Two distinct lighting styles — luminous and shadow', status: 'needed' },
                { role: 'Models/Subjects', notes: 'Women to portray both saint and outlaw archetypes', status: 'needed' },
                { role: 'Sound designer', notes: 'Dual soundscape — praise vs. whispered condemnation', status: 'needed' }
            ]
        },
        {
            id: 'eve-ascending',
            title: 'EVE ASCENDING',
            type: 'installation',
            stage: 'concept',
            showstopper: true,
            description: 'At the heart of a luminous garden, among trees and blossoms, she appears: not in stone or paint, but as a glowing hologram, ethereal and alive. Eve — not fallen, not outlawed, but restored. Her body shimmers with light, her movements subtle yet undeniable, as if breathing.',
            dimensions: 'Room-sized garden installation with hologram centerpiece',
            medium: 'Hologram (Pepper\'s Ghost or Hologauze), faux garden, lighting, soundscape',
            cost: 0,
            deadline: '',
            notes: 'Three hologram approaches:\n1. Pepper\'s Ghost with metallized film (most "magical," life-size)\n2. Hologauze/scrim + projection (simpler rigging, 360° garden feel) — RECOMMENDED\n3. LED hologram fan array (bright but hardware visible, breaks sacred vibe)\n\nRecommendation: Hologauze or Pepper\'s Ghost inside ring of lush faux trees, living branches, moss, and low warm "candle" lighting.\n\nChoreography loop (2-3 min):\n1. Arrival: Fireflies/stars appear; Eve fades in\n2. Recognition: She lifts gaze, soft smile — to herself\n3. Crowning: Slow arm arc overhead; particles crown her\n4. Blessing: Hands open toward viewer; gentle exhale; fade to starlight\n\nCrew needed: 1 producer/PM, 1 projection/AV lead, 1 rigger, 1 lighting designer, 1 content editor/compositor, 1 scenic/greens lead\n\nBudget ballparks: Mid-five figures for Hologauze; mid-to-high five figures for Pepper\'s Ghost.',
            statement: 'At the heart of a luminous garden, among trees and blossoms, she appears: not in stone or paint, but as a glowing hologram, ethereal and alive. Eve — not fallen, not outlawed, but restored. Her body shimmers with light, her movements subtle yet undeniable, as if breathing. She is no longer the scapegoat of humanity\'s fall but the first woman to say yes to her own knowing.\n\nAbove her, stars flicker, tying her to the infinite mystery of the cosmos. Around her, the earth blooms, reminding us that she is not just myth but matter — rooted, embodied, sovereign. She radiates power and surrender, strength and softness, the paradox at the heart of womanhood.\n\nEve Ascending is a reclamation. She is the mother of rebellion crowned at last, no longer condemned but revered. She asks each viewer to see themselves in her ascent: to recognize that the Eve within us has never died. She has always been waiting, alive, untamed, and holy — rising again, not in shame, but in liberation.',
            statementStatus: 'draft',
            images: [],
            howTo: 'Choose hologram method: Pepper\'s Ghost vs. Hologauze (recommend Hologauze). Lock venue dimensions and plan sightlines. Rent smaller screen/gauze for proof-of-concept test in dark studio. Hire dancer/model as Eve for filming. Film Eve in dark studio against black — slow breath-led movement, flowing semi-sheer fabric. Add light particles in post (cosmic tie-in). Grade in warm golds with halo bloom effect. Edit into 2-3 minute seamless loop with choreography beats. Record sound: low heart-like pulse, field recordings (wind through leaves), whispered words. Source Hologauze panel (12-16ft wide x 10-12ft tall). Source 10-20K lumen laser projector. Fabricate circular grove: faux trees, flowering branches, moss rugs, stone, votive LEDs. Install Hologauze with proper tension and rigging. Install projector and media server. Focus lights and color grade on site. Rehearse loop and visitor flow (max 12-20 in grove at once). Control ambient light strictly (blackout drape, low garden practicals). Hide film bottom edge with moss/stone.',
            checklist: [
                { text: 'Choose hologram method (Pepper\'s Ghost vs Hologauze)', done: false },
                { text: 'Lock venue dimensions and plan sightlines', done: false },
                { text: 'Run proof-of-concept test with smaller screen in dark studio', done: false },
                { text: 'Hire dancer/model as Eve', done: false },
                { text: 'Film Eve in dark studio — slow breath-led movement', done: false },
                { text: 'Add light particles and cosmic elements in post', done: false },
                { text: 'Grade footage in warm golds with halo bloom', done: false },
                { text: 'Edit into 2-3 minute seamless loop', done: false },
                { text: 'Record soundscape: pulse, wind, whispered words', done: false },
                { text: 'Source Hologauze panel (12-16ft x 10-12ft)', done: false },
                { text: 'Source high-lumen laser projector (10-20K)', done: false },
                { text: 'Fabricate circular grove (faux trees, moss, branches, votives)', done: false },
                { text: 'Install Hologauze with proper tension and rigging', done: false },
                { text: 'Install projector and media server', done: false },
                { text: 'Focus lights and color grade on site', done: false },
                { text: 'Rehearse loop and plan visitor flow (12-20 max)', done: false },
                { text: 'Install blackout draping and ambient light control', done: false },
                { text: 'Hide all hardware edges with scenic elements', done: false }
            ],
            materials: [
                { name: 'Hologauze panel (12-16ft x 10-12ft)', qty: '1', cost: 0, status: 'needed' },
                { name: 'Laser projector (10-20K lumen)', qty: '1', cost: 0, status: 'needed' },
                { name: 'Media server/laptop', qty: '1', cost: 0, status: 'needed' },
                { name: 'Faux trees and flowering branches', qty: 'Ring formation', cost: 0, status: 'needed' },
                { name: 'Moss rugs and stone', qty: 'Ground cover', cost: 0, status: 'needed' },
                { name: 'Votive-style LEDs', qty: '20-40', cost: 0, status: 'needed' },
                { name: 'Blackout draping', qty: 'Full surround', cost: 0, status: 'needed' },
                { name: 'Ceiling rigging hardware', qty: '1 set', cost: 0, status: 'needed' },
                { name: 'Audio system', qty: '1', cost: 0, status: 'needed' }
            ],
            teamNeeds: [
                { role: 'Producer / PM', notes: 'Oversee entire Eve Ascending production', status: 'needed' },
                { role: 'Projection / AV Lead', notes: 'Hologauze or Pepper\'s Ghost specialist', status: 'needed' },
                { role: 'Rigger', notes: 'Ceiling rigging for gauze and lighting', status: 'needed' },
                { role: 'Lighting Designer', notes: 'Ambient light control, garden practicals', status: 'needed' },
                { role: 'Content Editor / Compositor', notes: 'Post-production: particles, grading, loop editing', status: 'needed' },
                { role: 'Scenic / Greens Lead', notes: 'Fabricate the garden grove environment', status: 'needed' },
                { role: 'Dancer / Model (Eve)', notes: 'Slow, breath-led movement — power and surrender', status: 'needed' },
                { role: 'Sound Designer', notes: 'Heartbeat pulse, wind, whispered sacred words', status: 'needed' },
                { role: 'Cinematographer', notes: '4K/6K on black, soft key + back rim light, 10-bit log', status: 'needed' }
            ]
        }
    ];

    // Exhibition and artist statements
    const statements = {
        artist: {
            text: '',
            status: 'draft'
        },
        exhibition: {
            text: `READ THE FINE PRINT — Exhibition Statement

To be a woman in today's world is to live inside a contradiction. She is glorified and diminished, desired and disciplined, visible and erased. Her body is sacred and scrutinized. Her labor is essential and expected. Her presence is praised, so long as it remains palatable.

READ THE FINE PRINT emerges from a refusal to leave these contradictions unnamed.

This exhibition is not an argument. It is an experience — an attempt to render visible what so many women feel but struggle to articulate: the quiet negotiations, the anticipatory self-editing, the subtle narrowing of expression that accumulates over a lifetime. It asks what has been internalized as "just who I am," and what has been inherited without conscious consent.

Across immersive installations, projection, sound, and sculptural work, the exhibition brings to the surface the invisible architecture shaping female identity. It explores the crossroads where women stand daily — between self-expression and safety, between honesty and acceptability, between vitality and approval. It reveals how attention becomes atmosphere, how goodness becomes performance, and how expectation becomes embodied.

At its core, READ THE FINE PRINT is an invitation to recognition. Not recognition of ideology, but of sensation. Of tightening. Of monitoring. Of exhaustion. Of the subtle trade between belonging and aliveness. The works do not dictate what to believe. They create space for participants to feel where they themselves participate in, benefit from, resist, or reinforce these systems.

This exhibition does not resolve the tension it exposes. It illuminates it. It offers language where there has been only intuition, structure where there has been only atmosphere. And in doing so, it asks a larger question:

If these are the terms we have been living by, what would it mean to finally read them?

---

LONGER VERSION (The Liberated Woman):

To be a woman in today's world is to live at the intersection of worship and erasure. We are exalted as symbols, consumed as objects, disciplined into silence, and yet expected to carry the unbearable weight of life itself. Our bodies, our voices, our very vulvas—the portals through which humanity enters—have been shrouded in shame, stripped of reverence, and sold back to us as commodities.

This exhibition dares to confront those contradictions head-on. Each piece is a rupture, a reclamation, a refusal. These works are not polite. They are not "pretty." They are mirrors held up to the enculturation of women: the obsession with youth as relevance, the martyrdom demanded in motherhood, the mental load that drowns us, the glass ceilings that cut our hands as we break through. They name the way religion has sanctified our smallness, the way beauty has been manufactured to keep us desirable and therefore controlled, the way men's lack of control has been laid at our feet as our responsibility.

Here, the vulva is no longer pornographic or obscene. It is holy ground. Here, women's tears are not hidden but crystallized into monuments. Here, the outlaw Eve reclaims the garden. Here, relevance is defined not by smooth skin but by fire in the eyes.

The Liberated Woman is not an invitation to simply look. It is an invitation to feel: discomfort, rage, grief, reverence, awe. To remember the ways women have been bound, and to witness the ways we are breaking free.

Step inside with your body, not just your mind. You may be unsettled. You may be moved. You may be undone. That is the point. Because to meet The Liberated Woman is to meet the part of yourself that refuses to be caged. Once she rises, she cannot be silenced. Once she is seen, she cannot be forgotten. Once liberated, she liberates us all.

---

ENTRANCE WALL TEXT (Short Version):

To be a woman today is to carry both reverence and erasure: worshipped as symbols, consumed as objects, and praised for sacrifice while silenced in power.

This exhibition confronts those contradictions with works that are not polite or "pretty" but raw, provocative, and alive. Each piece reveals the ways women have been bound by youth, beauty, religion, motherhood, and the gaze—and the ways we are breaking free.

Here, the vulva is holy ground. Here, tears become monuments. Here, mothers, outlaws, and daughters reclaim their fire.

The Liberated Woman is not an invitation to simply look. It is an invitation to feel. To meet the part of yourself that refuses to be caged. Once she rises, she cannot be silenced. Once she is seen, she cannot be forgotten.

---

CLOSING INVOCATION:

You have walked through her story.
You have seen her bound, silenced, drowned, distorted.
You have witnessed her rebellion, her outlawry, her defiance.
And you have stood in her radiance, whole and alive.

Now remember: she is not only here on these walls.
She is in you.
In your rage and in your tenderness.
In your hunger and in your holiness.
In every part of you that has been shamed, silenced, or outlawed.

Take her with you.
Live her.
Speak her.
Become her.

For when the cages fall — those built by society and perpetuated by ourselves —
we liberate our wholeness, our authenticity, and our fullest expression of our divine nature.

---

EXIT INVOCATION:

When the cages fall,
those built by society and those we built within,
what rises is wholeness and authenticity —
the radiant expression of our divine nature.
The liberated woman lives in you.`,
            status: 'draft'
        }
    };

    // Build the full data object
    const fullData = {
        pieces: pieces,
        milestones: [
            { id: 'ms1', title: 'Exhibition Target Date', date: '2026-09-10', pieceId: '', color: '#e74c3c' }
        ],
        expenses: [],
        inspiration: [],
        teamNeeds: [
            { id: 'tn1', role: 'Metal Fabricator / Welder', pieces: 'Multiple pieces', skills: 'Custom metalwork, armatures, mounting systems', budget: 0, status: 'needed', contact: '' },
            { id: 'tn2', role: 'Underwater Cinematographer', pieces: 'DROWNING', skills: 'Slow-motion underwater filming, 4K+', budget: 0, status: 'needed', contact: '' },
            { id: 'tn3', role: 'Hologram / AV Specialist', pieces: 'EVE ASCENDING', skills: 'Hologauze or Pepper\'s Ghost installation, projection mapping', budget: 0, status: 'needed', contact: '' },
            { id: 'tn4', role: 'Sound Designer', pieces: 'DROWNING, SEA OF ATTENTION, MIRRORS, SAINT & OUTLAW, EVE ASCENDING', skills: 'Immersive soundscapes, spatial audio, recording', budget: 0, status: 'needed', contact: '' },
            { id: 'tn5', role: 'Sculptor / Mold Maker', pieces: 'THE RESOURCE, MOTHER OF SWORDS, GLASS CEILING, THE OBJECT OF MY TEARS', skills: 'Body casting, hand casting, resin/plaster work, figurative sculpting', budget: 0, status: 'needed', contact: '' },
            { id: 'tn6', role: 'Set Builder / Carpenter', pieces: 'THE RESOURCE, SEA OF ATTENTION, MIRRORS, OUTLAWS IN THE GARDEN', skills: 'Enclosures, corridors, room-scale installations', budget: 0, status: 'needed', contact: '' },
            { id: 'tn7', role: 'Portrait Photographer', pieces: 'THE SAINT AND THE OUTLAW, MIRRORS', skills: 'Two distinct lighting styles — luminous and dramatic shadow', budget: 0, status: 'needed', contact: '' },
            { id: 'tn8', role: 'Videographer / Director', pieces: 'SEA OF ATTENTION, DROWNING', skills: 'Film women in everyday moments + underwater', budget: 0, status: 'needed', contact: '' },
            { id: 'tn9', role: 'Scenic / Greens Artist', pieces: 'EVE ASCENDING, OUTLAWS IN THE GARDEN', skills: 'Faux garden fabrication, living installations', budget: 0, status: 'needed', contact: '' },
            { id: 'tn10', role: 'Lighting Designer', pieces: 'All pieces', skills: 'Gallery lighting, dramatic spotlighting, ambient control', budget: 0, status: 'needed', contact: '' },
            { id: 'tn11', role: 'Gallery Installer', pieces: 'All pieces', skills: 'Professional art hanging, mounting, gallery-standard installation', budget: 0, status: 'needed', contact: '' },
            { id: 'tn12', role: 'Exhibition Producer / PM', pieces: 'All', skills: 'Overall project management, vendor coordination, timeline management', budget: 0, status: 'needed', contact: '' }
        ],
        statements: statements,
        layout: { placements: [], notes: '' },
        budget: 40000,
        activity: [
            { text: 'Dashboard populated with 15 exhibition pieces from Google Doc', time: new Date().toISOString() },
            { text: 'Exhibition statement loaded', time: new Date().toISOString() },
            { text: 'Team hiring needs identified (12 roles)', time: new Date().toISOString() }
        ]
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(fullData));
    alert('Dashboard populated with 15 pieces, exhibition statement, and team needs! Reloading...');
    window.location.reload();
})();
