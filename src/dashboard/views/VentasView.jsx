import { ThemeContext } from "@emotion/react"
import { ArrowDropDown } from "@mui/icons-material"
import { Button, Grid } from "@mui/material"
import { Box } from "@mui/system"
import { useContext } from "react"
import { ThemeCustomProvider } from "../../context/ThemeCustomProvider"
import { useDarkMode } from "../../hooks/useDarkMode"
import { Buttons } from "../components/Buttons"
import { VentasFirstContainer } from "../components/VentasFirstContainer"
import { VentasSecondContainer } from "../components/VentasSecondContainer"
import { VentasTableViewer } from "../components/VentasTableViewer"
import { ventasButtons } from "../helpers/buttonsData"
import { EqualViewsLayout } from "../layout/EqualViewsLayout"

export const VentasView = () => {

  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        width: '100%',
        height: {
          xs: '100%',
          sm: '100%'
        },
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          width: '100%',
          height: '100vh',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
            },
            width: '100%',
            height: '100%'
          }}>
          <Grid
            item
            sx={{
              p: 0.5,
              width: '100%',
              height: '100px',
            }}
          >
            <Grid
              item
              className="container-custom animated_view_component"
              sx={{
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '100px',
                borderRadius: '15px'
              }}
            >
              <Buttons buttonsData={ventasButtons} />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row'
              },
              width: '100%',
              height: '100%'
            }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                p: 1
              }}>
              <Grid item className="animated_view" sx={{
                display: 'flex',
                width: '100%',
                height: '30%',
                borderRadius: '15px',
              }}>
                <Grid item className="container-custom" sx={{
                  pr: 1,
                  width: '50%',
                  height: '100%',
                  borderRadius: '15px'
                }}>
                  <Grid
                    item
                    className=""
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '15px',
                    }}
                  >
                    <VentasFirstContainer />
                  </Grid>
                </Grid>
                <Grid item className="" sx={{
                  pl: 1,
                  width: '50%',
                  height: '100%',
                  borderRadius: '15px'
                }}>
                  <Grid
                    item
                    className="container-custom"
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '15px'
                    }}
                  >
                    <VentasSecondContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className="container-custom animated_view animated_view_component-3" sx={{
                width: '100%',
                height: '77%',
                borderRadius: '15px',
                mt: 2
              }}>
                 <VentasTableViewer />
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
    // {/* <Box sx= }
    {/*     display: 'flex', */}
    {/*     flexDirection: { */}
    {/*       xs: 'column', */}
    {/*       sm: 'row' */}
    {/*     }, */}
    {/*     width: '100%', */}
    {/*     height: { */}
    {/*       xs: '100%', */}
    {/*       sm: '100%' */}
    {/*     }, */}
    {/*   }}> */}
    {/*   <Box */}
    {/*     sx={{ */}
    {/*       display: 'flex', */}
    {/*       flexDirection: { */}
    {/*         xs: 'column', */}
    {/*         sm: 'row' */}
    {/*       }, */}
    {/*       width: '100%', */}
    {/*       height: '100vh', */}
    {/*     }}> */}
    {/*     <Box */}
    {/*       sx={{ */}
    {/*         display: 'flex', */}
    {/*         flexDirection: { */}
    {/*           xs: 'column', */}
    {/*         }, */}
    {/*         width: '100%', */}
    {/*         height: '100%' */}
    {/*       }}> */}
    {/*       <Grid */}
    {/*         item */}
    {/*         sx={{ */}
    {/*           p: 0.5, */}
    {/*           width: '100%', */}
    {/*           height: '100px', */}
    {/*         }} */}
    {/*       > */}
    {/*         <Grid */}
    {/*           item */}
    {/*           className="container-custom animated_view_component" */}
    {/*           sx={{ */}
    {/*             p: 1, */}
    {/*             display: 'flex', */}
    {/*             alignItems: 'center', */}
    {/*             justifyContent: 'space-between', */}
    {/*             width: '100%', */}
    {/*             height: '100px', */}
    {/*             borderRadius: '15px' */}
    {/*           }} */}
    {/*         > */}
    {/*           <Buttons buttonsData={ventasButtons} /> */}
    {/*         </Grid> */}
    {/*       </Grid> */}
    {/*       <Box */}
    {/*         sx={{ */}
    {/*           mt: 2, */}
    {/*           display: 'flex', */}
    {/*           flexDirection: { */}
    {/*             xs: 'column', */}
    {/*             sm: 'row' */}
    {/*           }, */}
    {/*           width: '100%', */}
    {/*           height: '100%' */}
    {/*         }}> */}
    {/*         <Box */}
    {/*           sx={{ */}
    {/*             width: '100%', */}
    {/*             height: '100%', */}
    {/*             p: 1 */}
    {/*           }}> */}
    {/*           <Grid item className="animated_view" sx={{ */}
    {/*             display: 'flex', */}
    {/*             width: '100%', */}
    {/*             height: '30%', */}
    {/*             borderRadius: '15px', */}
    {/*           }}> */}
    {/*             <Grid item className="container-custom" sx={{ */}
    {/*               pr: 1, */}
    {/*               width: '50%', */}
    {/*               height: '100%', */}
    {/*               borderRadius: '15px' */}
    {/*             }}> */}
    {/*               <Grid */}
    {/*                 item */}
    {/*                 className="" */}
    {/*                 sx={{ */}
    {/*                   width: '100%', */}
    {/*                   height: '100%', */}
    {/*                   borderRadius: '15px', */}
    {/*                 }} */}
    {/*               > */}
    {/*                 <VentasFirstContainer /> */}
    {/*               </Grid> */}
    {/*             </Grid> */}
    {/*             <Grid item className="" sx={{ */}
    {/*               pl: 1, */}
    {/*               width: '50%', */}
    {/*               height: '100%', */}
    {/*               borderRadius: '15px' */}
    {/*             }}> */}
    {/*               <Grid */}
    {/*                 item */}
    {/*                 className="container-custom" */}
    {/*                 sx={{ */}
    {/*                   width: '100%', */}
    {/*                   height: '100%', */}
    {/*                   borderRadius: '15px' */}
    {/*                 }} */}
    {/*               > */}
    {/*                 <VentasSecondContainer /> */}
    {/*               </Grid> */}
    {/*             </Grid> */}
    {/*           </Grid> */}
    {/*           <Grid item className="container-custom animated_view animated_view_component-3" sx={{ */}
    {/*             width: '100%', */}
    {/*             height: '77%', */}
    {/*             borderRadius: '15px', */}
    {/*             mt: 2 */}
    {/*           }}> */}
    {/*             <VentasTableViewer /> */}
    {/*           </Grid> */}
    {/*         </Box> */}
    {/*       </Box> */}
    {/*     </Box> */}
    {/*   </Box> */}
    {/* </Box> */}
}
/* * */
