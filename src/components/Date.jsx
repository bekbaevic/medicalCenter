import React from 'react'

const DateComponent = ({ i, bron, setBron }) => {
    let timeArray = [];
    let d = new Date();
    let h = 7;
    let m = 0;

    for (let i = h; i < 18; i++) {
        if (i === 13) { continue }
        for (let j = m; j <= 59; j += 30) {
            let mf = j === 0 ? '00' : j;
            let hf = i >= 24 ? (i - 24) : i;
            timeArray.push(hf + ':' + mf);
        }
        m = 0;
    }

    const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const weekday = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];


    function setFullDate(k, d, dt, m) {
        let dateObj = {
            dt: d,
            dayt: dt,
            mt: m,
            hh: k
        }
        setBron(dateObj)
    }

    return (
        <div>
            <h1>{i.dt} {month[i.mt]}, {weekday[i.dayt]}</h1>
            <div className='mt-2 mb-5 flex flex-wrap gap-x-4 gap-y-2'>
                {timeArray.map(item => (
                    <button key={item} style={item === bron.hh & i.dt === bron.dt ? { backgroundColor: "#42b2fc", color: "white" } : { backgroundColor: "#e1f1ff" }} onClick={() => setFullDate(item, i.dt, weekday[i.dayt], month[i.mt])} className='gray-text py-1 px-4 rounded-md'>{item}</button>
                ))}
            </div>
        </div>
    )
}

export default DateComponent