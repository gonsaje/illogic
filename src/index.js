import "./styles/index.scss";
import * as Tone from 'tone';
import regeneratorRuntime from "regenerator-runtime";


document.addEventListener("DOMContentLoaded", () => {
 // const play = document.body.querySelector(".play");
// const pause = document.getElementById("pause");

  const info = document.getElementById(
    "more-info"
  );
  const modal = document.getElementById(
    "modal"
  );
  const modalChild = document.getElementById(
    "modal-child"
  );
  info.addEventListener(
    "click",
    openModal
  );
  modal.addEventListener(
    "click",
    closeModal
  );

  function openModal(e) {
    e.preventDefault();
    modal.style.display =
      "block";
    modalChild.style.display =
      "block";
  }

  function closeModal(e) {
    e.preventDefault();
    modal.style.display =
      "none";
    modalChild.style.display =
      "none";
  }

  const synths = [
    new Tone.FMSynth(),
    new Tone.FMSynth(),
    new Tone.FMSynth(),
    new Tone.FMSynth(),
    new Tone.FMSynth(),
    new Tone.FMSynth(),
    new Tone.FMSynth(),
    new Tone.FMSynth(),
  ];

  synths[0].oscillator.type = "sine";
  synths[1].oscillator.type = "sine";
  synths[2].oscillator.type = "sine";
  synths[3].oscillator.type = "sine";
  synths[4].oscillator.type = "sine";
  synths[5].oscillator.type = "sine";
  synths[6].oscillator.type = "sine";
  synths[7].oscillator.type = "sine";
  
  const gain = new Tone.Gain(0.1);
  gain.toDestination();

  let notes = ["C5","B4","A4","G4","F4","E4","D4","C4"]; //['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'A4', 'A#4', 'B4', 'C5']
  synths.forEach((synth) => synth.toDestination());
  const $rows = document.body.querySelectorAll(".note"); //array of note divs
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

  const wavetype = document.getElementById("wavetype");

  wavetype.addEventListener("change", () => {
    synths.forEach(synth => {
      synth.oscillator
    })
  })

});