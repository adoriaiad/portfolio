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
        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}
      >
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/00-soundtrack.mp3')} variant="outlined" className="Musicbtn">MUSICA</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/01-violino.mp3')} variant="outlined" className="Musicbtn">VIOLINO</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/02-tromba.mp3')} variant="outlined" className="Musicbtn">TROMBETTA</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/03-flauto.mp3')} variant="outlined" className="Musicbtn">FLAUTO</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/04-chitarra.mp3')} variant="outlined" className="Musicbtn">CHITARRA</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/05-piano.mp3')} variant="outlined" className="Musicbtn">PIANOFORTE</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/06-tuba.mp3')} variant="outlined" className="Musicbtn">TUBA</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/07-clarinetto.mp3')} variant="outlined" className="Musicbtn">CLARINETTO</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/08-arpa.mp3')} variant="outlined" className="Musicbtn">ARPA</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/09-violoncello.mp3')} variant="outlined" className="Musicbtn">VIOLONCELLO</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/10-percussioni.mp3')} variant="outlined" className="Musicbtn">PERCUSSIONI</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/11-baraonda.mp3')} variant="outlined" className="Musicbtn">MIX</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/12-finale.mp3')} variant="outlined" className="Musicbtn">FINALE</Button></Grid>
        <Grid style={{marginBottom: '4px' }}><Button onClick={() => playAudio('/audio/13-applausi.mp3')} variant="outlined" className="Musicbtn">APPLAUSI</Button></Grid>
      </Grid>
    );
}

export default Musica;