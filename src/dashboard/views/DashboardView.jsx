import { Box, Grid, Typography } from "@mui/material"
import { BankAccount } from "../components/BankAccount"
import { ExpensesDashboard } from "../components/ExpensesDashboard"
import { Invoices } from "../components/Invoices"
import { ProfitLoss } from "../components/ProfitLoss"
import { Sales } from "../components/Sales"

export const DashboardView = () => {
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
          sm: '95%'
        },
      }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        width: '100%',
        height: '95vh',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
          },
          width: '100%',
          height: '100%',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            height: '100%'
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="box-shadow animated_view_component" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px'
              }}>
                <Invoices />
              </Grid>
            </Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="box-shadow animated_view_component-2" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px'
              }}>
                <ExpensesDashboard />
              </Grid>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            height: '100%',
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="box-shadow animated_view_component-3" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px'
              }}>
                <ProfitLoss />
              </Grid>
            </Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="box-shadow animated_view_component-4" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px'
              }}>
                <Sales />
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        direction: {
          xs: 'column',
          sm: 'row'
        },
        width: {
          xs: '100%',
          sm: '45%'
        },
        height: '95%',
        p: 1
      }}>
        <Grid item className="box-shadow animated_view_component-5" sx={{
          width: '100%',
          height: '100%',
          borderRadius: '15px',

        }}>
          <BankAccount />
        </Grid>
      </Box>
    </Box>
  )
}