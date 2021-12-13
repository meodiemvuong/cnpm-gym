import React from 'react'
import TimeTable from 'react-timetable-events'
import DatePicker from 'sassy-datepicker';

function Timetablee() {
    const onChange = (date) => {
        console.log(date.toString());
      };
    return (
        <DatePicker onChange={onChange} /> 
        
    //     <TimeTable
    //         events={{
    //             friday: [],
    //             monday: [
    //                 {
    //                     endTime: new Date('2018-02-23T10:00:00'),
    //                     id: 1,
    //                     name: 'Nguyễn Văn Đương',
    //                     startTime: new Date('2018-02-23T08:00:00'),
    //                     type: 'error'
    //                 }
    //             ],
    //             thursday: [],
    //             tuesday: [
    //                 {
    //                     endTime: new Date('2018-02-22T07:00:00'),
    //                     id: 2,
    //                     name: 'Custom Event 2',
    //                     startTime: new Date('2018-02-22T09:00:00'),
    //                     type: 'error'
    //                 },
    //                 {
    //                     endTime: new Date('2018-02-22T11:00:00'),
    //                     id: 3,
    //                     name: 'Custom Event 3',
    //                     startTime: new Date('2018-02-22T09:00:00'),
    //                     type: 'custom'
    //                 }
    //             ],
    //             wednesday: []
    //         }}
    //         // getDayLabel={	(day: string) => upperCase(day)}
    //         hoursInterval={{
    //             from: 7,
    //             to: 21
    //         }}
    //         renderEvent={({ event, defaultAttributes, classNames }) => {
    //             return (
    //                 <div {...defaultAttributes} title={event.name} key={event.id}
    //                     style={{
    //                         ...defaultAttributes.style,
    //                         borderRadius: '10px'
    //                         // backgroundColor: 'green'
    //                     }}
    //                 >
    //                     <span className={classNames.event_info} style={{ color: 'red' }}>{event.name}</span>
    //                     {/* <span className={classNames.event_info}>
    //                         {format(event.startTime, "HH:mm")} - {format(event.endTime, "HH:mm")}
    //                     </span> */}
    //                 </div>
    //             );
    //         }}
    //         renderHour={({ hour, defaultAttributes }) => (
    //             <div
    //                 {...defaultAttributes}
    //                 key={hour}
    //                 style={{
    //                     ...defaultAttributes.style,
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     justifyContent: 'center',
    //                     // borderRadius: '20px'
    //                     // backgroundColor: 'var(--primary-color)',
    //                     // fontFamily: 'Saira Condensed, sans-serif',
    //                     // borderBottom: '1px solid #333'

    //                 }}
    //             >
    //                 {hour}
    //             </div>
    //         )}
    //         getDayLabel={(day) => day}
    //         timeLabel="Time"
    //     />
    );
}

export default Timetablee
