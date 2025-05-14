// Tab Switching
function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add('active');
  }
  
  // Theme Switching
  function toggleTheme() {
    document.body.classList.toggle('dark');
  }
  
  // Stopwatch Logic
  let stopwatchInterval;
  let elapsedTime = 0;
  
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  function updateStopwatch() {
    document.getElementById('time').textContent = formatTime(elapsedTime);
  }
  
  function startStopwatch() {
    if (!stopwatchInterval) {
      const startTime = Date.now() - elapsedTime;
      stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateStopwatch();
      }, 100);
    }
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  
  function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    updateStopwatch();
  }
  
  // Clock Logic
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
  }
  setInterval(updateClock, 1000);
  
  // Calculator Logic
  let calcExpression = '';
  
  function press(value) {
    calcExpression += value;
    document.getElementById('calc-display').value = calcExpression;
  }
  
  function calculate() {
    try {
      calcExpression = eval(calcExpression).toString();
      document.getElementById('calc-display').value = calcExpression;
    } catch {
      document.getElementById('calc-display').value = 'Error';
      calcExpression = '';
    }
  }
  
  function clearDisplay() {
    calcExpression = '';
    document.getElementById('calc-display').value = '';
  }
  
  // Timer Logic
  let timerInterval;
  let timerTimeLeft = 0;
  
  function startTimer() {
    const input = document.getElementById('timer-input').value;
    timerTimeLeft = parseInt(input) * 1000;
    updateTimerDisplay();
    if (timerTimeLeft > 0) {
      timerInterval = setInterval(() => {
        timerTimeLeft -= 1000;
        if (timerTimeLeft <= 0) {
          clearInterval(timerInterval);
          alert('Timer Done!');
        }
        updateTimerDisplay();
      }, 1000);
    }
  }
  
  function updateTimerDisplay() {
    document.getElementById('timer-display').textContent = formatTime(timerTimeLeft);
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
  }
  
  function resetTimer() {
    stopTimer();
    timerTimeLeft = 0;
    updateTimerDisplay();
  }
  