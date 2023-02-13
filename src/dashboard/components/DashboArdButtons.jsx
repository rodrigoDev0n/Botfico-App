
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
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
      <ListItem disablePadding sx={{ pl: 2, mt: 2 }}>
        <Typography variant="p" sx={{ color: '#ffff', fontWeight: 'bolder' }}>
          Items
        </Typography>
      </ListItem>

      {
        buttonIconTextData.map(({ icon, name, route, id, active }) => (
          <Link to={route} className="custom-link" key={id}>
            <ListItem>
              <ListItemButton onClick={() => onActiveButton(id)} sx={{
                backgroundColor: active ? 'primary.secondary' : '',
                borderRadius: 10
              }}>
                <ListItemIcon>
                  <Icon sx={{ color: '#ffff' }}>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={name} sx={{ color: 'dashboardtextcolors.main' }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))
      }
    </>
  )
}
