function timeAgoTZ(timestamp: string,isEnglish?:boolean): string {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (diffInSeconds < minute) {
        return isEnglish?'just now':'刚刚';
    } else if (diffInSeconds < hour) {
        const minutes = Math.floor(diffInSeconds / minute);
        return isEnglish?`${minutes} minutes ago`:`${minutes}分钟前`;
    } else if (diffInSeconds < day) {
        const hours = Math.floor(diffInSeconds / hour);
        return isEnglish?`${hours} hours ago`:`${hours}小时前`;
    } else if (diffInSeconds < month) {
        const days = Math.floor(diffInSeconds / day);
        return isEnglish?`${days} days ago` : `${days}天前`;
    } else if (diffInSeconds < year) {
        const months = Math.floor(diffInSeconds / month);
        return isEnglish?`${months} months ago` : `${months}个月前`;
    } else {
        return `${timestamp}`;
    }
}
export default timeAgoTZ;