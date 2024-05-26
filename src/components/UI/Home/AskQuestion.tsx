"use client"
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { useState } from 'react';

export default function AskQuestion() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='md:mt-20 mt-14'>
      <h3 className='md:text-2xl font-bold text-lg text-[#29CD9C]
      text-center mb-5 md:mb-10'>Frequently asked Questions</h3>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          backgroundColor:"#C6F3D9",
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography color="black">How do I find a travel buddy?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"white"}}>
          <Typography>
          To find a travel buddy, sign up on the website, create a profile, and search for other travelers with similar destinations, dates, and interests. You can message potential travel buddies to discuss and plan your trip.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"#C6F3D9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Can I find travel buddies for specific types of trips?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"white"}}>
          <Typography>
          Yes, you can search for travel buddies based on specific types of trips such as backpacking, city tours, adventure sports, cultural experiences, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"#C6F3D9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How do I create a trip plan on the website?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"white"}}>
          <Typography>
          To create a trip plan, log in to your account, go to the &rsquo;Create a Trip&rsquo; section, enter details like destination, dates and description, and then post it for others to see and join.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"#C6F3D9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Can I use this website for business travel companions?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"white"}}>
          <Typography>
          Yes, some travelers use the website to find companions for business trips, networking opportunities, or to share travel costs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"#C6F3D9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How can I ensure my safety while traveling with a stranger?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"white"}}>
          <Typography>
          To ensure safety, always communicate extensively with your potential travel buddy before the trip, check their profile and reviews, meet in a public place first, and share your travel plans with friends or family.
          </Typography>
        </AccordionDetails>
      </Accordion>
   
    </div>
  );
}
