import { type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}
