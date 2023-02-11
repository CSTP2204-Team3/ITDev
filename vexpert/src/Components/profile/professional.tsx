import TopNav from "@/Components/TopNav/topNav"
import { useState } from "react"
import profUser from "@/lib/resources/Models/userProfessional"

import styles from "./professional.module.sass"
import { styled } from '@mui/material/styles';
import React from "react"
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";



export default function ProfessionalUserPage(){

    
    let [name, setName] = useState("")
    let [about, setAbout] = useState("This is my about section, where I can write a small bio to advertise my services")
    let email: String = "temp@gmail.com"

    

    let [tempTag, setTempTag] = useState("")

    let [chipNames, setChipNames] = useState([""])
    

    function handleAdd() {
        let stringToAdd = tempTag
        if (chipNames.length > 3){
            chipNames.push(stringToAdd)
        }
    }

    

    return(
        <>
            <TopNav/>
            <div className={ styles.container }>
                {/* this is the row ontop of the white container */}
                <div className={ styles.titleRow }>
                    <div className={ styles.title }>Professional Profile</div>
                    {/* this div is here to space things nicely with flexbox */}
                    <div></div>
                    <button className={ styles.timeButton }>Time Availablity</button>
                    <button className={ styles.saveButton } >Save</button>
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
                                <text id="email" className={ styles.input }> { email } </text>
                            </div>

                        </div>
                        {/* Container that will hold the photo */}
                        <div className={ styles.pictureSection }>
                            <Image 
                            className={styles.circleImage}
                            src="/duck.jpeg" 
                            width={100}
                            height={24}
                            alt=""/>
                        </div>

                    </div>
                    {/* specialty tags */}
                    <div className={ styles.tagsSection }>
                        Tags: 
                        <input className={ styles.input } type="text" id="newTag" name="newTag" placeholder="Add Tag" onChange={ e => setTempTag(e.target.value)} />
                        {/* <button onClick={ handleAdd } className={ styles.saveButton }> Add Tag</button> */}
                    </div>
                    {/* about section */}
                    <div className={ styles.aboutSection }>
                        <div>About: </div>
                        <textarea rows={3}>

                        </textarea>
                    </div>
                    {/* Portfolio pictures */}
                    <div className={ styles.portfolioSection }>
                        Portfolio
                        <ImageList cols={3} rowHeight={164}>
                            {/* We will render the images here */}
                            <ImageListItem>
                                <Image src="/duck.jpeg" height={100} width={100} alt="">

                                </Image>
                            </ImageListItem>
                            <ImageListItem>
                                <Image src="/duck.jpeg" height={100} width={100} alt="">

                                </Image>
                            </ImageListItem>
                        </ImageList>
                    </div>
                </div>
            </div>
        </>
    )
}