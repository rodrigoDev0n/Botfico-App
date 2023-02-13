import { useState } from "react"
import { buttonIconTextData } from "../helpers/DashboardButtonData"

export const useDashboard = () => {

  const [buttons] = useState(buttonIconTextData)

  const onActiveButton = (index) => {
    buttons.map(e => {
        if (e.id !== index) {
            e.active = false
        } else {
            e.active = true
        }
    })
  }

  return {
    onActiveButton,
  }
}
