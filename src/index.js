import "./styles/index.scss";
import * as Tone from 'tone';
// import Drums from './scripts/drumkit';



document.addEventListener("DOMContentLoaded", () => {
  const play = document.body.querySelector(".play");
  const pause = document.getElementById("pause");
  
  play.addEventListener("click", Tone.Transport.start());
  pause.addEventListener("click", Tone.Transport.stop());

  const info = document.getElementById("more-info");
  const modal = document.getElementById('modal');
  const modalChild = document.getElementById('modal-child');
  info.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);

  function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
    modalChild.style.display = "block";
  }

  function closeModal(e) {
    e.preventDefault();
    modal.style.display = "none";
    modalChild.style.display = "none";

  }

  const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
  ];

  synths[0].oscillator.type = 'sine';
  synths[1].oscillator.type = 'sine';
  synths[2].oscillator.type = "sine";
  synths[3].oscillator.type = "sine";
  synths[4].oscillator.type = "sine";

  const gain = new Tone.Gain(0.5);
  gain.toDestination();
  let notes = ['C4', 'D4', 'E4', 'F4', 'G4'];
  synths.forEach(synth => synth.toDestination());

  const $rows = document.body.querySelectorAll('.note'); //array of note divs
  let index = 0;
  Tone.Transport.scheduleRepeat(repeat, '4n');

  function repeat(time) {
    let step = index % 8;
    for (let i = 0; i < $rows.length; i++){
      let synth = synths[i];
      let note = notes[i];
      let $row = $rows[i];


      let $input = $row.querySelector(`input:nth-child(${step + 1})`);
      if ($input.checked) {
        synth.triggerAttackRelease(note, '8n', time);
      }
    }
    index++;
  }


  Tone.Transport.start();

  // const synth = new Tone.Synth();
  // synth.oscillator.type = "sine";
  // const gain = new Tone.Gain(0.5);
  // gain.toMaster();
  // synth.connect(gain);
  // // synth.toMaster();

  // synth.triggerAttackRelease("C4", "8n");

  // const notes = ["C4", "E4", "C5", "D5", "E5", "D4"];
  // let index = 0;
  // Tone.Transport.scheduleRepeat(time => {
  //   repeat(time);
  //   //do something with the time
  // }, "8n");

  // const synth2 = new Tone.Synth();
  // synth2.oscillator.type = "sawtooth";
  // const gain2 = new Tone.Gain(0.5);
  // gain2.toMaster();
  // synth2.connect(gain2);
  // // synth.toMaster();

  // synth2.triggerAttackRelease("C3", "4n");

  // const notes2 = ["C4", "E4", "C5", "D5", "E5", "D4"];
  // let index2 = 0;
  // Tone.Transport.scheduleRepeat((time) => {
  //   repeat(time);
  //   //do something with the time
  // }, "8n");

  // function repeat(time) {
  //   let note = notes[index % notes.length];
  //   synth.triggerAttackRelease(note, '8n', time);
  //   index++;
  // }

  // Tone.Transport.start();
  // setTimeout(()=>{
  //   Tone.Transport.stop();
  // }, 5000);

  // var synth3 = new Tone.PolySynth(6, Tone.Synth).toMaster();
  // //set the attributes using the set interface
  // synth3.set("detune", -1200);
  // //play a chord
  // synth3.triggerAttackRelease(["C4", "E4", "A4"], "4n");
});



