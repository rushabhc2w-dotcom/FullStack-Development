const zodiacSigns =[
     "Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra",
  "Scorpio",  "Sagittarius",  "Capricorn",  "Aquarius",  "Pisces"
];


const compliments = [
  "You have a great sense of humor.",
  "Your smile lights up the room.",
  "You bring out the best in people.",
  "You're an incredibly thoughtful person.",
  "You have a heart of gold.",
  "Your creativity is inspiring.",
  "You're a fantastic problem-solver.",
  "Your kindness is contagious.",
  "You have an amazing ability to connect with others.",
  "You're so knowledgeable about so many things.",
  "Your determination is admirable.",
  "You're a great listener.",
  "You make the world a better place.",
  "Your positivity is infectious.",
  "You are incredibly resilient.",
  "Your dedication to self-improvement is inspiring.",
  "You have a natural ability to lead.",
  "Your energy brings life into every project you touch.",
  "You are a breath of fresh air.",
  "Your authenticity is truly beautiful.",
  "You always know exactly what to say to make someone feel valued.",
  "Your attention to detail makes everything you do exceptional.",
  "You are a wonderfully reliable friend.",
  "Your passion for learning is contagious.",
  "You handle difficult situations with remarkable grace.",
  "Your ability to stay calm under pressure is a rare gift.",
  "You are incredibly generous with your time and talents.",
  "Your unique perspective makes conversations so much deeper.",
  "You bring an intentional warmth wherever you go.",
  "Your insight helps people see things in a whole new light.",
  "You are doing a much better job than you give yourself credit for."
];


const victimCardCompliment=[
  "You always do good for others, but they don't appreciate it.",
  "You give so much, but rarely get anything in return.",
  "Your kindness often goes unnoticed, but it's truly remarkable.",
  "You always put others first, even when they don't deserve it.",
  "You sacrifice so much, yet people rarely acknowledge it.",
  "You have a heart of gold, but others take it for granted.",
  "You're always there for everyone, but they're not always there for you.",
  "You work so hard, yet your efforts often go unrecognized.",
  "You care deeply, even when others don't reciprocate.",
  "You forgive so easily, even when people don't deserve it.",
  "You give people the benefit of the doubt, but they rarely do the same for you.",
  "You stand by people in their tough times, but they forget you in yours.",
  "You always try to make peace, even when others blame you.",
  "You handle so much pressure, yet no one sees your struggles.",
  "You give so much love, but people don't value it enough.",
  "You're always honest, yet people misunderstand your intentions.",
  "You go out of your way for others, but they don't return the favor.",
  "You share everything you have, but people still ask for more.",
  "You're a true friend, even when others don't treat you like one."
];

const recommendations = [
  "Feed a street dog and spread kindness.",
  "Plant a tree and nurture it.",
  "Volunteer at a local shelter or community center.",
  "Start your day with meditation for a peaceful mind.",
  "Write down three things you're grateful for daily.",
  "Spend time with your family and cherish those moments.",
  "Help someone in need, even in small ways.",
  "Read a book that inspires you to grow.",
  "Exercise regularly to keep your body healthy.",
  "Donate clothes you don't wear to charity.",
  "Cook a meal for someone and share the joy of food.",
  "Smile at strangers and brighten their day.",
  "Learn a new skill or hobby that excites you.",
  "Reduce your plastic use to help the environment.",
  "Disconnect from social media for a day and enjoy the present.",
  "Drink a glass of water right after waking up.",
  "Take a 10-minute walk outside without looking at your phone.",
  "Compliment a coworker or classmate on their hard work.",
  "Call an old friend just to check in and say hello.",
  "Keep your workspace clean and organized for better focus.",
  "Listen to a new educational podcast during your commute.",
  "Practice deep breathing when you start to feel stressed.",
  "Support a small, local business in your neighborhood.",
  "Write a handwritten thank-you note to someone who helped you.",
  "Avoid eating junk food for a full 24 hours.",
  "Set a consistent sleep schedule to improve your energy.",
  "Fix a minor problem around the house that you've been putting off.",
  "Watch a sunrise or sunset without any distractions.",
  "Create a monthly budget tracker to manage your savings.",
  "Spend 15 minutes stretching before going to bed.",
  "Learn how to say 'hello' and 'thank you' in a new language.",
  "Opt for the stairs instead of the elevator whenever possible.",
  "Take a few minutes to journal your thoughts before sleeping.",
  "Offer to run an errand for an elderly neighbor or relative.",
  "Try a new healthy recipe that features fresh vegetables.",
  "Unsubscribe from emails and newsletters you no longer read.",
  "Set clear boundaries for your work hours to prevent burnout.",
  "Reflect on a recent mistake and write down what it taught you."
];


const predictions =[
  "You will become a crorepati!",
  "Success is just around the corner for you.",
  "Your dream job is closer than you think.",
  "Expect the unexpected–great things are coming.",
  "You will travel the world in the next few years.",
  "A big opportunity will knock on your door soon.",
  "Your hard work will pay off in ways you can't imagine.",
  "You will make a difference in someone's life.",
  "A surprising adventure is coming your way.",
  "Great things come to those who wait–your time is coming.",
  "Your creativity will lead to great success.",
  "An unexpected financial gain will come your way soon.",
  "You will finally conquer a challenge that has been holding you back.",
  "A meaningful new connection will enter your life this year.",
  "Your hidden talent will soon get the recognition it deserves.",
  "A major positive shift is coming to your daily routine.",
  "You will inspire someone close to you to achieve their dreams.",
  "An old investment or effort will bring surprisingly sweet fruits.",
  "Peace and clarity will replace any confusion you are feeling.",
  "You will embark on a path that brings deep personal fulfillment."
];



const form = document.getElementById('astroform');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);


    const text = `Hi ${name} ${surname}, Your Zodiac Sign is ${zodiacSigns[month-1]} 
    . ${compliments[day-1]}. ${victimCardCompliment[year%20]}. ${recommendations[(day%month)%30]}
    ${predictions[(name.length*surname.length)%20]}`;


    document.getElementById('result').textContent = text;
    form.reset();
})