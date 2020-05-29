import "./styles/index.scss";
import * as Tone from 'tone';
import regeneratorRuntime from "regenerator-runtime";


document.addEventListener("DOMContentLoaded", () => {
  const info = document.getElementById("more-info");
  const modal = document.getElementById( "modal");
  const modalChild = document.getElementById("modal-child");
  info.addEventListener("click",openModal);
  modal.addEventListener("click",closeModal);

  function openModal(e) {
    e.preventDefault();
    modal.style.display="block";
    modalChild.style.display="block";
  }

  function closeModal(e) {
    e.preventDefault();
    modal.style.display="none";
    modalChild.style.display="none";
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

  synths[0].oscillator.type = "sawtooth";
  synths[1].oscillator.type = "sawtooth";
  synths[2].oscillator.type = "sawtooth";
  synths[3].oscillator.type = "sawtooth";
  synths[4].oscillator.type = "sawtooth";
  synths[5].oscillator.type = "sawtooth";
  synths[6].oscillator.type = "sawtooth";
  synths[7].oscillator.type = "sawtooth";

  // synths.forEach(synth => {
  //   synth.oscillator.type = "sine"
  // })
  
  const gain = new Tone.Gain(0.1);
  gain.toDestination();

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
  const wavebtn = document.getElementById("wave-change");
  let waveval = wavetype.options[wavetype.selectedIndex].value;
  wavetype.onchange = function() {
    waveval = wavetype.options[wavetype.selectedIndex].value;
  }

  console.log(waveval);
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

  // const vol_up= document.getElementById("vol-up");
  // const vol_down= document.getElementById("vol-down");
  // const mute = document.getElementById("mute");

  

  // mute.addEventListener("click", () => {
  //   if (Tone.Master.mute === false) {
  //     Tone.toMaster.mute = true;
  //   } else {
  //     Tone.toMaster.mute = false;
  //   }
  // });



});