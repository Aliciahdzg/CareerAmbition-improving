import {Badge } from 'antd';

function getListData(value) {
  let listData;
  console.log(value.date());
  switch (value.date()) {
   
    case 10:
      listData = [
       
        { type: 'success', content: 'Finished period.' },
        
      ];
      break;
    case 25:
      listData = [
        
        { type: 'success', content: 'TALENT FEST' },
      
      ];
      break;
      
      
    default:
  }
  return listData || [];
}

export function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

export function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}