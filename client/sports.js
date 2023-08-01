// import { studentList } from "../contact.js";

async function crawlSports() {
    console.log("crawl Start!");
    try {
        const response = await fetch("http://localhost:5000/getSports", {
            method: "GET",
        });

        const { body } = await response.json();
    } catch (error) {
        console.log(error);
    }
}

console.log(studentList);
function stopCrawl() {}
