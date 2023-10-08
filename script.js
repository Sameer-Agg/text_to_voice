const textArea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;


const textToSpeak = () => {
    const synth = window.speechSynthesis;
    const text  = textArea.value;

    if(!synth.speaking && text){
        const utterance = new SpeechSynthesisUtterance(text)
        synth.speak(utterance)
    }

    if(text.length > 50 ){
        if(synth.speaking && isSpeaking){
            button.innerText = "Pause"
            synth.resume();
            isSpeaking = false;
        }else{
            button.innerText = "Resume"
            synth.pause();
            isSpeaking = true;
        }
    }else{
        isSpeaking = false;
        button.innerText= "Speaking"
    }


    setInterval(() =>{
        if(!synth.speaking && !isSpeaking){
            isSpeaking = true;
            button.innerText= "Convert To Speech"
        }
    })
}

button.addEventListener("click", textToSpeak)
