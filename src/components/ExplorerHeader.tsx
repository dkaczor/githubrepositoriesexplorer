import React, { FC } from "react";
import { Input } from "semantic-ui-react";
import { ExpandedButton } from "components/styled";
import { StateTypes } from "store/Shared/Shared.types";

interface ExplorerHeaderProps {
  typedSearchingText: string;
  userStatusState: StateTypes;
  onTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchButtonClick: () => void;
}

export const ExplorerHeader: FC<ExplorerHeaderProps> = ({
  typedSearchingText,
  userStatusState,
  onTextInput,
  onSearchButtonClick,
}) => (
  <>
    <Input
      fluid
      onChange={onTextInput}
      className="inputClass"
      placeholder="Enter username"
      value={typedSearchingText}
    />
    <ExpandedButton
      fluid
      onClick={onSearchButtonClick}
      disabled={!typedSearchingText.length || userStatusState === "loading"}
    >
      Search
    </ExpandedButton>
  </>
);
