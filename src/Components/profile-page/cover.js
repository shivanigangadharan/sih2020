import React from 'react';
import styled from 'styled-components';

const CoverPic = styled.div`
    background-image: url("https://wallpapercave.com/wp/wp2553455.jpg");
    height: 40vh;
    width: 100vw;
    background-size: cover;
    box-shadow: 5px 5px 5px 5px solid black;
`
const ProfilePic = styled.img`
width: 25vw;
@media screen and (max-width: 600px){
    width: 350px;
}
`
const Card = styled.div`
    width: 80%;
    display: flex;
    padding: 1%;
    margin: 3%;
    border: 1px solid grey;
    border-radius: 4px;
    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`
const Text = styled.text`
    background: white;
    margin-left: 2%;
    padding: 2%;
    text-align: left;
    @media screen and (max-width: 600px){
        width: 320px;
        margin-left: 4.5%;
        margin-top: 2%;
    }
`
function Cover() {
    return (
        <>
            <CoverPic />
            <center>
                <div className="container">

                    <Card className="row">
                        <ProfilePic className="col-lg-6 col-sm-12" src="./DSC09318-2.jpg" />
                        <Text className="col-lg-6 col-sm-12">
                            <i>Lovetesh Chandra</i> <br /><br />
                            About : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<br /> <br /> Branch: IT-M <br /><br />
                            Year of passing: 2021<br /><br />

                            Contact : lovetesh@gmail.com | 8833625347
                        </Text>
                    </Card>
                </div></center>
        </>
    )
}

export default Cover; 