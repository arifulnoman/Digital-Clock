function update_time() {
    const time = new Date();
    let hours = time.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0)
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const time_string = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    console.log(time_string);
    document.getElementById("clock").textContent = time_string;
}
update_time();
setInterval(update_time,1000);