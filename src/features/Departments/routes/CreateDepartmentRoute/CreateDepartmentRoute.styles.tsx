import { Card, Stack, StackProps, css, styled } from "@mui/material";

export const FormCard = styled(Card)(
    ({ }) => css`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    overflow: visible;
    padding: 20px;
    `
)

export const ContentStack = styled(Stack)<StackProps>(
    ({ }) => css`
    width: 100%;
    flex-direction: column;
    flex-wrap: 'nowrap';
    gap: 10px;
    `
)