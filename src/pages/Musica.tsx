import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

function Musica(){

    function playAudio(audioPath: string) {
        const audio = new Audio(audioPath);
        audio.play();
    }

    return (
        <Grid
        container
        spacing={2}
        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
      >
        <Button onClick={() => playAudio('/audio/00-soundtrack.mp3')}>MUSICA</Button>
        <Button onClick={() => playAudio('/audio/01-violino.mp3')}>VIOLINO</Button>
        <Button onClick={() => playAudio('/audio/02-tromba.mp3')}>TROMBETTA</Button>
        <Button onClick={() => playAudio('/audio/03-flauto.mp3')}>FLAUTO</Button>
        <Button onClick={() => playAudio('/audio/04-chitarra.mp3')}>CHITARRA</Button>
        <Button onClick={() => playAudio('/audio/05-piano.mp3')}>PIANOFORTE</Button>
        <Button onClick={() => playAudio('/audio/06-tuba.mp3')}>TUBA</Button>
        <Button onClick={() => playAudio('/audio/07-clarinetto.mp3')}>CLARINETTO</Button>
        <Button onClick={() => playAudio('/audio/08-arpa.mp3')}>ARPA</Button>
        <Button onClick={() => playAudio('/audio/09-violoncello.mp3')}>VIOLONCELLO</Button>
        <Button onClick={() => playAudio('/audio/10-percussioni.mp3')}>PERCUSSIONI</Button>
        <Button onClick={() => playAudio('/audio/11-baraonda.mp3')}>MIX</Button>
        <Button onClick={() => playAudio('/audio/12-finale.mp3')}>FINALE</Button>
        <Button onClick={() => playAudio('/audio/13-applausi.mp3')}>APPLAUSI</Button>
      </Grid>
    );
}

export default Musica;