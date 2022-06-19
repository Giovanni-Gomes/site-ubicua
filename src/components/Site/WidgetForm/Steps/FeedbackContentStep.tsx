import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import api from "../../../../services/api";
import { CloseButton } from "../CloseButton";
import { Loading } from "../Loading";
import Button from "../../../Shared/Button";

import { ScreenshotButton } from "../ScreenshotButton";
import { FooterForm, Form, HeaderButton, Textarea, WrapperTitle } from "../styles";


interface FeedbackTypeStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackTypeStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    const result = await api.post('/v1/feedback/create', {
      type: feedbackType,
      comment,
      screenshot,
    }); //.then()

    onFeedbackSent();
    setIsSendingFeedback(false);
    console.log(result)
  };

  return (
    <>
      <header>
        <HeaderButton type="button" onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight="bold" />
        </HeaderButton>

        <WrapperTitle>
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </WrapperTitle>

        <CloseButton />
      </header>



      <Form onSubmit={handleSubmitFeedback}>
        <Textarea className="scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..." onChange={event => setComment(event.target.value)} />

        <FooterForm>
          <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />

          <Button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            text={isSendingFeedback ? <Loading /> : 'Enviar feedback'}
            className="submit"
          />
        </FooterForm>
      </Form>
    </>
  )
}