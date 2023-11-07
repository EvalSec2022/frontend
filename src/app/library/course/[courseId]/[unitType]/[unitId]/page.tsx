import {
  ActivitiesListSkeleton,
  QuestionContainer,
  QuestionListContainer,
  QuestionSkeleton,
  UnitsListsContainer,
  UnitsListSkeleton,
} from "@/components/QuestionsViewComponents";

export default function Page() {
  return (
    <>
      <QuestionContainer>
        <div className={"h-full w-full max-md:hidden"}>
          <QuestionSkeleton />
        </div>
      </QuestionContainer>
    </>
  );
}
