import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {
    return (
        <div className={styles.box}>
            <h3
                style={{
                    color:
                        cohort.status === "ongoing"
                            ? "green"
                            : "blue",
                }}
            >
                {cohort.name}
            </h3>

            <div>
                <p>
                    <strong>Status:</strong> {cohort.status}
                </p>

                <p>
                    <strong>Start Date:</strong> {cohort.startDate}
                </p>

                <p>
                    <strong>Coach:</strong> {cohort.coach}
                </p>

                <p>
                    <strong>Trainer:</strong> {cohort.trainer}
                </p>
            </div>
        </div>
    );
}

export default CohortDetails;