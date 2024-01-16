import {
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Home, Logout, AccountCircle, Business } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEPARTMENTS, EMPLOYEES, HOME } from '../../paths';

export interface NavigationProps { }

const Navigation: React.FC<NavigationProps> = ({ }) => {
    const navigate = useNavigate();

    const menuItems = [
        { text: 'Home', icon: <Home />, onClick: () => navigate(HOME) },
        { text: 'Employees', icon: <AccountCircle />, onClick: () => navigate(EMPLOYEES) },
        { text: 'Departments', icon: <Business />, onClick: () => navigate(DEPARTMENTS) },
    ];

    return (
        <>
            <Container sx={{marginRight: '15%'}}>
                <Drawer
                    anchor="left"
                    open={true}
                    variant='permanent'
                    color='primary'
                    sx={{ backgroundColor: '#f5f5f5' }}
                >
                    <Box sx={{ marginLeft: '28%' }}>
                        <img src='/img.png' width={'100px'} height={'auto'} />
                    </Box>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem key={index} onClick={item.onClick}>
                                <Button variant='text'>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        disableRipple={true}
                        sx={{ mt: 'auto' }}
                    >
                        <Logout />
                    </IconButton>
                </Drawer>
            </Container>
        </>
    );
};

export default Navigation;
