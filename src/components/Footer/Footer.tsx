import React from 'react';
import { Box, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface FooterProps {
    buttonText: string,
    isForm?: boolean,
    form?: string,
    buttonOnClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ buttonText, isForm, form, buttonOnClick }) => {
    const navigate = useNavigate();

    return (
        <Toolbar
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                padding: '10px',
                justifyContent: 'space-between',
                borderTop: '1px solid #ccc', // Set your preferred border color
                backgroundColor: '#fff', // Set your preferred background color
            }}
        >
            <div></div>
            <Box width={'auto'} display={'flex'} justifyContent={'flex-end'} gap={'16px'}>
                {isForm && <Button variant="outlined" onClick={() => navigate(-1)}>
                    <Typography variant='h6'>Cancel</Typography>
                </Button>}
                <Button form={form} variant="contained" type='submit' color="primary" onClick={buttonOnClick}>
                    <Typography variant='h6'>{buttonText}</Typography>
                </Button>
            </Box>
        </Toolbar>
    );
};

export default Footer;
