import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { GalleryItem } from '../models/type';

type ActionAreaCardProps = {
  item: GalleryItem;
  clickHandler: (item: GalleryItem) => void;
};

export default function ActionAreaCard(props: ActionAreaCardProps) {
  const { item, clickHandler } = props;
  return (
    <Card
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
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Tecnica: ${item.technique}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
