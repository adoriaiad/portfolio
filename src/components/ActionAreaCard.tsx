import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { GalleryItem } from '../models/type';
import { useTranslation } from 'react-i18next';

type ActionAreaCardProps = {
  item: GalleryItem;
  clickHandler: (item: GalleryItem) => void;
};

export default function ActionAreaCard(props: ActionAreaCardProps) {
  const {t} = useTranslation();
  const { item, clickHandler } = props;
  return (
    <Card
      className='ComicCard'
      sx={{ maxWidth: 235 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: '10px',
      }}
    >
      <CardActionArea onClick={() => clickHandler(item)}>
        <CardMedia
          component="img"
          height={'60%'}
          width={'60%'}
          image={item.src}
          alt={item.alt}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            color="text.secondary"
            component="div"
            style={{fontFamily: 'Yomogi'}}
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontFamily: 'Yomogi'}}>
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontFamily: 'Yomogi'}}>
            {`${t('ACTIONAREACARD.TECHNIQUE')}: ${item.technique}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
