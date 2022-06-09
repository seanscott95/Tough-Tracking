import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`

export const FlexTop = styled(Flex)`
    justify-content: top;
    align-items: start;

    @media screen and (max-width: 634px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`