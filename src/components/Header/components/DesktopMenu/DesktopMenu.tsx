import { breakpoints, colors } from "assets/styles";
import { LinkTo } from "components/LinkTo";
import styled from "styled-components/macro";

type DesktopMenuProps = {
    className?: string;
};

export const DesktopMenu = ({ className }: DesktopMenuProps) => {
    return (
        <Root className={className}>
            <LinksList>
                <LinkListItem>
                    <StyledLinkTo href="#about-us">О нас</StyledLinkTo>
                </LinkListItem>
                <LinkListItem>
                    <StyledLinkTo href="#products">Наши проекты</StyledLinkTo>
                </LinkListItem>
                <LinkListItem>
                    <StyledLinkTo href="#contacts">Связаться с нами</StyledLinkTo>
                </LinkListItem>
            </LinksList>
        </Root>
    );
};

const Root = styled.nav`
    display: none;

    @media (min-width: ${breakpoints.lg}) {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

const LinksList = styled.ul`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    list-style-type: none;
`;

const LinkListItem = styled.li`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledLinkTo = styled(LinkTo)`
    color: white;
`;
