import "./styles.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ListItemText from "@material-ui/core/ListItemText";

export function Items(props) {
  return (
    <Card className="Card">
      <CardMedia
        className="Media"
        image={
          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        }
      />
      <CardContent>
        <ListItemText>
          <span className="Name">{props.title}</span>
          <span className="Price">{props.price}</span>
          <span className="Description">{props.description}</span>
        </ListItemText>
      </CardContent>
    </Card>
  );
}
