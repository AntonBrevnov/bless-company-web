import { ReactNode } from "react";
import styled from "styled-components/macro";
import { Header } from "components";

type MainLayoutProps = {
    children?: ReactNode[] | ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Root>
            <Header />
            <MainContainer>
                <div className="container">{children}</div>
            </MainContainer>
        </Root>
    );
};

const Root = styled.div`
    width: 100%;
`;

const MainContainer = styled.main`
    width: 100%;
    padding: 0 16px;
`;
