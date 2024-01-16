import { Stack } from "@mui/material"
import Navigation from "../components/Navigation/Navigation"
import { Outlet } from "react-router-dom"

const AppLayout: React.FC = () => {
    return (
        <>
            <Stack
                flexDirection={'row'}
                height='100%'
                width='100%'>
                <Navigation />
                <Stack
                    width='100%'
                    height='100%'>
                    <Outlet />
                </Stack>
            </Stack>
        </>
    )
}

export default AppLayout;