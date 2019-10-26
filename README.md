# Javascript countdown timer
It converts a javascript timestamp into days, hours, minutes and seconds

## Install
### Using NPM OR YARN

`npm install javascript-timer`

OR

`yarn add javascript-timer`

## Usage

You can either include *index.js* on your html file, or you can simply copy its contents to you main js file

```javascript

// use a future date (keep it reasonable)

const timestamp = Date.parse("2022-04-11T10:20:30Z"); // return a timestamp in ms

const timeObject = calculateTimeUntil(timestamp) 
/*
  returns an object with 4 key-value pairs i.e 
  {
    days: Number, 
    hrs: Number,
    mins: Number, 
    seconds: Number
  }
*/
```

You can then use `setInterval` to populate a countdown elements(s) on your DOM

### Example

```html
<script src = '/js/helpers.js'></script>
<div class = 'timer'>
  <div class = 'timer_value' id = 'days'>
    <span class = 'timer_unit'></span>
    <label class = 'timer_label'>Days</label>
  </div>
  <span class = 'timer_divider'>:</span>
  <div class = 'timer_value' id = 'hrs'>
    <span class = 'timer_unit'></span>
    <label class = 'timer_label'>Hours</label>
  </div>
  <span class = 'timer_divider'>:</span>
  <div class = 'timer_value' id = 'mins'>
    <span class = 'timer_unit'></span>
    <label class = 'timer_label'>Minutes</label>
  </div>
  <span class = 'timer_divider'>:</span>
  <div class = 'timer_value' id = 'seconds'>
    <span class = 'timer_unit'></span>
    <label class = 'timer_label'>Seconds</label>
  </div>
</div>

<script>
  function fillUnits(labels, obj) {
    labels.forEach(label => {
      let id, num;
      id = label.id;
      num = obj[id];
      num = num < 10 ? `0${num}` : num;
      label.children[0].textContent = num;
    });
  }

  function populateCountDown(timer, num) {
    let labels, timeTo;
    timeTo = calculateTimeUntil(num);
    labels = Array.from(timer.children).filter(function(label){
      return label.classList.contains('timer_value')
    });
    fillUnits(labels, timeTo)
  }

  (function() {
    const timer = document.currentScript.previousElementSibling;
    const timestamp = Date.parse("2022-04-11T10:20:30Z"); // return a timestamp in ms
    populateCountDown(timer, timestamp);
    setInterval(function(){
      populateCountDown(timer,timestamp)
    }, 1000);            
  })();                  
                  
</script>
```

