import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React from "react";

function DataProtection() {
  return (
    <Container style={{margin: '0px'}}>
      <Typography variant='h4' align='center'>Protezione dei dati</Typography>
      <Typography variant="body2" color="text.secondary" align="justify">
        Il proprietario di questo sito Web è Angelita Doria, con sede legale in
        Belgio, Grimbergen. <br />I dati personali forniti dall'utente attraverso la
        pagina Web e tramite un modulo o e-mail, sono riservati e faranno parte
        dei file di proprietà di Angelita Doria al fine di rispondere alle
        richieste di informazioni che potrebbero aver manifestato interesse.<br/> I
        dati inseriti nei moduli dall'utente si presumono veritieri, esatti,
        completi e aggiornati.<br /> L'utente sarà l'unico responsabile di qualsiasi
        danno o perdita, diretta o indiretta, causata a terzi dall'inserimento,
        tramite il form, di dati falsi, inesatti, incompleti e non aggiornati.
        Il responsabile dell'archivio si impegna a rispettare l'obbligo di
        segretezza in merito ai dati personali contenuti nei propri archivi e
        derivati ​​da questo sito web.<br /> Allo stesso modo, il proprietario dei
        dati è riconosciuto per esercitare i diritti di accesso, rettifica,
        cancellazione e opposizione, che possono essere esercitati via e-mail a
        info@angelitadoria.com, fornendo una copia del DNI come previsto
        nell'Istruzione del Regolamento generale sulla protezione dei dati
        (RGPD) - Regolamento (UE 2016/679).<br/>Angelita Doria si riserva il diritto
        di modificare la sua politica di riservatezza e protezione dei dati in
        qualsiasi momento sulla base delle normative applicabili presenti e
        future.<br/> L'utente autorizza Angelita Doria a ottenere o acquisire dati
        relativi alla connessione e, eventualmente, all'utilizzo di file o
        record di verifica sul disco dell'utente o "cookie", esclusivamente a
        fini operativi, di sicurezza e statistici. , dati che in un eventuale
        trattamento le informazioni saranno dissociate dai Suoi dati personali,
        registrati a nome di Angelita Doria, in conformità e nel rispetto della
        normativa vigente in materia di Protezione dei Dati Personali. In ogni
        momento, puoi manifestare la tua volontà di NON ricevere alcun tipo di
        pubblicità comunicandolo via email: <Link href={'mailto:info@angelitadoria.com'} >info@angelitadoria.com</Link>.
      </Typography>
    </Container>
  );
}

export default DataProtection;
