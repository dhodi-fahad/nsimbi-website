"use client"

import * as React from 'react';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './inputfield.module.css';
import {Checkbox} from "@mui/material";
import Link from "next/link";

function ComboBox({ label, options }) {
    return (
        <div style={{ margin: '10px 0' }}>
            <Autocomplete
                disablePortal
                options={options}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </div>
    );
}


export const InputForm = () => {
    const shopMarketOptions = [
        'TMT Super Market',
        'Italian Mart',
        'Namuwongo Market'
    ];

    const locationOptions = [
        'Muyenga',
    ];

    return (
        <div className={styles.form}>
            {/*
                Label: Select Shop / Market Location
                Option 1: Muyenga / Kabalagala / Kisugu / Namuwongo
            */}
            <ComboBox label="Select Shop / Market Location" options={locationOptions} />
            {/*
                Label: Select Shop / Market
                Option 1: TMT Super Market
                Option 2: Italian Mart
                Option 3: Namuwongo Market
            */}
            <ComboBox label="Select Shop / Market" options={shopMarketOptions} />
            <div style={{ margin: '20px 0'}}>
                <TextField
                    id="outlined-textarea"
                    label="Create Shopping List"
                    placeholder="Shopping List"
                    sx={{ width: '100%' }}
                    multiline
                    rows={4}
                />
            </div>
            <div style={{margin: "10px 0px"}}>
                <Checkbox/> <span>By contining you agree to  <Link href="/terms-of-service">Nsimbi Terms of Service</Link></span>
            </div>

            <Button variant="text">Start</Button>
        </div>
    )
}

const Button = () => {
    return (
        <button className={styles.btn}>
            Start
        </button>
    )

}