// dateString must be formatted as YYYY-MM-DD (default)
export const Convert = (dateString) => {
    let elements = dateString.split("-")
    let output = ""
    if (elements[1].charAt(0) === '0') {
        output += Month[elements[1].substring(1) - 1] + " "
    } else {
        output += Month[elements[1] - 1] + " "
    }  
    if (elements[2].charAt(0) === '0') {
        output += elements[2].substring(1) + ", " + elements[0]
    } else {
        output += elements[2] + ", " + elements[0]
    }
    return output
}

const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]