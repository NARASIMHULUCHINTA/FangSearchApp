import React from 'react'
import { ScrollView } from 'react-native'
import { EmpTop } from '../components/EmpTop'
import { EmpDash } from '../components/EmpDash'
import { Duites } from '../components/Duties'
import { EmpList } from '../components/EmpList'
import { AllEmp } from '../components/AllEmp'
import { Calender } from '../components/Calender'

const EmpDashboard = () => {
    return (
        <ScrollView>
            <EmpTop />
            <EmpDash />
            <Duites />
            <EmpList />
            <AllEmp />
            <Calender />
        </ScrollView>
    )
}

export default EmpDashboard