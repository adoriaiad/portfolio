import { Divider } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

function DataProtection() {
  const { t } = useTranslation();
  return (
    <Container style={{ margin: '0px' }}>
      <Typography variant="h4" align="center">
        {t('DATAPROTECTION')}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="justify" style={{marginBottom: '10px'}}>
        Il proprietario di questo sito Web è Angelita Doria.
        <br />I dati personali forniti dall'utente
        attraverso la pagina Web e tramite un modulo o e-mail, sono riservati e
        faranno parte dei file di proprietà di Angelita Doria al fine di
        rispondere alle richieste di informazioni che potrebbero aver
        manifestato interesse.
        <br /> I dati inseriti nei moduli dall'utente si presumono veritieri,
        esatti, completi e aggiornati.
        <br /> L'utente sarà l'unico responsabile di qualsiasi danno o perdita,
        diretta o indiretta, causata a terzi dall'inserimento, tramite il form,
        di dati falsi, inesatti, incompleti e non aggiornati. Il responsabile
        dell'archivio si impegna a rispettare l'obbligo di segretezza in merito
        ai dati personali contenuti nei propri archivi e derivati ​​da questo
        sito web.
        <br /> Allo stesso modo, il proprietario dei dati è riconosciuto per
        esercitare i diritti di accesso, rettifica, cancellazione e opposizione,
        che possono essere esercitati via e-mail a info@angelitadoria.com,
        fornendo una copia del DNI come previsto nell'Istruzione del Regolamento
        generale sulla protezione dei dati (RGPD) - Regolamento (UE 2016/679).
        <br />
        Angelita Doria si riserva il diritto di modificare la sua politica di
        riservatezza e protezione dei dati in qualsiasi momento sulla base delle
        normative applicabili presenti e future.
        <br /> L'utente autorizza Angelita Doria a ottenere o acquisire dati
        relativi alla connessione e, eventualmente, all'utilizzo di file o
        record di verifica sul disco dell'utente o "cookie", esclusivamente a
        fini operativi, di sicurezza e statistici. , dati che in un eventuale
        trattamento le informazioni saranno dissociate dai Suoi dati personali,
        registrati a nome di Angelita Doria, in conformità e nel rispetto della
        normativa vigente in materia di Protezione dei Dati Personali. In ogni
        momento, puoi manifestare la tua volontà di NON ricevere alcun tipo di
        pubblicità comunicandolo via email:{' '}
        <Link href={'mailto:info@angelitadoria.com'}>
          info@angelitadoria.com
        </Link>
        .
      </Typography>
      <Divider />
      <Typography variant="body2" color="text.secondary" align="justify" style={{marginTop: '10px'}}>
        The owner of this website is Angelita Doria.<br />
        The personal data provided by the user through the web page and through
        a form or email, are confidential and will be part of the files owned by
        Angelita Doria in order to respond to requests for information they may
        have expressed interest.
        <br /> The data entered in the forms by user are assumed to be true,
        accurate, complete and up-to-date.
        <br /> You will be solely responsible for any damage or loss, direct or
        indirect, caused to third parties by entering, through the form, of
        false, inaccurate, incomplete and outdated data. Manager of the archive
        undertakes to respect the obligation of secrecy in this regard to the
        personal data contained in its archives and derived from it website.
        <br /> Likewise, data's owner is recognized for exercise his rights of
        access, rectification, cancellation and opposition, which can be
        exercised by email to info@angelitadoria.com, providing a copy of the
        DNI as provided for in the Instruction of General Data Protection
        Regulation (RGPD) - Regulation (EU 2016/679).
        <br />
        Angelita Doria reserves the right to change its policy confidentiality
        and data protection at any time on the basis of current and future
        applicable regulations.
        <br /> The user authorizes Angelita Doria to obtain or acquire data
        relating to the connection and, possibly, the use of files or a user's
        disk verification record or "cookie", only a operational, security and
        statistical purposes. , data that in a possible treatment the
        information will be dissociated from his personal data, registered in
        the name of Angelita Doria, in accordance with and in compliance with
        the current legislation on the protection of personal data. In each
        moment, you can express your will NOT to receive any kind of advertising
        by communicating it via email:{' '}
        <Link href={'mailto:info@angelitadoria.com'}>
          info@angelitadoria.com
        </Link>
        .
      </Typography>
    </Container>
  );
}

export default DataProtection;
