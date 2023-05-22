import React, { Component } from 'react';
import { Navbar } from '../components/Navbar';
import Logo from '../components/Logo';
import { Searchbar } from '../components/Searchbar';
import { Endtext } from '../components/Endtext';
const SearchScreen = () => {
    return (
        <>
            <Navbar />
            <Logo />
            <Searchbar />
            <Endtext />
        </>
    )
}

export default SearchScreen