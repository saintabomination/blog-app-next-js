import { FunctionComponent } from 'react';

import Header from './Header';

type Props = {
    children: React.ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;
