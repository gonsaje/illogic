// import Tone from 'tone';

// const synths = [
//   new Tone.Synth(),
//   new Tone.Synth(),
//   new Tone.Synth(),
//   new Tone.Synth(),
//   new Tone.Synth()
// ];

// synths[0].oscillator.type = 'sine';
// synths[1].oscillator.type = 'sine';
// synths[2].oscillator.type = "sine";
// synths[3].oscillator.type = "sine";
// synths[4].oscillator.type = "sine";

// const gain = new Tone.Gain(0.5);
// gain.toDestination();
// let notes = ['C4', 'D4', 'E4', 'F4', 'G4'];
// synths.forEach(synth => synth.toDestination());

// const $rows = document.body.querySelectorAll('.note'); //array of note divs
// let index = 0;
// Tone.Transport.scheduleRepeat(repeat, '4n');

// function repeat(time) {
//   let step = index % 8;
//   for (let i = 0; i < $rows.length; i++) {
//     let synth = synths[i];
//     let note = notes[i];
//     let $row = $rows[i];


//     let $input = $row.querySelector(`input:nth-child(${step + 1})`);
//     if ($input.checked) {
//       synth.triggerAttackRelease(note, '8n', time);
//     }
//   }
//   index++;
// }


// Tone.Transport.start();