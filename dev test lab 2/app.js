function toggleMode() {
  const body = document.body;
  const button = document.querySelector('.toggle-mode');
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  button.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}

// HERO SCROLL (optional)
// document.querySelector('.hero-btn').addEventListener('click', (e) => {
//   e.preventDefault();
//   window.scrollTo({
//     top: window.innerHeight,
//     behavior: 'smooth'
//   });
// });

// =============================
// QUIZ LOGIC ==================

const getStartedBtn = document.getElementById('getStartedBtn');
const quizContainer = document.getElementById('quizContainer');

const questions = {
  HTML: {
    1: ['Make a heading 1', 'Create a paragraph', 'Add an image tag'],
    2: ['Create a form', 'Make an unordered list', 'Add a table'],
    3: ['Use semantic tags', 'Embed a video', 'Add iframe with Google Maps']
  },
  Python: {
    1: ['Print Hello World', 'Write a for loop', 'Define a function'],
    2: ['Read a file', 'Handle exception', 'Use list comprehension'],
    3: ['Create a class', 'Use decorators', 'Implement inheritance']
  },
  JavaScript: {
    1: ['Alert a message', 'Console log something', 'Declare a variable'],
    2: ['Create an array', 'Use map function', 'Add event listener'],
    3: ['Fetch API data', 'Use async/await', 'Promise chaining']
  },
  PHP: {
    1: ['Echo Hello World', 'Define a variable', 'Simple if statement'],
    2: ['Connect to MySQL', 'Use foreach loop', 'Create a function'],
    3: ['Session handling', 'Use OOP', 'File upload']
  },
  React: {
    1: ['Create a component', 'Use props', 'Use state'],
    2: ['Use useEffect', 'Conditional rendering', 'List rendering'],
    3: ['Context API', 'Custom hooks', 'React Router']
  }
};

getStartedBtn.addEventListener('click', () => {
  document.querySelector('.hero').style.display = 'none';
  quizContainer.style.display = 'block';
  showLanguageSelect();
});

document.getElementById('heroBtnNav').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.hero').style.display = 'none';
  quizContainer.style.display = 'block';
  showLanguageSelect();
});

function showLanguageSelect() {
  quizContainer.innerHTML = `
    <h2>Select a Language</h2>
    <select id="languageSelect">
      <option value="">-- Select --</option>
      <option value="HTML">HTML</option>
      <option value="Python">Python</option>
      <option value="JavaScript">JavaScript</option>
      <option value="PHP">PHP</option>
      <option value="React">React</option>
    </select>
    <br/>
    <button id="nextLevelBtn">Next</button>
  `;

  document.getElementById('nextLevelBtn').addEventListener('click', () => {
    const lang = document.getElementById('languageSelect').value;
    if (lang) {
      showLevelSelect(lang);
    } else {
      alert('Please select a language');
    }
  });
}

function showLevelSelect(lang) {
  quizContainer.innerHTML = `
    <h2>Select Level</h2>
    <select id="levelSelect">
      <option value="">-- Select --</option>
      <option value="1">Level 1 (Easy)</option>
      <option value="2">Level 2 (Medium)</option>
      <option value="3">Level 3 (Hard)</option>
    </select>
    <br/>
    <button id="showQuestionsBtn">Show Questions</button>
  `;

  document.getElementById('showQuestionsBtn').addEventListener('click', () => {
    const level = document.getElementById('levelSelect').value;
    if (level) {
      showQuestions(lang, level);
    } else {
      alert('Please select a level');
    }
  });
}

function showQuestions(lang, level) {
  const qs = questions[lang][level];
  quizContainer.innerHTML = `<h2>${lang} - Level ${level}</h2>`;
  qs.forEach((q, idx) => {
    quizContainer.innerHTML += `<div class="question">${idx + 1}. ${q}</div>`;
  });
}
