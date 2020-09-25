![illogic_logo](src/images/favicon.png)

# illogic

## Background and Overview

A visually-stimulating, interactive musical environment. This project will showcase a combination of my previous and current passions.

[Live Link](https://gonsaje.github.io/illogic/)

![](src/images/illogic2.gif)

## Functionality & MVP's
* Users will be able to interact with the app and receive tonal feedback.
* Choose different instruments
* Manipulate the shape of the sound


## Wireframe

![](src/images/wireframe.png)

## Technologies
* Tone.js
* Web Audio API
* JavaScript
* CSS
* HTML
      

      
## MVP List

### 1: File Skeleton/ Data Structure

### 2: Tonal Components

Synths are linked to an array of notes and are triggered based on the "selected" attribute. Once "play" is triggered, the loop will proceed to playback continuously.

```JavaScript
let notes = ["C5","B4","A4","G4","F4","E4","D4","C4"]; 
  synths.forEach((synth) => synth.toDestination());
  const $rows = document.body.querySelectorAll(".note"); 
  let index = 0;
  Tone.Transport.scheduleRepeat(repeat, "8n");

  function repeat(time) {
    let step = index % 24;

    for (let i = 0; i < $rows.length; i++) {
      let synth = synths[i];
      let note = notes[i];
      let $row = $rows[i];
      let $input = $row.querySelector(`input:nth-child(${step + 1})`);

      if ($input.checked) {
        synth.triggerAttackRelease(note, "8n",time);
      }
    }

    index++;
  }
```

### 3: Playback Functionality

Play and pause are triggered using asynchronous functions.

```JavaScript
const play = document.getElementById("play");
const pause = document.getElementById( "pause");

  play.addEventListener("click", async () => {
      await Tone.start();
      await Tone.Transport.start();
    }
  );
  pause.addEventListener( "click", async () => {
      await Tone.Transport.stop();
    }
  );
```

### 4: Plugin Components (soundwave modifier)

The shape of the oscillator's soundwave is changed by a simple dropdown menu. There are three available options: Sine, Sawtooth, and Square. 

![](src/images/wavechange.gif)

```JavaScript
 const wavetype = document.getElementById("wavetype");
 const wavebtn = document.getElementById("wave-change");
 let waveval = wavetype.options[wavetype.selectedIndex].value;
  wavetype.onchange = function() {
    waveval = wavetype.options[wavetype.selectedIndex].value;
  }

  function changeWave(waveval) {
    synths[0].oscillator.type = waveval;
    synths[1].oscillator.type = waveval;
    synths[2].oscillator.type = waveval;
    synths[3].oscillator.type = waveval;
    synths[4].oscillator.type = waveval;
    synths[5].oscillator.type = waveval;
    synths[6].oscillator.type = waveval;
    synths[7].oscillator.type = waveval;
  }
  
  wavebtn.addEventListener("click", () => {changeWave(waveval)});
```

### 5: Styling and Cleanup

By using keyframes, the opacity of the border and box shadow are manipulated to give a flickering effect. Different boxes were given different run times to provide a more independent effect.

```CSS
@keyframes border-flicker {
  0% {
    opacity:0.1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(106, 16, 232, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(81, 16, 232, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(124, 16, 232, 0.73);
  }
  2% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(106, 16, 232, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(81, 16, 232, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(124, 16, 232, 0.73);
  }
  4% {
    opacity:0.1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(106, 16, 232, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(81, 16, 232, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(124, 16, 232, 0.73);
  }
  
  8% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(106, 16, 232, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(81, 16, 232, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(124, 16, 232, 0.73);
  }
  70% {
    opacity:0.7;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(106, 16, 232, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(81, 16, 232, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(124, 16, 232, 0.73);
  }
  100% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(106, 16, 232, 0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(81, 16, 232, 0.73);
    box-shadow: 0px 0px 78px 4px rgba(124, 16, 232, 0.73);
  }
}
```
      
### Future Implementations:
* Different Instruments
          
      

