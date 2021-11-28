import React from 'react'

const BirthdayList = ( { birthday }) => {
    if (!birthday) return null

    const parseBirthday = birthday => {
        const birthdayArray = birthday.split("/")
        const day = new Date
        day.setDate(birthdayArray[1])
        day.setMonth(birthdayArray[0] - 1)
        day.setFullYear(birthdayArray[2])
        debugger
        return day
    }

    parseBirthday("11/14/1992")
    return (
        <div>
            
        </div>
    )
}

export default BirthdayList
