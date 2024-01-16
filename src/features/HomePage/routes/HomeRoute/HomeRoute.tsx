import { Container, Paper, Typography } from "@mui/material"
import Navigation from "../../../../components/Navigation/Navigation"

const HomeRoute: React.FC = () => {
    return (
        <>
            <Navigation />
            <Container
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    marginTop: '15%',
                }}
            >
                <Paper
                    elevation={3}
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Welcome to the Home Page
                    </Typography>
                    <Typography variant="body1">
                        Please select something from the side bar
                    </Typography>
                    {/* Add more content or components as needed */}
                </Paper>
            </Container>
        </>
    )
}

export default HomeRoute;