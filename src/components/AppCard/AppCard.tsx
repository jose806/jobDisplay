import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Styles from "./AppCard.module.css";
const AppCard = ({ name, url, description }: Props) => {
  return (
    <div>
      <Card className={Styles.Card}>
        <CardMedia component="img" image={url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppCard;

interface Props {
  name: string;
  url: string;
  description: string;
}
