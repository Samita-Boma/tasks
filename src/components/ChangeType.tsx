import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const ChangeType = () => {
        setType((prevType) =>
            prevType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    };

    return (
        <div>
            <Button onClick={ChangeType}>Change Type</Button>
            {type === "multiple_choice_question" ?
                "Multiple Choice"
            :   "Short Answer"}
        </div>
    );
}
