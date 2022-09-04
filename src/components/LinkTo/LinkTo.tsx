import { ReactNode } from "react";

type LinkToProps = {
    className?: string;
    children?: ReactNode;
    href: string;
};

export const LinkTo = ({ className, children, href }: LinkToProps) => {
    return (
        <a className={className} href={href}>
            {children}
        </a>
    );
};
