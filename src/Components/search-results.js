import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
    margin: 3%;
    margin-left: 13.7%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 2%;
    width: 50%;
    display: flex;
`
const Image = styled.img`
    width: 80%;
`
const Text = styled.text`
    background: white;
    padding: 2%;
    
`
const One = styled.div`
    width: 50%;
`

function ShowCard() {
    return (
        <>
            <Card>
                <One style={{ 'textAlign': 'center' }}>
                    <Image src="./DSC09318-2.jpg" /><br /><br />
                    <Link to="/profile"><h4> Lovetesh Chandra </h4>
                    </Link>
                </One>
                <Text>
                    About : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<br /> <br />
                    Year of passing: 2021<br /><br />
                    Branch: IT-M
                </Text>

            </Card>
        </>
    )
}

function SearchResults() {
    return (
        <>
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />

        </>

    )
}

export default SearchResults;