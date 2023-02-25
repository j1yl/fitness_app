import styles from "./example.module.css";

const Example = ({ props }: { props: string }) => {
  return <div className={styles.mydiv}>{props}</div>;
};

export default Example;
