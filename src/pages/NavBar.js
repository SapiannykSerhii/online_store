// import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import IconButton from "@mui/material/IconButton";
// import HomeIcon from '@mui/icons-material/Home';
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           component={Link}
//           to="/"
//           edge='start'
//           color="inherit"
//           aria-label="home">
//           <HomeIcon />
//         </IconButton>

//       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//         Online Shop
//       </Typography>
        
//       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//         <Badge badgeContent={""} color="error">
//           <ShoppingCartIcon />
//         </Badge>
//       </IconButton>
        
//       <IconButton
//         size="large"
//         edge="end"
//         aria-label="account of current user"
//         aria-haspopup="true"
//         color="inherit"
//       >
//         <AccountCircleIcon />
//       </IconButton>
//     </Toolbar>
//   </AppBar>
//   )
// }

// export default NavBar

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#4D4D56', minWidth: '100vw' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          component={Link}
          to="/"
          edge='start'
          color="inherit"
          aria-label="home"
          sx={{ marginLeft: '-12px' }}
        >
          <HomeIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Online Shop
        </Typography>
          
        <IconButton
          size="large"
          aria-label="shopping cart"
          color="inherit"
          sx={{ marginRight: '-12px' }} 
        >
          <Badge badgeContent={10} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
          
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          sx={{ marginRight: '-12px' }} 
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;