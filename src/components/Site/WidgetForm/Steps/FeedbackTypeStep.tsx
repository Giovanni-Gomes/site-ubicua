import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../CloseButton";
import { ButtonCard, Content, HeaderSpan } from "../styles";


interface FeedbackTypeStepProps {
  onFeedBackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedBackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <HeaderSpan>Deixe seu Feedback</HeaderSpan>

        <CloseButton />
      </header>
      <Content>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <ButtonCard
              key={key}
              onClick={() => onFeedBackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </ButtonCard>
          )
        })}
      </Content>
    </>
  )
}
