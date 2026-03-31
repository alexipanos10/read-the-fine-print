// One-time: Add Notes app ideas as "Save for Later" pieces
(function() {
    const STORAGE_KEY = 'rtfp_exhibition_data';
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!data.pieces) data.pieces = [];

    // Check if already added
    if (data.pieces.find(p => p.id === 'notes-discarded-devices')) return;

    const ideas = [
        { title: 'THE UPGRADE', desc: 'Woman made of discarded devices — pointing to how when she\'s no longer useful, people upgrade to a new model.' },
        { title: 'LINEAGE / THE INHERITANCE', desc: 'An aggregate of many women\'s images pasted over each other, showing how the lineage of women and their programming is passed down and shapes who you are today. Could be of all the women in my own family as a self-portrait.' },
        { title: 'LIVE DATA: VIOLENCE AGAINST WOMEN', desc: 'A live visual representation of violence against women — real-time data rendered visible.' },
        { title: 'WOMEN WHO BUILD SHIT', desc: 'A huge canvas comprised of different shaped breasts. Speaks to what women have built around us — every single human being on this planet, from our bodies. Put real objects into a resin composite.', medium: 'Resin composite, mixed objects' },
        { title: 'TEARS', desc: 'Tears flowing down something that looks like water, drilled in.' },
        { title: 'PULSE', desc: 'Heart rate monitor that creates a pulse and adds to a rhythmic song. Interactive/participatory.' },
        { title: 'ARE WE THERE YET?', desc: 'Mannequins of women\'s bodies with certain aspects blown up and shrunk — stomach, breasts, lips, cheeks. The idea that women are constantly investing in their body toward what is "there" in that season.' },
        { title: 'WANTING / THE SEVEN SINS', desc: 'All the things we deny ourselves as a giant collage submitted by real women. The reclamation of power comes from engaging in the art itself. Maybe connected back-to-back with another large canvas hung from ceiling, rotating. One side: the sin (jealousy, subtly mapped in greyscale). Other side: a kaleidoscope of color and desire.' },
        { title: 'EASTER EGGS / HIDDEN SECRETS', desc: 'Hide secrets throughout the exhibition — Easter eggs woven into other works.' },
        { title: 'TOOLS OF LABOR', desc: 'Photos of hands, feet, bellies, breasts, hearts, minds, vulvas — basically a woman\'s body as the tools of labor.' },
        { title: 'THE OBSCENE', desc: 'Women being living beings — real, un-"processed." Unshaved legs, C-section scars, lower belly fat, tears, post-birth, breastfeeding, bush, eleven lines, forehead wrinkles, chin dropping.' },
        { title: 'BLUE LIQUID', desc: 'Blue liquid down the leg of a woman — society\'s repulsion and sanitation of where we all come from.' },
        { title: 'THE UNBECOMING', desc: 'Sculpture of a body breaking apart while one comes together at the central point of the body in the womb — the unbecoming.' },
        { title: 'HOURGLASS', desc: 'How do you want to spend your time aging? The implication of how we\'re put on a clock and valued based on it. Motion sensor release to show that time only matters as a construct when others exist within our sphere.' },
        { title: 'THE INITIATION / PHOENIX', desc: 'A large photographic image of a woman in her "performer era" burning down to the ground in the woods. Represents the dissolving, the initiation from the performer to the initiated. Burning down the mask. Shot in reverse so it looks like building back up from fire — like the Phoenix.' },
        { title: 'PHOTOCOPY', desc: 'Both of us strung up together — how it\'s been made into an object that\'s a replica of the real thing. We\'re only interfacing with the idea of it versus the real fullness. We\'ve sanitized it, taken the color out, flattened it — because being with the whole is sometimes too much.' },
        { title: 'THE MOTHER MACHINE', desc: 'A paint machine spitting out paint onto canvases. A nod to how our energy and focus goes to the finished product but we forget about the mother — we consider her the machine to give us what we want as a society.' },
        { title: 'STAY AFLOAT', desc: 'How society stays afloat, built off the backs of unpaid labor.' },
        { title: 'FLESH FOR FODDER', desc: 'Cheesecloth covered in latex, thin pieces hung/strung from above, representing all of the Epstein survivors that testified. A nod to how the world treats them as flesh for fodder rather than humans who deserve the dignity of justice.' },
        { title: 'THE ENDURING HEART', desc: 'A fabric sculpture of a giant heart that is pieced together with broken-open pieces stitched back together. Showing the endurance and fortitude of a woman\'s heart to live and exist in this world despite the constant heartbreak.' },
        { title: 'EMPTY PROMISES', desc: 'Hollow — a circular structure built out of Epstein files. Empty promises.' },
        { title: 'FLESH TONES', desc: 'Paint sample pieces in flesh tones, cut and glued in strips into patterns on a giant canvas. Representing the human experience — how we think we\'re all different but we\'re all part of one big canvas called earth.' },
        { title: 'SHEDDING', desc: 'Painting myself with latex and peeling it off as part of a video installation. Next to the video could be the pile of skin.' },
        { title: 'THE WITCH TRIALS', desc: 'Pitchforks hung up on the wall, covered in printing of the Epstein files so they look as if made fully out of paper. A nod to the Salem Witch Trials that persecuted women who were healers, holy women, women with intuition — yet we will not punish anyone from the Epstein files.' },
        { title: 'MOTHER EARTH / ROOTS', desc: 'Wire pulled apart and wrapped as a tree that goes into the roots and wraps around a fetus. Mother earth — and the opposite meaning that the mother is the creation point.' },
        { title: 'SPILT MILK', desc: 'White milk cartons in a sculpture around all the missing kids, with spilt milk around. Our sentiment to "get over it."' },
        { title: 'COLOR SUCCESSION', desc: 'Fabrics hung over wire in beautiful color succession.' }
    ];

    ideas.forEach((idea, i) => {
        data.pieces.push({
            id: 'notes-' + idea.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, ''),
            title: idea.title,
            type: 'mixed-media',
            stage: 'concept',
            showstopper: false,
            category: 'later',
            order: 100 + i,
            description: idea.desc,
            dimensions: '',
            medium: idea.medium || '',
            cost: 0,
            deadline: '',
            notes: 'From Notes app ideas',
            statement: '',
            statementStatus: 'draft',
            images: [],
            howTo: '',
            checklist: [],
            materials: [],
            teamNeeds: []
        });
    });

    data.activity = data.activity || [];
    data.activity.unshift({ text: 'Added 27 ideas from Notes app to Save for Later', time: new Date().toISOString() });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.location.reload();
})();
