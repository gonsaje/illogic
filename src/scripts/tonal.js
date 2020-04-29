export default class Tonal {
  constructor(props){
    super(props);

    this.audioContext = this.audioContext.bind(this);
  }
  
  audioContext() {
    let audioCtx = new AudioContext();
    let osc = audioCtx.createOscillator();
    osc.connect(audioCtx.destination); 
    osc.start();
    
  }
  
  render() {
    return (
      <div>
        {this.audioContext}
      </div>
    )
  }

}


