import formatDate from "./formateDate.ts";

function transferTime(timestamp: string,isEnglish?:boolean): string {
    if(!timestamp) return '';
    const now = Date.now();
    const diff = now - Number(timestamp);

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (diff < minute) {
        return isEnglish?'just now':'刚刚';
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return isEnglish?`${minutes} minutes ago`:`${minutes}分钟前`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return isEnglish?`${hours} hours ago`:`${hours}小时前`;
    } else if (diff < month) {
        const days = Math.floor(diff / day);
        return  isEnglish?`${days} days ago` : `${days}天前`;
    } else if (diff < year) {
        const months = Math.floor(diff / month);
        return isEnglish?`${months} months ago` :`${months}个月前`;
    } else {
        const years = Math.floor(diff / year);
        return isEnglish?`${years} years ago` :`${years}年前`;
    }
}

function timeAgo(timestamp:string,isEnglish?:boolean) {
    const now = Date.now();
    const diff = now - Number(timestamp);

    const day = 24 * 60 * 60 * 1000;
    const tenDays = 10 * day;

    if (diff < tenDays) {
        return transferTime(timestamp,isEnglish);
    } else {
        return formatDate(timestamp);
    }
}


export default timeAgo;