import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color:#FDEEDC;
    width: 100%;
    height: 80px;
`;

const Navigation = styled.ul`
    display: flex;
    flex: 2;
    justify-content: flex-end;
`;

const NavigationItem = styled.li`
    font-family: 'RobotoCondensed';
    list-style-type: none;
    margin-right: 20px;
    padding: 0;
`;

const Link = styled.a`
`;

const LogoTitle = styled.div`
    font-family: 'RobotoCondensed';
    font-size: 30px;
    margin-left: 20px;
`;

const List = styled.ul`
    height: 20px;
`;

const Item = styled.li`
    color: black;
`;

export function Navbar() {
    return (
        <Container>
            <LogoTitle>Dice Realm</LogoTitle>
            <Navigation>
                <NavigationItem>
                    <Link href='/'>Home</Link>
                </NavigationItem>
                <NavigationItem>
                    <Link href='/'>About Us</Link>
                </NavigationItem>
                <NavigationItem>
                    <Link href='/'>Contact Us</Link>
                </NavigationItem>
            </Navigation>
        </Container>
    );
  }