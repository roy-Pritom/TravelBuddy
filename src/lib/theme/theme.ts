
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main:'#29CD9C',
    },
    secondary: {
      main: '#29CD9C',
    },
  },
  components:{
    MuiButton:{
        defaultProps:{
            variant:"contained",
     
        }
    },
    MuiContainer:{
      defaultProps:{
        maxWidth:"xl"
      }
    },

  },
  typography:{
    body1:{
      color:'#0B1134CC'
    }
  }

});
