const timerLogic = {

    initiateTimer(timer) {
        localStorage.setItem("timer", JSON.stringify(timer))
    },

    checkTimerActive() {
        const timer = localStorage.getItem("timer");
        if (timer) {
            return timer
        }
        return null
    },

    clearTimer() {
        localStorage.clear("timer")
    }

}

module.exports = timerLogic