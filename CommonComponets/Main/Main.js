import style from './Main.module.css';

export default function Main({ children }) {
  return (
    <>
      <main className={style.main}>{children}</main>
    </>
  );
}
