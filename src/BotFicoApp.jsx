import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const BotFicoApp = () => {
  return (
    <AuthProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AuthProvider>
  )
}
