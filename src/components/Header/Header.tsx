import { colors } from "assets/styles";
import styled from "styled-components";

export const Header = () => {
    return (
        <Root>
            <Container className="container">
                <Inner>
                    <LogoIconWrap>B.</LogoIconWrap>
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

const LogoIconWrap = styled.div`
    background: linear-gradient(90deg, ${colors.primary} 7.27%, ${colors.primaryDark} 100%);
`;
