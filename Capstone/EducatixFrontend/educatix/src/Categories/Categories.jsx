import React from "react";
import styles from "./Categories.module.css"
function Categories() {
  return (
    <div className={styles["table-container"]}>
        <table className={styles["content-table"]}>
        <thead className={styles["table-header"]}>
            <tr className={styles["head-row"]}>
            <th className={styles["head-row-cell"]}>ID</th>
            <th className={styles["head-row-cell"]}>Name</th>
            <th className={styles["head-row-cell"]}>Description</th>
            <th className={styles["head-row-cell"]}>Operations</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Domenic</td>
            <td>88,110</td>
            <td>dcode</td>
            </tr>
            <tr className="active-row">
            <td>2</td>
            <td>Sally</td>
            <td>72,400</td>
            <td>Students</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Nick</td>
            <td>52,300</td>
            <td>dcode</td>
            </tr>
        </tbody>
        </table>
    </div>
  );
}

export default Categories;
