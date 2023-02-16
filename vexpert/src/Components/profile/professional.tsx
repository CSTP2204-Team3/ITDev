import TopNav from "@/Components/TopNav/topNav"
import { useState } from "react"
import profUser from "@/lib/resources/Models/userProfessional"
import styles from "./professional.module.sass"
import React from "react"
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

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


interface Props {
    userID: string,
    userName: String,
    userEmail: String,
    userTags: String[],
    userBio: String;
    userPortfolio: String[],
    userProfile: String;
};

//this is the style for the modal popup we have
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0.2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ProfessionalUserPage( props: Props){
    
    let [name, setName] = useState("")
    let [about, setAbout] = useState("This is the about section, write a short bio to introduce yourself to your customers!")
    let email: String = props.userEmail
    let [tempTag1, setTempTag1] = useState("")
    let [tempTag2, setTempTag2] = useState("")
    let [tempTag3, setTempTag3] = useState("")
    let [chipNames, setChipNames] = useState([""])
    const [checked, setChecked] = React.useState([""]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
      };
    

    // function handleAdd() {
    //     let stringToAdd = tempTag1
    //     if (chipNames.length > 3){
    //         chipNames.push(stringToAdd)
    //     }
    // }

    function uploadPortfolio(){
        //TODO
    }

    function save(){
        //TODO
    }
    function helpPopup(){

    }

    

    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
            <TopNav/>
            <div className={ styles.container }>
                {/* this is the row ontop of the white container */}
                <div className={ styles.titleRow }>
                    <div className={ styles.title }>Professional Profile</div>
                    {/* this div is here to space things nicely with flexbox */}
                    <div></div>
                    <button className={ styles.timeButton }>Time Availablity</button>
                    <button className={ styles.saveButton } onClick={ save } >Save</button>
                    <button className={ styles.questionButton } onClick={ handleOpen } > <HelpOutlineIcon /> </button>
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
                            src="/duck.jpeg" 
                            width={120}
                            height={120}
                            alt=""/>
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
                                {/* We will render the images here */}
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                {/* <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem>
                                <ImageListItem>
                                    <Image src="/duck.jpeg" height={120} width={120} alt="">

                                    </Image>
                                </ImageListItem> */}
                                
                            </ImageList>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}