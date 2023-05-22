import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ResultTop } from '../components/ResultTop';
import { SearchResbar } from '../components/SearchResBar';
import { TopText } from '../components/TopText';
const SearchScreen = () => {
    return (
        <ScrollView>
            <ResultTop />
            <SearchResbar />
            <TopText />
        </ScrollView>
    )
}

export default SearchScreen