import MYFullScreenModal from "@/components/Modals/MYFullScreenModal";
import { useGetTripByIdQuery} from "@/redux/api/user/tripApi";
import { Box,  Button,  Stack, Tooltip, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { formattedDate } from "@/utils/dateFormatter";
import { formateDateTime } from "@/utils/formateDateTime";
import Loader from "@/components/shared/Loader/Loader";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    id:string;
}
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const ViewTripModal = ({ open, setOpen,id}: TProps) => {

 const {data:trip,isLoading}=useGetTripByIdQuery(id);
//  console.log(trip);
 const [expanded, setExpanded] = useState(false);

 
    return (
        <MYFullScreenModal open={open as boolean} setOpen={setOpen} title="Trip Details">

      {
        isLoading ?
        (
            <Loader/>
        )
        :
        (
            <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
            <Box>
              <Card sx={{ maxWidth: 500 }}>
                <CardHeader
                  avatar={
                    <Avatar alt="profile" src={trip?.user?.profile?.profilePhoto ? trip?.user?.profile?.profilePhoto :''} />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={trip?.user?.name}
                  subheader={formateDateTime(trip?.createdAt)}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={trip?.file}
                  alt="tripPhoto"
                />
                <CardContent>
                  <Typography fontWeight={600}>Destination : <span>{trip?.destination}</span>
                  </Typography>
                   <Stack direction="row" justifyContent="space-between" my={1}>
                   <Typography >Start Date : <span>{formattedDate(trip?.startDate)}</span>
                  </Typography>
                  <Typography >End Date : <span>{formattedDate(trip?.endDate)}</span>
                  </Typography>
                   </Stack>
                  <Typography variant="body2" color="text.secondary">
                     {trip?.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={false}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                <Tooltip title="budget">
                <Button variant="outlined">${trip?.budget}</Button>
                </Tooltip>
                    
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
          
              </Box>
            </Stack>
        )
      }
       

        </MYFullScreenModal>
    );
};

export default ViewTripModal;