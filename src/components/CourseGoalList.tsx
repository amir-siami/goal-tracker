import { type ReactNode } from "react";
import { type CourseGoal as Cgoal } from "../App.tsx";

import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: Cgoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You don't have any course goals yet. Please add some.
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You have a lot of goals on your plate. Consider managing them wisely
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map(({ title, description, id }) => {
          return (
            <li key={id}>
              <CourseGoal id={id} title={title} onDelete={onDeleteGoal}>
                {description}
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
}
