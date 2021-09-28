import Push from 'push.js'
export default {
    name: 'timer',
    data() {
      return {
        min: 3,
        sec: 0,
        timerOn: false,
        timerObj: null,
        processing: false
      }
    },
    methods: {
      count: function() {
        if (this.sec <= 0 && this.min >= 1) {
          this.min --;
          this.sec = 59;
        } else if(this.sec <= 0 && this.min <= 0) {
          this.complete();
        } else {
          this.sec --;
        }
      },
  
      start: function() {
        if(this.sec > 0 || this.min > 0) {
          this.processing = true //タイマー動作中はテキストボックス非活性にする
          let self = this;
          this.timerObj = setInterval(function() {self.count()}, 1000)
          this.timerOn = true; //timerがONであることを状態として保持
        }
      },
  
      stop: function() {
        this.processing = false
        clearInterval(this.timerObj);
        this.timerOn = false; //timerがOFFであることを状態として保持
      },

      reset: function() {
        this.stop();
        this.min = 0;
        this.sec = 0;
      },

      validateMin: function() { 
        this.min = this.min.replace(/\D/g, '');
      }, 

      validateSec: function() {
        this.sec = this.sec.replace(/\D/g, '');
      },

      isProcessing: function () {
        return this.processing
      },

      complete: function() {
        Push.create('タイマー終了',{
          body: "時間が経過しました",
          timeout: 4000,
          onClick: function () {
              window.focus();
              this.close();
          }
        })
        this.stop();
        clearInterval(this.timerObj)
      }
    },
    computed: {
      formatTime: function() {
        let timeStrings = [
          this.min.toString(),
          this.sec.toString()
        ].map(function(str) {
          if (str.length < 2) {
            return "0" + str
          } else {
            return str
          }
        })
        return timeStrings[0] + ":" + timeStrings[1]
      }
    }
  }