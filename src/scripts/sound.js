class Sound {
  constructor(audioURL, volume = 1){
    this.sound = document.createElement('audio');
    this.sound.src = audioURL;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute('muted', 'muted');
    this.sound.volume = volume
    this.sound.style.display = "none";
    // this.sound.muted = true;//setAttribute('muted', 'true');
    document.body.appendChild(this.sound);

  }

  play(){
    this.sound.pause();
    this.sound.currentTime = 0;
    this.sound.play();
  }
  pause(){
    this.sound.pause();
  }
  isPlaying(){
    return this.sound.currentTime !== 0 && this.sound.currentTime !== this.sound.duration ;
  }

}
export default Sound;