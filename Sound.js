export class Sound {
  constructor() {
    this.vol = 0;
  }
  getAudio() {
    let that = this;
    let constraints = { audio: true };

    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        let audioCtx = new AudioContext();
        let audioStream = audioCtx.createMediaStreamSource(mediaStream);
        let analyser = audioCtx.createAnalyser();
        analyser.fftSize = 512;

        audioStream.connect(analyser);

        let dataArr = new Uint8Array(analyser.frequencyBinCount);

        setInterval(() => {
          analyser.getByteFrequencyData(dataArr);

          let sum = 0;
          dataArr.forEach((element) => {
            sum += element;
          });
          that.vol = sum;
        }, 10);
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }
}
