export function sendemail(Name,Description,eventTime,alertTime,key){
    let email = {
        To:localStorage.getItem("email"),
        Subject:`Tracker Notification`,
        Text:`Your Task : ${Name}<br>
        Details : ${Description}<br>
        Ending on : ${eventTime}<br>`,
        EventTime:eventTime,
        AlertTime:alertTime,
        Key:key

    }
    fetch('http://localhost:4000/sendEmail',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(email)
        
    }).then((resp)=>{
        console.log('email sent',resp)
    })
}