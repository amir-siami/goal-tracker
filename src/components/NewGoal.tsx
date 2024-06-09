import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
