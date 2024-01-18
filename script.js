  let interval;
  let totalSeconds;

  function handleCountdownStart() {
    const input = document.getElementById('input')
    const startButton = document.getElementById('startButton')
    input.style.display = 'none';
    startButton.style.display = 'none'

    const inputDate = document.getElementById('inputDate').value
    

    const futureDate = new Date(inputDate)
    const currentDate = new Date()
    totalSeconds = (futureDate - currentDate)/1000;

    interval = setInterval(function () {
      countDownfunction(totalSeconds)
      totalSeconds--

      if (totalSeconds < 0) {
        clearInterval(intervalId)
        alert('Countdown finished!')
      }
    }, 1000)
  }

  function countDownfunction() {
    const showRemainingDays = document.getElementById('days')
    const showRemainingHours = document.getElementById('hours')
    const showRemainingMinutes = document.getElementById('minutes')
    const showRemainingSeconds = document.getElementById('seconds')

    const remainingDays = Math.floor(totalSeconds / 86400)
    const remainingHours = Math.floor((totalSeconds % 86400) / 3600)
    const remainingMinutes = Math.floor(((totalSeconds % 86400) % 3600) / 60)
    const remainingSeconds = Math.floor(((totalSeconds % 86400) % 3600) % 60)

    showRemainingDays.innerText = remainingDays
    showRemainingHours.innerText = remainingHours
    showRemainingMinutes.innerText = remainingMinutes
    showRemainingSeconds.innerText = remainingSeconds
  }

  function stop(){
    clearInterval(interval)
    const input = document.getElementById('input')
    input.style.display = '';
  }
