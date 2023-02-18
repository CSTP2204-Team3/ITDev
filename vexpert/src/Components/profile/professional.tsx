import TopNav from "@/Components/TopNav/topNav"
import { useState } from "react"
import styles from "./professional.module.sass"
import React from "react"
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//TODO - change to a user object once we have the backend implemented
//this is an interface of everything we expect to receive from the main page
interface Props {
    //ID of the user
    userID: string,
    //name of the user
    userName: String,
    //email of the user
    userEmail: String,
    //tags that have been selected for the user
    userTags: String[],
    //user biography
    userBio: String;
    //string array that will hold all the cloudinary photo URLS that we will load in
    userPortfolio: String[],
    //URL of the cloudinary photo that they selected to be their profile picture
    userProfile: string;
};

//this is the style for the modal popup we have, most of it is the default style that comes from materialUI
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    //changed the border to be thinner
    border: '0.2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProfessionalUserPage( props: Props){
    //these will hold the name if it's changed
    let [name, setName] = useState("")
    //this will hold the about section
    let [about, setAbout] = useState("This is the about section, write a short bio to introduce yourself to your customers!")
    //this is automatically set for email, this is not able to be modified
    let email: String = props.userEmail
    //this is a variable to keep track of which category is checked off
    const [checked, setChecked] = React.useState([""]);
    //reference for modals: https://mui.com/material-ui/react-modal/
    //this variable will keep track of if the help section has been selected
    const [open, setOpen] = React.useState(false);
    //these are quick functions that will open and close our help section
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //reference: https://mui.com/material-ui/react-checkbox/
    //this lets us keep a list of what values have been selected
    const handleToggle = (value: string) => () => {
        //keep track of which one in the list is selected
        const currentIndex = checked.indexOf(value);
        //create a new list that will take everything that's currently selected
        const newChecked = [...checked];
        //if nothing is selected, we will just add the new value
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            //if there is already something in the list
            //using splice to either take something out of the current index, or add the checked in
            newChecked.splice(currentIndex, 1);
        }
        //setting the variable to the new modified array we have
        setChecked(newChecked);
    };

    //this will be a function that uploads the image to cloudinary and then add it to the list of portfolio images
    function uploadPortfolio(){
        //TODO
    }

    //this will upload a profile picture to cloudinary, and then update the user object with the image URL
    function handleProfilePic(){
        //TODO
    }

    //this will save and update the professional user in our database
    function save(){
        //TODO
    }



    return(
        <>
            {/**
             * Showing the modal here so it's not going to inherit any design elements
             * This is the help modal which will pop up if the user hits the question mark icon
             */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/**
                 * Declaring a box and using the style we outlined above
                 */}
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Help Section
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        The tags determine which categories you will show up in. <br /> <br />
                        The about section is where you can write a small bio about yourself. <br /><br />
                        Add Portfolio pictures to show off your skills!
                    </Typography>
                </Box>
            </Modal>
            {/**
             * This is the start of the regular page
             */}
            <TopNav/>
            <div className={ styles.container }>
                {/* this is the row ontop of the white container */}
                <div className={ styles.titleRow }>
                    <div className={ styles.title }>Professional Profile</div>
                    {/* this div is here to space things nicely with flexbox */}
                    <div></div>
                    {/* <button className={ styles.timeButton }>Time Availablity</button> */}
                    <div>
                    <button className={ styles.saveButton } onClick={ save } >Save</button>
                    <button className={ styles.questionButton } onClick={ handleOpen } > <HelpOutlineIcon /> </button>
                    </div>
                </div>
                {/* white container that will hold all the information we need */}
                <div className={ styles.whiteContainer }>
                    {/* name, email, and photo */}
                    <div className={ styles.topRow }>
                        {/* container that will hold the name and email */}
                        <div className={ styles.textSection }>
                            <div> 
                                {/* input for the name */}
                                <label htmlFor="name">Name: </label>
                                <input className={ styles.input } type="text" id="name" name="name" placeholder={name} onChange={e => setName(e.target.value)} required />
                            </div>
                            <div> 
                                {/* section for the email (this cannot be changed/edited) */}
                                <label htmlFor="email">Email: </label>
                                <text id="email" className={ styles.email1input }> { email } </text>
                            </div>
                            {/* specialty tags */}
                            <div className={ styles.tagsSection }>
                                <div className={styles.tagsLabel}>
                                Tags: 
                                </div>
                                {/* We can use this if we want to let the users manually type their own tags */}
                                {/* <input className={ styles.tags1input } type="text" id="newTag" name="newTag" placeholder="Tag 1" onChange={ e => setTempTag1(e.target.value)} />
                                <input className={ styles.input } type="text" id="newTag" name="newTag" placeholder="Tag 2" onChange={ e => setTempTag2(e.target.value)} />
                                <input className={ styles.input } type="text" id="newTag" name="newTag" placeholder="Tag 3" onChange={ e => setTempTag3(e.target.value)} /> */}
                                {/* Or we can use this if we want to make a selectable list */}
                                <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper', fontWeight: 100, marginLeft: "10px", fontStyle: "normal" }}>
                                    {["Hair Styling", "Hair Cuts", "Hair Colour"].map((value) => {
                                        const labelId = `checkbox-list-label-${value}`;
                                        return (
                                            <ListItem
                                                key={value}
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                                <ListItemIcon>
                                                    <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(value) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={labelId} primary={`${value}`} />
                                                </ListItemButton>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </div>

                        </div>
                        {/* Container that will hold the photo */}
                        <div className={ styles.pictureSection }>
                            <Image 
                            className={styles.circleImage}
                            src={props.userProfile}
                            width={120}
                            height={120}
                            alt=""
                            onClick={handleProfilePic}/>
                        </div>
                    </div>
                    
                    {/* about section */}
                    <div className={ styles.aboutSection }>
                        <div>About: </div>
                        <textarea rows={3} placeholder={about} onChange={e => setAbout(e.target.value)}>

                        </textarea>
                    </div>
                    {/* Portfolio pictures */}
                    <div className={ styles.portfolioSection }>
                        Portfolio <button className={styles.plusButton}> <AddAPhotoIcon fontSize="medium"/> </button>
                        <div className={styles.imageBar}>
                            <ImageList cols={6} rowHeight={164}>
                                {
                                    //for everything in the user portfolio list, we will map the data to an image list item
                                    props.userPortfolio.map((value) => {
                                        {/* using the index of each item in our portfolio picture list as the key because we know that it is unique*/}
                                        return (
                                            <ImageListItem key={props.userPortfolio.indexOf(value)}>
                                                {/**
                                                 * Here we are setting the loading to "lazy", meaning it will let the page render before fully loading all the pictures
                                                 * This is done so we can save time and render the page for the user faster
                                                 */}
                                                <Image src={value.toString()} height={120} width={120} alt="" loading="lazy">
                                                </Image>
                                            </ImageListItem>
                                        )
                                    })
                                }
                            </ImageList>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}