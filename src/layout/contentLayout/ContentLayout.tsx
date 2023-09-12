import styles from "./contentLayout.module.scss";

type propT = {
  children: JSX.Element;
  title: string;
  subTitle?: string;
};
function ContentLayout({ children, title, subTitle }: propT) {
  return (
    <div className={styles.mainContainer}>
      <h1>{title}</h1>
      {subTitle && <h3>{subTitle}</h3>}
      {children}
    </div>
  );
}

export default ContentLayout;
