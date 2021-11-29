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

    const birthdayCalculator = (birthday, num) => {
        birthday.parse()
    }

    const futureBirthdays = () => {
        //how can I do this recursively?
        const birthday = parseBirthday("11/14/1992")
        const days = {}
    }

    

    return (
        <div>
            <ul>
                <li>Next Birthday:</li>
            </ul>
        </div>
    )
}

export default BirthdayList
