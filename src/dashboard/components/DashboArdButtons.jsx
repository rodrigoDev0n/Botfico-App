
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material"

import { Link } from "react-router-dom"
import Icon from '@mui/material/Icon';
import { buttonIconTextData } from "../helpers/DashboardButtonData"
import { useDashboard } from "../hooks/useDashboard";

export const DashboArdButtons = () => {

  const { onActiveButton } = useDashboard()

  return (
    <>
      <ListItem disablePadding sx={{ pl: 2, mt: 1 }}>
        <Typography variant="p" sx={{ color: '#ffff', fontWeight: 'bolder' }}>
          Items
        </Typography>
      </ListItem>
      {
        buttonIconTextData.map(({ icon, name, route, id, active }) => (
          <Link to={route} className="custom-link" key={id}>
            <ListItem>
              <ListItemButton onClick={() => onActiveButton(id)} sx={{
                backgroundColor: active ? '#0c416b' : '',
                boxShadow: active ? '0px 3px 2px rgba(0, 0, 0, 0.2)': '',
                borderRadius: 10,
                ":hover": {
                  backgroundColor: '#0c416b',
                }
              }}>
                <Icon className="custom-icon" sx={{ color: '#ffff' }}>{icon}</Icon>
                <ListItemText primary={name} sx={{
                  color: '#fff',
                  ml: 2,
                }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))
      }
    </>
  )
}
