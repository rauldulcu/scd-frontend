import React from 'react';
import { Typography } from "@mui/material";
import { StyledHeaderContainer } from './Header.styles';

type HeaderProps = {
    title: string;
    subtitle?: string;
    color?: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle, color }) => {
    return (
        <StyledHeaderContainer>
            <Typography variant='h3' sx={{ color }}>
                {title}
            </Typography>
            {subtitle && (
                <Typography variant='subtitle1' sx={{ color }}>
                    {subtitle}
                </Typography>
            )}
        </StyledHeaderContainer>
    );
};

export default Header;
