import React, { FC } from "react";
import { Icon } from "semantic-ui-react";
import { ExpandedSegment } from "styled";
import { StateTypes } from "store/Shared/Shared.types";

interface BrowserSearchingPanelProps {
  repositoriesStatus: StateTypes;
  panelId: number;
  panelLogin: string;
  panelState: number;
  onUpdatePanelState: React.Dispatch<React.SetStateAction<number>>;
  onPanelClick: (userName: string) => void;
}

export const BrowserSearchingPanel: FC<BrowserSearchingPanelProps> = ({
  repositoriesStatus,
  panelId,
  panelLogin,
  panelState,
  onUpdatePanelState,
  onPanelClick,
}) => {
  return (
    <ExpandedSegment
      disabled={repositoriesStatus === "loading"}
      onClick={() => {
        if (panelState !== panelId) {
          onUpdatePanelState(panelId);
          onPanelClick(panelLogin);
        } else {
          onUpdatePanelState(0);
        }
      }}
    >
      <span>{panelLogin}</span>
      <Icon name={panelState !== panelId ? "chevron down" : "chevron up"} />
    </ExpandedSegment>
  );
};
