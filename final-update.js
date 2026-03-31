// Combined one-time update: Notes ideas + UNSAID submissions
(function() {
    const STORAGE_KEY = 'rtfp_exhibition_data';
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!data.pieces) data.pieces = [];

    let changed = false;

    // === 1. Add Notes app ideas if not present ===
    if (!data.pieces.find(p => p.id === 'notes-the-upgrade')) {
        const ideas = [
            { id: 'notes-the-upgrade', title: 'THE UPGRADE', desc: 'Woman made of discarded devices — pointing to how when she\'s no longer useful, people upgrade to a new model.' },
            { id: 'notes-lineage', title: 'LINEAGE / THE INHERITANCE', desc: 'An aggregate of many women\'s images pasted over each other, showing how the lineage of women and their programming is passed down and shapes who you are today. Could be of all the women in my own family as a self-portrait.' },
            { id: 'notes-live-data', title: 'LIVE DATA: VIOLENCE AGAINST WOMEN', desc: 'A live visual representation of violence against women — real-time data rendered visible.' },
            { id: 'notes-women-who-build', title: 'WOMEN WHO BUILD SHIT', desc: 'A huge canvas comprised of different shaped breasts. Speaks to what women have built around us — every single human being on this planet, from our bodies. Put real objects into a resin composite.' },
            { id: 'notes-tears', title: 'TEARS', desc: 'Tears flowing down something that looks like water, drilled in.' },
            { id: 'notes-pulse', title: 'PULSE', desc: 'Heart rate monitor that creates a pulse and adds to a rhythmic song. Interactive/participatory.' },
            { id: 'notes-are-we-there', title: 'ARE WE THERE YET?', desc: 'Mannequins of women\'s bodies with certain aspects blown up and shrunk — stomach, breasts, lips, cheeks. The idea that women are constantly investing in their body toward what is "there" in that season.' },
            { id: 'notes-wanting', title: 'WANTING / THE SEVEN SINS', desc: 'All the things we deny ourselves as a giant collage submitted by real women. Reclamation of power comes from engaging in the art itself. Back-to-back canvases hung from ceiling, rotating. One side: the sin in greyscale. Other side: kaleidoscope of color and desire.' },
            { id: 'notes-easter-eggs', title: 'EASTER EGGS / HIDDEN SECRETS', desc: 'Hide secrets throughout the exhibition — Easter eggs woven into other works.' },
            { id: 'notes-tools-of-labor', title: 'TOOLS OF LABOR', desc: 'Photos of hands, feet, bellies, breasts, hearts, minds, vulvas — a woman\'s body as the tools of labor.' },
            { id: 'notes-the-obscene', title: 'THE OBSCENE', desc: 'Women being living beings — real, un-"processed." Unshaved legs, C-section scars, lower belly fat, tears, post-birth, breastfeeding, bush, wrinkles.' },
            { id: 'notes-blue-liquid', title: 'BLUE LIQUID', desc: 'Blue liquid down the leg of a woman — society\'s repulsion and sanitation of where we all come from.' },
            { id: 'notes-unbecoming', title: 'THE UNBECOMING', desc: 'Sculpture of a body breaking apart while one comes together at the central point of the body in the womb — the unbecoming.' },
            { id: 'notes-hourglass', title: 'HOURGLASS', desc: 'How do you want to spend your time aging? The implication of how we\'re put on a clock and valued based on it. Motion sensor release to show that time only matters as a construct when others exist within our sphere.' },
            { id: 'notes-phoenix', title: 'THE INITIATION / PHOENIX', desc: 'A large photographic image of a woman in her "performer era" burning down to the ground in the woods. The dissolving, the initiation from performer to initiated. Shot in reverse so it looks like building back up from fire — like the Phoenix.' },
            { id: 'notes-photocopy', title: 'PHOTOCOPY', desc: 'Both of us strung up together — how it\'s been made into a replica of the real thing. We\'re only interfacing with the idea versus the real fullness. We\'ve sanitized it, flattened it — because being with the whole is sometimes too much.' },
            { id: 'notes-mother-machine', title: 'THE MOTHER MACHINE', desc: 'A paint machine spitting out paint onto canvases. A nod to how our energy goes to the finished product but we forget about the mother — we consider her the machine to give us what we want.' },
            { id: 'notes-stay-afloat', title: 'STAY AFLOAT', desc: 'How society stays afloat, built off the backs of unpaid labor.' },
            { id: 'notes-flesh-fodder', title: 'FLESH FOR FODDER', desc: 'Cheesecloth covered in latex, thin pieces hung from above, representing Epstein survivors. How the world treats them as flesh for fodder rather than humans who deserve dignity and justice.' },
            { id: 'notes-enduring-heart', title: 'THE ENDURING HEART', desc: 'A fabric sculpture of a giant heart pieced together with broken-open pieces stitched back together. The endurance and fortitude of a woman\'s heart despite constant heartbreak.' },
            { id: 'notes-empty-promises', title: 'EMPTY PROMISES', desc: 'Hollow — a circular structure built out of Epstein files. Empty promises.' },
            { id: 'notes-flesh-tones', title: 'FLESH TONES', desc: 'Paint sample pieces in flesh tones, cut and glued in strips on a giant canvas. We think we\'re all different but we\'re all part of one big canvas called earth.' },
            { id: 'notes-shedding', title: 'SHEDDING', desc: 'Painting myself with latex and peeling it off as part of a video installation. Next to the video could be the pile of skin.' },
            { id: 'notes-witch-trials', title: 'THE WITCH TRIALS', desc: 'Pitchforks on the wall covered in Epstein file printing. A nod to Salem Witch Trials persecuting healers and holy women — yet we will not punish anyone from the Epstein files.' },
            { id: 'notes-mother-earth', title: 'MOTHER EARTH / ROOTS', desc: 'Wire pulled apart and wrapped as a tree going into roots, wrapping around a fetus. Mother earth — the mother is the creation point.' },
            { id: 'notes-spilt-milk', title: 'SPILT MILK', desc: 'White milk cartons sculpted around missing kids, with spilt milk around. Our sentiment to "get over it."' },
            { id: 'notes-color-succession', title: 'COLOR SUCCESSION', desc: 'Fabrics hung over wire in beautiful color succession.' }
        ];

        ideas.forEach((idea, i) => {
            data.pieces.push({
                id: idea.id,
                title: idea.title,
                type: 'mixed-media',
                stage: 'concept',
                showstopper: false,
                category: 'later',
                order: 100 + i,
                description: idea.desc,
                dimensions: '',
                medium: '',
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
        changed = true;
    }

    // === 2. Add UNSAID submissions to the UNSAID piece ===
    const unsaidPiece = data.pieces.find(p => p.id === 'unsaid');
    if (unsaidPiece && !unsaidPiece.submissions) {
        unsaidPiece.submissions = [
            "My father sold me to groups of men raping me when I was 5-10 years old and worse",
            "I resent having to be my mothers parent my entire life",
            "There was very little aftercare from men after hard sex",
            "My step brother tried to rape me when I was six",
            "I carry fear and shame about nude photos of me that were shared on the internet at age 16",
            "I can't keep on abandoning myself just to keep others comfortable",
            "I settled in my marriage. I love him, but I am not in love.",
            "I've spent over 3 decades suppressing memories due to dissociative amnesia",
            "I shared what my stepfather did, and officers questioned me and no consequences for him.",
            "There are days I don't want to be a mom at all. I just want to leave everything behind.",
            "My guilt and shame I hold around my co-dependant behaviors and lies that led to the birth of my child.",
            "I'm really struggling right now",
            "Being a single mom full time is exhausting",
            "I was raped by a man I thought was a friend after a breakup with a serious boyfriend",
            "It's been over a decade and I still feel terrified and unsafe around men",
            "It's hard to have it all as a single mom",
            "How much my dad and step mom hurt me growing up",
            "I want out of this relationship and feel guilted into staying",
            "I'm sick of having an extra child in my husband who is inconsiderate of anyone other than himself.",
            "My husband cheated on me during my 3rd pregnancy with someone that was a close friend..and everyone in our world still celebrated him like he was the most amazing man alive",
            "I resent my husband for having a life, meeting up with friends, working out, and putting all of that before our family and stuff to do at home. That all falls on me, and is just kind of an unspoken expectation.",
            "My husband and I work together, and I do most of the IP and creative for our brand, and yet he gets accredited as the brainchild behind it all.",
            "I don't know who I am outside of what other people need from me.",
            "I'm angry at how much of my life has been shaped by men's moods.",
            "I feel invisible in my own marriage.",
            "I'm exhausted by pretending I'm okay when I'm not.",
            "I don't trust my body anymore.",
            "I feel guilty for wanting more than this life.",
            "I learned very young that my needs were inconvenient.",
            "I don't remember the last time I felt truly rested.",
            "I feel like I'm carrying everyone else's emotions but my own.",
            "I'm scared to tell the truth because I don't want to be blamed for what happens next.",
            "I've confused survival with strength for most of my life.",
            "I don't feel chosen—I feel tolerated.",
            "I stay quiet because it's easier than being misunderstood.",
            "I'm resentful of how much emotional labor is expected of me without being named.",
            "I don't feel safe being fully myself, even with people who love me.",
            "I'm afraid that if I stop holding everything together, everything will fall apart.",
            "I feel responsible for other people's happiness at the expense of my own.",
            "I've normalized pain so deeply that I don't know what ease feels like anymore.",
            "I don't know how to ask for what I need without feeling ashamed.",
            "I'm grieving the version of myself I never got to become.",
            "I receive death threats to myself and my family for speaking out for the rights of black and brown people"
        ];
        changed = true;
    }

    if (changed) {
        data.activity = data.activity || [];
        data.activity.unshift(
            { text: 'Added 27 ideas from Notes app to Save for Later', time: new Date().toISOString() },
            { text: 'Added 43 UNSAID submissions from social media collection', time: new Date().toISOString() }
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        window.location.reload();
    }
})();
