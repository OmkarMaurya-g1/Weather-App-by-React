import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({info}) {
  const INIT_URL =
    "https://media.istockphoto.com/id/2121114750/photo/img-1725.jpg?s=612x612&w=is&k=20&c=mpWPAdUmzUy140iJDZkQErFT7iafzABxG4GAwMgN-dQ=";

  const HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLwEQ7iKzyQ46mBAEMdPiySsjQsTa70RnTTl_6vOJNHpjC44uUMDkEwhufWYYmcmBVZA&usqp=CAU";
  const COLD_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppLjMKccR6xKgBZ4k6VmEhlxn8pXrKQx7Vw&s";
  const RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFS_DvSB2VOvSyY-W-Rl-ViPc45yFpLhYCaQ&s";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{maxWidth: 345}}>
          <CardMedia
            sx={{height: 140}}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{color: "text.secondary"}}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i> {info.weather} </i>and fells
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
