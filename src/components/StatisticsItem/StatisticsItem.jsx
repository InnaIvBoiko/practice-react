import style from './Statistics.module.css';

export default function StatisticsItem({ data: {
  total,
  title
}, icon:Icon}) {
  return (
    <>
      {<Icon color={'#2196f3'} size={24} />}
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
}
