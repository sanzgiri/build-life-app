// Data Storage Keys
const STORAGE_KEYS = {
  user: 'buildLife_user',
  entries: 'buildLife_entries',
  progress: 'buildLife_progress'
};

// Program Data
const PROGRAM_DATA = {
  weeks: [
    {
      week: 1,
      theme: "Emotional Self-Management Tools",
      focusAreas: [
        "Metacognition: Observing emotions without being absorbed by them",
        "Emotional Substitution: Consciously choosing productive emotions",
        "Reducing Self-Focus: Turning attention outward to increase inner happiness"
      ],
      days: [
        {
          day: 1,
          title: "What is Metacognition?",
          concept: "Metacognition is the ability to step back and observe your emotions as if they were clouds passing in the sky, rather than being trapped inside the storm. Viktor Frankl's key insight: between a stimulus and response, there is a space. In that space lies your freedom and power to choose.",
          reflectionQuestion: "When you feel overwhelmed today, can you pause and notice your emotion from the outside, like watching a movie of yourself?",
          pillar: "emotional",
          suggestedReadings: [
            { title: "Man's Search for Meaning - Viktor Frankl excerpt", description: "Foundational text on the space between stimulus and response", link: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning" },
            { title: "The Observer's Mind - Psychology Today", description: "How metacognition rewires your brain's response patterns", link: "https://www.psychologytoday.com/us/basics/metacognition" },
            { title: "TED - Brené Brown on vulnerability and awareness", description: "Understanding emotions from a distance", link: "https://www.ted.com/speakers/brene_brown" }
          ]
        },
        {
          day: 2,
          title: "Practicing the Observer Stance",
          concept: "Today, practice stepping into the role of an observer of your own mind. Notice when you have an emotion, but don't immediately act on it. Label it: 'I'm having the feeling of anxiety,' not 'I am anxious.' This small linguistic shift creates the space between you and your emotion.",
          reflectionQuestion: "What emotion did you observe today without letting it control you? What changed when you named it from a distance?",
          pillar: "emotional",
          suggestedReadings: [
            { title: "Mindfulness and the Observer Effect", description: "How naming emotions reduces their intensity", link: "https://www.mindful.org/" },
            { title: "Podcast: The Happiness Lab - Emotional Awareness", description: "Real stories of people mastering their emotional life", link: "https://www.happinesslab.fm/" },
            { title: "Psychology: Emotion Regulation Techniques", description: "Science-backed methods for emotional observation", link: "https://www.apa.org/topics/emotion" }
          ]
        },
        {
          day: 3,
          title: "The Freedom Between Stimulus and Response",
          concept: "Every moment offers a choice. Someone cuts you off in traffic (stimulus) → you feel anger (automatic) → but BEFORE you respond, you have freedom to choose your response. This is where your power lies. The space grows larger the more you practice noticing it.",
          reflectionQuestion: "Can you identify one moment today where you noticed the space between stimulus and response? What did you choose?",
          pillar: "emotional",
          suggestedReadings: [
            { title: "Stoic Philosophy and the Space Between", description: "Ancient wisdom on choice and control", link: "https://dailystoic.com/" },
            { title: "Neuroscience of Choice in Emotional Moments", description: "How your brain creates options even under stress", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2658896/" },
            { title: "Article: The Power of the Pause", description: "Real-world applications of stimulus-response space", link: "https://hbr.org/2012/11/breathe-before-you-speak" }
          ]
        },
        {
          day: 4,
          title: "Emotional Substitution: Choosing Better Feelings",
          concept: "You cannot directly choose to stop feeling sad, but you can substitute sadness with hope, humor, or gratitude. When you notice you're in a negative emotional state, consciously invite a different emotion. It's like switching radio stations instead of trying to turn off the radio.",
          reflectionQuestion: "When you felt a negative emotion today, what positive emotion could you have substituted? How would that have changed your moment?",
          pillar: "emotional",
          suggestedReadings: [
            { title: "The Art of Emotional Alchemy", description: "Converting difficult feelings into productive ones", link: "https://www.psychologytoday.com/us/blog/emotional-fitness" },
            { title: "Gratitude as an Emotional Substitute", description: "Why gratitude is the most powerful emotional switch", link: "https://greatergood.berkeley.edu/topic/gratitude" },
            { title: "Research: Can You Choose Your Emotions?", description: "The science of emotional substitution", link: "https://www.apa.org/science/about/psa/2011/05/emotional-substitution" }
          ]
        },
        {
          day: 5,
          title: "Practicing Substitution: Humor, Gratitude, and Hope",
          concept: "Three powerful emotions to substitute into difficult moments: Humor (finding the absurdity), Gratitude (finding what's working), and Hope (envisioning possibility). Each one has different power depending on the situation. Today, practice all three.",
          reflectionQuestion: "Which of the three—humor, gratitude, or hope—felt most natural to you today? Which one do you need to practice more?",
          pillar: "emotional",
          suggestedReadings: [
            { title: "The Three Substitutes for Suffering", description: "Deepening your emotional toolkit", link: "https://www.theatlantic.com/magazine/archive/2022/03/how-to-build-a-life-happiness/621305/" },
            { title: "Humor as Medicine - Medical Research", description: "How laughter physically changes your brain", link: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-relief/art-20044456" },
            { title: "Hope in Action - Psychology Today", description: "Building futures that pull you forward", link: "https://www.psychologytoday.com/us/basics/hope" }
          ]
        },
        {
          day: 6,
          title: "Breaking the Self-Focus Trap",
          concept: "The inner-outer paradox: when you obsess about your own happiness, you become less happy. When you turn your attention outward—to others, to beauty, to contribution—your inner happiness increases. Your happiness grows from the outside in, not the inside out.",
          reflectionQuestion: "When did you focus outward today? Who did you help, or what beauty did you notice? How did that affect your inner state?",
          pillar: "emotional",
          suggestedReadings: [
            { title: "The Paradox of Happiness", description: "Why chasing happiness fails and what works instead", link: "https://www.psychologytoday.com/us/blog/the-happiness-project" },
            { title: "Service and Joy - The Selfish Benefits of Selflessness", description: "How helping others transforms your own life", link: "https://greatergood.berkeley.edu/article/item/how_giving_makes_us_happy" },
            { title: "Presence and the Beauty Around You", description: "Noticing what's already there", link: "https://www.mindful.org/how-to-practice-mindfulness/" }
          ]
        },
        {
          day: 7,
          title: "Week 1 Integration: Your Emotional Toolkit Complete",
          concept: "You now have three powerful tools: (1) Metacognition—stepping back to observe, (2) Emotional substitution—choosing better feelings, (3) Reducing self-focus—looking outward. These aren't one-time skills; they're muscles that grow stronger with daily use. This week you've laid the foundation for everything that follows.",
          reflectionQuestion: "Which of the three tools will you use most in the coming weeks? Why? How has this week changed how you relate to your emotions?",
          pillar: "emotional",
          suggestedReadings: [
            { title: "Integration: The Week Ahead", description: "How these tools work together in real life", link: "https://www.theatlantic.com/magazine/archive/2022/03/how-to-build-a-life-happiness/621305/" },
            { title: "Daily Practices That Stick", description: "Making emotional tools habitual", link: "https://jamesclear.com/atomic-habits" },
            { title: "The Feeling That Follows: Week 2 Preview", description: "Building on your foundation", link: "https://arthurbrooks.com/" }
          ]
        }
      ]
    },
    {
      week: 2,
      theme: "Happiness Formula & The Four Pillars Introduction",
      focusAreas: [
        "Satisfaction = Haves ÷ Wants",
        "Introduction to Enjoyment, Satisfaction, Purpose",
        "The Four Pillars: Family, Friendship, Work, Faith"
      ],
      days: [
        { day: 8, title: "The Satisfaction Formula Revealed", concept: "Satisfaction is calculated by a simple but profound equation: Satisfaction = Haves ÷ Wants. To increase satisfaction, you have two options: (1) Increase what you have (get more), or (2) Decrease what you want (desire less). The second option is often overlooked but far more powerful than the first.", reflectionQuestion: "What are your top 5 wants right now? Are they essential to your happiness, or would releasing them increase your satisfaction?", pillar: "general", suggestedReadings: [{ title: "The Enough Problem - Arthur Brooks", description: "Understanding the wanting mechanism", link: "https://arthurbrooks.com/" }] },
        { day: 9, title: "Enjoyment vs. Pleasure", concept: "Pleasure is fleeting and often passive (eating ice cream, scrolling social media). Enjoyment is lasting and active (deep conversation, creating art, meaningful work). Happiness comes from maximizing enjoyment, not pleasure.", reflectionQuestion: "What brings you genuine enjoyment versus temporary pleasure? How can you choose more enjoyment today?", pillar: "general", suggestedReadings: [{ title: "Flow: The Psychology of Optimal Experience", description: "Understanding deep engagement and enjoyment", link: "https://www.psychologytoday.com/us/basics/flow" }] },
        { day: 10, title: "Introduction to the Four Pillars", concept: "Happiness is built on four pillars: Family (bonds we're given), Friendship (bonds we choose), Work (love made visible), and Faith (connection to something transcendent). Today, reflect on each pillar in your life.", reflectionQuestion: "Which of the four pillars feels strongest in your life right now? Which needs the most attention?", pillar: "general", suggestedReadings: [{ title: "Build the Life You Want - Arthur Brooks & Oprah", description: "Introduction to the four pillars framework", link: "https://www.oprah.com/inspiration/oprah-and-arthur-brooks-how-to-build-the-life-you-want" }] },
        { day: 11, title: "The Family Pillar Preview", concept: "Family relationships are our first teachers of love. They come with history, complexity, and sometimes pain. Yet investing in family bonds—even difficult ones—is essential to building a life you want.", reflectionQuestion: "What is one family relationship you'd like to strengthen? What small step could you take this week?", pillar: "general", suggestedReadings: [{ title: "The Importance of Family in Mental Health", description: "Research on family bonds and well-being", link: "https://www.apa.org/topics/families" }] },
        { day: 12, title: "The Friendship Pillar Preview", concept: "Quality friendships are chosen bonds that sustain us through life. Research shows that having at least one close friend outside your primary relationship significantly increases happiness and longevity.", reflectionQuestion: "Do you have one person you can be completely yourself with? If not, what friendship could you deepen?", pillar: "general", suggestedReadings: [{ title: "The Science of Friendship", description: "Why close friends matter for health and happiness", link: "https://greatergood.berkeley.edu/topic/friendship" }] },
        { day: 13, title: "The Work Pillar Preview", concept: "Work is where we spend most of our waking hours. When work feels meaningful—when it's love made visible—it becomes a source of deep satisfaction rather than drudgery. Intrinsic motivation matters more than external rewards.", reflectionQuestion: "What makes your work feel meaningful? If it doesn't, what changes could make it more aligned with your values?", pillar: "general", suggestedReadings: [{ title: "Drive: The Surprising Truth About What Motivates Us", description: "Intrinsic vs extrinsic motivation at work", link: "https://www.danpink.com/books/drive/" }] },
        { day: 14, title: "The Faith Pillar Preview", concept: "Faith isn't necessarily religious. It's any practice that connects you to something larger than yourself—nature, art, meditation, philosophy, or religion. This transcendence is essential for a fully realized life.", reflectionQuestion: "What connects you to something larger than yourself? How often do you cultivate that connection?", pillar: "general", suggestedReadings: [{ title: "The Role of Spirituality in Well-Being", description: "Research on transcendence and life satisfaction", link: "https://greatergood.berkeley.edu/topic/spirituality" }] }
      ]
    },
    {
      week: 3,
      theme: "Family Pillar - Love and Bonds",
      focusAreas: [
        "Family relationships and intentional communication",
        "Managing conflict and expectations",
        "Building unconditional love and trust"
      ],
      days: [
        { day: 15, title: "Understanding Family Bonds", concept: "Family is the bonds we are given. Unlike friendships which we choose, family members are predetermined. The challenge is to build intentional, honest relationships with people we didn't select. This requires understanding that conflict is normal and even valuable for growth.", reflectionQuestion: "Who in your family do you have the most tension with? What if that tension is pointing to something that needs attention and care?", pillar: "family", suggestedReadings: [{ title: "The Art of Family Conflict Resolution", description: "Using conflict as a bridge to closeness", link: "https://www.psychologytoday.com/us/basics/family-dynamics" }] },
        { day: 16, title: "Communication in Family", concept: "Most family conflict stems from unspoken expectations and assumptions. Practice clear, direct communication: state what you need, ask what others need, and negotiate from a place of care rather than control.", reflectionQuestion: "What's one unspoken expectation you hold for a family member? Could you communicate it clearly and kindly?", pillar: "family", suggestedReadings: [{ title: "Nonviolent Communication", description: "Speaking and listening from the heart", link: "https://www.cnvc.org/" }] },
        { day: 17, title: "Managing Expectations", concept: "Disappointment = Expectations - Reality. When family members don't meet our expectations, we suffer. The solution isn't to abandon expectations entirely, but to hold them lightly and communicate them clearly.", reflectionQuestion: "What expectation of a family member has caused you disappointment? Can you adjust your expectation or communicate it better?", pillar: "family", suggestedReadings: [{ title: "The Expectation Effect", description: "How expectations shape our relationships", link: "https://www.psychologytoday.com/us/blog/fulfillment-any-age/201403/5-ways-manage-your-expectations" }] },
        { day: 18, title: "Forgiveness and Repair", concept: "Family relationships require forgiveness—not because what happened was okay, but because holding grudges poisons your own well-being. Forgiveness is a gift you give yourself, not an endorsement of bad behavior.", reflectionQuestion: "Is there a family wound you've been carrying? What would it feel like to begin the process of forgiveness?", pillar: "family", suggestedReadings: [{ title: "The Science of Forgiveness", description: "How letting go heals your body and mind", link: "https://greatergood.berkeley.edu/topic/forgiveness" }] },
        { day: 19, title: "Quality Time with Family", concept: "Presence is the greatest gift you can give family. Put away your phone, turn off distractions, and be fully with the people who matter most. Even 20 minutes of undivided attention creates lasting bonds.", reflectionQuestion: "When was the last time you gave a family member your complete, undivided attention? Schedule it for this week.", pillar: "family", suggestedReadings: [{ title: "The Power of Being Present", description: "Why attention is the most valuable currency", link: "https://www.mindful.org/category/family/" }] },
        { day: 20, title: "Building Family Traditions", concept: "Traditions—however small—create shared identity and meaning. They don't have to be elaborate: weekly dinners, annual trips, or simple rituals that say 'this is who we are together.'", reflectionQuestion: "What's one small family tradition you could start or revive? What would it symbolize?", pillar: "family", suggestedReadings: [{ title: "The Importance of Family Rituals", description: "How traditions strengthen bonds", link: "https://www.apa.org/monitor/2019/03/family-rituals" }] },
        { day: 21, title: "Week 3 Integration: Family Matters", concept: "Family is where we first learn to love and be loved. This week you've explored how to communicate better, manage expectations, practice forgiveness, and build meaningful connection. These skills transform not just family relationships, but all relationships.", reflectionQuestion: "What's the most important insight you gained this week about family? How will you apply it going forward?", pillar: "family", suggestedReadings: [{ title: "The Family Crucible", description: "How family shapes everything else", link: "https://www.goodreads.com/book/show/163464.The_Family_Crucible" }] }
      ]
    },
    {
      week: 4,
      theme: "Friendship Pillar - Chosen Bonds",
      focusAreas: [
        "Intentional friendships and quality relationships",
        "The importance of at least one close friend",
        "Friendship as a practice, not a feeling"
      ],
      days: [
        { day: 22, title: "The Power of One Close Friend", concept: "Research shows that having at least one close friend outside your primary relationship is crucial for happiness. This isn't about popularity; it's about depth. One genuine friendship beats a hundred acquaintances. The happiest people invest intentionally in a small number of deep friendships.", reflectionQuestion: "Do you have one person you can be completely yourself around? If not, what's stopping you from deepening a friendship that matters to you?", pillar: "friendship", suggestedReadings: [{ title: "Friendship in the Modern Age", description: "Why close friendships are rarer and more precious", link: "https://greatergood.berkeley.edu/topic/friendship" }] },
        { day: 23, title: "Quality Over Quantity", concept: "Social media has confused us: we think 500 online connections equal friendship. True friendship requires vulnerability, time, and reciprocity. You cannot have 50 close friends. Focus on depth, not breadth.", reflectionQuestion: "How many people do you trust completely? What would it take to deepen one friendship this month?", pillar: "friendship", suggestedReadings: [{ title: "Dunbar's Number: The Science of Social Limits", description: "Why we can only maintain a few deep friendships", link: "https://www.bbc.com/future/article/20191001-dunbars-number-why-we-can-only-maintain-150-relationships" }] },
        { day: 24, title: "Vulnerability as the Bridge", concept: "Brené Brown teaches that vulnerability is not weakness; it's the birthplace of connection. To have a close friend, you must be willing to be known—to share your fears, failures, and authentic self. This requires courage.", reflectionQuestion: "What part of yourself do you hide from others? What would happen if you shared it with someone you trust?", pillar: "friendship", suggestedReadings: [{ title: "The Gifts of Imperfection - Brené Brown", description: "Vulnerability and wholehearted living", link: "https://brenebrown.com/" }] },
        { day: 25, title: "Friendship as a Practice", concept: "Friendship isn't a feeling; it's a practice. It requires intentional effort: reaching out, showing up, listening deeply, celebrating wins, and grieving losses together. Good friendships are built, not found.", reflectionQuestion: "When did you last reach out to a friend just to check in? Make that call or text today.", pillar: "friendship", suggestedReadings: [{ title: "How to Maintain Friendships", description: "Practical strategies for staying connected", link: "https://www.psychologytoday.com/us/blog/friendship-20" }] },
        { day: 26, title: "Reciprocity and Balance", concept: "Healthy friendships have give and take. If you're always the one reaching out, or always the one being supported, the friendship is out of balance. True friendship is reciprocal, though it doesn't have to be perfectly equal at every moment.", reflectionQuestion: "Are your friendships in balance? Where do you need to give more, or ask for more?", pillar: "friendship", suggestedReadings: [{ title: "The Reciprocity Principle in Relationships", description: "Why balance matters in friendship", link: "https://www.psychologytoday.com/us/basics/relationships" }] },
        { day: 27, title: "Navigating Friendship Seasons", concept: "Some friendships are for a season, some for a reason, and some for a lifetime. It's okay for friendships to change or end. What matters is that you honor what was meaningful and remain open to new connections.", reflectionQuestion: "Is there a friendship that has run its course? Can you honor it and let it go with gratitude?", pillar: "friendship", suggestedReadings: [{ title: "When Friendships End", description: "Understanding natural friendship transitions", link: "https://www.psychologytoday.com/us/blog/my-brothers-keeper/202005/when-friendships-end" }] },
        { day: 28, title: "Week 4 Integration: Choosing Connection", concept: "Friendship is the pillar of chosen love. Unlike family, you select who belongs in your inner circle. This week you've learned that depth beats breadth, vulnerability creates connection, and friendship is a practice. These insights can transform your social life.", reflectionQuestion: "What's your biggest takeaway from this week on friendship? What's one action you'll take to strengthen a friendship?", pillar: "friendship", suggestedReadings: [{ title: "The Art of Friendship", description: "Cultivating meaningful connection", link: "https://greatergood.berkeley.edu/article/item/five_ways_to_cultivate_friendship" }] }
      ]
    },
    {
      week: 5,
      theme: "Work Pillar - Meaningful Contribution",
      focusAreas: [
        "Work as love made visible",
        "Intrinsic vs extrinsic rewards",
        "Finding meaning in your daily labor"
      ],
      days: [
        { day: 29, title: "Work as Love Made Visible", concept: "The poet Kahlil Gibran wrote, 'Work is love made visible.' Your job satisfaction and life satisfaction are deeply connected. The key is to understand what makes work meaningful: intrinsic rewards (personal fulfillment, service to others, growth) vs extrinsic rewards (money, status). Intrinsic rewards drive deeper happiness.", reflectionQuestion: "In your current work, what activities feel most meaningful? Are they connected to intrinsic or extrinsic rewards?", pillar: "work", suggestedReadings: [{ title: "The Prophet - Work Section - Kahlil Gibran", description: "Beautiful reflection on the nature of meaningful work", link: "https://www.gutenberg.org/files/58585/58585-h/58585-h.htm" }] },
        { day: 30, title: "Intrinsic vs Extrinsic Motivation", concept: "Extrinsic motivation (money, titles, recognition) gets you started, but intrinsic motivation (purpose, autonomy, mastery) keeps you going. Research shows that beyond a basic salary threshold, intrinsic rewards predict job satisfaction far better than pay.", reflectionQuestion: "What aspects of your work are intrinsically motivating? How can you increase those elements?", pillar: "work", suggestedReadings: [{ title: "Drive - Daniel Pink", description: "The science of what motivates us", link: "https://www.danpink.com/books/drive/" }] },
        { day: 31, title: "Finding Meaning in Any Job", concept: "Even if your job isn't your 'calling,' you can find meaning in how you do it. Are you serving others? Learning new skills? Providing for loved ones? Meaning often comes from the story you tell about your work, not just the work itself.", reflectionQuestion: "If you had to explain why your work matters, what would you say? How does it contribute to something larger?", pillar: "work", suggestedReadings: [{ title: "The Art of Finding Meaning at Work", description: "Reframing your relationship with labor", link: "https://hbr.org/2018/01/9-out-of-10-people-are-willing-to-earn-less-money-to-do-more-meaningful-work" }] },
        { day: 32, title: "Work-Life Integration", concept: "The phrase 'work-life balance' suggests work and life are opposed. Instead, aim for integration: how can your work support your values and vice versa? When work aligns with who you are, the boundary becomes less important.", reflectionQuestion: "Does your work reflect your core values? If not, what small change could create better alignment?", pillar: "work", suggestedReadings: [{ title: "Work-Life Integration vs Balance", description: "A new paradigm for modern work", link: "https://www.forbes.com/sites/johnrampton/2018/09/12/work-life-integration-vs-work-life-balance/" }] },
        { day: 33, title: "The Blessing and Curse of Hustle Culture", concept: "Modern culture glorifies overwork, but burnout is real. Rest is not laziness; it's essential. You are not a productivity machine. You are a human being. Your worth isn't measured by output.", reflectionQuestion: "Are you resting enough? What would it look like to work hard and rest well?", pillar: "work", suggestedReadings: [{ title: "The Burnout Epidemic", description: "Why rest is revolutionary", link: "https://www.psychologytoday.com/us/basics/burnout" }] },
        { day: 34, title: "Crafting Your Job", concept: "Even if you can't change your job title, you can 'job craft'—reshape your tasks, relationships, and mindset to make work more meaningful. Small tweaks in how you approach your work can have big impacts on satisfaction.", reflectionQuestion: "What's one small way you could reshape your current work to make it more meaningful?", pillar: "work", suggestedReadings: [{ title: "Job Crafting: What It Is and Why It Matters", description: "How to redesign your work from within", link: "https://hbr.org/2020/03/what-job-crafting-looks-like" }] },
        { day: 35, title: "Week 5 Integration: Work as a Pillar", concept: "Work is where you spend most of your waking hours. When it feels meaningful—when it's love made visible—it becomes a source of deep satisfaction. This week you've explored intrinsic motivation, meaning-making, integration, rest, and job crafting. These insights can transform your relationship with work.", reflectionQuestion: "What's your biggest insight from this week? How will you apply it to make your work more meaningful?", pillar: "work", suggestedReadings: [{ title: "The Meaning of Work", description: "Synthesizing purpose and productivity", link: "https://www.mckinsey.com/featured-insights/sustainable-inclusive-growth/future-of-america/the-meaning-of-work" }] }
      ]
    },
    {
      week: 6,
      theme: "Faith & Integration - Living with Purpose",
      focusAreas: [
        "Spirituality and transcendence",
        "Connection beyond the self",
        "Integrating all four pillars into daily life"
      ],
      days: [
        { day: 36, title: "What is Faith?", concept: "Faith isn't necessarily religious. It's any transcendent approach to life that acknowledges something beyond yourself. It could be meditation, nature, philosophy, religion, or art. The key is consciously choosing to connect with something larger than your own ego and wants. This connection is what humans need to feel fully alive.", reflectionQuestion: "What connects you to something larger than yourself? How often do you actively cultivate that connection?", pillar: "faith", suggestedReadings: [{ title: "Spirituality Beyond Religion", description: "Understanding transcendence in secular terms", link: "https://greatergood.berkeley.edu/topic/spirituality" }] },
        { day: 37, title: "The Role of Awe", concept: "Awe is the feeling of being in the presence of something vast that transcends your current understanding. Research shows that experiencing awe—through nature, art, music, or ideas—increases life satisfaction and reduces self-focus.", reflectionQuestion: "When was the last time you felt awe? What can you do this week to seek out that experience?", pillar: "faith", suggestedReadings: [{ title: "The Power of Awe", description: "How transcendent experiences transform us", link: "https://greatergood.berkeley.edu/article/item/why_do_we_feel_awe" }] },
        { day: 38, title: "Meditation and Mindfulness", concept: "Meditation is a secular faith practice: it connects you to the present moment and to a deeper awareness beyond your chattering mind. Even 10 minutes a day can create profound shifts in how you relate to life.", reflectionQuestion: "Have you tried meditation? If not, what's holding you back? If so, how has it changed you?", pillar: "faith", suggestedReadings: [{ title: "Getting Started with Meditation", description: "A beginner's guide to mindfulness practice", link: "https://www.mindful.org/how-to-meditate/" }] },
        { day: 39, title: "Service as Transcendence", concept: "When you serve others—volunteer, mentor, support—you step outside your own concerns and connect to something larger. Service is a form of faith in action: it says 'I belong to a community, and my life has purpose beyond my own wants.'", reflectionQuestion: "How do you currently serve others? What new form of service could you explore?", pillar: "faith", suggestedReadings: [{ title: "The Science of Generosity", description: "How giving transforms the giver", link: "https://greatergood.berkeley.edu/topic/altruism" }] },
        { day: 40, title: "Integrating the Four Pillars", concept: "You've spent six weeks exploring the four pillars: Family, Friendship, Work, and Faith. True happiness comes when these pillars work together, each supporting the others. A life well-lived has strength in all four areas.", reflectionQuestion: "Looking at all four pillars, which is strongest in your life? Which needs more attention? How can you balance them?", pillar: "faith", suggestedReadings: [{ title: "Build the Life You Want - Summary", description: "Bringing it all together", link: "https://www.oprah.com/inspiration/oprah-and-arthur-brooks-how-to-build-the-life-you-want" }] },
        { day: 41, title: "Creating Your Daily Practice", concept: "Sustainable happiness requires daily practice: emotional self-management, nurturing relationships, finding meaning in work, and connecting to transcendence. The question isn't whether you'll face challenges; it's whether you have the tools to navigate them.", reflectionQuestion: "What daily practice will you commit to? What time of day, and for how long?", pillar: "faith", suggestedReadings: [{ title: "The Power of Habit", description: "Building practices that stick", link: "https://jamesclear.com/atomic-habits" }] },
        { day: 42, title: "Week 6 Integration: The Life You Want", concept: "You've completed six weeks of intentional work on building the life you want. You have tools for managing emotions, understanding satisfaction, strengthening family bonds, deepening friendships, finding meaning in work, and connecting to transcendence. This isn't the end; it's the beginning. The work continues daily, but now you know how.", reflectionQuestion: "What are you most proud of from these six weeks? What will you carry forward into your life?", pillar: "faith", suggestedReadings: [{ title: "Continuing Your Journey", description: "Next steps for sustained growth", link: "https://arthurbrooks.com/" }] }
      ]
    }
  ]
};

// App State
let appState = {
  currentView: 'welcome',
  user: null,
  entries: {},
  selectedWeek: null,
  selectedDay: null,
  filterPillar: 'all'
};

// Generate UUID for user identification
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Get or create user ID
function getUserId() {
  let userId = localStorage.getItem('buildLifeUserId');
  if (!userId) {
    userId = generateUUID();
    localStorage.setItem('buildLifeUserId', userId);
    console.log('Created new userId:', userId);
  }
  return userId;
}

// Initialize App
async function initApp() {
  await loadData();
  
  if (appState.user) {
    appState.currentView = 'dashboard';
  }
  
  render();
}

// Storage Functions - Using Netlify Blobs via Functions
async function loadData() {
  const userId = getUserId();
  console.log('Loading data for userId:', userId);
  
  try {
    const response = await fetch(`/.netlify/functions/loadProgress?userId=${userId}`);
    if (response.ok) {
      const data = await response.json();
      if (data.progressData) {
        // Restore state from loaded data
        if (data.progressData.user) appState.user = data.progressData.user;
        if (data.progressData.entries) appState.entries = data.progressData.entries;
        if (data.progressData.filterPillar) appState.filterPillar = data.progressData.filterPillar;
        console.log('Data loaded successfully from server');
      }
    } else {
      console.log('No previous data found, starting fresh');
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

async function saveData() {
  const userId = getUserId();
  const dataToSave = {
    user: appState.user,
    entries: appState.entries,
    filterPillar: appState.filterPillar,
    lastSaved: new Date().toISOString()
  };
  
  console.log('Saving data for userId:', userId);
  
  try {
    const response = await fetch('/.netlify/functions/saveProgress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, progressData: dataToSave })
    });
    
    if (response.ok) {
      console.log('Data saved successfully to server');
    } else {
      console.error('Failed to save data');
    }
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// View Navigation
function navigateTo(view, data = {}) {
  appState.currentView = view;
  if (data.week) appState.selectedWeek = data.week;
  if (data.day) appState.selectedDay = data.day;
  render();
  window.scrollTo(0, 0);
}

// Render Functions
function render() {
  const app = document.getElementById('app');
  
  if (appState.currentView === 'welcome') {
    app.innerHTML = renderWelcome();
  } else {
    app.innerHTML = `
      ${renderHeader()}
      <main class="main-content">
        ${renderCurrentView()}
      </main>
    `;
  }
  
  attachEventListeners();
}

function renderHeader() {
  return `
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">Build the Life You Want</h1>
        <nav>
          <ul class="nav-links">
            <li class="nav-link ${appState.currentView === 'dashboard' ? 'active' : ''}" data-nav="dashboard">Dashboard</li>
            <li class="nav-link ${appState.currentView === 'progress' ? 'active' : ''}" data-nav="progress">Progress</li>
            <li class="nav-link ${appState.currentView === 'notes' ? 'active' : ''}" data-nav="notes">Notes</li>
            <li class="nav-link ${appState.currentView === 'settings' ? 'active' : ''}" data-nav="settings">Settings</li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

function renderCurrentView() {
  switch (appState.currentView) {
    case 'dashboard':
      return renderDashboard();
    case 'week':
      return renderWeek();
    case 'lesson':
      return renderLesson();
    case 'progress':
      return renderProgress();
    case 'notes':
      return renderNotes();
    case 'settings':
      return renderSettings();
    default:
      return renderDashboard();
  }
}

function renderWelcome() {
  return `
    <div class="welcome-container">
      <div class="card">
        <div class="card-body">
          <h1 class="welcome-title">Welcome to Your Journey</h1>
          <p class="welcome-subtitle">A 6-week program to build the life you want, based on Arthur Brooks &amp; Oprah Winfrey's framework</p>
          
          <form id="welcome-form">
            <div class="form-group">
              <label class="form-label" for="user-name">Your Name</label>
              <input type="text" id="user-name" class="form-control" placeholder="Enter your name" required>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="user-email">Email (optional)</label>
              <input type="email" id="user-email" class="form-control" placeholder="your@email.com">
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%;">Start My Journey</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const totalDays = 42;
  const completedDays = Object.values(appState.entries).filter(e => e.completed).length;
  const progressPercent = Math.round((completedDays / totalDays) * 100);
  
  const currentDayNumber = Math.min(completedDays + 1, 42);
  const currentWeekData = PROGRAM_DATA.weeks.find(w => {
    const firstDay = (w.week - 1) * 7 + 1;
    const lastDay = w.week * 7;
    return currentDayNumber >= firstDay && currentDayNumber <= lastDay;
  }) || PROGRAM_DATA.weeks[0];
  
  const currentDayData = currentWeekData.days.find(d => d.day === currentDayNumber) || currentWeekData.days[0];
  
  return `
    <div class="greeting">
      <h1>Hello, ${appState.user.name}! 👋</h1>
      <p class="greeting-subtitle">Welcome back to your journey</p>
    </div>
    
    <div class="progress-section">
      <h3>Overall Progress</h3>
      <p>${completedDays} of ${totalDays} days completed (${progressPercent}%)</p>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${progressPercent}%"></div>
      </div>
    </div>
    
    <div class="current-week-card">
      <div class="week-label">Week ${currentWeekData.week} • Day ${currentDayNumber}</div>
      <h2 class="week-title">${currentWeekData.theme}</h2>
      <p style="color: var(--color-text-secondary); margin-bottom: 0;">
        Today's lesson: <strong>${currentDayData.title}</strong>
      </p>
      
      <div class="quick-actions">
        <button class="btn btn-primary" data-action="continue-lesson">Continue Today's Lesson</button>
        <button class="btn btn-outline" data-action="view-week" data-week="${currentWeekData.week}">View Week ${currentWeekData.week}</button>
      </div>
    </div>
    
    <h3 style="margin-bottom: var(--space-20);">All Weeks</h3>
    <div class="weeks-grid">
      ${PROGRAM_DATA.weeks.map(week => renderWeekCard(week)).join('')}
    </div>
  `;
}

function renderWeekCard(week) {
  const firstDay = (week.week - 1) * 7 + 1;
  const lastDay = week.week * 7;
  const completedInWeek = week.days.filter(d => appState.entries[d.day]?.completed).length;
  const progressPercent = Math.round((completedInWeek / 7) * 100);
  
  return `
    <div class="card week-card" data-action="view-week" data-week="${week.week}">
      <div class="card-body">
        <div class="week-number">Week ${week.week}</div>
        <h3 class="week-theme">${week.theme}</h3>
        <div class="week-progress">
          ${completedInWeek} of 7 days completed
          <div class="progress-bar-container" style="margin-top: var(--space-8);">
            <div class="progress-bar" style="width: ${progressPercent}%"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderWeek() {
  const week = PROGRAM_DATA.weeks.find(w => w.week === appState.selectedWeek);
  if (!week) return '<p>Week not found</p>';
  
  return `
    <button class="btn btn-secondary" data-action="back-to-dashboard" style="margin-bottom: var(--space-24);">
      ← Back to Dashboard
    </button>
    
    <div class="week-header">
      <div class="week-number">Week ${week.week}</div>
      <h1>${week.theme}</h1>
      <p class="week-description">
        This week focuses on building skills and awareness in the following areas:
      </p>
      
      <div class="focus-areas">
        <h4>Focus Areas</h4>
        <ul>
          ${week.focusAreas.map(area => `<li>${area}</li>`).join('')}
        </ul>
      </div>
    </div>
    
    <h3 style="margin-bottom: var(--space-20);">Daily Lessons</h3>
    <div class="days-grid">
      ${week.days.map(day => renderDayCard(day)).join('')}
    </div>
  `;
}

function renderDayCard(day) {
  const entry = appState.entries[day.day] || {};
  const status = entry.completed ? 'completed' : (entry.assessment || entry.notes ? 'in-progress' : 'not-started');
  const statusLabels = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'completed': 'Completed'
  };
  
  return `
    <div class="card day-card" data-action="view-lesson" data-day="${day.day}">
      <div class="card-body">
        <div class="day-number">Day ${day.day}</div>
        <h3 class="day-title">${day.title}</h3>
        <span class="status-badge status-${status}">${statusLabels[status]}</span>
      </div>
    </div>
  `;
}

function renderLesson() {
  const dayData = PROGRAM_DATA.weeks
    .flatMap(w => w.days)
    .find(d => d.day === appState.selectedDay);
  
  if (!dayData) return '<p>Lesson not found</p>';
  
  const week = PROGRAM_DATA.weeks.find(w => w.days.some(d => d.day === appState.selectedDay));
  const entry = appState.entries[dayData.day] || { assessment: null, notes: '', completed: false };
  
  const pillarLabels = {
    emotional: 'Emotional State',
    general: 'Overall Well-being',
    family: 'Family Pillar',
    friendship: 'Friendship Pillar',
    work: 'Work Pillar',
    faith: 'Faith Pillar'
  };
  
  return `
    <button class="btn btn-secondary" data-action="view-week" data-week="${week.week}" style="margin-bottom: var(--space-24);">
      ← Back to Week ${week.week}
    </button>
    
    <div class="lesson-header">
      <div class="breadcrumb">Week ${week.week} • Day ${dayData.day} • ${week.theme}</div>
      <h1>${dayData.title}</h1>
    </div>
    
    <div class="lesson-content">
      <div class="section">
        <h3 class="section-title">
          <span class="section-icon">💡</span>
          Today's Concept
        </h3>
        <div class="concept-text">${dayData.concept}</div>
      </div>
      
      <div class="section">
        <h3 class="section-title">
          <span class="section-icon">🤔</span>
          Reflection Question
        </h3>
        <div class="reflection-question">${dayData.reflectionQuestion}</div>
      </div>
      
      <div class="section">
        <h3 class="section-title">
          <span class="section-icon">📊</span>
          Today's Assessment
        </h3>
        <p>How would you rate your <strong>${pillarLabels[dayData.pillar]}</strong> today? (1-10)</p>
        <div class="assessment-scale">
          ${[1,2,3,4,5,6,7,8,9,10].map(num => `
            <button class="scale-button ${entry.assessment === num ? 'selected' : ''}" 
                    data-action="set-assessment" data-day="${dayData.day}" data-score="${num}">
              ${num}
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h3 class="section-title">
          <span class="section-icon">📝</span>
          My Reflection &amp; Notes
        </h3>
        <textarea class="notes-textarea" 
                  id="notes-textarea-${dayData.day}"
                  placeholder="Write your thoughts here...">${entry.notes || ''}</textarea>
        <div class="autosave-indicator" id="autosave-indicator">Changes saved automatically</div>
      </div>
      
      <div class="section">
        <h3 class="section-title">
          <span class="section-icon">📚</span>
          Suggested Readings
        </h3>
        <ul class="readings-list">
          ${dayData.suggestedReadings.map(reading => `
            <li class="reading-item">
              <div class="reading-title">📖 ${reading.title}</div>
              <div class="reading-description">${reading.description}</div>
              ${reading.link !== '#' ? `<a href="${reading.link}" target="_blank" style="font-size: var(--font-size-sm); margin-top: var(--space-8); display: inline-block;">Read More →</a>` : ''}
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="lesson-actions">
        ${dayData.day > 1 ? `<button class="btn btn-outline" data-action="prev-lesson" data-day="${dayData.day}">← Previous Day</button>` : ''}
        <button class="btn ${entry.completed ? 'btn-secondary' : 'btn-primary'}" 
                data-action="toggle-complete" data-day="${dayData.day}">
          ${entry.completed ? 'Completed ✓' : 'Mark Complete'}
        </button>
        ${dayData.day < 42 ? `<button class="btn btn-primary" data-action="next-lesson" data-day="${dayData.day}">Save &amp; Next Day →</button>` : ''}
      </div>
    </div>
  `;
}

function renderProgress() {
  const totalDays = 42;
  const completedDays = Object.values(appState.entries).filter(e => e.completed).length;
  const allScores = Object.values(appState.entries).filter(e => e.assessment).map(e => e.assessment);
  const avgScore = allScores.length > 0 ? (allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1) : 'N/A';
  
  const pillarScores = {};
  ['family', 'friendship', 'work', 'faith'].forEach(pillar => {
    const pillarDays = PROGRAM_DATA.weeks.flatMap(w => w.days).filter(d => d.pillar === pillar);
    const scores = pillarDays
      .map(d => appState.entries[d.day]?.assessment)
      .filter(s => s !== null && s !== undefined);
    pillarScores[pillar] = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : null;
  });
  
  return `
    <div class="progress-header">
      <h1>Your Progress</h1>
      <p style="color: var(--color-text-secondary);">Track your journey through the 6-week program</p>
    </div>
    
    <div class="stats-grid">
      <div class="card stat-card">
        <div class="card-body">
          <div class="stat-value">${completedDays}</div>
          <div class="stat-label">Days Completed</div>
        </div>
      </div>
      
      <div class="card stat-card">
        <div class="card-body">
          <div class="stat-value">${Math.round((completedDays / totalDays) * 100)}%</div>
          <div class="stat-label">Progress</div>
        </div>
      </div>
      
      <div class="card stat-card">
        <div class="card-body">
          <div class="stat-value">${avgScore}</div>
          <div class="stat-label">Avg Assessment Score</div>
        </div>
      </div>
      
      <div class="card stat-card">
        <div class="card-body">
          <div class="stat-value">${Object.keys(appState.entries).length}</div>
          <div class="stat-label">Days with Notes</div>
        </div>
      </div>
    </div>
    
    <div class="card pillar-scores">
      <div class="card-body">
        <h3 style="margin-bottom: var(--space-20);">Pillar Scores</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--space-24); font-size: var(--font-size-sm);">
          Average assessment scores for each pillar (Weeks 3-6)
        </p>
        
        ${['family', 'friendship', 'work', 'faith'].map(pillar => {
          const score = pillarScores[pillar];
          const percent = score ? (score / 10) * 100 : 0;
          return `
            <div class="pillar-score-item">
              <div class="pillar-name">${pillar.charAt(0).toUpperCase() + pillar.slice(1)}</div>
              <div class="pillar-bar">
                <div class="pillar-bar-fill" style="width: ${percent}%">
                  ${score || 'N/A'}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    
    <div class="card">
      <div class="card-body">
        <h3 style="margin-bottom: var(--space-20);">Weekly Completion</h3>
        <div class="weeks-grid">
          ${PROGRAM_DATA.weeks.map(week => {
            const completedInWeek = week.days.filter(d => appState.entries[d.day]?.completed).length;
            const progressPercent = Math.round((completedInWeek / 7) * 100);
            return `
              <div class="card">
                <div class="card-body">
                  <div class="week-number">Week ${week.week}</div>
                  <h4 style="font-size: var(--font-size-base); margin-bottom: var(--space-12);">${week.theme}</h4>
                  <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">
                    ${completedInWeek} of 7 days
                  </div>
                  <div class="progress-bar-container" style="margin-top: var(--space-12);">
                    <div class="progress-bar" style="width: ${progressPercent}%"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderNotes() {
  const allEntries = Object.entries(appState.entries)
    .filter(([day, entry]) => entry.notes && entry.notes.trim())
    .sort(([dayA], [dayB]) => parseInt(dayB) - parseInt(dayA));
  
  const filteredEntries = appState.filterPillar === 'all' 
    ? allEntries
    : allEntries.filter(([day]) => {
        const dayData = PROGRAM_DATA.weeks.flatMap(w => w.days).find(d => d.day === parseInt(day));
        return dayData?.pillar === appState.filterPillar;
      });
  
  return `
    <div style="margin-bottom: var(--space-32);">
      <h1>My Notes &amp; Reflections</h1>
      <p style="color: var(--color-text-secondary);">All your written reflections from the program</p>
    </div>
    
    <div class="notes-filters">
      <button class="filter-button ${appState.filterPillar === 'all' ? 'active' : ''}" 
              data-action="filter-notes" data-filter="all">All</button>
      <button class="filter-button ${appState.filterPillar === 'emotional' ? 'active' : ''}" 
              data-action="filter-notes" data-filter="emotional">Emotional</button>
      <button class="filter-button ${appState.filterPillar === 'family' ? 'active' : ''}" 
              data-action="filter-notes" data-filter="family">Family</button>
      <button class="filter-button ${appState.filterPillar === 'friendship' ? 'active' : ''}" 
              data-action="filter-notes" data-filter="friendship">Friendship</button>
      <button class="filter-button ${appState.filterPillar === 'work' ? 'active' : ''}" 
              data-action="filter-notes" data-filter="work">Work</button>
      <button class="filter-button ${appState.filterPillar === 'faith' ? 'active' : ''}" 
              data-action="filter-notes" data-filter="faith">Faith</button>
    </div>
    
    ${filteredEntries.length === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <p>No notes yet. Start writing reflections in your daily lessons!</p>
      </div>
    ` : `
      <div class="notes-list">
        ${filteredEntries.map(([day, entry]) => {
          const dayData = PROGRAM_DATA.weeks.flatMap(w => w.days).find(d => d.day === parseInt(day));
          const week = PROGRAM_DATA.weeks.find(w => w.days.some(d => d.day === parseInt(day)));
          return `
            <div class="card note-card" data-action="view-lesson" data-day="${day}">
              <div class="card-body">
                <div class="note-meta">
                  <span class="note-day">Day ${day}: ${dayData?.title || 'Untitled'}</span>
                  <span class="note-date">Week ${week?.week}</span>
                </div>
                <div class="note-content">${entry.notes}</div>
                ${dayData?.pillar ? `<span class="note-pillar">${dayData.pillar}</span>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

function renderSettings() {
  return `
    <div style="max-width: 600px;">
      <h1 style="margin-bottom: var(--space-32);">Settings</h1>
      
      <div class="settings-section">
        <h3>Profile</h3>
        <form id="profile-form">
          <div class="form-group">
            <label class="form-label" for="profile-name">Name</label>
            <input type="text" id="profile-name" class="form-control" value="${appState.user.name}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="profile-email">Email</label>
            <input type="email" id="profile-email" class="form-control" value="${appState.user.email || ''}">
          </div>
          
          <button type="submit" class="btn btn-primary">Save Profile</button>
        </form>
      </div>
      
      <div class="settings-section">
        <h3>Export Data</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16);">
          Download all your assessments, notes, and progress as a JSON file.
        </p>
        <button class="btn btn-secondary" data-action="export-data">Export Data (JSON)</button>
      </div>
      
      <div class="settings-section">
        <div class="danger-zone">
          <h4>Danger Zone</h4>
          <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16);">
            This will delete all your data and reset the program. This action cannot be undone.
          </p>
          <button class="btn btn-danger" data-action="reset-program">Reset Program</button>
        </div>
      </div>
      
      <div class="settings-section">
        <h3>About</h3>
        <p style="color: var(--color-text-secondary); line-height: 1.6;">
          This 6-week program is based on <em>Build the Life You Want</em> by Arthur Brooks &amp; Oprah Winfrey. 
          The framework explores emotional self-management and the four pillars of happiness: Family, Friendship, Work, and Faith.
        </p>
      </div>
    </div>
  `;
}

// Event Handlers
function attachEventListeners() {
  // Welcome form
  const welcomeForm = document.getElementById('welcome-form');
  if (welcomeForm) {
    welcomeForm.addEventListener('submit', handleWelcomeSubmit);
  }
  
  // Profile form
  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', handleProfileSubmit);
  }
  
  // Navigation links
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      const view = e.target.dataset.nav;
      navigateTo(view);
    });
  });
  
  // Action buttons
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', handleAction);
  });
  
  // Notes textarea with autosave
  const notesTextarea = document.querySelector('[id^="notes-textarea-"]');
  if (notesTextarea) {
    let saveTimeout;
    notesTextarea.addEventListener('input', (e) => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        const day = appState.selectedDay;
        if (!appState.entries[day]) {
          appState.entries[day] = { assessment: null, notes: '', completed: false };
        }
        appState.entries[day].notes = e.target.value;
        saveData();
        showToast('Notes saved', 'success');
      }, 1000);
    });
  }
}

function handleWelcomeSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('user-name').value;
  const email = document.getElementById('user-email').value;
  
  appState.user = {
    name,
    email,
    programStartDate: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  
  saveData();
  navigateTo('dashboard');
  showToast(`Welcome, ${name}! Let's build the life you want.`, 'success');
}

function handleProfileSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('profile-name').value;
  const email = document.getElementById('profile-email').value;
  
  appState.user.name = name;
  appState.user.email = email;
  
  saveData();
  showToast('Profile updated successfully', 'success');
}

function handleAction(e) {
  const action = e.currentTarget.dataset.action;
  const day = parseInt(e.currentTarget.dataset.day);
  const week = parseInt(e.currentTarget.dataset.week);
  const score = parseInt(e.currentTarget.dataset.score);
  const filter = e.currentTarget.dataset.filter;
  
  switch (action) {
    case 'continue-lesson':
      const completedDays = Object.values(appState.entries).filter(e => e.completed).length;
      const nextDay = Math.min(completedDays + 1, 42);
      navigateTo('lesson', { day: nextDay });
      break;
      
    case 'view-week':
      navigateTo('week', { week });
      break;
      
    case 'view-lesson':
      navigateTo('lesson', { day });
      break;
      
    case 'back-to-dashboard':
      navigateTo('dashboard');
      break;
      
    case 'set-assessment':
      if (!appState.entries[day]) {
        appState.entries[day] = { assessment: null, notes: '', completed: false };
      }
      appState.entries[day].assessment = score;
      saveData();
      render();
      showToast(`Assessment saved: ${score}/10`, 'success');
      break;
      
    case 'toggle-complete':
      if (!appState.entries[day]) {
        appState.entries[day] = { assessment: null, notes: '', completed: false };
      }
      appState.entries[day].completed = !appState.entries[day].completed;
      if (appState.entries[day].completed) {
        appState.entries[day].completionDate = new Date().toISOString();
      }
      saveData();
      render();
      showToast(
        appState.entries[day].completed ? 'Day marked as complete!' : 'Day marked as incomplete',
        'success'
      );
      break;
      
    case 'prev-lesson':
      if (day > 1) {
        navigateTo('lesson', { day: day - 1 });
      }
      break;
      
    case 'next-lesson':
      if (day < 42) {
        navigateTo('lesson', { day: day + 1 });
      }
      break;
      
    case 'filter-notes':
      appState.filterPillar = filter;
      render();
      break;
      
    case 'export-data':
      exportData();
      break;
      
    case 'reset-program':
      if (confirm('Are you sure you want to reset all your data? This cannot be undone.')) {
        appState = {
          currentView: 'welcome',
          user: null,
          entries: {},
          selectedWeek: null,
          selectedDay: null,
          filterPillar: 'all'
        };
        render();
        showToast('Program reset successfully', 'info');
      }
      break;
  }
}

function exportData() {
  const data = {
    user: appState.user,
    entries: appState.entries,
    exportDate: new Date().toISOString(),
    programVersion: '1.0'
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `build-life-you-want-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast('Data exported successfully', 'success');
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}