import styled from 'styled-components';
import bar from './download.jpg'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color:#E38B29;
    width: 100%;
    height: 1000px;
    font-family: 'RobotoCondensed';
    list-style-type: none;
    font-size: 60px;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export function StoryBegginingHeader() {
    return (
        <Container>
            <Text>
                <div>This is where our</div>
                <div>Story Begins</div>
            </Text>
        </Container>
    );
  }