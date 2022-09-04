import { colors } from "assets/styles";
import styled from "styled-components/macro";
import { DesktopMenu } from "./components";

export const Header = () => {
    return (
        <Root>
            <Container className="container">
                <Inner>
                    <DesktopMenu />
                </Inner>
            </Container>
        </Root>
    );
};

const Root = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${colors.black};
`;

const Container = styled.div`
    height: 100%;
`;

const Inner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;
