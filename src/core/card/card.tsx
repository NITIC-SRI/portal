import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import　type {CardType} from "@/types/card.type";

interface RecipeReviewCardProps {
	card: CardType;
}

function RecipeReviewCard(props: RecipeReviewCardProps) {
  return (
    <Card sx={{ maxWidth: 1440 }} style={{marginBottom: "20px",}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            style={{ fontSize: "10px" }}
          >
            {props.card.user.stuNumber}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.card.user.name}
        subheader={props.card.createdAt}
      />
      <CardContent>{props.card.text}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default RecipeReviewCard;
